import './UserCard.css';
import React, { useState, useEffect, useRef } from 'react';

function UserCard({ user }) {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const audioRef = useRef(null);

  const handlePlayPause = (index) => {
    if (index === currentSongIndex) {
      // Pause the currently playing song
      audioRef.current.pause();
      setCurrentSongIndex(null);
    } else {
      // Play the selected song
      audioRef.current.src = songs[index].previewUrl;
      audioRef.current.play();
      setCurrentSongIndex(index);
    }
  };

  useEffect(() => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=200/json')
      .then((response) => response.json())
      .then((data) => {
        const songList = data.feed.entry.map((entry) => ({
          title: entry.title.label,
          artist: entry['im:artist'].label,
          image: entry['im:image'][2].label,
          previewUrl: entry.link[1].attributes.href,
        }));

        const randomSongs = getRandomSongs(songList, 1);

        setSongs(randomSongs);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  const getRandomSongs = (songList, count) => {
    const shuffledSongs = songList.sort(() => 0.5 - Math.random());
    return shuffledSongs.slice(0, count);
  };

  return (
    <div className="profile">
      <div className="details">
        <h2>First Name: {user.fname}</h2>
        <br />
        <h2>Last Name: {user.lname}</h2>
        <br />
        <h2>Email: {user.email}</h2>
      </div>
      <div className="song">
        <h1>{user.fname}'s song of the day </h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {songs.map((song, index) => (
            <li key={index}>
              <img src={song.image} alt={`${song.title} - ${song.artist}`} />

              <div className="details">
                <h3>{song.title}</h3>
              </div>

              <button
                className="play-pause-button"
                onClick={() => handlePlayPause(index)}
              >
                {currentSongIndex === index ? 'Pause' : 'Play'}
              </button>

              <audio ref={audioRef} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserCard;




