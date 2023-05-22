import React from 'react';

const CommentCard = ({comment}) => {

    // console.log(comment);
    // console.log(user);

    return (
        <div className='comment-card'>
            <p>{comment.text}</p>
        </div>
    );
}

export default CommentCard;