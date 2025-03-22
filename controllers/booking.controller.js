const Booking = require("../models/booking.model")


let getBookingById = async (req, res, next) => {
    let id = req.params.id
    let booking = await Booking.findById(id).populate("tourId")
    res.status(200).json({name: "booking", booking})
}

let postBooking = async (req, res, next) => {
    let body = req.body
    let booking = await Booking.create(body)
    res.status(201).json({name: "booking", booking})
}

module.exports = {getBookingById, postBooking}