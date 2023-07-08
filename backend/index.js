const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
var authRoutes = require('./routes/auth')
const courseRouter = require('./routes/courses')
const questionRouter = require('./routes/question')
const commentRouter = require('./routes/comment')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend is setup and running!')
})

app.use('/courses', courseRouter);
app.use('/question', questionRouter);
app.use('/comment', commentRouter);

//connencting to backend
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

try {
  mongoose.connect(process.env.MONGO_URI, connectionParams)
  console.log('Connected to Database Sucessfully')
} catch (error) {
  console.log('Error connecting')
  console.log('Could not connect to database')
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
