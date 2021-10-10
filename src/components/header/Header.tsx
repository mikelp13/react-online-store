import React, { FC } from 'react';
import Burger from './burger/Burger';
import { useWindowWidth } from '@react-hook/window-size';
import HeaderStyled from './HeaderStyled';
import { Avatar, IconButton } from '@mui/material';
import CartLink from '../cart/cartLink/CartLink';

const Header: FC = () => {
  const onlyWidth = useWindowWidth();
  return (
    <HeaderStyled>
      <div className="container header-container">
        {onlyWidth > 767 && <p className="logo">MKstore</p>}
        <Burger />
        {onlyWidth < 768 && <p className="logo">MKstore</p>}
        <CartLink />
        <IconButton size="medium" edge="end" color="inherit">
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </div>
    </HeaderStyled>
  );
};

export default Header;

// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import Badge from '@mui/material/Badge'
// import MenuItem from '@mui/material/MenuItem'
// import Menu from '@mui/material/Menu'

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// import MoreIcon from '@mui/icons-material/MoreVert'
// import { Avatar } from '@mui/material'
// import Navigation from './navigation/Navigation'

// const Header: FC = () => {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//     React.useState<null | HTMLElement>(null)

//   const isMenuOpen = Boolean(anchorEl)
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

//   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//     handleMobileMenuClose()
//   }

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget)
//   }

//   const menuId = 'primary-search-account-menu'
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//     </Menu>
//   )

//   const mobileMenuId = 'primary-search-account-menu-mobile'
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 products" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <ShoppingCartIcon />
//           </Badge>
//         </IconButton>
//         <p>Shopping Cart</p>
//       </MenuItem>

//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <Avatar alt="User" src="/static/images/avatar/1.jpg" />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   )

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton> */}

//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             MK_STORE
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           <Navigation />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton
//               size="large"
//               aria-label="show 4 products"
//               color="inherit"
//             >
//               <Badge badgeContent={4} color="error">
//                 <ShoppingCartIcon />
//               </Badge>
//             </IconButton>
//             {/* =========== AccountCircle ==========*/}
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <Avatar alt="User" src="/static/images/avatar/1.jpg" />
//             </IconButton>
//           </Box>
//           {/* ===== menu button on mobile screens =====*/}
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   )
// }

// export default Header
