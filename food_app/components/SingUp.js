import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "./copyright";
import axios from "axios";
import Input from "./reuseable/input";

export default function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const registerUser = () => {
    axios.post("http://localhost:4000/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
    });
    if (response.status === 200) {
      router.push("/");
    }
  };

  React.useEffect(() => {}, []);

  return (
    <Container component='main' maxWidth='xs'>
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
          <LockIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Input
            id='firstName'
            label='First Name'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete='firstName'
          />
          <Input
            id='lastName'
            label='Last Name'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete='lastName'
          />
          <Input
            id='email'
            label='Email'
            name='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
          />
          <Input
            id='password'
            label='Password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='password'
          />
          <Input
            id='role'
            label='Role'
            name='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
            autoComplete='role'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={registerUser}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
