require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.get ("/", (req,res)=> {
    res.send("i am working")
})
app.get ("/users", (req,res)=> {
    res.send("working users route")
})

app.get ("/auth", (req,res)=> {
    res.send("working auth route")
})
// routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));