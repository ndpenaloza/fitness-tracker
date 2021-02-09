const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
        date: {
            type: Date,
            default: Date.now
        },
        exercises: [{
    
            type: {
                type: String,
                trim: true,
                required: "PLEASE ENTER EXERCISE"
            },
            name: {
                type: String,
                trim: true,
                required: "PLEASE ENTER EXERCISE NAME"
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
                required: "PLEASE ENTER DURATION"
            },
            distance: {
                type: Number,
            }
        }]    
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

