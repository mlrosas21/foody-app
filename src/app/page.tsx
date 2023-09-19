import { getRandomRecipes } from '../../services/getData'
import styles from './page.module.css'
import Typography from '@mui/material/Typography'

export default async function Home() {
  const data = await getRandomRecipes(2)

  console.log(data);
  

  return (
    <main className={styles.main}>
      <Typography variant='h1'>Foody app</Typography>
    </main>
  )
}
