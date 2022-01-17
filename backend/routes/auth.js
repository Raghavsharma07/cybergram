const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//REGISTER
router.post('/register', async (request, response) => {
    try {
        const security = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(
            request.body.password,
            security
        );
        const newUser = new User({
            username: request.body.username,
            email: request.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
        console.log('USER ALREADY EXISTS');
    }
});

//LOGIN
router.post('/login', async (request, response) => {
    try {
        const user = await User.findOne({
            email: request.body.email,
        });
        !user && response.status(400).json('USER NOT FOUND ');
        const validPassword = await bcrypt.compare(
            request.body.password,
            user.password
        );
        !validPassword && response.status(400).json('WRONG PASSWORD ');
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
});
module.exports = router;
