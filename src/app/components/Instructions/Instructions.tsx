import React from "react";

type Props = {
  instructions: RecipeStep[];
};

const Instructions = ({ instructions }: Props) => {
  return (
    <ol>
      {instructions.map((step) => (
        <li> {step.step}</li>
      ))}
    </ol>
  );
};

export default Instructions;
