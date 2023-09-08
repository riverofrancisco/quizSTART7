import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

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
    console.log(questions);
  }, []);

  if (questions.length > 0) {
    const options = ["option1", "option2", "option3", "option4"];
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        mt={3}
        border={2}
        sx={{ width: "100%" }}
      >
        <Grid
          item
          display="flex"
          flexDirection="column"
          sx={{ width: { xs: "90%", sm: "80%", md: "60%" } }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 10,
              my: 5,
              border: 1,
              borderRadius: "5%",
            }}
          >
            {questions[0].question}
          </Grid>

          <Grid
            item
            display="flex"
            justifyContent="space-around"
            border={3}
            borderRadius={3}
            py={2}
            my={1}
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                transitionDelay: "0.02s",
              },
            }}
          >
            <Typography>{questions[0].option1}</Typography>
          </Grid>
          <Grid
                       item
                       display="flex"
                       justifyContent="space-around"
                       border={3}
                       borderRadius={3}
                       py={2}
                       my={1}
                       sx={{
                         transition: "transform 0.3s ease-in-out",
                         "&:hover": {
                           transform: "scale(1.05)",
                           transitionDelay: "0.02s",
                         },
                       }}
          >
            <Typography>{questions[0].option2}</Typography>
          </Grid>
          <Grid
                       item
                       display="flex"
                       justifyContent="space-around"
                       border={3}
                       borderRadius={3}
                       py={2}
                       my={1}
                       sx={{
                         transition: "transform 0.3s ease-in-out",
                         "&:hover": {
                           transform: "scale(1.05)",
                           transitionDelay: "0.02s",
                         },
                       }}
          >
            <Typography>{questions[0].option3}</Typography>
          </Grid>
          <Grid
            item
            display="flex"
            justifyContent="space-around"
            border={3}
            borderRadius={3}
            py={2}
            my={1}
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                transitionDelay: "0.02s",
              },
            }}
          >
            <Typography>{questions[0].option4}</Typography>
          </Grid>
          <Button variant="contained">Next</Button>
        </Grid>

       
      </Grid>
    );
  }

  return <div>Loading...</div>;
};

export default QuestionsDash;
