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
import Avatar from "@mui/material/Avatar";
import picture from "../../data/ProfileIMG.png";

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

  if (profileInfo) {
    return (
      <Grid container direction="row" mt={3} bgcolor="#FAFAFA">
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border={2}
          width="100%"
        >
          <Grid
            item
            border={1}
            width="95%"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            py={1}
          >
            <div>
              <Typography
                variant="h6"
                gutterBottom
              >{`Hi, ${profileInfo.name}`}</Typography>
              <Typography variant="caption">
                Let's make this day productive
              </Typography>
            </div>
            <Avatar alt="PIC" src={picture} />
          </Grid>

          <Grid
            item
            border={1}
            width="95%"
            display="flex"
            justifyContent="space-evenly"
            py={1}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>{`Ranking`}</Typography>
              <Typography>{profileInfo.ranking}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>{`Points`}</Typography>
              <Typography>{profileInfo.points}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return <div>...</div>;
};

export default Profile;
