const Comment = require('../model/comment');
const Question = require('../model/question');

exports.getComment = async (req, res) => {
    try {
        const {questionId} = req.body;
        const comments = await Comment.find({ questionId: questionId });
        res.status(201).json(comments);
    } catch (error) {
        res.status(404).json(error);
    }
}

exports.createComment = async (req, res) => {
    try {
        const {
            commentText,
            commentedBy,
            questionId
        } = req.user;

        const newComment = new Comment({
            commentText,
            commentedBy,
            questionId
        });

        await newComment.save();

        res.status(201).json(newComment);
    } catch (error) {
        res.status(404).json(error);
    }
}