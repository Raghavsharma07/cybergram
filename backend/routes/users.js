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
router.get('/:id', async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        const { password, updatedAt, ...others } = user._doc;
        response.status(200).json(others);
    } catch (error) {
        return response.status(500).json(error);
    }
});

module.exports = router;
