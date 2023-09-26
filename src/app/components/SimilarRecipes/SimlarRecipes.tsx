import { getSimilarRecipes } from "services/recipes";
import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SimilarRecipes = async ({ id }: { id: number }) => {
  const recipes = await getSimilarRecipes(id);

  console.log(recipes);

  return (
    <Box component={"aside"} className={styles.similarRecipes}>
      <Typography gutterBottom variant="h5">
        Similar Recipes
      </Typography>
      {recipes.map((recipe) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
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
      ))}
    </Box>
  );
};

export default SimilarRecipes;
