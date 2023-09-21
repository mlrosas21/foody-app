'use client'

import { Button } from '@mui/material'
import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(prevState => !prevState)
  }
  
  return (
    <Button onClick={handleClick}> {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>} </Button>
  )
}

export default LikeButton