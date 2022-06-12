const db = require('./connection');
const { User, Post } = require('../models');

db.once('open', async () => {


    await User.deleteMany();

    const users = await User.insertMany([
        {
            username: 'Amy',
            email:
                'Amye23@gmail.com',
            password: 'password1234',
            siteLanguage: "english",
            spokenLanguage: "english",
            isCaller: false,
        },
        {
            username: 'Larry L.',
            email:
                'TheBestLarry@yahoo.com',
            password: 'password1234',
            siteLanguage: "english",
            spokenLanguage: "english",
            isCaller: false,
        }, {
            username: 'Dan',
            email:
                'Dan-the-best-teacher@gmail.com',
            password: 'password1234',
            siteLanguage: "english",
            spokenLanguage: "english",
            isCaller: false,
        }, {
            username: 'Terry C.',
            email:
                'terryc@gmail.com',
            password: 'password1234',
            siteLanguage: "english",
            spokenLanguage: "english",
            isCaller: true,
        }
    ]);

    console.log('posts seeded');

    await Post.deleteMany();

    const posts = await Post.insertMany([
        {
            taskTitle: 'Calling for Pizza',
            callLanguage: 'English',
            description: 'My local pizza shop does not accept orders online and so I need someone to call to order me a pizza for pickup. Can you order a large pepperoni pizza for Amy, and I will pick it up at 6pm mountain time. Thank you! ',
            callCategory: 'food',
            payment: 1,
            callTime: 'anytime before 5:30pm',
            phoneNumberToCall: '555-555-5555',
            postUser: users[0]._id,
            comments: [{
                commentText: 'I called. They said it would be $12.56, I hope that you have a fantastic night!',
                commentAuthor: users[3]._id
            },
            {
                commentText: 'Thank you so much!',
                commentAuthor: users[0]._id
            }
            ]
        },
        {
            taskTitle: 'Scheduling an appointment',
            callLanguage: 'English',
            description: 'I need to schedule an appointment for when home depot is dropping off my new oven. Can you please call them and tell them to come anytime between 3pm and 5pm mountain monday through wednesday?',
            callCategory: 'appointment',
            payment: 0,
            callTime: 'while they are open. 9-8 mountain time',
            phoneNumberToCall: '555-555-5555',
            postUser: users[1]._id
        },
        {
            taskTitle: 'Asking if they found my headphones',
            callLanguage: 'English',
            description: 'I was at Tonnies Tacos last night and I lost my headphones. Can someone call to check if they found them anywhere? I sat near the window. They are grey and in a grey soni case.',
            callCategory: 'lost and found',
            payment: 5,
            callTime: 'Today',
            phoneNumberToCall: '555-555-5555',
            postUser: users[2]._id
        },
        {
            taskTitle: 'Double checking an interview time',
            callLanguage: 'English',
            description: 'I scheduled an interview at Tonnies Tacos. I know that it is on next Friday but I can not remember the exact time. If someone could call to figure out the time I would really really appreciate it!',
            callCategory: 'interview',
            payment: 0,
            callTime: 'sometime before friday',
            phoneNumberToCall: '555-555-5555',
            postUser: users[0]._id
        }
    ]);



    process.exit();
});
