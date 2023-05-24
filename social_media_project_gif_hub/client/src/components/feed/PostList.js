import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';




const PostList = ({posts, users, comments, addNewComment, postToggle, setPostToggle, loggedInUser}) => {

    const postCardNodes = posts.map((post, index) => {
        const specificComment = comments.find((comment) => comment.postDate === post.postDate)
        const specificUser = users.find((user) => user.email == post.userEmail)
        const commentsByPost = comments.filter((comment) => comment.postDate === post.postDate)



        return (
            <PostCard 

            key={index}

            users={users}
            post={post}
            user={specificUser}
            specificComment={specificComment}
            comments={commentsByPost}
            addNewComment={addNewComment}
            postToggle={postToggle}
            setPostToggle={setPostToggle}
            loggedInUser={loggedInUser}
        />

    )})

    return (
        <div>
            {postCardNodes}
        </div>
    );
}

export default PostList;