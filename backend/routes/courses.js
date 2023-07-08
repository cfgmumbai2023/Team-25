export const { getAllCourses, getRecommendedCourses, getSingleCourse, createCourse, getMyCourses } = require('../controllers/course');
const express = require('express');
const courseRouter = express.Router();

courseRouter.post('/course', createCourse);
courseRouter.get('/courses', getAllCourses);
courseRouter.get('/courses/:category', getRecommendedCourses);
courseRouter.get('/courses/:id', getSingleCourse);
courseRouter.get('/mycoures/:userId', getMyCourses);

export default courseRouter;