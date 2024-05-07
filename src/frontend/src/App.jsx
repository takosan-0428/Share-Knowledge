//App.jsx
import React from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login/login_page";

import Registration from "./registration/registration_page";

import Post from "./posts";
import PostClient from "./posts/create";
import PostShow from "./posts/show";

import Group from "./group"; 
import GroupClient from "./group/create"; 

import './App.css';
//import Header from "./header/header";
import Sign from './sign_in/sign-in';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/registration" element={<Registration />} />

          <Route path="/" element={<Post />} />
          <Route path="/create" element={<PostClient />} />
          <Route path="/show" element={<PostShow/>} />

          <Route path="/group" element={<Group />} />
          <Route path="/group/create" element={<GroupClient />} />

          <Route path="/sign" element={<Sign />} />

        </Routes>
      </BrowserRouter>    
  );
};

export default App;
