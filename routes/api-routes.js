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

    ]).then((err, dbWorkout) => {
        if (err) {
            console.log(err);
            res.json(err)
        } else {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }
    });
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
    ]).then((err, dbWorkout) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }
    });
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
    .then((err, dbWorkout) => {
        if (err) {
            console.log(err);
            res.json(err)
        } else {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }
    });
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate({_id: ObjectId(req.params.id)},
    {
        $push: { 
            exercise: req.body
        }
    },
    {   
        new: true
    }).then((err, dbWorkout) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }
    }) 
})


module.exports = router;
