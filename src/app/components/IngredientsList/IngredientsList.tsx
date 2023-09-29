import React from "react";
import { getIngredientImage } from "services/ingredients";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import styles from "./styles.module.css";
import { Box, Checkbox, Typography } from "@mui/material";
import { neuton } from "@/app/fonts";

type Props = {
  ingredients: Ingredient[];
};

const IngredientsList = ({ ingredients }: Props) => {
  return (
    <Box className={styles.container}>
      <Typography variant="h5" className={neuton.className}>
        Ingredients
      </Typography>
      <Typography variant="caption">Keep track of your ingredients!</Typography>
      <List dense className={styles.ingredientsList}>
        {ingredients.map(async (ingredient) => {
          const url = await getIngredientImage(`SIZE_${250}`, ingredient.image);
          return (
            <ListItem
              key={ingredient.name}
              secondaryAction={<Checkbox />}
              disablePadding
            >
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
        })}
      </List>
    </Box>
  );
};

export default IngredientsList;
