const { updateWorkout } = require('../services/workoutServices')
const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllWorkouts = () => {
    return DB.workouts
}

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (!workout) {
    return
  }
  return workout
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
      return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  };

const updateOneWorkout = (workoutId, change) => {
  const indexForUpdate = DB.workouts.findIndex((workout) => (workout.id = workoutId))
  if(indexForUpdate === -1){
    return
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...change,
    updateAt: new Date().toLocaleDateString('en-US', {timezone: 'UTC'})
  }

  DB.workouts[indexForUpdate] = updatedWorkout
  saveToDatabase(DB)
  return updatedWorkout
}

const deleteOneWorkout = (workoutId) => {
  const indexForDeleted = DB.workouts.findIndex((workout) => workout.id === workoutId)
  if(indexForDeleted === -1){
    return
  }
  DB.workouts.splice(indexForDeleted, 1)
  saveToDatabase(DB)
}

module.exports = { getAllWorkouts, createNewWorkout, getOneWorkout, updateOneWorkout, deleteOneWorkout }
