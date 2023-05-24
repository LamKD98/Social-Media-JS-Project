import './UserCard.css'
import React, { useState, useEffect } from 'react';

import UserCard from './UserCard';

import FeedService from '../../services/FeedServices';

function ProfilePage({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data when component mounts
    FeedService.getUser(match.params.id)
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [match.params.id]);

  return (
    <div>
      {user && <UserCard user={user} />}
    </div>
  );
}

export default ProfilePage;

