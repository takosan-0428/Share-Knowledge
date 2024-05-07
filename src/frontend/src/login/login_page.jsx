// login_page.jsx
import React from "react";
import LoginForm from "./login_form";


import Grid from '@mui/material/Grid';

import './login.css';

const LoginPage = () => {
  return (
    <div className="login_main">
      <Grid container component="main" sx={{ height: '100vh',
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',//https://source.unsplash.com/random?wallpapers・../../../image/KODAWARIロゴ.png
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',//全体cover一部contain
            backgroundPosition: 'center', }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
          }}
        >
          
          <h1 className="shadow maintitle">Share Knowledge</h1>
          <img src="../../image/KODAWARIロゴ.png" alt="Your Image" style={{ width: '40%', height: 'auto', margin: '0'}} />
          <p className="make_text"style={{ margin: '0'}}>単語をみんなでシェア</p>
        </Grid>
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <div className="test">
          <h2 className="shadow">ログイン</h2>
          <LoginForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
