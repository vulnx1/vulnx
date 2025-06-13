import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontStyle: 'italic',
            fontWeight: 300,
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          About VulnX
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Our Mission
              </Typography>
              <Typography paragraph>
                VulnX is an innovative learning platform designed to make cybersecurity education accessible to everyone. 
                Inspired by platforms like W3Schools and GeeksforGeeks, we aim to provide comprehensive, practical, 
                and engaging content for both beginners and advanced learners.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                What We Offer
              </Typography>
              <Typography paragraph>
                • Interactive tutorials and hands-on exercises<br />
                • Real-world cybersecurity challenges<br />
                • Comprehensive learning paths<br />
                • Community-driven content<br />
                • Regular updates with the latest security trends
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Why Choose VulnX?
              </Typography>
              <Typography paragraph>
                Our platform combines the best aspects of traditional learning platforms with modern, 
                interactive features. We focus on practical, hands-on learning experiences that prepare 
                you for real-world cybersecurity challenges. Whether you're a beginner looking to start 
                your cybersecurity journey or an experienced professional seeking to enhance your skills, 
                VulnX provides the resources and community support you need to succeed.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 