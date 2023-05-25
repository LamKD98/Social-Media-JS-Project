import React, { useState } from 'react';
import FeedServices from '../../services/FeedServices';

function EditPostForm({ post, onUpdate, postToggle, setPostToggle }) {

    const [editedPost, setEditedPost] = useState(post);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedPost((prevPost) => ({
        ...prevPost,
        [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        FeedServices.updatePost(editedPost)
        .then(() => {
            onUpdate(editedPost);
            setPostToggle(!postToggle)
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <textarea
            name="text"
            value={editedPost.text}
            onChange={handleInputChange}
        />
        <button type="submit">Update Post</button>
        </form>
    );
}

export default EditPostForm;