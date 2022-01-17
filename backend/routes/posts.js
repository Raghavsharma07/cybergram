const router = require('express').Router();
const Post = require('../models/post');
const User = require('../models/user');

//CREATE
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
router.get('/timeline/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET SPECIFIC
router.get('/profile/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
