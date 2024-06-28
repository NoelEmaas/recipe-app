import Link from "next/link"
import { Recipe } from "@/types/recipe.type"

const RecipeCard = (recipe: Recipe) => {
  return (
    <Link href={`/recipe/${recipe.id}`} className="border p-4 rounded-xl">
      <img src={recipe.image} alt="" className="border rounded-lg mb-4 w-full h-[200px]"/>
      <h2 className="font-bold mb-2 line-clamp-1">{recipe.name}</h2>
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{recipe.description}</p>
    </Link>
  )
}

export default RecipeCard
