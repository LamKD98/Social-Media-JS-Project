import React, {useState} from 'react';



const CreateAccount = ({users, setUser, addUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [created, setCreated] = useState(false);
  
    
      
    };


const handleCreateAccount = (user) => {
    for(user of users){
        if(user.email !== email ){
            setUser(user)
        }
    }
    alert('Account created successfully!');
    setCreated(true);

    return (
        <div>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
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
          <button onClick={handleCreateAccount}>Create Account</button>
        </div>
      );
    }
    
;

export default CreateAccount