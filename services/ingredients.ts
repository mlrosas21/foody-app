const API_URL = process.env.BASE_CDN_URL

const IMAGE_SIZES = {
  SIZE_100: '100x100',
  SIZE_250: '250x250',
  SIZE_500: '500x500',
};

export async function getIngredientImage(size: keyof typeof IMAGE_SIZES, url: string) {  
  const imageSizeValue = IMAGE_SIZES[size]

  return `${API_URL}/ingredients_${imageSizeValue}/${url}`
}