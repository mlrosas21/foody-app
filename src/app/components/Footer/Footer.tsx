import Box from "@mui/material/Box";
import React from "react";
import styles from "./style.module.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { PERSONAL_DATA } from "utils/personal-info";

const Footer = () => {
  return (
    <Box component={"footer"} className={styles.footer}>
      {/* GitHub */}
      <SocialMedia {...PERSONAL_DATA.GITHUB}>
        <GitHubIcon />
      </SocialMedia>
      {/* LinkedIn */}
      <SocialMedia {...PERSONAL_DATA.LINKEDIN}>
        <LinkedInIcon />
      </SocialMedia>
    </Box>
  );
};

export default Footer;
