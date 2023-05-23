import React from 'react';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';

const PostCard = ({post, user, users, comments, onCommentCreate}) => {

    const commentCardNodes = () => {
        const postComments = comments.filter((comment) =>  post.postDate === comment.postDate)
        const postCommentNodes = postComments.map((postComment, index) => {
            return (
                <CommentCard
                    key={index}
                    comment={postComment}
                />
        )})
        return postCommentNodes
    }

    return (
        <div className='post-card'>
            <h2>{user.fname}:</h2>
            <p>{post.text}</p>
            <img
                src={post.gifUrl}
                alt="Selected GIF"
            />
            {commentCardNodes()}
            <CommentForm onCommentCreate={onCommentCreate} postId={post.postId}/>
        </div>
    );
}

export default PostCard;
