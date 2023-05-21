import React from 'react';

const UserCard = ({user}) => {
    return ( 
      <div className="user-card">
        <h2>{user.fname} {user.lname}</h2>
        <p>Email: {user.email}</p>
        <p>Joined: {new Date(user.userAdded).toDateString()}</p>
      </div>
    );
}

export default UserCard;