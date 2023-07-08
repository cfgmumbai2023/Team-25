const express = require('express');
const VideoRouter = express.Router();
const {getVideo, createVideo} = require('../controllers/video');

VideoRouter.get('/', getVideo);
VideoRouter.post('/', createVideo);

module.exports = VideoRouter;