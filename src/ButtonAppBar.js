import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pricing
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}