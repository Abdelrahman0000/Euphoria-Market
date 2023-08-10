/* eslint-disable import/first */
import React, { Suspense, useState, createContext,useEffect} from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import NavbarOut from './Component/NavbarOut/NavbarOut1.jsx';
import SignIn from './Page/SignIn/SignIn.jsx';
import Home from './Page/Home/Home.js';
import SignUp from './Page/Signup/Signup.jsx';
import NavbarIn from './Component/NavbarIn/NavbarIn.jsx';

export const AuthContext = createContext();
export default function Linking() {
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : { email: null });

   useEffect(() => {
     localStorage.setItem('user', JSON.stringify(user));
   }, [user]);
  console.log(user)
  return (
    <BrowserRouter>
    { user?<NavbarIn /> :<NavbarOut />  }
      <Suspense fallback={<div className='all-load'><div v-if="loading" class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div></div>}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
         <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate to="/sign_in" />}
            />
            <Route exact path="/sign_in" element={<SignIn />} />
            <Route exact path="/sign_up" element={<SignUp />} />
          
        </Routes>
        </AuthContext.Provider>
      </Suspense>
     
    </BrowserRouter>
  );
}