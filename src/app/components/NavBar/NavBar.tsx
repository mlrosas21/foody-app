import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import NavDropdownMenu from "./NavDropdownMenu/NavDropdownMenu";
import styles from "./styles.module.css";
import { staticLinks, menuLinks } from "utils/links";

const NavBar = () => {
  return (
    <Box className={styles.header}>
      <AppBar>
        <Toolbar>
          <Box className={styles.itemsContainer}>
            {staticLinks.map(({ label, route }) => (
              <Link key={route} href={route}>
                {label}
              </Link>
            ))}
            {menuLinks.map(({ label, param, items }) => (
              <NavDropdownMenu label={label} param={param} items={items} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default NavBar;
