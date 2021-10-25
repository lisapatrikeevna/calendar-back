const Task = require('../models/Tasks')

const createTask = async (req, res) => {
    const taskId = req.params.taskId
    const task = {...req.body}
    console.log(req.body);
    try {
        await Task.create(task)
        console.log(task)
        res.status(200).send()

    } catch (e) {
        res.status(500).send({error: e.message})
    }
}

module.exports = createTask
