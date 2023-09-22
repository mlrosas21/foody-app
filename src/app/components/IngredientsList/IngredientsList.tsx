import React from 'react'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Image from "next/image";
import { getIngredientImage } from "services/ingredients";

type Props = {
  ingredients: Ingredient[]
}

const IngredientsList = ({ingredients}: Props) => {
  return (
    <ImageList sx={{ width: 250, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Ingedientes</ListSubheader>
          </ImageListItem>

          {ingredients.map(async (ingredient) => {
            const width = 250;
            const url = await getIngredientImage(
              `SIZE_${width}`,
              ingredient.image
            );

            return (
              <ImageListItem key={ingredient.id}>
                <Image
                  key={ingredient.id}
                  alt={ingredient.name}
                  src={url}
                  width={width}
                  height={200}
                />
                <ImageListItemBar
                  title={`${ingredient.amount} ${ingredient.unit}`}
                  subtitle={ingredient.name}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
  )
}

export default IngredientsList