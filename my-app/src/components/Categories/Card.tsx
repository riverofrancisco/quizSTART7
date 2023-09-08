import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import Button from "@mui/material/Button";
import { profile } from "../../data/data";
import Profile from "../Profile/ProfileInfo";
import Paper from "@mui/material/Paper";

import { questions as getQuestionCategory } from "../../data/data";
import { QuestionsUpdater } from "../../redux/quiz/actions";

interface CatProperties {
  ID: number;
  title: string;
  questions: number;
  icon: string;
}

const Card: React.FC<CatProperties> = ({ ID, title, questions, icon }) => {
  const dispatch = useAppDispatch();

  //questions by categorie
  const getQuestionsInfo = async (id: number) => {
    const newID = id.toString()
    const info = await getQuestionCategory(newID);
    dispatch(QuestionsUpdater(info));
  };

  //Select Category
  const handleClick = (id: number) => {
    getQuestionsInfo(id);
  };
  
  
  
  useEffect(() => {}, []);

  return (
    <Grid
      container
      flexDirection="row"
      mt={3}
      border={2}
      sx={{ width: { xs: "40%", md: "30%" }, m: 2 }}
    >
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        border={1}
        pl="8%"
        onClick={() => {handleClick(ID)}}
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            transitionDelay: "0.02s",
          },
        }}
        
      >
        <NavLink to={`/${ID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <img src={icon} alt="catICON" width="60%" />
        </Box>

        <Paper
          elevation={12}
          sx={{
            bgcolor: "white",
            borderRadius: "10%",
            mt: "-45%",
            ml: "-5%",
            pt: "55%",
            pl: "5%",
          }}
        >
          <Typography gutterBottom>{title}</Typography>

          <Box display="flex">
            <Typography
              variant="caption"
              gutterBottom
            >{`${questions} Questions.`}</Typography>
          </Box>
        </Paper>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default Card;
