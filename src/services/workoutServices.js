const { v4: uuid } = require('uuid')
const Workout = require('../database/workout')

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}

const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId)
    return workout
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createAt: new Date().toLocaleDateString('en-US', {timezone: 'UTC'}),
        updateAt: new Date().toLocaleDateString('en-US', {timezone: 'UTC'})
    }

    const createdWorkout = Workout.createNewWorkout(workoutToInsert)
    return createdWorkout
}

const updateWorkout = () => {
    return
}

const deleteOneWorkout = () => {
    return
}


module.exports = { 
    getAllWorkouts, 
    getOneWorkout, 
    createNewWorkout, 
    updateWorkout, 
    deleteOneWorkout 
}