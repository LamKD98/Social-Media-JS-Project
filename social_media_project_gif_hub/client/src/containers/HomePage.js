import './Homepage.css'
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import PostContainer from './PostContainer';
import ProfilePage from '../components/profiles/ProfilePage';
import Login from '../components/login';
import CreateAccount from '../components/createAccount'


const HomePage = ({loggedInUser}) => {




    return (
        <div>
            <h1>Welcome to GifHub</h1>
            <h3>Great to see you again {loggedInUser.fname}</h3>
        
               <Link to="/posts">
               <button>Go to your Feed</button>
               </Link>
        </div>
    );

    }


export default HomePage;

