const Course = require('../model/course');
const User = require('../model/user');

export const createCourse = async (req, res) => {
    try {
        const {
            courseTitle,
            description,
            instructorId,
            category,
            rating,
            thumbnail,
            duration,
            numberOfModule,
            videoUrl
        } = req.body();

        const newCourse = new Course({
            courseTitle,
            description,
            instructorId,
            category,
            rating,
            thumbnail,
            duration,
            numberOfModule,
            videoUrl 
        });

        await newCourse.save();

        res.staus(201).json(newCourse);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(201).json(courses);
    } catch (error) {
        res.status(404).json(courses);
    }
};

export const getRecommendedCourses = async (req, res) => {
    try {
        const category = req.params;
        const courses = await Course.find({ category: category });
        res.status(201).json(courses);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const addToMyCourse = async (req, res) => {
    try {
        const {userId, courseId} = req.body();
        const user = User.find({ userId });

        user.courses.push(courseId);

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const getMyCourses = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = User.find({ userId });
        const mycoures = user.courses;

        res.status(201).json(mycoures);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const getSingleCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const course = await Course.find({ courseId });
        res.status(201).json(course);
    } catch (error) {
        res.status(404).json(error);
    }
};