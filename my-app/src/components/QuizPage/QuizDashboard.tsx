import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

interface QuestionProperties {
  id: number;
  category: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

const QuestionsDash: React.FC = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.global.questions);


  useEffect(() => {
    console.log(questions)
  }, []);

  if(questions.length > 0){
    return (

        <Grid
            container
            flexDirection="column"
            mt={3}
            border={2}
            sx={{ width: { xs: "40%", md: "30%" }, m: 2 }}
          >
      
          <Grid item>
              {questions[0].question}
          </Grid>
      
            <Grid
              item
              display="flex"
              flexDirection="column"
              justifyContent="center"
              border={1}
              pl="8%"
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  transitionDelay: "0.02s",
                },
              }}
            >
         
            </Grid>
          </Grid>
        ); 
  }

  return (
    <div>Loading...</div>
  )
  
};

export default QuestionsDash;
