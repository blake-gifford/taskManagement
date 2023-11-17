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
            required: [true, 'Please add a title value'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description value'],
        },
        dueDate: {
            type: Date,
            required: [true, 'Please add a date value'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('task', taskSchema)