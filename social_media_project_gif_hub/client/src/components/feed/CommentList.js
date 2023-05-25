import React, {useState, useEffect} from 'react';
import CommentCard from './CommentCard';
import FeedServices from '../../services/FeedServices';

const CommentList = () => {

    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        FeedServices.getComments().then(setComments);
        FeedServices.getPosts().then(setPosts);
        FeedServices.getUsers().then(setUsers);
    }, []);

    return (
        <div>
            {comments.map(comment => (
                <CommentCard 
                key={comment.userId} 
                comment={comment} 
                user={users.find((user) => (
                    user.userId === comment.userId
                ))}
                />
            ))}
        </div>
    );
}

export default CommentList;