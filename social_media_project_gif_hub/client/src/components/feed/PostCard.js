import './PostCard.css'
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import FeedServices from '../../services/FeedServices';
import EditPostForm from './EditPostForm';


const PostCard = ({post, user, users, comments, specificComment, addNewComment, setPostToggle, postToggle, loggedInUser}) => {

    const [isEditing, setIsEditing] = useState(false);

    console.log(post.gifUrl)

    const commentCardNodes = () => {
        const postComments = comments.filter((comment) =>  post.postDate === comment.postDate)

        
        const postCommentNodes = postComments.map((postComment, index) => {
            let commentAuthor;
            if(specificComment){
                commentAuthor = users.find((user) => user.email === postComment.userCommentEmail) || "loading"
            }

            return (
                <CommentCard
                    key={index}
                    comment={postComment}

                    user={commentAuthor}

                />
        )})
        return postCommentNodes
    }

    const handleEditClicked = () => {
        setIsEditing(true);
    }

    const handlePostUpdate = (updatedPost) => {
        setIsEditing(false);
    }

    return (
        
        <div className='post-card'>
            {isEditing ? (
                <EditPostForm post={post} onUpdate={handlePostUpdate} postToggle={postToggle} setPostToggle={setPostToggle}/>
            ) : (
                <>
                    <h2>{user.fname}:</h2>
                    <p>{post.text}</p>
                    <img
                        src={post.gifUrl}
                        alt="Selected GIF"
                    />
                    <button onClick={handleEditClicked}>Edit</button>
                    {commentCardNodes()}
                    <CommentForm addNewComment={addNewComment} postDate={post.postDate} loggedInUser={loggedInUser}/>
                </>
                )}
        </div>
    );
}

export default PostCard;
