import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Copyright = (props: any) => (
  <Typography variant="body1" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" component={RouterLink} to="/">
      MKstore
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
export default Copyright;
