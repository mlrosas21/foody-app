import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import { RECIPE_FLAGS } from "@/constants/recipe";
import { Button, CardActions } from "@mui/material";
import LikeButton from "../LikeButton/LikeButton";
import Link from "next/link";
import { neuton } from "@/app/fonts";
import CustomTextBadge from "../CustomTextBadge/CustomTextBadge";

type Props = {
  recipe: Recipe;
};

function renderBadges(flags: { [key: string]: boolean }) {
  const chips = [];

  for (const flag in flags) {
    if (flags[flag]) {
      chips.push(<CustomTextBadge text={RECIPE_FLAGS[flag]}/>);
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
            style={{ width: "100%", height: "auto"}}
            className={styles.cardImage}
          />
        <Box className={styles.cardBadges}>{renderBadges(recipeFlags)}</Box>
        <Box className={styles.cardTextSection}>
          <Typography variant="h4" component="div" className={`${styles.cardTitle} ${neuton.className}`}>
            {recipe.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.cardSecondaryText}
          >
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source: {recipe.sourceName}
            </a>
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={styles.cardButtons}>
        <LikeButton />
        <Link href={`/recipes/${recipe.id}`}>
          <Button>See more</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
