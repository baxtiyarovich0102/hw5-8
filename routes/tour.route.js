const {getAllTours, getAllTours, postTour, getTourById} = require("../controllers/tour.controller")
let express = require("express")

let router = express.Router()


router.route("/").get(getAllTours).post(postTour)
router.route("/:id").get(getTourById)

module.exp = router