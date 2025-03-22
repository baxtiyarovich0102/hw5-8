const { default: mongoose } = require("mongoose");



const guideSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        experience: {type: String, default: 0},
        phone: {type: String, required: true},
    },
    {timestamps: { createdAt: true, updatedAt: false },
    toJSON: { virtuals: true },
		toObject: { virtuals: true },
}
)

guideSchema.virtual('tours', {
	ref: 'tours',
	localField: '_id',
	foreignField: 'guides',
})


let Guide = mongoose.model("guides", guideSchema)

module.exports = Guide