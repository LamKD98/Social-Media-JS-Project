
import React, { useState, useEffect } from 'react';
import FeedServices from '../../services/FeedServices'
import PostCard from '../feed/PostCard'

function UserCard({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    FeedServices.getPostsByUser(user._id)
      .then(fetchedPosts => setPosts(fetchedPosts))
      .catch(err => console.error(err));
  }, [user._id]);

  return (
    <div>
      <h2>{user.fname} {user.lname}</h2>
      <p>Email: {user.email}</p>
      <div>
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default UserCard;
