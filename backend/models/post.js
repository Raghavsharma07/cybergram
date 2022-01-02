const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    userId: {
        type: String,

        required: true,
    },
    description: {
        type: String,
        max: 500,
    },
    img: {
        type: String,
    },
});
module.exports = mongoose.model('Post', PostSchema);
