import React from 'react';
import CommentCard from './CommentCard';
import GifPicker, { TenorImage } from 'gif-picker-react';

const PostCard = ({post, user, users, comments, specificComment}) => {


    console.log(post.gifUrl)

    const commentCardNodes = () => {
        const postComments = comments.filter((comment) =>  post.postDate === comment.postDate)
        let commentAuthor = null
        if(specificComment){
            commentAuthor = users?.find((user) => user.email === specificComment.userCommentEmail) || "loading"
        }

        console.log(commentAuthor);
        console.log(postComments);
        const postCommentNodes = postComments.map((postComment, index) => {
            return (
                <CommentCard
                    key={index}
                    comment={postComment}
                    user={commentAuthor}
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
            {/* <CommentForm / >  */}

        </div>
    );
}

export default PostCard;