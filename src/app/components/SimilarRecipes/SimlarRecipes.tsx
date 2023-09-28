import { getSimilarRecipes } from "services/recipes";
import styles from "./styles.module.css";
import Typography from "@mui/material/Typography";
import SimpleRecipeCard from "../SimpleRecipeCard/SimpleRecipeCard";
import Paper from "@mui/material/Paper";

const SimilarRecipes = async ({ id }: { id: number }) => {
  const recipes = await getSimilarRecipes(id);

  return (
    <Paper component={"aside"} className={styles.similarRecipes}>
      <Typography gutterBottom variant="h5">
        Similar Recipes
      </Typography>
      {recipes.map((recipe) => (
        <SimpleRecipeCard recipe={recipe} />
      ))}
    </Paper>
  );
};

export default SimilarRecipes;
