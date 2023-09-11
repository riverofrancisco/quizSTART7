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
import Avatar from "@mui/material/Avatar";
import picture from "../../data/ProfileIMG.png";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  const [profileInfo, setProfileInfo] = useState<any | null>(null);

  const getProfileInfo = async () => {
    const info = await profile();
    setProfileInfo(info);
  };

  const handleClick = () => {};

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
          width="100%"
        >
          <Grid
            item
            width="95%"
            py={1}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
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
            width="95%"
            display="flex"
            justifyContent="space-evenly"
            py={1}
          >
            <Paper
              elevation={12}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                bgcolor: "white",
                borderRadius: 2,
                py: 1,
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography>{`Ranking`}</Typography>
                <Typography
                  sx={{
                    color: "#3EB8D4",
                    fontWeight: 700,
                  }}
                >
                  {profileInfo.ranking}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography>{`Points`}</Typography>
                <Typography
                  sx={{
                    color: "#3EB8D4",
                    fontWeight: 700,
                  }}
                >
                  {profileInfo.points}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return         <Alert
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
</Alert>;
};

export default Profile;
