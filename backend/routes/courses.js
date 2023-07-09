const { getAllCourses, getRecommendedCourses, getSingleCourse, createCourse, getMyCourses, getInstructorCourses } = require('../controllers/course');
const express = require('express');
const courseRouter = express.Router();

courseRouter.post('/', createCourse);
courseRouter.get('/', getAllCourses);
courseRouter.get('/find/:category', getRecommendedCourses);
courseRouter.get('/:id', getSingleCourse);
courseRouter.get('/mycourses/:userId', getMyCourses);
courseRouter.get('/:instructorId/courses', getInstructorCourses);

module.exports = courseRouter;