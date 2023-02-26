import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Badge, Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStoreContext } from '../context/StoreContext';
import { useEffect, useState } from 'react';

const pages = [
  {
    title: 'products',
    path: '/product'
  },
  {
    title: 'about',
    path: '/about'
  },
  {
    title: 'contact',
    path: '/contact'
  }
];

const settingPages = [
  {
    title: 'login',
    path: '/login'
  },
  {
    title: 'register',
    path: '/register'
  }
]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const AppHeader = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const { basket } = useStoreContext();
  const [numOfBasketItem, setNumOfBasketItem] = useState<number>(0);

  useEffect(() => {
    const total: number = basket?.basketItemDtos.reduce((total, item) => {
      return total + item.productStockQuantity;
    }, 0) ?? 0;

    setNumOfBasketItem(total);
  }, [basket]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar disableGutters  >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 2
              }}
            >
              FASHION-STORE
            </Typography>
            <Switch {...label} defaultChecked />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={NavLink}
                to={page.path}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit" sx={{ my: 1 }}
              component={NavLink}
              to={"/basket"}>
              <Badge badgeContent={numOfBasketItem} color="error">
                <ShoppingCartIcon ></ShoppingCartIcon>
              </Badge>
            </IconButton>

            {settingPages.map((page) => (
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={NavLink}
                to={page.path}>
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Responsive design for mobile devices */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FASHION-STORE
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
