const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { findById } = require('../models/user');

//DELETE
router.delete('/:id', async (request, response) => {
    if (request.body.userId === request.params.id || request.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(request.params.id);
            response.status(200).json('ACCOUNT HAS BEEN DELETED ');
        } catch (error) {
            return result.status(500).json(error);
        }
    } else {
        return response
            .status(403)
            .json("YOU CANNOT DELETE SOMEONE ELSE'S ACCOUNT ");
    }
});

//UPDATE
router.put('/:id', async (request, response) => {
    if (request.body.userId === request.params.id || request.body.isAdmin) {
        if (request.body.password) {
            try {
                const security = await bcrypt.genSalt(10);
                request.body.password = await bcrypt.hash(
                    request.body.password,
                    security
                );
            } catch (error) {
                return response.status(500).json(error);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(request.params.id, {
                $set: request.body,
            });
            response.status(200).json('ACCOUNT UPDATED');
        } catch (error) {
            return response.status(500).json(error);
        }
    } else {
        return response
            .status(403)
            .json("YOU CANNOT UPDATE SOMEONE ELSE'S ACCOUNT ");
    }
});

//GET A USER
router.get('/', async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId
            ? await User.findById(userId)
            : await User.findOne({ username: username });
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});

//FOLLOW
router.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({
                    $push: { followings: req.params.id },
                });
                res.status(200).json('user has been followed');
            } else {
                res.status(403).json('you allready follow this user');
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('you cant follow yourself');
    }
});

module.exports = router;
