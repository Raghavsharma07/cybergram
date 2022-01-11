const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');
const dotenv = require('dotenv');
const helmet = require('helmet');
const userRoute = require('../backend/routes/users');
const morgan = require('morgan');
const authRoute = require('../backend/routes/auth');
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('common'));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

dotenv.config();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log('jkn');
});

const Port = 8800;

app.listen(Port, () => {
    console.log('less go');
});
