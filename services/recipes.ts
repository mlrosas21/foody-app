const API_URL = process.env.BASE_API_URL;

const authString = `apiKey=${process.env.API_KEY}`;

const fetchApi = async (endpoint: string, urlParams?: string) => {
  const url = `${API_URL}/${endpoint}?${authString}&${urlParams || ""}`;
  const response = await fetch(url);
  return await response.json();
};

export async function getRandomRecipes(number: number = 9): Promise<Recipe[]> {
  const params = new URLSearchParams();
  params.set("number", `${number}`);
  const {recipes} = await fetchApi(
    "/recipes/random",
    params.toString()
  );
  
  return recipes;
}

export async function getRecipeInformation(id: number): Promise<Recipe> {
  const recipe = await fetchApi(`/recipes/${id}/information`)
  
  return recipe
}
