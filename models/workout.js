const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
            trim: true
        },
        sets: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        duration: {
            type: Number,
            trim: true
        },
        distance: {
            type: Number,
            trim: true
        },
        date: {
        type: Date,
        default: () => new Date()
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

