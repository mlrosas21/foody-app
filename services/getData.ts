const API_URL = process.env.BASE_API_URL

const authString = `apiKey=${process.env.API_KEY}`

const fetchApi = async (endpoint: string, urlParams?: string) => {
  const url = `${API_URL}/${endpoint}?${authString}&${urlParams || ""}`;
  const response = await fetch(url);
  return await response.json();
};

export async function getRandomRecipes(number?: number) {
  const params = new URLSearchParams()
  if(number) params.set('number', `${number}`)
  console.log(params.toString())
  return await fetchApi('/recipes/random', params.toString())
}