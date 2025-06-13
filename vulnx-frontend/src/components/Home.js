import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Paper, IconButton, Grid, Alert } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';

const Home = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState(null);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setError(''); // Clear any previous errors
    
    // Validate email as user types
    if (newEmail && !validateEmail(newEmail)) {
      setError('Please enter a valid email address');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/subscribe/', { email });
      setResponse(response);
      setStatus('success');
      setEmail('');
      setError('');
      console.log('Subscription successful:', response.data);
    } catch (error) {
      console.error('Subscription error:', error.response?.data || error.message);
      setStatus('error');
      setError(error.response?.data?.error || 'Failed to subscribe. Please try again.');
    }
  };

  const socialLinks = {
    instagram: 'https://instagram.com/your-handle',
    twitter: 'https://twitter.com/your-handle',
    youtube: 'https://youtube.com/your-channel'
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#764ba2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '4.5rem',
            fontStyle: 'italic',
            fontWeight: 300,
            mb: 2,
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            letterSpacing: '2px',
            background: 'linear-gradient(45deg, #fff, #e3f2fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          VulnX
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 300,
            opacity: 0.9,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            mb: 4,
            animation: 'pulse 3s ease-in-out infinite',
          }}
        >
          Launching Soon
        </Typography>

        {/* Social Media Links */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#E1306C',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#1DA1F2',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <TwitterIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#FF0000',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <YouTubeIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 2,
            maxWidth: 500,
            mx: 'auto',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Subscribe for Launch Updates
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              error={!!error}
              helperText={error}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: error ? 'error.main' : 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: error ? 'error.main' : 'rgba(255, 255, 255, 0.5)',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: error ? 'error.main' : 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!!error || !email}
              sx={{
                background: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease',
                },
                '&.Mui-disabled': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              Subscribe
            </Button>
          </form>
          {status === 'success' && (
            <Alert severity="success" sx={{ mt: 2, bgcolor: 'rgba(46, 125, 50, 0.1)' }}>
              Thank you for subscribing! {response?.data?.welcome_email_sent ? 'A welcome email has been sent to your inbox.' : 'Please check your email for confirmation.'}
            </Alert>
          )}
          {status === 'error' && (
            <Alert severity="error" sx={{ mt: 2, bgcolor: 'rgba(211, 47, 47, 0.1)' }}>
              {error || 'Something went wrong. Please try again.'}
            </Alert>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Home; 