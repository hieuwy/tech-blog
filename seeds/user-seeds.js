const { User } = require('../models');

const userData = [
    {
        username: "Judy Alvarez",
        twitter: "JudyBoody",
        github: "JudyBoody",
        email: "judyalvarez2077@gmail.com",
        password: "password"
    },
    {
        username: "Jackie Welles",
        twitter: "afterlifewelles",
        github: "jackiewelles",
        email: "jackiewelles2077@gmail.com",
        password: "password"
    },
    {
        username: "Panam Palmer",
        twitter: "nomadpalmer",
        github: "bananapanama",
        email: "panampalmer2077@gmail.com",
        password: "password"
    },
    {
        username: "Johnny Silverhand",
        twitter: "johnnysamurai",
        github: "samurai",
        email: "johnnysilverhand2077@gmail.com",
        password: "password"
    },
    {
        username: "hieuwy",
        twitter: "hieuwy",
        github: "hieuwy",
        email: "hieuwytest@test.com",
        password: "password"
    },
    {
        username: "Goro Takemura",
        twitter: "goro",
        github: "goro",
        email: "goro2077@gmail.com",
        password: "password"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;