const router = require('express').Router();
const db = require('../models');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([
        {
        $addFields: {
            totalDuration: {
                $sum:'$exercises.duration'
            }
        }
    }

    ]).then((dbWorkout) => {
        res.json(dbWorkout)
    }).catch(console.log);
});

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
    ]).then((dbWorkout) => {
            res.json(dbWorkout)
    }).catch(console.log)
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
    .then((dbWorkout) => {
        res.json(dbWorkout)
    }).catch(console.log)
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate({_id: ObjectId(req.params.id)},
    {
            $push: {
                exercises: req.body
        }
    },
    {   
        new: true
    }).then((dbWorkout) => {
        res.json(dbWorkout)
    }).catch(console.log)
});


module.exports = router;
