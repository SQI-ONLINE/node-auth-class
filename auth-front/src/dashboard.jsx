import React from 'react';
import axios from 'axios';


function Dashboard() {

    const testAuth = async () => {
        let token = localStorage.getItem("auth-token")
        if(token){
          let bearer = 'Bearer ' + token;
          let data = {authorization: bearer};
            let requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: new Headers({
                  'authorization': bearer,
                  'Content-Type': 'application/json'
                }),
                // body: JSON.stringify(data)
            }
          
          const response = await fetch('http://localhost:5000/app/testAuth',requestOptions)
          const json = await response.json()
          
          // const response = await axios.get('http://localhost:5000/app/testAuth', requestOptions)
          // const json = await response.json()
          
          console.log(json)
        }else{
            console.log("YOU ARE NOT AUTHORIZED")
        }
    }

  return (
    <div className="App">
        <h1>DASHBOARD</h1>
        <button onClick={testAuth}>Test Auth</button>
    </div>
  );
}

export default Dashboard;
