const Task = require('../models/Tasks')

const removeTask = async (req, res) => {

    const {id} = req.params
    console.log('removeTask id', id)
    console.log('removeTask params', req.params)
    try {
        // const findTask = await Task.findById(id)
        // console.log('findTask', findTask)
        // if(findTask){
        //     await Task.findByIdAndRemove(id)
        //     // findTask.remove()
        //     res.status(200).send('removed')
        // }
        // const ttt = await Task.findByIdAndDelete(id)
        // const tttt = await Task.findOneAndRemove(id)
        // const tttt = await Task.findByIdAndRemove(id)
        const tttt = await Task.findByIdAndDelete(id)
        // console.log(ttt)
        console.log(tttt)
        // console.log(req)
        res.status(200).send('removed')
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports = removeTask
