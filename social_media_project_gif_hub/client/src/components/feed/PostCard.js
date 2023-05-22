import React from 'react';
import CommentCard from './CommentCard';

const PostCard = ({post, user, users, comments, comment}) => {

    const commentCardNodes = comments.map((comment) => {
        const specificUser = users.find((user) => user.userId === comment.userId)
        if (comments.length > 0) {
            console.log("postid", post.userId);
            console.log("comment id" , comment.postId);
            console.log("comments" , comments);
            const specificComment = comments.find((comment) => post.postId === comment.postId)
            if (specificComment) {
                return (
                    <CommentCard
                        comment={specificComment}
                        user={specificUser}
                        post={post}
                    />
                )
        } else return null
    } else return null
    })
        
    

    return (
        <div className='post-card'>
            <h2>{user.fname}:</h2>
            <p>{post.text}</p>

            {commentCardNodes}
        </div>
    );
}

export default PostCard;