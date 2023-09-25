import styles from './styles.module.css'

const SimilarRecipes = ({id}: {id: number}) => {  
    console.log(id)
  return (
    <div className={styles.similarRecipes}>Similar Recipes</div>
  )
}

export default SimilarRecipes