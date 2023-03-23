const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongose')
class SiteController {
    //[GET] /
    async index(req, res) {
        //res.render('home');


        //use callback to read DB
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses)
        // } catch (error) {
        //     res.status(400).json({error})
        // }

        //use promise
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses : multipleMongooseToObject(courses) 
                })
            })
            .catch(error => next(error));
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
