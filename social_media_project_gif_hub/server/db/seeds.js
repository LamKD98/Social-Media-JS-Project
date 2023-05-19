use users_hub
db.dropDatabase()

db.users.insertMany([
    {
        fname: "Euan",
        lname: "Crawford",
        email: "euan@hotmail.com",
        userAdded: Date("2023-05-19T14:00:00Z")
    },
    {
        fname: "Andy",
        lname: "Lamb",
        email: "andy@hotmail.com",
        userAdded: Date("2023-05-19T13:00:00Z")
    },
    {
        fname: "Sam",
        lname: "Houston",
        email: "sam@gmail.com",
        userAdded: Date("2023-05-19T12:00:00Z")
    },
    {
        fname: "Richard",
        lname: "Dalrymple",
        email: "richard@yahoo.com",
        userAdded: Date("2023-05-19T11:00:00Z")
    }
])

use posts_hub
db.dropDatabase()

db.posts.insertMany([
    {
        text: "I love posts",
        postDate: Date("2023-05-19T14:08:14Z"),
        userId: ("2023-05-19T14:00:00Z")
    },
    {
        text: "I also love posts",
        postDate: Date("2023-05-19T14:10:03Z"),
        userId: ("2023-05-19T12:00:00Z")
    }
])

use comments_hub
db.dropDatabase()

db.comments.insertMany([
    {
        text: "sample-gif-url-here",
        commentDate: ("2023-05-19T13:24:00Z"),
        userId: ("2023-05-19T11:00:00Z")
    },
    {
        text: "sample-gif-url-here",
        commentDate: ("2023-05-19T14:45:00Z"),
        userId: ("2023-05-19T13:58:43Z")
    }
])