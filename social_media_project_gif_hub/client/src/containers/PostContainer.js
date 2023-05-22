import React from 'react';
import PostForm from '../components/feed/PostForm';
import PostList from '../components/feed/PostList';

const PostContainer = ({posts, users, comments}) => {

    const onPostCreate = () => {
      
    }

    return ( 

        <>
        <PostForm onPostCreate={onPostCreate}  />
        <PostList posts={posts} users={users} comments={comments}/>
        
        </>

     );
}
 
export default PostContainer;