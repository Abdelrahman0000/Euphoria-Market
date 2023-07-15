/* eslint-disable import/first */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarOut from './Component/NavbarOut/NavbarOut1.jsx';
import SignIn from './Page/SignIn/SignIn.jsx';

import SignUp from './Page/Signup/Signup.jsx';

import { AuthProvider } from "./AuthContext.js"


// // Import your components using lazy loading
// const Home = lazy(() => import('./Pages/Home/Home.tsx'));

// const SignUp = lazy(() => import('./Pages/SignIN/SginIn.tsx'));
// const Wallet = lazy(() => import('./Pages/Wallet/Wallet.tsx'));
// const Rankeing = lazy(() => import('./Pages/Rankeing/Rankeing.tsx'));

// const Market = lazy(() => import('./Pages/MarketPlace/MarketPlace.tsx'));
// const Artist = lazy(() => import('./Pages/ArtistProfile/ArtistProfile.tsx'));
// const LogIn = lazy(() => import('./Pages/LogIn/LogIn.tsx'));


export default function Linking() {
  return (
    <BrowserRouter>
      <NavbarOut />
      <Suspense fallback={<div className='all-load'><div v-if="loading" class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div></div>}>
      <AuthProvider>
        <Routes>
        <Route exact path="/sign_in" element={<SignIn />} />

        <Route exact path="/sign_up" element={<SignUp />} />
        </Routes>
        </AuthProvider>
      </Suspense>
     
    </BrowserRouter>
  );
}