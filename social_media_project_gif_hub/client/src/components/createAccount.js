import React, {useState} from 'react';
import FeedServices from '../services/FeedServices';





const CreateAccount = ({users, setUser, addUser}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    
      
    


    const handleCreateAccount = () => {
        console.log("handleCreateAccountCalled");
        let emailUsed = false;
        for(let user of users){
            if(user.email === email ){
                emailUsed = true;
                alert('Email already in use!');
                break
            }
        }

        if (emailUsed === false) { 
            alert('Account created successfully!');
            // setCreated(true);
            const newUser = {
                fname: firstName,
                    lname: lastName,
                    email: email,
                    userAdded: Date(),
                    password: password
            }
            addUser(newUser)
            FeedServices.addUser(newUser)
        }
    }

    // const handleSubmit = (e) => {
    //     console.log("handleSubmitCalled");
    //     e.preventDefault()

    // }

    return (
        <form >
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
        </form>
    );
    
}

export default CreateAccount