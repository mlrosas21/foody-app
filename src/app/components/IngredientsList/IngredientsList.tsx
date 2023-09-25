import React from "react";
import { getIngredientImage } from "services/ingredients";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import styles from './styles.module.css'

type Props = {
  ingredients: Ingredient[];
};

const IngredientsList = ({ ingredients }: Props) => {
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {ingredients.map(async (ingredient) => {
        const url = await getIngredientImage(`SIZE_${250}`, ingredient.image);
        return (
          <ListItem
            key={ingredient.name}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={ingredient.name}
                  src={url}
                  className={styles.ingredientAvatar}
                />
              </ListItemAvatar>
              <ListItemText primary={`${ingredient.amount} ${ingredient.unit}`} secondary={` ${ingredient.name}`} className={styles.ingredientName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default IngredientsList;
