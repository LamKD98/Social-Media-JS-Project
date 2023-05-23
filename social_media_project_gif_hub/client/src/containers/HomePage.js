import './Homepage.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import FeedServices from '../services/FeedServices';
import PostForm from '../components/feed/PostForm';


const handleLogin = () => {
        // Perform login logic here, e.g., making an API call to validate credentials
        if (email === 'GifHub' && password === 'password') {
        setLoggedIn(true);
        } else {
        alert('Invalid credentials. Please try again.');
        }
    };

    if (loggedIn) {
        return <Navigate to="/home"/>;
    }

    return (
        <div className="input-fields">
        <img src="../Images/Logo.png" width="80" height="80"></img>
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <br />
        <button className='link-button'><Link to="/create-account">Create Account</Link></button>
        </div>
    );
    

    function CreateAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [created, setCreated] = useState(false);

    const handleCreateAccount = () => {
        // Perform account creation logic here, e.g., making an API call to create a new account
        alert('Account created successfully!');
        setCreated(true);
    };

    if (created) {
        return <Navigate to="/" />;
    }

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



export default ;

