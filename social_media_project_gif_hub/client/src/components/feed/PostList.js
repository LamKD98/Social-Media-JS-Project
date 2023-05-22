import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';
import FeedServices from '../../services/FeedServices';
import CommentCard from './CommentCard';

const PostList = ({posts, users, comments}) => {

    const postCardNodes = posts.map((post) => {
        const specificUser = users.find((user) => user.userId == post.userId)
        const specificComment = comments.find((comment) => comment.postId === post.postId)
        const commentsByPost = comments.filter((comment) => comment.postId === post.postId)


        return (     
            <PostCard 
            key={post.userId}
            users={users}
            post={post}
            user={specificUser}
            comment={specificComment}
            comments={commentsByPost}
        />

    )})

    return (
        <div>
            {postCardNodes}
        </div>
    );
}

export default PostList;