const express = require('express');
const courseRouter = express.Router();

courseRouter.get('/courses', getAllCourses);
courseRouter.get('/courses/:category', getRecommendedCourses);
courseRouter.get('/courses/:id', getSingleCourse);

export default courseRouter;