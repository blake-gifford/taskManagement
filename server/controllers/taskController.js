const asyncHandler = require('express-async-handler')

const Task = require('../models/task')

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id })

    res.status(200).json(tasks)
})

const setTask = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    try {
        const task = await Task.create({
            user: req.user._id,
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    res.status(200).json(task)
})

const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(400)
        throw new Error('task not found')
    }

    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedtask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedtask)
})

const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(400)
        throw new Error('task not found')
    }

    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await task.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask,
}