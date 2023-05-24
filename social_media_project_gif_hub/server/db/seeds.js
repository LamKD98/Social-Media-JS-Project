use gifhub
db.dropDatabase()

db.users.insertMany([
    {
        fname: "Euan",
        lname: "Crawford",
        email: "euan@hotmail.com",
        userAdded: "2023-05-19T14:00:00Z",
        password: "password1",
    },
    {
        fname: "Andy",
        lname: "Lamb",
        email: "andy@hotmail.com",
        userAdded: "2023-05-19T13:00:00Z",
        password: "password2",
    },
    {
        fname: "Sam",
        lname: "Houston",
        email: "sam@gmail.com",
        userAdded: "2023-05-19T12:00:00Z",
        password: "password3",
    },
    {
        fname: "Richard",
        lname: "Dalrymple",
        email: "richard@yahoo.com",
        userAdded: "2023-05-19T11:00:00Z",
        password: "password4",
    }
])


db.posts.insertMany([
    {
        text: "Project week got me like...",
        gifUrl: "https://media.tenor.com/5aF7np_zPEgAAAAd/pepe-why-pepe-the-frog.gif",
        postDate: "2023-05-19T14:08:14Z",
        userEmail: "euan@hotmail.com",


    },
    {
        text: "I hate dancing Gru",
        gifUrl: "https://media.tenor.com/J8KeZSDe_acAAAAC/dace.gif",
        postDate: "2023-05-19T14:10:03Z",
        userEmail: "sam@gmail.com",

    }
])


db.comments.insertMany([
    {
        text: "Not me!",
        commentDate: "2023-05-19T13:24:00Z",
        gifUrl: "https://media.tenor.com/v4uFsYl2-U0AAAAC/ur-boy-frozen-frozen.gif",
        postDate: "2023-05-19T14:08:14Z",
        userCommentEmail: "andy@hotmail.com"
    },
    {
        text: "Not as bad as this utterly cursed gif",
        commentDate: "2023-05-19T14:45:00Z",
        gifUrl: "https://media.tenor.com/Kq7XX_p6x8kAAAAd/kpop-faceapp-kpop-meme.gif",
        postDate: "2023-05-19T14:10:03Z",
        userCommentEmail: "richard@yahoo.com"
    }
]);