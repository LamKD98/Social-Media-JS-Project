import './Homepage.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import PostContainer from './PostContainer';
import ProfilePage from '../components/profiles/ProfilePage';
import Login from '../components/login';
import CreateAccount from '../components/createAccount'


const HomePage = ({loggedInUser, setUser, addUser, users, comments, posts}) => {




    if(loggedInUser){
        <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/posts" element ={ <PostContainer  posts={posts} users={users} comments={comments} />} />        
    </Routes>
    }else {

    return (
        <Routes>
            <Route path="/" element={<Login setUser={setUser} users={users} addUser={addUser}/>} />
            {/* <Route path="/create-account" element={<CreateAccount users={users} addUser={addUser} />} />       */}
        </Routes>
    );

    }


    }

export default HomePage;
