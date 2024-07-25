import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AvatarImage from '../Photos/image.png';
import Image1 from '../Photos/Image1.jpeg';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Timesheets from '../TimeSheets/Timesheets';
import Buttons from '../Buttons/Buttons';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const buttonStyles = {
    width: '150px',
    justifyContent: 'flex-start',
    border: '1px solid black',
    backgroundColor: 'white',
    color: 'black'
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: 'white', border: '2px solid grey' }}>
        <Toolbar>
          <Avatar sx={{ marginRight: '10px' }} src={AvatarImage} />
          <img
            src={Image1}
            alt="Profile"
            style={{
              width: 200,
              height: 45,
              marginRight: '10px',
            }}
          />
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <IconButton color="default">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="default">
              <PowerSettingsNewIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', mt: 10, ml: 2, marginBottom: '450px', position: 'relative' }}>
        <Stack direction="column" spacing={3} alignItems="flex-start">
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 45, height: 45 }} src={AvatarImage} />
            <Stack spacing={0.5}>
              <Typography variant="body1">Hi, Shalini!</Typography>
              <Typography variant="body2" color="primary">View my profile</Typography>
            </Stack>
            <IconButton sx={{ ml: 2 }}>
              <SettingsOutlinedIcon />
            </IconButton>
          </Stack>
          <Stack spacing={0.5}>
            <Buttons startIcon={<OtherHousesOutlinedIcon />} >Home</Buttons>
            <Buttons startIcon={<PaidOutlinedIcon />} >Salary</Buttons>
            <Buttons startIcon={<TimeToLeaveOutlinedIcon />} >Leave</Buttons>
            <Buttons startIcon={<ListAltOutlinedIcon />} >Tasks</Buttons>
            <Buttons startIcon={<FormatListNumberedOutlinedIcon />} >Attendance</Buttons>
            <Buttons startIcon={<ExplicitOutlinedIcon />} >Expense Claim</Buttons>
            <Buttons startIcon={<HelpCenterOutlinedIcon />} >Help</Buttons>
          </Stack>
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            left: 1200,
            top: 5,
            border: '2px solid grey',
            borderRadius: 1,
            height: 100,
            width: 200,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h6">Current Time</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography variant="body1">{formatTime(currentTime)}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          left: 350,
          top: 5,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 200px)',
          mt: 1
        }}
      >
        <Timesheets />
      </Box>
    </>
  );
};

export default Navbar;
