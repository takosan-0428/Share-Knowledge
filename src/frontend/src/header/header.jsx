//App.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Header = () => {
  const navigate = useNavigate(); // useNavigateフックを使用してナビゲーションを行う

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8850/api/logout/", {
        method: "GET",
      });
      const jsonData = await response.json();
      console.log("Logout Response Data:", jsonData); // ログアウトのレスポンスの中身をログに出力
      // ログアウト後にリダイレクト
      navigate("/login"); // ログインページにリダイレクト
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div>
      <div className="header" role="presentation" onClick={handleClick}>
        <h1>Share Knowledge</h1>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" underline="hover" color="inherit"><PersonIcon></PersonIcon>個人</Link>
          <Link to="/group" underline="hover"><GroupsIcon></GroupsIcon>グループ</Link>
          </Breadcrumbs>
        <Button variant="contained" onClick={handleLogout}><LogoutIcon></LogoutIcon>ログアウト</Button>
      </div>
    </div>
    
  );
};

export default Header;
