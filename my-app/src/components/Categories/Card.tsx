import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { Adder } from "../../redux/portfolio/actions";
import Button from "@mui/material/Button";
import { profile } from "../../data/data";
import Profile from "../Profile/ProfileInfo";

interface CatProperties {
id: number;
title: string;
questions: number;
icon: string
}

const Card: React.FC<CatProperties> = ({id, title, questions, icon}) => {
  

  useEffect(() => {
  }, []);

  return (
    <Grid container direction="row" mt={3}  bgcolor="#FAFAFA" border={2} sx={{ width: {sx:"40%", md: "20%"}, m: 2} }>
      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
        border={1}
      >
        <img src={icon} alt="catICON" width="50%"/>
        </Grid>
        <Grid item >
        <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>{title}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>{`Questions`}</Typography>
              <Typography variant="caption">{questions}</Typography>
            </Box> 
        </Grid>
                   
      
    </Grid>
  );
};

export default Card;