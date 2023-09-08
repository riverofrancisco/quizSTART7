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
import { profile } from "../../data";
import picture from '../../data/ProfileIMG.png'

const Profile: React.FC = () => {
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

  if(profileInfo){
    return (
      <Grid container direction="row" mt={3} bgcolor="#FAFAFA">
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border={2}
        >
          <Grid item border={1} width="95%" display="flex" justifyContent="space-around">
          <Typography>{`Hi, ${profileInfo.name}`}</Typography>
          <img src={picture} alt="PIC"/>
          </Grid>
          
          <Grid item border={1} width="95%" display="flex" justifyContent="space-evenly">
            <Box>
              <Typography>{`Ranking`}</Typography>
              <Typography>{profileInfo.ranking}</Typography>
            </Box>
            <Box>
              <Typography>{`Points`}</Typography>
              <Typography>{profileInfo.points}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <div>...</div>
  )
};

export default Profile;
