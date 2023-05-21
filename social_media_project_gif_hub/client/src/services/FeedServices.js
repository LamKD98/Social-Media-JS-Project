const usersURL = 'http://localhost:9000/api/users/';
const postsURL = 'http://localhost:9001/api/posts/';
const commentsURL = 'http://localhost:9002/api/comments/';

const FeedServices = {
    // Users
    getUsers() {
        return fetch(usersURL)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .catch(err => console.error(err));
    },

    getUser(id) {
        return fetch(usersURL + id)
        .then(res => res.json())
        .catch(err => console.error(err));
    },

    addUser(user) {
        return fetch(usersURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    updateUser(user) {
        return fetch(usersURL + user._id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    deleteUser(id) {
        return fetch(usersURL + id, {
            method: 'DELETE'
        });
    },

    // Posts
    getPosts() {
        return fetch(postsURL)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
            })
            .catch(err => console.error(err));
    },

    getPostsByUser(userId) {
        return fetch(postsURL + "?userId=" + userId)
        .then(res => res.json())
        .catch(err => console.error(err));
    },

    addPost(post) {
        return fetch(postsURL, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    updatePost(post) {
        return fetch(postsURL + post._id, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    deletePost(id) {
        return fetch(postsURL + id, {
            method: 'DELETE'
        });
    },

    // Comments
    getCommentsByPost(postId) {
        return fetch(commentsURL + "?postId=" + postId)
        .then(res => res.json())
        .catch(err => console.error(err));
    },

    addComment(comment) {
        return fetch(commentsURL, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    updateComment(comment) {
        return fetch(commentsURL + comment._id, {
            method: 'PUT',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    deleteComment(id) {
        return fetch(commentsURL + id, {
            method: 'DELETE'
        });
    },
};

export default FeedServices;


