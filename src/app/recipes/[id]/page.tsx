import IngredientsList from "@/app/components/IngredientsList/IngredientsList";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { getRecipeInformation } from "services/recipes";
import styles from "./styles.module.css";
import SimilarRecipes from "@/app/components/SimilarRecipes/SimlarRecipes";
import { neuton } from "@/app/fonts";
import Link from "next/link";
import Instructions from "@/app/components/Instructions/Instructions";

const RecipePage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const recipe = await getRecipeInformation(id);

  const parser = require("html-react-parser");

  return (
    <Box component={"article"} className={styles.container}>
      <Typography variant="h2" className={`${neuton.className}`}>
        {recipe.title}
      </Typography>
      <Typography variant="subtitle2">Credits: {recipe.creditsText}</Typography>
      <ul>
        {recipe.occasions.map((occasion) => (
          <li key={occasion}>
            <Link href="/">{occasion}</Link>
          </li>
        ))}
      </ul>
      <Box display={"flex"} width={1}>
        <Box component={"section"} className={styles.recipe}>
          <div className={styles.imageContainer}>
            <Image
              alt={recipe.title}
              src={recipe.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className={styles.image}
            />
          </div>
          <Typography className={styles.summary}>{parser(recipe.summary)}</Typography>
          <Box className={styles.recipeDetails}>
            <IngredientsList ingredients={recipe.extendedIngredients} />
            <Instructions instructions={recipe.analyzedInstructions[0].steps} />
          </Box>
        </Box>
        <SimilarRecipes id={recipe.id} />
      </Box>
    </Box>
  );
};

export default RecipePage;
