const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('users_hub');
        const usersCollection = db.collection('users');
        const usersRouter = createRouter(usersCollection);
        app.use('/api/users', usersRouter);
    }).catch(console.error)

app.listen(9000, function(){
console.log(`app listening on port ${this.address().port}`);
})

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('posts_hub');
        const postsCollection = db.collection('posts');
        const postsRouter = createRouter(postsCollection);
        app.use('/api/posts', postsRouter);
    }).catch(console.error)

app.listen(9001, function(){
console.log(`app listening on port ${this.address().port}`);
})

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('comments_hub');
        const commentsCollection = db.collection('comments');
        const commentsRouter = createRouter(commentsCollection);
        app.use('/api/comments', commentsRouter);
    }).catch(console.error)

app.listen(9002, function(){
console.log(`app listening on port ${this.address().port}`);
})


