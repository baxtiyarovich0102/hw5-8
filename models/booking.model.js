const { default: mongoose } = require("mongoose");
const { type } = require("os");


let bookingSchema = new mongoose.Schema(
    {
        username: {type :String, required: true},
        tourId:  [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "tours", required: true
        }],
        date: {type: Date, default: Date.now()}
    },
    {timestamps: { createdAt: true, updatedAt: false }}
)

let Booking = mongoose.model("bookings", bookingSchema)

module.exports = Booking