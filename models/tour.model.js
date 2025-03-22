const { default: mongoose } = require("mongoose");


const tourSchema = new mongoose.Schema(
    {name: {type: String, requird: true},
    description: {type: String, default: "Ajoyib !"},
    price: {type: Number, default: 0},
    location: {type: String, requird: true},
    guides: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "guides"
    }]},
    {timestamps: { createdAt: true, updatedAt: false }}
)


let Tour = mongoose.model("tours", tourSchema)

module.exports = Tour