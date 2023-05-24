import './CommentCard.css'
import React from 'react';

const CommentCard = ({comment, user}) => {


    // console.log(user);
    // console.log(comment.gifUrl);
    return (
        <div className='comment-card'>
            <h4>{user.fname}:</h4>
            <p>{comment.text}</p>
            <img className="comment-gif"
                src={comment.gifUrl}
                alt="Selected GIF"
            />
        </div>
    );
}

export default CommentCard;
