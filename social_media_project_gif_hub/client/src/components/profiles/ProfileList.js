import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import FeedServices from '../../services/FeedServices';

const ProfileList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      FeedServices.getUsers().then(setUsers);
    }, []);
  
    return (
      <div>
        {users.map(user => (
          <UserCard key={user.email} user={user} />
        ))}
      </div>
    );
}

export default ProfileList;

