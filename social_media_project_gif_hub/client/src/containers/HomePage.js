
import React, { useEffect, useState } from 'react';
import FeedServices from '../services/FeedServices';
import PostForm from '../components/feed/PostForm';

function HomePage() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        FeedServices.getUsers()
            .then(users => setUsers(users))
            .catch(error => console.error(error));

        FeedServices.getPosts()
            .then(posts => setPosts(posts))
            .catch(error => console.error(error));

        FeedServices.getComments()
            .then(comments => setComments(comments))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1> GifHub </h1>
            <h2>Users:</h2>
            {users.map(user => (
                <div key={user._id}>
                    <h3>{user.fname} {user.lname}</h3>
                    <p>Email: {user.email}</p>
                </div>
            ))}

            <h1>Create Post</h1>
            <PostForm/>
            <h2>Posts:</h2>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.text}</p>
                </div>
            ))}
            <h2>Comments:</h2>
            {comments.map(comment => (
                <div key={comment._id}>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;

