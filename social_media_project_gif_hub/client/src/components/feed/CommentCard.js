import React from 'react';

const CommentCard = ({comment, user, post}) => {

    console.log(comment);
    console.log(user);

    return (
        <div className='comment-card'>
            {console.log(post.postId, comment.postId)}
            <h2>{user.fname}</h2>
            <p>{comment.text}</p>
        </div>
    );
}

export default CommentCard;