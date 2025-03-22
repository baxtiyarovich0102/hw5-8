const {getAllGuides, getGuideById, postGuide} = require("../controllers/guide.controller")
let express = require("express")

let router = express.Router()


router.route("/").get(getAllGuides).post(postGuide)
router.route("/:id").get(getGuideById)

module.exports = router