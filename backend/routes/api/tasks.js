const express = require("express");
const Task = require("../../models/tasks");

const router = express.Router();


/**
 * @route    post /api/tasks/create
 * @desc     creates task
 * @access   Public
 * */
router.post("/create", (req, res) => {
    const newTask = new Task({
        text: req.body.text,
        completed: "false"
    })

    newTask
        .save()
        .then(task => {
            console.log("new task created");
            res.status(200).json(task);
        })
        .catch(err => console.log(err));
});

router.get("/getAll", (req, res) => {
    Task.find().then(tasks => res.status(200).json(tasks)).catch(err => console.log(err));
})

module.exports = router;