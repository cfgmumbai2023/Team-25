const Video = require('../model/video');

exports.getVideo = async (req, res) => {
    try {
        //implement
    } catch (error) {
        res.status(404).json(error);
    }
}

exports.createVideo = async (req, res) => {
    try {
        const {
            title,
            url,
        } = req.user;

        const newvideo = new Video({
            title,
            url,
        });

        await newvideo.save();

        res.status(201).json(newvideo);
    } catch (error) {
        res.status(404).json(error);
    }
}