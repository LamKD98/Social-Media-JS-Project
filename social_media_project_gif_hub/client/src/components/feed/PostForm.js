import './PostForm.css';
import React, { useState } from 'react';

import GifPicker, { TenorImage } from 'gif-picker-react';
import FeedServices from '../../services/FeedServices';


const TENOR_API_KEY = 'AIzaSyA9SS1evcudEpr89ch9I4foqWMjFLNmS78';

// {
//     text: "I love posts",
//     gifUrl: "sample-gif-url-here",
//     postDate: Date("2023-05-19T14:08:14Z"),
//     postId: "2023-05-19T14:08:14Z",
//     userId: "2023-05-19T14:00:00Z"
// },

function PostForm({ onPostCreate, setPostToggle, postToggle, loggedInUser }) {
  const [postContent, setPostContent] = useState('');
  const [gifSearchTerm, setGifSearchTerm] = useState('');
  const [gifSearchResults, setGifSearchResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);
  const [ selected, setSelected ] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.dir(e)
    const newPost = { text: postContent, gifUrl: selectedGif.tenorUrl + ".gif" };
    newPost["postDate"] = Date.now()
    newPost["userEmail"] = loggedInUser.email
    FeedServices.addPost(newPost).then(() => {
      setPostContent('');
      setSelectedGif(null);
      setPostToggle(!postToggle)
      // window.location.reload();
    })
    .catch((err) => {
      console.error('Failed to create post', err);
    })
    // onPostCreate(newPost);
  };

  const handleToggle = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  const handleGifClick = (gif) => {
    console.log("url", gif);
    setSelectedGif(gif)
  }

  return (
    <div className="post-form">
        <form onSubmit={handleSubmit}>
          <textarea className='item-1'
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
      <button className='item-2' type='submit' onClick={handleToggle}>Show me gifs</button>
      <input className='item-3' type="submit" value="Create Post" />
      </form>
      { toggle ? 	<div className="App"><GifPicker tenorApiKey={TENOR_API_KEY} onGifClick={handleGifClick} /> 		</div> : null }
      
    </div>
  );
}

export default PostForm;
