import * as React from "react";
import { useNavigate } from "react-router-dom";

// material
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { login } from '../../redux/slices/app'

// material icons
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";


// configs
import { PATH_NAME } from "../../configs";
import { dispatch } from "../../redux/store";



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Built with MUI © "}
      {/* {'Copyright © '} */}
      {/* <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const bodyData = {
      email: data.get("email"),
      password: data.get("password")
    }

    // call api
    // try {
    //   const res = await httpRequest.post("/user/login", {
    //     ...bodyData
    //   })
    //   const accessToken = res.data?.accessToken;
    //   authStorage.setStorage(accessToken)
    //   navigate(PATH_NAME.ROOT)
    // } catch(error) {
    //   console.log('login error',error)
    // }

    dispatch(login({
      bodyData,
      navigate
    }))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <p style={{"margin":"0 auto", "fontSize":"13px"}}>email: tuyenvan@gmail.com</p>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <p style={{"margin":"0 auto", "fontSize":"13px"}}>password: 123456</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item style={{"marginLeft":"20px"}}>
              <Link href={PATH_NAME.REGISTER} variant="body2">
                {"Don't have an account? Sign Up."}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default Login;