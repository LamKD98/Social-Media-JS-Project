import React, { useState } from 'react';
import GifPicker from 'gif-picker-react';
import FeedServices from '../../services/FeedServices';

const TENOR_API_KEY = 'AIzaSyA9SS1evcudEpr89ch9I4foqWMjFLNmS78';

function CommentForm({ postDate, addNewComment, loggedInUser}) {
  // const [commentContent, setCommentContent] = useState('');
  const [commentContent, setCommentContent] = useState('')
  const [selectedGif, setSelectedGif] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = { 
      text: commentContent,
      gifUrl: selectedGif ? selectedGif.url : null,
    };
    newComment['commentDate'] = Date.now();
    newComment['postDate'] = postDate;
    console.log(loggedInUser);
    newComment['userCommentEmail'] = loggedInUser.email;
    FeedServices.addComment(newComment)
    addNewComment(newComment);
    setCommentContent('');
  };
  if (selectedGif) {
    console.log(selectedGif.url);
  }


  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
      <textarea
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      />
		<div className="App">
			{toggle ? <GifPicker tenorApiKey={TENOR_API_KEY} onGifClick={setSelectedGif} /> : null}
		</div>
      <input type="submit" value="Create Comment" />
      <button type='submit' onClick={handleToggle}>Show me Gifs</button>
      </form>
    </div>
  );
}

export default CommentForm;
