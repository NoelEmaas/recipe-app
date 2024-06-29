import Link from "next/link"
import { Recipe } from "@/types/recipe.type"

const RecipeCard = (recipe: Recipe) => {
  return (
    <Link href={`/recipe/${recipe.id}`} className="sm:block flex gap-x-4 border p-4 rounded-xl sm:h-full h-[140px] items-center">
      <img src={recipe.image} alt="" className="border rounded-lg sm:mb-4 sm:w-full sm:h-[200px] w-[150px] h-full"/>
      <div>
        <h2 className="font-bold mb-2 line-clamp-1">{recipe.name}</h2>
        <p className="text-sm text-gray-600 sm:line-clamp-3 line-clamp-2 sm:mb-4">{recipe.description}</p>
      </div>
    </Link>
  )
}

export default RecipeCard
