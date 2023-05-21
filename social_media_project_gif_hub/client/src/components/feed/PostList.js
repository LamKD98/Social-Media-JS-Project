import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';
import FeedServices from '../../services/FeedServices';
import CommentCard from './CommentCard';

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    // console.log(posts);
    // console.log(users);
    // console.log(comments);

    useEffect(() => {
        FeedServices.getPosts().then(setPosts);
    }, []);
    
    useEffect(() => {
        FeedServices.getUsers().then(setUsers);
    }, []);

    useEffect(() => {
        FeedServices.getComments().then(setComments);
    }, []);
    

    return (
        <div>
            {posts.map(post => (
                <PostCard 
                    key={post.userId}
                    users={users}
                    post={post}
                    user={users.find((user) => (
                        user.userId === post.userId
                    ))}
                    comment={comments.find((comment) => (
                        comment.postId === post.postId 
                    ))}
                />
            ))}
        </div>
    );
}

export default PostList;