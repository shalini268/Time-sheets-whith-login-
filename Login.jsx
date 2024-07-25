import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  TextField,
  Box
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import image from '../Photos/image.png';
import './Login.css';

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const EndAdornment = () => (
    <InputAdornment position="end">
      <IconButton onClick={() => setVisible(!visible)}>
        {visible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  const handleLogin = () => {
    if (email && password) {
      navigate('/navbar');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="container">
      <div className="text-content">
        <Typography
          variant="h4"
          sx={{
            letterSpacing: '1px',
            marginTop: '250px',
            marginLeft: '65px',
            fontFamily: 'Arial black',
            paddingLeft: '30px',
            width: '160%'
          }}
        >
          Welcome to Uynite...!
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            marginLeft: '100px',
            marginTop: '0px',
            width: '160%',
            letterSpacing: '1px',
            paddingTop: '20px'
          }}
        >
          UYNITE is more than just a social networking platform. Founded in January 2020 in Chicago, USA, and launched globally on Sep 9th, 2023, it's a visionary concept brought to life by a seasoned industry expert. Founded by Sreedhar Ambavaram, a former IBM executive with over two decades of experience in the software field, UYNITE is a testament to innovation, knowledge, and a passion for connecting people.
        </Typography>
      </div>
      <div className="box-content">
        <React.Fragment>
          <CssBaseline />
          <Box
            sx={{
              alignContent: 'center',
              width: '400px',
              height: '500px',
              bgcolor: 'White',
              border: '5px solid gray',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '20px',
              marginTop: '150px',
              marginRight: '140px',
              marginLeft: '550px',
              marginBottom: '80px'
            }}
          >
            <Avatar
              src={image}
              sx={{
                paddingTop: '10px',
                paddingBottom: '0px',
                width: '80px',
                height: '80px'
              }}
            />
            <Stack>
              <Typography variant="h6" sx={{ color: 'gray', paddingTop: '10px', fontFamily: '' }}>
                USER LOGIN
              </Typography>
            </Stack>
            <TextField
              placeholder="Email*"
              variant="outlined"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                paddingTop: '25px',
                paddingLeft: '25px',
                paddingRight: '25px',
                paddingBottom: '10px'
              }}
              InputProps={{
                sx: {
                  borderRadius: 60,
                  border: 1
                }
              }}
            />
            <TextField
              placeholder="Password*"
              variant="outlined"
              type={visible ? 'text' : 'password'}
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                paddingTop: '10px',
                paddingLeft: '25px',
                paddingRight: '25px',
                paddingBottom: '10px'
              }}
              InputProps={{
                endAdornment: <EndAdornment />,
                sx: {
                  borderRadius: 60,
                  border: 1
                }
              }}
            />
            <TextField
              placeholder="Enter Captcha"
              variant="outlined"
              fullWidth
              sx={{
                paddingTop: '10px',
                paddingLeft: '25px',
                paddingRight: '25px',
                paddingBottom: '10px'
              }}
              InputProps={{
                sx: {
                  borderRadius: 60,
                  border: 1
                }
              }}
            />
            <FormControl>
              <RadioGroup
                sx={{
                  paddingRight: '185px'
                }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="remember"
                name="radio-buttons-group"
              >
                <FormControlLabel value="remember" control={<Radio />} label="Remember Me" />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              sx={{
                width: '150px',
                height: '50px',
                color: 'black',
                borderRadius: 120,
                border: 1
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Login;
