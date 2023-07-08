const Course = require('../model/course');
const User = require('../model/user');

exports.createCourse = async (req, res) => {
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
        } = req.body;
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
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(404).json(error);
    }
};

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(201).json(courses);
    } catch (error) {
        res.status(404).json(error);
    }
};

exports.getRecommendedCourses = async (req, res) => {
    try {
        console.log(req)
        const category = req.params.category;
        const courses = await Course.find({ category: category });
        res.status(201).json(courses);
    } catch (error) {
        res.status(404).json(error);
    }
}

exports.addToMyCourse = async (req, res) => {
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

exports.getMyCourses = async (req, res) => {
    try {
        const {userId} = req.params;
        const user = User.find({ _id: userId });
        if(!user) res.status(404).json({error: "did not find"});
        console.log(user);  
        const mycoures = user.courses;

        res.status(201).json({mycoures});
    } catch (error) {
        res.status(404).json(error);
    }
};

exports.getSingleCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.find({_id: id });

        console.log(course);

        if(!course) res.status(201).json({error: "did not find"});
        res.status(201).json(course);
    } catch (error) {
        res.status(404).json(error);
    }
};