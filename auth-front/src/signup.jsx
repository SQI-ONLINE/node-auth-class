import React, { useState } from 'react';


function SignUp() {

    const [ firstName, setFirst  ] = useState('');
    const [ lastName, setLast  ] = useState('');
    const [ email, setEmail  ] = useState('');
    const [ phone, setPhone  ] = useState('');
    const [ password, setPassword  ] = useState('');

    const submitForm = async (e) => {
      e.preventDefault();
      let userForm = { firstName, lastName, email, phone, password };
      
      let requestOptions = {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(userForm)
      }

      const response = await fetch('http://localhost:5000/user/signup',requestOptions)
      const json = await response.json()

      console.log(json)

    }
    
    const handleFirst = (event) => {
      setFirst(event.target.value)
    }
    const handleLast = (event) => {
      setLast(event.target.value)
    }
    const handleEmail = (event) => {
      setEmail(event.target.value)
    }
    const handlePhone = (event) => {
      setPhone(event.target.value)
    }
    const handlePass = (event) => {
      setPassword(event.target.value)
    }
    
  return (
    <div className="App">
     <form >
            <input type="text" placeholder="First Name" name="firstName" onChange={handleFirst} /><br />
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleLast} /><br />
            <input type="text" placeholder="Email" name="email" onChange={handleEmail} /><br />
            <input type="text" placeholder="Phone" name="phone" onChange={handlePhone} /><br />
            <input type="password" placeholder="password" name="password" onChange={handlePass} /> <br />
            <button onClick={submitForm}>Sign Up</button>
        </form>
    </div>
  );
}

export default SignUp;
