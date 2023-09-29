import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { getIngredientImage } from "services/ingredients";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import styles from "./styles.module.css";

const Ingredient = async ({ ingredient }: { ingredient: Ingredient }) => {
  const url = await getIngredientImage(`SIZE_${250}`, ingredient.image);

  return (
    <ListItem key={ingredient.name} disablePadding>
      <ListItemIcon>
        <Checkbox edge={"end"} />
      </ListItemIcon>
      <ListItemAvatar>
        <Avatar
          alt={ingredient.name}
          src={url}
          className={styles.ingredientAvatar}
        />
      </ListItemAvatar>
      <ListItemText
        primary={`${ingredient.amount} ${ingredient.unit}`}
        secondary={` ${ingredient.name}`}
        className={styles.ingredientName}
      />
    </ListItem>
  );
};

export default Ingredient;
