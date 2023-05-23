import React from 'react';

const CommentCard = ({comment, user}) => {
    return (
        <div className='comment-card'>
            <h3>{user.fname}:</h3>
            <p>{comment.text}</p>
            <img
                src={comment.gifUrl}
                alt="Selected GIF"
            />
        </div>
    );
}

export default CommentCard;
