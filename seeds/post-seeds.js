const { Post } = require('../models');

const postData = [
    {
        title: "UT Has created a bootcamp for any to learn Coding!",
        post_content: "University of Texas at Austin has formally introduced a number of programs that are dedicated to certification of certain professions! These range from UI/UX, Full-stack Web Development, and much more! Check it out on their website to learn more about what they have to offer!",
        user_id: 3
    },
    {
        title: "How to make working remotely better",
        post_content: "Many dread the usual work day, but there are definitely plenty of ways to make the space around someone better for them, therefore promoting a more comfortable environment for them to work in and enjoy being around. A lot of it starts with one's personal preference with tech (computers, keyboards, mice, etc.) and most importantly their desk and the chair they will be sitting on most hours of the day. People definitely want to have a space they won't strain themselves in if they want to work in an environment that they will be at for hours on end.",
        user_id: 1
    },
    {
        title: "Full-Stack Web Development Offers many languages to learn!",
        post_content: "Students are learning many different languages that software developers use on a day to day basis. Students from surveys have noted they are learning languages from HTML, CSS, Javascript, React, mySQL, node.js, MERN, and much more. Students are overall very satisfied with what they are bringing out from the program and into actual careers!",
        user_id: 2

    },
    {
        title: "Tech Blog Has Been Released",
        post_content: "OUr very own tech blog has been released as a project for a module project in the Coding Bootcamp Class. There are many functionalities to this website as users can create an account, post their own content as well as reply to other's post as well. The user is also able to view other's profiles through Twitter and GitHub as well as edit and delete their own posts. Using only simple frameworks, the application delivers powerful usage.",
        user_id: 5
    },
    {
        title: "The Coding Bootcamp is almost at an end!",
        post_content: "Time sure flies. The Coding Bootcamp provided by UT Austin is coming to a close for students that are in the program. The class ends in December on the 6th and many who have pushed through will be able to obtain their certificate in order to apply for full stack software developer positions. Good job to everyone who has preservered through the program. It went by super fast and it definitely was not easy.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;