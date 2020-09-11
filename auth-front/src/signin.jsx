import React, { useState } from 'react';


function SignIn() {

  const [ email, setEmail  ] = useState('');
  const [ password, setPassword  ] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    let userForm = {email, password };
    
    let requestOptions = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(userForm)
    }

    const response = await fetch('http://localhost:5000/user/signin',requestOptions)
    const json = await response.json()

    if(response.status !== 401 && response.status !== 500){
      localStorage.setItem('auth-token', json.token);
    }
    console.log(json)

  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePass = (event) => {
    setPassword(event.target.value)
  }
  return (
    <div className="App">
     <form>
        <input type="text" placeholder="Email" name="email" onChange={handleEmail} /> <br />
        <input type="password" placeholder="password" name="password" onChange={handlePass} /> <br />
        <button onClick={submitForm}>Sign In</button>
        </form>
    </div>
  );
}

export default SignIn;
