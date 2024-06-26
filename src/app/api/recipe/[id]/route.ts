import { NextResponse } from "next/server"
import { Recipe } from "@/types/recipe.type";

import FileUtility from "@/utils/fileUtility";

export async function GET (request: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  const fileUtility = new FileUtility<Recipe>("recipe");
  const recipes = await fileUtility.read();
  const recipe = recipes.find((recipe: Recipe) => recipe.id === Number(id));

  if (!recipe) {
    return NextResponse.json(
      { error: "Recipe not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(recipe);
}