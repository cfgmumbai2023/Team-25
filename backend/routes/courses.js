const { getAllCourses, getRecommendedCourses, getSingleCourse, createCourse, getMyCourses } = require('../controllers/course');
const express = require('express');
const courseRouter = express.Router();

courseRouter.post('/', createCourse);
courseRouter.get('/', getAllCourses);
courseRouter.get('/:category', getRecommendedCourses);
courseRouter.get('/:id', getSingleCourse);
courseRouter.get('/mycoures/:userId', getMyCourses);

module.exports = courseRouter;