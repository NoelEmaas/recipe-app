import { Recipe } from "@/types/recipe.type"

const SeasonalCard = (recipe: Recipe) => {
  return (
    <div className="flex items-center gap-x-6 border rounded-lg p-4 shadow-sm">
      <img src={recipe.image} alt="" className="border rounded-lg w-[100px] h-[100px]"/>
      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold line-clamp-1">{recipe.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
      </div>
    </div>
  )
}

export default SeasonalCard
