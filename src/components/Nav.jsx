import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  AppBar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import { Cart } from './Cart/Cart'

export const Nav = () => {
  const styleMenu = {
    fontFamily: 'Bruno Ace',
    fontSize: '30px',
    p: '15px',
  }

  const styleButtonsMenu = {
    m: '10px',
    border: '4px',
    '&:hover': {
      backgroundColor: '#E6551C',
      border: '2px',
      color: 'black',
    },
  }

  const { cart } = useContext(CartContext)
  const [stateCart, setStateCart] = React.useState({
    right: false,
  })

  const cartQuantity = cart.reduce(
    (total, product) => total + product.quantityValue,
    0
  )

  const toggleDrawerCart = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setStateCart({ ...stateCart, [anchor]: open })
  }

  const [stateMenu, setStateMenu] = React.useState({
    top: false,
  })

  const toggleDrawerMenu = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setStateMenu({ ...stateMenu, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' ? '100%' : 'auto',
        height: '100vh',
        backgroundColor: 'black',
        p: '2px',
        color: 'lightgrey',
      }}
      role="presentation"
      onClick={toggleDrawerMenu(anchor, false)}
      onKeyDown={toggleDrawerMenu(anchor, false)}
    >
      {stateMenu[anchor] && (
        <IconButton onClick={toggleDrawerMenu(anchor, false)}>
          <CloseIcon sx={{ color: 'white', fontSize: '50px' }} />
        </IconButton>
      )}
      <Divider />
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '10%',
        }}
      >
        <ListItemButton component={NavLink} to="/" sx={styleButtonsMenu}>
          <Typography sx={styleMenu}>Home</Typography>
        </ListItemButton>
        <ListItemButton
          component={NavLink}
          to="/productos"
          sx={styleButtonsMenu}
        >
          <Typography sx={styleMenu}>Productos</Typography>
        </ListItemButton>
        <ListItemButton
          component={NavLink}
          to="/nosotros"
          sx={styleButtonsMenu}
        >
          <Typography sx={styleMenu}>Nosotros</Typography>
        </ListItemButton>
        <ListItemButton component={NavLink} to="/faq" sx={styleButtonsMenu}>
          <Typography sx={styleMenu}>Faqs</Typography>
        </ListItemButton>
      </List>
    </Box>
  )

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <Avatar
                component={NavLink}
                to="/"
                alt="Logo"
                src="/images/wlogo.png"
                variant="square"
                style={{ width: '50px', height: '50px' }}
              />
            </Grid>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Box>
                {['top'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <MenuIcon onClick={toggleDrawerMenu(anchor, true)}>
                      {anchor}
                    </MenuIcon>
                    <SwipeableDrawer
                      sx={{ display: { xs: 'flex', md: 'none' } }}
                      anchor={anchor}
                      open={stateMenu[anchor]}
                      onClose={toggleDrawerMenu(anchor, false)}
                      onOpen={toggleDrawerMenu(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </Box>
            </Box>

            <Grid sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button component={NavLink} to="/" color="inherit">
                Home
              </Button>
              <Button component={NavLink} to="/productos" color="inherit">
                Productos
              </Button>
              <Button component={NavLink} to="/nosotros" color="inherit">
                Nosotros
              </Button>
              <Button component={NavLink} to="/faq" color="inherit">
                Faqs
              </Button>
            </Grid>

            <Grid sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
              <Avatar
                component={NavLink}
                to="/"
                alt="Logo"
                src="/images/wlogo.png"
                variant="square"
                style={{ width: '50px', height: '50px' }}
              />
            </Grid>
            <Grid>
              <Button
                onClick={toggleDrawerCart('right', true)}
                variant="contained"
                size="large"
              >
                <Badge color="secondary" badgeContent={cartQuantity}>
                  <ShoppingCartIcon />
                </Badge>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {stateCart && (
        <Cart
          stateCart={stateCart}
          toggleDrawerCart={toggleDrawerCart}
          toggleDrawerMenu={toggleDrawerMenu}
        />
      )}
    </div>
  )
}
