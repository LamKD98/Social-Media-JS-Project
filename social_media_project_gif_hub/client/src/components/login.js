import React, {useState} from 'react';
import { BrowserRouter as  Navigate, Link} from 'react-router-dom';
import CreateAccount from './createAccount'

const Login = ({users, setUser, loggedIn}) => { 

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")



const handleLogin = (user) => {
    for(user of users){
        if(user.email === email && user.password === password){
            setUser(user)
        }
    }

};

if (loggedIn) {
    return <Navigate to="/home"/>;
}

return (
    <div className="input-fields">
    <img src="../Images/Logo.png" width="80" height="80"></img>
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
    <button onClick={handleLogin}>Login</button>
    <br />
    <button className='link-button'><CreateAccount/></button>
    </div>
)
}

export default Login
