import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Recipes",
    route: "/recipes",
  },
];

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display={'flex'} flexGrow={1} gap={3}>
        {links.map(({label, route}) => (
          <Link key={route} href={route}> {label} </Link>
          ))}
          </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
