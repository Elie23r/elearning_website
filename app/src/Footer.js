import React, { useState, useEffect } from 'react';
import { Box, Grid, Snackbar, TextField, Typography, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 0),
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
    margin: theme.spacing(0, 0),
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: theme.spacing(2),
    width: '100%',
    maxWidth: '500px',
  },
  button: {
    margin: theme.spacing(2),
    width: '100%',
    maxWidth: '500px',
  },
}));

function Footer() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, [showSuccess, showError]);
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email && message) {
        // Send email
        setShowSuccess(true);
        setEmail('');
        setMessage('');
      } else {
        setShowError(true);
      }
    };
  
    return (
      <Box className={classes.root}>
        <Grid container justify="left" alignItems="left">
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="secondary" gutterBottom>
              My E-Learning Website
            </Typography>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container justify="space-between" alignItems="left">
              <Grid item>
                <Typography variant="h6" color="secondary" gutterBottom>
                  Legal
                </Typography>
                <Link href="/legal-mentions" className={classes.link}>
                  Legal Mentions
                </Link>
              </Grid>
              </Grid>
              </Grid>
              <Grid item xs={12} sm={3}>
            <Grid container justify="space-between" alignItems="left">
              <Grid item>
                <Typography variant="h6" color="secondary" gutterBottom>
                  Contact
                </Typography>
                <Link href="/contact" className={classes.link}>
                  Contact us
                </Link>
              </Grid>
              </Grid>
          </Grid>
        </Grid>
        
      </Box>
    );
  }

export default Footer;