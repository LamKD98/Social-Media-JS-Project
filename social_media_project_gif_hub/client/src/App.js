import React, {useState, useEffect} from 'react';
import NavBar from './containers/NavBar';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/profiles/ProfilePage';
import PostList from './components/feed/PostList';
import FeedServices from './services/FeedServices';

function App() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    FeedServices.getPosts().then((data) => setPosts(data));
    FeedServices.getUsers().then((data) => setUsers(data));
    FeedServices.getComments().then((data) => setComments(data));
  
  }, []);

  if (posts.length === 0 ) return "loading"
  if (users.length === 0 ) return "loading"
  if (comments.length === 0 ) return "loading"
  

  return (
      <div className="App">
        <Router>
          <NavBar />
          <HomePage posts={posts} users={users} commente={comments}/>
        </Router>
      </div>
  );
}

export default App;


