const Task = require('../models/Tasks')

const getTasks = async (req, res) => {
    const  date = req.params.id
    console.log('req.params.date', date);
    console.log({ 'RegExp date': new RegExp(date)} );
    try {
        // const allTasks = await Task.find().exists(date,true)
        // const allTasks = await Task.where(date).exists(true)
        const allTasks = await Task.find( { date: {
                $gte: `${date} 00:00:00`,
                $lte: `${date} 23:59:59`
            }} )
        // const allTasks = await Task.find( { 'date': new RegExp(date)} )
        //https://www.youtube.com/watch?v=D2Xo6ctY45M&list=PLbLBXDhswD1cwgFNSqfiZuWl6LC6Q0qS3&index=6
        //time :58.35
        console.log('allTasks',allTasks);
        res.status(200).json({allTasks})
    } catch (e) {
        res.status(500).json({e})
    }
}

module.exports = getTasks
