"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RecipeGrid from "@/app/components/RecipeGrid/RecipeGrid";

const RecipeSearchPage = async () => {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/recipes/?" + searchParams.toString());
      const result = await data.json();
      setRecipes(result.recipes.results);
    };

    fetchData();
  }, []);

  return (
    <RecipeGrid recipes={recipes} />
  );
};

export default RecipeSearchPage;
