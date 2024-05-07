// group/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import '../App.css';
import Button from '@mui/material/Button';
import Header from '../header/header';

const Group = () => {
  return (
    <div className="main_div">
      <Header />
      <div className="sub_div">
      <h2>グループ</h2>
      <Box sx={{ flexGrow: 1 }} className="Box_line">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ul className="index_ul">
                <li><Link to="/">
                  <h3>株式会社KODAWARI</h3>
                  <div>メンバー:Aさん,Bさん,Cさん</div>
                </Link></li>
                <li><Link to="/">
                  <h3>アクティブ</h3>
                  <div>メンバー:Aさん,Bさん,Cさん</div>
                </Link></li>
                <li><Link to="/">
                  <h3>被害者の会</h3>
                  <div>メンバー:Aさん,Bさん,Cさん</div>
                </Link></li>
            </ul>
            </Grid>
            <Grid item xs={4}>
              <Link to="/group/create"><Button variant="outlined"><AddCircleOutlineIcon/>グループ作成</Button></Link>
            </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  );
};

export default Group;

