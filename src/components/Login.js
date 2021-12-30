import { useState } from "react";

import React from "react";
import background from "./girl.jpg"

function Login({ userAuth }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!userName){
        alert('Please fill the username')
        return
    }

    if(!password){
        alert('Please fill the Password')
        return
    }

    userAuth({userName, password})
    
    setUserName('')
    setPassword('')
} 

  return (
    <div>
      <div className="flex flex-row">
        <div
          className="w-2/4 bg-scroll"
          style={{ backgroundImage: `url(${background})` }} 
        //   style={{backgroundImage: URL(girl.jpg)}}
        //   style="background-image: url(girl.jpg)"
        ></div>
        <div className="flex items-center justify-center min-h-screen bg-blue-100 w-3/4">
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg border rounded-lg ">
            <h3 className="text-3xl font-bold font-serif text-center text-blue-600">
              Login to your account
            </h3>
            <form  onSubmit={onSubmit}>
              <div className="mt-4">
                <div>
                  <label className="block">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="mt-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="flex flex-col items-center mt-3">
                  <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 cursor-wait">
                    Login
                  </button>
                  <div className="mt-3">
                    
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
