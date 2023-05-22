import React from 'react';
import PostList from '../components/feed/PostList';
import ProfileList from '../components/profiles/ProfileList'

const Feed = ({posts, users, comments}) => {

    
    return (
        <div>
            <PostList posts={posts} users={users} comments={comments}/>
            <ProfileList />
        </div>
    );
}

export default Feed;