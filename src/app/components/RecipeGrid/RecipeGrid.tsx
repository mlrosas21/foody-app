import React from "react";
import styles from "./styles.module.css";
import Grid from "@mui/material/Grid";
import RecipeCard from "./RecipeCard/RecipeCard";

type Props = {
  recipes: Recipe[];
};

const RecipeGrid = ({ recipes }: Props) => {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className={styles.grid}>
      {recipes.map((recipe) => (
        <Grid
          xs={2}
          sm={4}
          md={4}
          key={recipe.id}
          display={"flex"}
          justifyContent={"center"}
        >
          <RecipeCard key={recipe.id} recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeGrid;
