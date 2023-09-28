"use client";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import styles from "./styles.module.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from "next/link";

const NavDropdownMenu = ({
  label,
  param,
  items,
}: {
  label: string;
  param: string;
  items: { label: string; value: string }[];
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box component="span" onClick={handleClick} className={styles.dropdown}>
        {label}
        <ArrowDropDownIcon />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        {items.map((item) => (
          <Link href={{ pathname: '/recipes/search', query: { [param]: `${item.value}` } }}>
          <MenuItem onClick={handleClose}>{item.label}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default NavDropdownMenu;
