const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('gifhub');
        const usersCollection = db.collection('users');
        const usersRouter = createRouter(usersCollection);
        app.use('/api/users', usersRouter);
        const postsCollection = db.collection('posts');
        const postsRouter = createRouter(postsCollection);
        app.use('/api/posts', postsRouter);
        const commentsCollection = db.collection('comments');
        const commentsRouter = createRouter(commentsCollection);
        app.use('/api/comments', commentsRouter);

    }).catch(console.error)

app.listen(9000, function(){
console.log(`app listening on port ${this.address().port}`);
})


