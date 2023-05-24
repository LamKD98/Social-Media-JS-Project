import './UserCard.css'
import React, { useState, useEffect } from 'react';

import FeedServices from '../../services/FeedServices';
import PostCard from '../feed/PostCard';


function UserCard({ user }) {
  const [posts, setPosts] = useState([]);





  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch data from the iTunes API
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=200/json')
      .then((response) => response.json())
      .then((data) => {
        // Extract necessary information (song titles, artist names, and images) from the API
        const songList = data.feed.entry.map((entry) => ({
          title: entry.title.label,
          artist: entry['im:artist'].label,
          image: entry['im:image'][2].label, 
          
        }));

        // Randomly select 5 songs
        const randomSongs = getRandomSongs(songList, 1);

        // Update the state with the selected songs
        setSongs(randomSongs);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  // Function to randomly select songs
  const getRandomSongs = (songList, count) => {
    const shuffledSongs = songList.sort(() => 0.5 - Math.random());
    return shuffledSongs.slice(0, count);
  };

  return (
    <div className="profile">
      <div className="details">
    <h2>First Name: {user.fname}</h2>
    <br/>
    <h2>Last Name: {user.lname}</h2>
    <br/>
    <h2>Email: {user.email}</h2>
    </div>
      <div className="song">
      <h1>{user.fname}'s song of the day </h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {songs.map((song, index) => (
          <li key={index}>
            <img src={song.image} alt={`${song.title} - ${song.artist}`} />
              <strong>{song.title}</strong>
          </li>
            ))}
      </ul>
      </div>
    </div>


  );

        }


export default UserCard;
