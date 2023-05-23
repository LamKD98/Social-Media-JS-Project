import React from 'react';
import PostForm from '../components/feed/PostForm';
import PostList from '../components/feed/PostList';

const PostContainer = ({posts, users, comments, addNewComment, setPostToggle, postToggle}) => {

    const onPostCreate = () => {

    }

    return ( 

        <>
        <PostForm onPostCreate={onPostCreate} setPostToggle={setPostToggle} postToggle={postToggle}/>
        <PostList posts={posts} users={users} comments={comments} addNewComment={addNewComment} postToggle={postToggle} setPostToggle={setPostToggle}/>
        
        </>

    );
}

export default PostContainer;