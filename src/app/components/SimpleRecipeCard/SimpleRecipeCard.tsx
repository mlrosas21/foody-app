"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";

const SimpleRecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const router = useRouter();
  const theme = useTheme();
  
  const handleClick = (id: number) => {
    router.push(`/recipes/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.secondary.light}}>
      <CardActionArea onClick={() => handleClick(recipe.id)}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Servings: {recipe.servings}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Preparation: {recipe.readyInMinutes} minutes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SimpleRecipeCard;
