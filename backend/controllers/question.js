const Question = require('../model/question');

exports.getQuestion = async (req, res) => {
    try {
        const {videoId} = req.body();
        const questions = await Question.find({ videoId: videoId });
        res.status(201).json(questions);   
    } catch (error) {
        res.status(404).json(error);   
    }
};

exports.createQuestion = async (req, res) => {
    try {
        const {
            questionBody,
            postedBy,
            videoId
        } = req.body;


        const newQuestion = new Question({
            questionBody,
            postedBy,
            videoId
        });

        await newQuestion.save();

        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(404).json(error);
    }
}