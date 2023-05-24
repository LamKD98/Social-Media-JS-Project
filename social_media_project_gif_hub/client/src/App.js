import React, {useState, useEffect} from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './containers/NavBar';
import HomePage from './containers/HomePage'
import ProfilePage from './components/profiles/ProfilePage';
import PostList from './components/feed/PostList'
import FeedServices from './services/FeedServices';
import PostContainer from './containers/PostContainer';
import Login from './components/login';
import UserCard from './components/profiles/UserCard';




function App() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [postToggle, setPostToggle] = useState(false)

  useEffect(() => {
    FeedServices.getPosts().then((data) => setPosts(data));
  },[postToggle])



  useEffect(() => {
    FeedServices.getPosts().then((data) => setPosts(data));
    FeedServices.getUsers().then((data) => setUsers(data));
    FeedServices.getComments().then((data) => setComments(data));
  
  }, []);

  // useEffect(() => {
  //   setComments(comments);
  // }, [comments])

  // useEffect(() => {
  //   setPosts(posts)
  // }, [posts])

  // const addNewPost = (post) => {
  //   setPosts([...posts, post])
  // }

  const addNewComment = (comment) => {
    console.log(comment);
    setComments([...comments, comment])
  }

  // if (posts.length === 0 ) return "loading"
  // if (users.length === 0 ) return "loading"
  // if (comments.length === 0 ) return "loading"

  const setUser = (newUser) => {
    setLoggedInUser(newUser)
  }

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser]
    setUser (updatedUsers)
  }

  if (posts.length > 1 && users.length > 1 && comments.length > 1) 

  return (
      <div className="App">

        <Router >
        <NavBar />
        <Routes>
        { !loggedInUser  
        ?
          <>
            <Route path="/" element={ <Login setUser={setUser} users={users} addUser={addUser} showCreateAccount={showCreateAccount} setShowCreateAccount={setShowCreateAccount}/>} />
            <Route path="*" element={ "404 Page Not Found" } />
          </>
          :
        <>
          <Route path="/" element={ <HomePage loggedInUser={loggedInUser} />} />
          <Route path="/profile" element={<UserCard user={loggedInUser}/>} />
          <Route path="/posts" element ={ <PostContainer  posts={posts} users={users} comments={comments} addNewComment={addNewComment} setPostToggle={setPostToggle} postToggle={postToggle} loggedInUser={loggedInUser}/>} />
          <Route path="*" element={ "404 Page Not Found" } />
        </>
        }
        </Routes>
        </Router>

      </div>
  );
}

export default App;


