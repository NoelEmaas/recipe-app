import { Recipe } from "@/types/recipe.type"

const SeasonalCard = (recipe: Recipe) => {
  return (
    <div className="flex lg:flex-row sm:flex-col flex-row lg:items-center sm:items-left items-center gap-x-6 border rounded-lg p-4 shadow-sm">
      <img src={recipe.image} alt="" className="border rounded-lg lg:w-[100px] sm:w-full w-[120px] sm:h-[100px] h-[80px] lg:mb-0 sm:mb-5 mb-0"/>
      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold line-clamp-1">{recipe.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
      </div>
    </div>
  )
}

export default SeasonalCard
