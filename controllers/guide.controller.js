const Guide = require("../models/guide.model")


let getAllGuides = async (req, res, next) => {
    let guides = await Guide.find().populate("tours")
    res.status(200).json({name: "guides", guides})
}

let getGuideById = async (req, res, next) => {
    let id = req.params.id
    let guide = await Guide.findById(id).populate("tours")
    res.status(200).json({name: "guide", guide})
}

let postGuide = async (req, res, next) => {
    let body = req.body
    let guide = await Guide.create(body)
    res.status(201).json({name: "guide", guide})
}

module.exports = {getAllGuides, getGuideById, postGuide}