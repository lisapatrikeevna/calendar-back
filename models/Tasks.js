const {Schema, model} = require('mongoose')

const schema = new Schema({
    // _id: {type: String, required: true},
    taskId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: Number,
        required: false
    },
    deadline: {
        type: Date,
        required: false
    },
    order: {
        type: Number,
        required: false
    },
    addedDate: {
        type: Date,
        // default: Date.now,
        required: false
    }
})

module.exports = model('Task', schema)
