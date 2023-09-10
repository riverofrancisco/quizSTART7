import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Oval from "../../data/Oval.svg";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import {
  PointsAdder,
  answerAdder,
  nextQuestionChoser,
  reBoot,
} from "../../redux/quiz/actions";
import {
  isCorrectAnswer,
  isWrongAnswer,
  originalStyles,
  reorderArray,
} from "../../data/middlewares";
import { Options } from "../../data/middlewares";

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
  const currentQ = useAppSelector((state) => state.global.currentQuestion);
  const answersDone = useAppSelector((state) => state.global.answers);
  const points = useAppSelector((state) => state.global.points);
  const [answered, setAnswered] = useState(false);
  const [answeredItem, setAnsweredItem] = useState<HTMLElement | null>(null);
  const [options, setOptions] = useState<Options[]>([]);

  const correctAnswer = (isCorrect: string, id: string) => {
    if (answered) {
      window.alert("You have already answered this question.");
    } else {
      if (isCorrect === "yes") {
        console.log("Correct Answer");
        setAnswered(true);
        const element = document.getElementById(id);
        if (element) {
          setAnsweredItem(element);
          isCorrectAnswer(element);
        }
        dispatch(PointsAdder());
        dispatch(answerAdder());
        console.log(`Total Answers ${answersDone}`);
      } else {
        console.log(isCorrect);
        console.log("Wrong Answer");
        const element = document.getElementById(id);
        if (element) {
          setAnsweredItem(element);
          isWrongAnswer(element);
        }
        setAnswered(true);
        dispatch(answerAdder());
        console.log(`Total Answers ${answersDone}`);
      }
    }
  };

  const handleNext = () => {
    if (currentQ <= 3) {
      dispatch(nextQuestionChoser());
      console.log(currentQ);
      setAnswered(false);
      if (answeredItem) originalStyles(answeredItem);
    } else {
      window.alert(
        `You've done with this Category. You've scored ${points} points.`
      );
      dispatch(reBoot());
    }
  };

  useEffect(() => {
    console.log(questions);
    if (questions && currentQ >= 0 && currentQ < questions.length) {
      const prevOptions: Options[] = [
        { class: "yes", op: questions[currentQ].option1 },
        { class: "no", op: questions[currentQ].option2 },
        { class: "no", op: questions[currentQ].option3 },
        { class: "no", op: questions[currentQ].option4 },
      ];
      setOptions(reorderArray(prevOptions));
    }
  }, [questions, currentQ]);

  if (currentQ > 3) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Alert
          severity="success"
          sx={{
            width: "80%",
            mt: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AlertTitle>Congratulations!</AlertTitle>
          You've done with this Category! Your score is
          <strong> {points}</strong> points.
        </Alert>
        <NavLink to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <Button variant="contained" color="info" sx={{ my: 3, py: 1, borderRadius: 4  }}>
            Go to Home Page
          </Button>
        </NavLink>
      </Box>
    );
  } else if (questions.length > 0 && currentQ <= 3) {

    
   

    return (
      <Grid
        container
        bgcolor="white"
        justifyContent="center"
        alignItems="center"
        mt={3}
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
              borderRadius: 4,
              bgcolor: "#DCF8FF",
            }}
          >
            {questions[currentQ].question}
          </Grid>

          {options.length > 0 && options.map((option) => (
            <Grid
              item
              key={option.op}
              id={option.op}
              display="flex"
              justifyContent="space-around"
              border={1}
              borderColor="#737373"
              borderRadius={4}
              py={2}
              my={1}
              sx={{
                bgcolor: `white`,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  transitionDelay: "0.02s",
                },
              }}
              onClick={() => correctAnswer(option.class, option.op)}
            >
              {option.op}
            </Grid>
          ))}

          {answered ? (
            <Button
              variant="contained"
              sx={{ my: 3, py: 1, borderRadius: 4 }}
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button variant="contained" disabled sx={{ my: 3, py: 1, borderRadius: 4  }}>
              Next
            </Button>
          )}
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Alert
          severity="info"
          sx={{
            width: "80%",
            mt: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AlertTitle>Loading...</AlertTitle>
        </Alert>
        <NavLink to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <Button variant="contained" color="info" sx={{ my: 3, py: 1, borderRadius: 4  }}>
            Go to Home Page
          </Button>
        </NavLink>
      </Box>
    );
  }
};

export default QuestionsDash;
