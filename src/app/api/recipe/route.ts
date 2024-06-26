import { NextResponse } from "next/server"
import { Recipe } from "@/types/recipe.type";

import FileUtility from "@/utils/fileUtility";

export async function GET () {
  const fileUtility = new FileUtility<Recipe>("recipe");
  const recipes = await fileUtility.read();

  return NextResponse.json(recipes);
}