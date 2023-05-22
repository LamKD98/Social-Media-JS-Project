import React, { useState } from 'react';
import GifService from '../services/GifService';

function PostForm({ onPostCreate }) {
  const [postContent, setPostContent] = useState('');
  const [gifSearchTerm, setGifSearchTerm] = useState('');
  const [gifSearchResults, setGifSearchResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);

  const handleGifSearch = async () => {
    try {
      const res = await GifService.searchGifs(gifSearchTerm);
      setGifSearchResults(res.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostCreate = () => {
    const newPost = { content: postContent, gifUrl: selectedGif };
    onPostCreate(newPost);
  };

  return (
    <div>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search for a gif"
        value={gifSearchTerm}
        onChange={(e) => setGifSearchTerm(e.target.value)}
      />
      <button onClick={handleGifSearch}>Search Gif</button>
      <div>
        {gifSearchResults.map((gif) => (
          <img
            key={gif.id}
            src={gif.media[0].gif.url}
            alt={gif.title}
            onClick={() => setSelectedGif(gif.media[0].gif.url)}
          />
        ))}
      </div>
      <button onClick={handlePostCreate}>Create Post</button>
    </div>
  );
}

export default PostForm;
