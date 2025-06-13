import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: '#212121', // grey[900]
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            fontStyle: 'italic',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #fff, #e3f2fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          VulnX
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            sx={{
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about"
            sx={{
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 