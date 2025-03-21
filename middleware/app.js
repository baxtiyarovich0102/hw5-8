const express = require("express")
let app = express()

let tourRouter = require("../routes/tour.route")

app.use(express.json())


app.use("/api/tours", tourRouter)


app.get("*", (req, res, next) => {
    res.send("Ishlayapti!")
})

module.exports = app