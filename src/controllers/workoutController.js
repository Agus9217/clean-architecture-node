const workoutServices = require('../services/workoutServices')


const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutServices.getAllWorkouts()  
    res.send({status: 'OK', data: allWorkouts})
}

const getOneWorkout = (req, res) => {
    const { params: { workoutId } } = req
    if(!workoutId){
        return
    }

    const workout = workoutServices.getOneWorkout(workoutId)
    res.send({ status: 'OK', data: workout })
}

const createNewWorkout = (req, res) => {
    const { body } = req
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){
        return
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    const createdWorkout = workoutServices.createNewWorkout(newWorkout)
    res.status(201).send({ status: 'OK', data: { createdWorkout } })
}

const updateWorkout = (req, res) => {
    const updatedWorkout = workoutServices.updateWorkout(req.params.workoutId)
    res.send(`Update workout ${req.params.workoutId}`)
}

const deleteOneWorkout = (req, res) => {
    workoutServices.deleteOneWorkout(req.params.workoutId)
    res.send(`Delete workout ${req.params.id}` )
}

module.exports = { 
    getAllWorkouts, 
    getOneWorkout, 
    createNewWorkout, 
    updateWorkout, 
    deleteOneWorkout 
}