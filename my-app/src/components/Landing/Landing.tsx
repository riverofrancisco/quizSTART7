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
import CardList from "../Categories/CardList";


const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [profileInfo, setProfileInfo] = useState<any | null>(null);

  //profileInfo
  const getProfileInfo = async () => {
    const info = await profile();
    setProfileInfo(info);
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
      ></Grid>
    </Grid>
  );
};

export default LandingPage;
