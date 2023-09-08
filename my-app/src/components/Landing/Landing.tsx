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
import CardList from "../Categories/CardList";

const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.value);
  const [profileInfo, setProfileInfo] = useState<any | null>(null);

  const getProfileInfo = async () => {
    const info = await profile();
    setProfileInfo(info);
  };

  const handleClick = () => {
    dispatch(Adder(1));
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <Grid container direction="row" mt={3} bgcolor="#FAFAFA">
      <Profile />
      <CardList />
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          height={"55vh"}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ py: { sx: 0, md: 20 } }}
        >
          <Box mt={3}>
            <Button
              variant="contained"
              endIcon={<KeyboardArrowRightRoundedIcon />}
              onClick={handleClick}
            >
              Add 1
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
