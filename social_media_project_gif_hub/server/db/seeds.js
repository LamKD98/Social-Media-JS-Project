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
        text: "I love posts",
        gifUrl: "https://media.tenor.com/J8KeZSDe_acAAAAC/dace.gif",
        postDate: "2023-05-19T14:08:14Z",
        userEmail: "euan@hotmail.com",


    },
    {
        text: "I also love posts",
        gifUrl: "https://media.tenor.com/J8KeZSDe_acAAAAC/dace.gif",
        postDate: "2023-05-19T14:10:03Z",
        userEmail: "sam@gmail.com",

    }
])


db.comments.insertMany([
    {
        text: "This is a comment",
        commentDate: "2023-05-19T13:24:00Z",
        gifUrl: "sample-gif-url-here",
        postDate: "2023-05-19T14:08:14Z",
        userCommentEmail: "andy@hotmail.com"
    },
    {
        text: "I also love commenting on things",
        commentDate: "2023-05-19T14:45:00Z",
        postId: "2023-05-19T14:10:03Z",
        commentId: "2023-05-19T14:45:00Z"
    },
    {
        text: "This is another comment",
        commentDate: "2023-05-19T14:45:00Z",
        gifUrl: "another-sample-gif-url-here",
        postDate: "2023-05-19T14:10:03Z",
        userCommentEmail: "richard@yahoo.com"
    }
]);