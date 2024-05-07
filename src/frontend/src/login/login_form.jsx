//login_form.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import './login.css'

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Password:", password);
    try {
      const response = await fetch("http://localhost:8850/api/signin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
      const jsonData = await response.json();
      console.log("Response Data:", jsonData); // レスポンスの中身をログに出力
      setData(jsonData);
      if (jsonData  == "success") {
        // ログイン成功時にリダイレクト
        navigate("/"); // リダイレクト先のパスを指定
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
      sx={{
        width: 600,
        maxWidth: '100%',
      }}
      >
        <TextField 
        margin="normal"
        fullWidth 
        label="ユーザー名" 
        id="name" 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <TextField 
        margin="normal"
        fullWidth 
        label="パスワード" 
        id="password" 
        type="password" 
        value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Link to="/registration" className="link_bt">新規登録はこちら</Link>
        <Button
              type="submit"
              variant="contained"
            >
              ログイン
        </Button>
        {data && <div>{data.message}</div>}
        
        </Box>
      </Box>
      
    </form>
  );
};

export default LoginForm;
