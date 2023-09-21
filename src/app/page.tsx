import { getRandomRecipes } from "../../services/recipes";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Grid from "@mui/material/Grid";

export default async function Home() {
  const recipes = await getRandomRecipes();

  return (
    <main className={styles.main}>
      <Typography variant="h1">Foody app</Typography>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={styles.grid}
      >
        {recipes.map((recipe) => (
          <Grid xs={2} sm={4} md={4} key={recipe.id} display={"flex"} justifyContent={'center'}>
            <RecipeCard recipe={recipe} />
          </Grid> 
        ))}
      </Grid>
    </main>
  );
}
