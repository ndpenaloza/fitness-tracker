const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercise: [
        type: {
            type: String,
            required: "PLEASE ENTER EXERCISE"
        },
        name: {
            type: String,
            required: "PLEASE ENTER EXERCISE NAME"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        }

    ],
    date: {
        type: Date,
        default: () => new Date()
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

