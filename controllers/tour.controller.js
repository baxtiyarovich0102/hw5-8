const Tour = require("../models/tour.model")

let getAllTours = async (req, res, next) => {
    let tours = await Tour.find()
    res.status(200).json({name: "tours", tours})
}

let getTourById = async (req, res, next) => {
    let id = req.params.id
    let tour = await Tour.findById(id)
    res.status(200).json({name: "tour", tour})
}

let postTour = async (req, res, next) => {
    let data = JSON.parse(req.body.body)
    let tour = await Tour.create(body)
    res.status(201).json({name: "tour", tour})
}


module.exports = {getAllTours, getTourById, postTour}