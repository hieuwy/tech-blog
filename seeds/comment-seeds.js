const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "We finally did it!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Congrats everyone! We are almost at the finish line!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Superb advice... spending money on mental stability and comfort is very important!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Might have to look into this."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;