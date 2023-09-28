import { getSimilarRecipes } from "services/recipes";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleRecipeCard from "../SimpleRecipeCard/SimpleRecipeCard";

const SimilarRecipes = async ({ id }: { id: number }) => {
  const recipes = await getSimilarRecipes(id);

  return (
    <Box component={"aside"} className={styles.similarRecipes}>
      <Typography gutterBottom variant="h5">
        Similar Recipes
      </Typography>
      {recipes.map((recipe) => (
        <SimpleRecipeCard recipe={recipe} />
      ))}
    </Box>
  );
};

export default SimilarRecipes;
