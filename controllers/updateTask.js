const Task = require('../models/Tasks')

const updateTask = async (req, res) => {

    const {id} = req.params
    const body = {...req.body}
    console.log('updateTask',id,body);
    try {
        const tasks = await Task.findByIdAndUpdate({_id: id}, body, {new: true})
        res.status(200).json({tasks})
    } catch (e) {
        res.status(500).json({e})
    }
}

module.exports = updateTask
