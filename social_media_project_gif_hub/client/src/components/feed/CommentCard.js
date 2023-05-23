import React from 'react';

const CommentCard = ({comment, user}) => {

    console.log(user);

    return (
        <div className='comment-card'>
            <h4>{user.fname}:</h4>
            <p>{comment.text}</p>
        </div>
    );
}

export default CommentCard;