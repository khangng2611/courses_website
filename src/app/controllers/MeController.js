const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongose')
class MeController {
    // GET /me/stored/courses
    storedCourses (req, res, next) {
        Course.find ({})
            .then (course => {
                res.render('me/stored-courses',
                { course : multipleMongooseToObject(course) })
            })
            .catch(next)
    }

    // GET /me/trash/courses
    trashCourses (req, res, next){
        Course.findDeleted({deleted: {$eq: true}})
        .then (course => {
            res.render('me/trash-courses',
            // {course : filter(course => course.deleted)},
            { course : multipleMongooseToObject(course) })
        })
        .catch(next)
    } 
}

module.exports = new MeController();
