import { getSimilarRecipes } from "services/recipes";
import styles from "./styles.module.css";
import Typography from "@mui/material/Typography";
import SimpleRecipeCard from "../SimpleRecipeCard/SimpleRecipeCard";
import Paper from "@mui/material/Paper";
import { neuton } from "@/app/fonts";

const SimilarRecipes = async ({ id }: { id: number }) => {
  const recipes = await getSimilarRecipes(id);

  return (
    <Paper
      component={"aside"}
      className={styles.similarRecipes}
      sx={{ bgcolor: "primary.light" }}
    >
      <Typography gutterBottom variant="h5" className={neuton.className}>
        Similar Recipes
      </Typography>
      {recipes.map((recipe) => (
        <SimpleRecipeCard recipe={recipe} />
      ))}
    </Paper>
  );
};

export default SimilarRecipes;
