import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { RECIPE_FLAGS } from "@/constants/recipe";

type Props = {
  recipe: Recipe;
};

function renderChips(flags: { [key: string]: boolean }) {
  const chips = [];

  for (const flag in flags) {
    if (flag) {
      chips.push(<Chip label={RECIPE_FLAGS[flag]} />);
    }
  }

  return chips;
}

const RecipeCard = ({ recipe }: Props) => {
  const recipeFlags = {
    glutenFree: recipe.glutenFree,
    vegan: recipe.vegan,
    vegetarian: recipe.vegetarian,
    dairyFree: recipe.dairyFree,
    veryPopular: recipe.veryPopular,
    sustainable: recipe.sustainable,
  };

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Box>{renderChips(recipeFlags)}</Box>
        <Typography variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Servings: {recipe.servings}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Health Score: {recipe.healthScore}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Likes: {recipe.aggregateLikes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price Per Serving: ${recipe.pricePerServing.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            Source: {recipe.sourceName}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
