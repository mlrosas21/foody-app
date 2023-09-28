import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  user: string;
  url: string;
  children?: ReactNode;
};

const SocialMedia = ({ user, url, children }: Props) => {
  return (
    <Box component={"span"} className={styles.socialMedia}>
      <Link href={url} className={styles.socialMedia} target="_blank">
        {children}
        <Typography>{user}</Typography>
      </Link>
    </Box>
  );
};

export default SocialMedia;
