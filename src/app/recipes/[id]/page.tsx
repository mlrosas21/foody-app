import IngredientsList from "@/app/components/IngredientsList/IngredientsList";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { getRecipeInformation } from "services/recipes";

const RecipePage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const recipe = await getRecipeInformation(id);

  return (
    <Box>
      <Typography variant="h2">{recipe.title}</Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Image alt={recipe.title} src={recipe.image} width={500} height={500}  />
        <IngredientsList ingredients={recipe.extendedIngredients} />
      </Box>
    </Box>
  );
};

export default RecipePage;
