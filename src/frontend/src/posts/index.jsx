// posts/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import '../App.css';
import Button from '@mui/material/Button';

import Header from '../header/header';


const Post = () => {
    return(
        <div className="main_div">
          <Header />
        <div className="sub_div">
        <h2>単語帳一覧</h2>
        <Box sx={{ flexGrow: 1 }} className="Box_line">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ul className="index_ul">
                <li><Link to="/show">
                  <h3>ネットワーク</h3>
                  <div>更新日:00:00:00</div>
                  <div>作成日:00:00:00</div>
                </Link></li>
                <li><Link to="/show">
                  <h3>データベース</h3>
                  <div>更新日:00:00:00</div>
                  <div>作成日:00:00:00</div>
                </Link></li>
                <li><Link to="/show">
                  <h3>セキュリティ</h3>
                  <div>更新日:00:00:00</div>
                  <div>作成日:00:00:00</div>
                </Link></li>
            </ul>
            </Grid>
            <Grid item xs={4}>
              <Link to="/create">
                <Fab variant="extended" color="primary">
                  <AddIcon sx={{ mr: 1 }} />
                  単語帳作成
                </Fab>
              </Link>
            </Grid>
        </Grid>
      </Box>
      </div>
        
      </div>
    );
};


export default Post;