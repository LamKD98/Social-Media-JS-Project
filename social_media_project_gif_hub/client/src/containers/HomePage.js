import './Homepage.css'
import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = ({loggedInUser}) => {




    return (
        <div className='homepage'>
            <h1>Welcome to GifHub</h1>
            <h3>Great to see you again, {loggedInUser.fname}!</h3>

        
               <Link to="/posts">
               <button className='homebutton'>Go to your Feed</button>
               </Link>

        </div>
    );

    }


export default HomePage;

