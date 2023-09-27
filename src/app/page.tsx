import { getRandomRecipes } from "../../services/recipes";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import RecipeGrid from "./components/RecipeGrid/RecipeGrid";

export default async function Home() {
  const recipes = await getRandomRecipes();

  return (
    <main className={styles.main}>
      <Typography variant="h1" className={styles.mainTitle}>Foody app</Typography>
      <RecipeGrid recipes={recipes}/>
    </main>
  );
}
