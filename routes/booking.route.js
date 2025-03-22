const {getBookingById, postBooking} = require("../controllers/booking.controller")
let express = require("express")

let router = express.Router()


router.route("/").post(postBooking)
router.route("/:id").get(getBookingById)

module.exports = router