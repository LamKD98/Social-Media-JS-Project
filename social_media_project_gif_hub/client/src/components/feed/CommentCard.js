import React from 'react';

const CommentCard = ({comment, user, post}) => {

    console.log(comment);
    console.log(user);

    return (
        <div className='comment-card'>
            <h3>{user.fname} commented:</h3>
            <p>{comment.text}</p>
        </div>
    );
}

export default CommentCard;