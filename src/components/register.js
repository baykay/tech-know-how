import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link, useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from './copyrights';
import useStyles from './styes';
import axios from 'axios';


const  RegsterView = () => {
  const classes = useStyles();
  const history = useHistory()

  const [form, setForm] = React.useState({email: "", firstname: "", lastname: "", phone: "", password: ""})

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post("http://66.228.56.214:3000/auth/register", {...form})
      .then(res => {
          console.log(res['data']['data'])
          history.push("/")
        })
      .catch(err => console.log(err))
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register as a new user
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={form.email}
              onChange={handleChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              value={form.firstname}
              required
              fullWidth
              label="First Name"
              name="firstname"
              autoComplete="firstname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={form.lastname}
              onChange={handleChange}
              fullWidth
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              value={form.phone}
              label="Phone"
              name="phone"
              autoComplete="tel"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={form.password}
              onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/">
                  {"Aleady have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default RegsterView;