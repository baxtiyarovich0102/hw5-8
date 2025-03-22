const express = require("express")
let app = express()

let tourRouter = require("../routes/tour.route")
let guideRouter = require("../routes/guide.route")
let bookingRouter = require("../routes/booking.route")

app.use(express.json())


app.use("/api/tours", tourRouter)
app.use("/api/guides", guideRouter)
app.use("/api/bookings", bookingRouter)


app.get("*", (req, res, next) => {
    res.send("Ishlayapti!")
})

module.exports = app