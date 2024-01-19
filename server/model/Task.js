const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    priority: {
        type: [String],
        default: [],
    },
    status: {
        type: String,
        default: 'queue',
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;