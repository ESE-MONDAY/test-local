const express = require("express")

const app = express()

let users = [
    {id: "1", name : "Grace"},
    {id: "2", name : "Lois"},
]

let orders = [
    {id: "001", userId: "1", item: "Book"},
    {id: "002", userId: "2", item: "Bicycle"},
]

// Health Check

app.get("/api/v1/health", (req, res) =>{
    return res.status(200).json({status: "ok"})
})
// Get all users
app.get("/api/v1/users", (req, res) =>{
    return res.json(users)
})

// Get all orders
app.get("/api/v1/orders", (req, res) =>{
    return res.json(orders)
})

// Get user

app.get("/api/v1/users/:id", (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user){
        return res.status(404).json({
            error: "User not found"
        })
    }
    res.json(user)
})

// Get Order
app.get("/api/v1/users/:id/orders", (req, res) => {
    const userOrder = orders.filter(o => o.userId === req.params.id )
    res.json(userOrder)
})

app.listen(3000, () =>{
    console.log("Server Started")
})