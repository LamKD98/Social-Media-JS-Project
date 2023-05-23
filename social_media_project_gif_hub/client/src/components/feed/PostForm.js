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

function PostForm({ onPostCreate }) {
  const [postContent, setPostContent] = useState('');
  const [gifSearchTerm, setGifSearchTerm] = useState('');
  const [gifSearchResults, setGifSearchResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);
  const [ selected, setSelected ] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.dir(e)
    const newPost = { text: postContent, gifUrl: selected.url };
    newPost["postDate"] = Date.now()
    newPost["userEmail"] = "euan@hotmail.com"
    FeedServices.addPost(newPost)
    // onPostCreate(newPost);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
		<div className="App">


			<GifPicker tenorApiKey={TENOR_API_KEY} onGifClick={setSelected} />

			
		</div>
      <input type="submit" value="Create Post" />
      </form>
      
    </div>

        // <> 

		// 	/<GifPicker tenorApiKey={TENOR_API_KEY} onGifClick={setSelected} />

        //     </>
	
  );
}

export default PostForm;
