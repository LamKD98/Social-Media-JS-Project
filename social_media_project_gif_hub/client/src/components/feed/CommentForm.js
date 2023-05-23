import React, { useState } from 'react';
import GifPicker from 'gif-picker-react';
import FeedServices from '../../services/FeedServices';

const TENOR_API_KEY = 'AIzaSyA9SS1evcudEpr89ch9I4foqWMjFLNmS78';

function CommentForm({ onCommentCreate, postId }) {
  const [commentContent, setCommentContent] = useState('');
  const [selectedGif, setSelectedGif] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = { text: commentContent, gifUrl: selectedGif ? selectedGif.url : null, postDate: Date.now(), postId: postId, userId: "euan@hotmail.com" };
    FeedServices.addComment(newComment)
    onCommentCreate(newComment);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <textarea
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      />
		<div className="App">
			<GifPicker tenorApiKey={TENOR_API_KEY} onGifClick={setSelectedGif} />
		</div>
      <input type="submit" value="Create Comment" />
      </form>
    </div>
  );
}

export default CommentForm;
