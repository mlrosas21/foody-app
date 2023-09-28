import { NextResponse, type NextRequest } from "next/server";

const API_URL = process.env.BASE_API_URL;
const authString = `apiKey=${process.env.API_KEY}`;

const fetchApi = async (endpoint: string, urlParams?: string) => {
  const url = `${API_URL}/${endpoint}?${authString}&${urlParams || ""}`;
  const response = await fetch(url);
  return await response.json();
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  if(!searchParams.has("number")) searchParams.set("number", '9')

  searchParams.set("addRecipeInformation", "true")

  const recipes = await fetchApi(
    `/recipes/complexSearch`,
    searchParams.toString()
  );

  return NextResponse.json({recipes});
}
