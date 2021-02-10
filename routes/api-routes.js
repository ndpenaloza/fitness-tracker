// Dependencies
const router = require('express').Router();
const db = require('../models');
const id = require('mongoose').Types.ObjectId;

// Gets workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([
        {
        $addFields: {
            totalDuration: {
                $sum:'$exercises.duration'
            }
        }
    }
    ]).then((data) => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        res.end(500);
    });
});

// Gets last 7 workouts
router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        },
        {
            $sort: {
                day: -1
            }
        },
        { 
            $limit: 7
        }
    ]).then((data) => {
            res.status(200).json(data)
    }).catch(console.log)
});

// Post new workout
router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
    .then((data) => {
        res.status(200).json(data)
    }).catch(console.log)
});

// Put - modifies workout with new exercise
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate({_id: id(req.params.id)},
    {
            $push: {
                exercises: req.body
        }
    },
    {   
        new: true
    }).then((data) => {
        res.status(200).json(data)
    }).catch(console.log)
});


module.exports = router;
