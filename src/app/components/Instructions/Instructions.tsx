import React from "react";
import styles from './styles.module.css'

type Props = {
  instructions: RecipeStep[];
};

const Instructions = ({ instructions }: Props) => {
  return (
    <ol>
      {instructions.map((step) => (
        <li className={styles.instructionItem}> {step.step}</li>
      ))}
    </ol>
  );
};

export default Instructions;
