import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Perform login logic here, e.g., making an API call to validate credentials
        if (email === 'GifHub' && password === 'password') {
        setLoggedIn(true);
        } else {
        alert('Invalid credentials. Please try again.');
        }
    };

    if (loggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <div>
        <h1>Login</h1>
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
        <Link to="/create-account">Create Account</Link>
        </div>
    );
    }

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
        <h1>Create Account</h1>
        <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        <br />
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
        <button onClick={handleCreateAccount}>Create Account</button>
        </div>
    );
    }

    function Home() {
    return <div>Welcome to the homepage!</div>;
    }

    function HomePage() {
    return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/home" element={<Home />} />
            </Routes>
    );
    }

export default HomePage;

