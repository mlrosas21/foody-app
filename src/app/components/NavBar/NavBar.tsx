import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import NavDropdownMenu from "../NavDropdownMenu/NavDropdownMenu";
import styles from "./styles.module.css";

const staticLinks = [
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

const menuLinks = [
  {
    label: "Dish types",
    param: "type",
    items: [
      {
        label: "Main course",
        value: "main course",
      },
      {
        label: "Side dish",
        value: "side dish"
      },
      {
        label: "Dessert",
        value: "dessert"
      }
    ],
  },
];

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
