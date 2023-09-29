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

const renderInlineList = (arr: string[], queryParam: string) => {
  return (
    <ul className={styles.inlineList}>
      {arr.map((element: string, index: number) => (
        <li key={element} className={styles.inlineList}>
          <Link href={{ pathname: '/recipes/search', query: { [queryParam]: `${element}` } }}>{element}</Link>
          {index < arr.length - 1 && <span> - </span>}
        </li>
      ))}
    </ul>
  );
};

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

      {recipe.dishTypes.length > 0 && <Box className={styles.occasions}>{renderInlineList(recipe.dishTypes, 'type')}</Box>}

      {/* {recipe.occasions.length > 0 && <Box className={styles.occasions}>{renderInlineList(recipe.occasions, )}</Box>} */}

      <Box className={styles.recipeInfo}>
        <Box component={"article"} className={styles.recipe}>
            <Image
              alt={recipe.title}
              src={recipe.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className={styles.image}
            />
          <Typography className={styles.summary}>
            {parser(recipe.summary)}
          </Typography>
          <Box component={"section"} className={styles.recipeDetails}>
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
