
import React, { useState, useEffect } from 'react';

import FeedServices from '../../services/FeedServices';
import PostCard from '../feed/PostCard';


function UserCard({ user }) {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   FeedServices.getPostsByUser(user._id)
  //     .then(fetchedPosts => setPosts(fetchedPosts))
  //     .catch(err => console.error(err));
  // }, [user._id]);

  return (
    <div>
      <h2>First Name: {user.fname}</h2>
      <br/>
      <h2>Last Name: {user.lname}</h2>
      <br/>
      <p>Email: {user.email}</p>
      <div>
        {/* {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))} */}
      </div>
    </div>
  );
}

export default UserCard;
