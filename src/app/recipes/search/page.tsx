"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import Grid from "@mui/material/Grid";

const RecipeSearchPage = async () => {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/recipes/?" + searchParams.toString());
      const result = await data.json();
      setRecipes(result.recipes.results);
      console.log(result.recipes.results);
    };

    fetchData();
  }, []);

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {recipes.length > 0 &&
        recipes.map((recipe) => (
          <Grid
            item
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

export default RecipeSearchPage;
