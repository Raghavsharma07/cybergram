const router = require('express').Router();
const Post = require('../models/post');
const User = require('../models/user');

router.post('/', async (request, response) => {
    const newPost = new Post(request.body);
    try {
        const savedPost = await newPost.save();
        response.status(200).json(savedPost);
    } catch (error) {
        response.status(500).json(error);
    }
});

//DELETE
router.delete('/:id', async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (post.userId === request.body.userId) {
            post.deleteOne();

            response.status(200).json('POST DELETED');
        } else {
            response.status(403).json("YOU CANT DELETE SOMEONE ELSE'S ACCOUNT");
        }
    } catch (error) {
        response.status(500).json(error);
    }
});

router.get('/:id', async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error);
    }
});

//GET ALL POSTS
router.get('/timeline/all', async (request, response) => {
    try {
        const currentUser = await User.findById(request.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        response.status(200).json(userPosts);
    } catch (error) {
        response.status(500).json(error);
    }
});

module.exports = router;
