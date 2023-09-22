import { ReactNode } from "react";

export default function RecipeLayout ({children}: {children: ReactNode}){
  return (
    <div>
      <h1>Recipe</h1>
      {children}
    </div>
  )
}