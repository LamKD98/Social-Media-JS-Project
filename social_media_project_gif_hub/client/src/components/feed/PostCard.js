import React from 'react';
import CommentCard from './CommentCard';

const PostCard = ({post, user, users, comment}) => {

    // console.log(user);
    // console.log(comment);

    return (
        <div className='post-card'>
            <h2>{user.fname}</h2>
            <p>{post.text}</p>
            {post.gifUrl && <img src={post.gifUrl} alt="Post Gif" />}
            <CommentCard
                comment={comment}
                user={users.find((user) => (
                    user.userId === comment.userId
                ))}
                post={post}
            />
        </div>
    );
}

export default PostCard;