import React, {useState} from 'react';
import { BrowserRouter as  Routes, Route, Navigate, Redirect, Link} from 'react-router-dom';
import CreateAccount from './createAccount'

const Login = ({users, comments, posts, setUser, loggedIn, addUser, showCreateAccount, setShowCreateAccount}) => { 

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleShowCreateAccount = () => {
  setShowCreateAccount(!showCreateAccount)
}


const handleLogin = (e) => {
    e.preventDefault()
    for( let user of users){
        if(user.email === email && user.password === password){
            setUser(user)
        }
    }
    return <Link to="/posts"/>


};

if (loggedIn) {
    return <Navigate to="/posts"/>;
}

return (
    <>
     {  showCreateAccount ? 
     <CreateAccount users={users} addUser={addUser}  />  
     : 
     <>
     <div className="input-fields">
    <img src="../Images/Logo.png" width="80" height="80"></img>
    <form onSubmit={handleLogin}>
    <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <br />
    <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <button type="submit">Login</button>
    <br />
    </form>
    <button onClick={handleShowCreateAccount}>Create Account</button>
    </div>
     </> } 
    </>
)
}

export default Login
