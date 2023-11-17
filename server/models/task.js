const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        description: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        dueDate: {
            type: Date,
            required: [true, 'Please add a text value'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('task', taskSchema)