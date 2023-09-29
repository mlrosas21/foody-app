import React from "react";
import List from "@mui/material/List";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import { neuton } from "@/app/fonts";
import Typography from "@mui/material/Typography";
import Ingredient from "./IngredientItem/Ingredient";

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
        {ingredients.map(async (ingredient) => (
          <Ingredient key={ingredient.id} ingredient={ingredient} />
        ))}
      </List>
    </Box>
  );
};

export default IngredientsList;
