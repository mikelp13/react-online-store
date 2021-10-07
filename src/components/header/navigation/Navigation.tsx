import React, { FC } from 'react';
import mainRoutes from '../../../routes/mainRoutes';
import NavigationListItem from './NavigationListItem';
import NavigationList from './NavigationStyled';

type NavProps = {
  onClick: () => void;
};

const Navigation: FC<NavProps> = ({ onClick }) => {
  const isAuth = true;
  return (
    <NavigationList>
      {mainRoutes.map(route => (
        <NavigationListItem
          {...route}
          isAuth={isAuth}
          key={route.path}
          onClick={onClick}
        />
      ))}
    </NavigationList>
  );
};

export default Navigation;

// import { Tab, Tabs } from '@mui/material'
// import { Box } from '@mui/system'
// <Box>
//   <Tabs textColor="secondary" indicatorColor="primary">
//     <Tab label="Home" />
//     <Tab label="Shop" />
//     <Tab label="Dashboard" />
//     <Tab label="Login" />
//     <Tab label="Sign Up" />
//   </Tabs>
//   {/* <Tabs>
//     <Tab label="Shop" />
//   </Tabs>
//   <Tabs>
//     <Tab label="Dashboard" />
//   </Tabs>
//   <Tabs>
//     <Tab label="Login" />
//   </Tabs>
//   <Tabs>
//     <Tab label="Sign Up" />
//   </Tabs> */}
// </Box>
