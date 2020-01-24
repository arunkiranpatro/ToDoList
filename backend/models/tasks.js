const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: String
    }
});
module.exports = Task = mongoose.model("task", TasksSchema);