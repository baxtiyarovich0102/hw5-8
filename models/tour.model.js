const { default: mongoose } = require("mongoose");
const { type } = require("os");


const tourSchema = new mongoose.Schema({
    name: {type: String, requird: true},
    description: {type: String, requird: true},
    price: {type: Number, default: 0},
    location: {type: String, requird: true},
    guides: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "guides"
    }]
})


let Tour = mongoose.model("tour", tourSchema)

module.exports = Tour