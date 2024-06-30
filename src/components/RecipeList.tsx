import { Fragment } from "react";
import { Recipe } from "@/types/recipe.type";
import { Image } from 'lucide-react';
import Link from "next/link";

interface RecipeListProps {
  recipes: Recipe[];
  isPending: boolean;
}

const RecipeList = ({ recipes, isPending }: RecipeListProps) => {
  const RecipeCard = (recipe: Recipe) => {
    return (
      <Link href={`/recipe/${recipe.id}`} className="sm:block flex gap-x-4 border p-4 rounded-xl sm:h-full h-[140px] items-center group">
        <div className="border rounded-lg sm:mb-4 sm:w-full sm:h-[200px] w-[150px] h-full overflow-hidden sm:block hidden">
          <img src={recipe.image} alt="" className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"/>
        </div>
        <img src={recipe.image} alt="" className="border rounded-lg sm:mb-4 sm:w-full sm:h-[200px] w-[150px] h-full sm:hidden"/>
        <div>
          <h2 className="font-bold mb-2 line-clamp-2 group-hover:underline">{recipe.name}</h2>
          <p className="text-sm text-gray-600 sm:line-clamp-3 line-clamp-2 sm:mb-4">{recipe.description}</p>
        </div>
      </Link>
    )
  }

  const RecipeCardSkeleton = () => {
    return (
      <div className="sm:block flex gap-x-4 border p-4 rounded-xl sm:h-full h-[140px] items-center group">
        <div className="border rounded-lg sm:mb-4 sm:w-full sm:h-[200px] w-[150px] h-full overflow-hidden sm:flex hidden items-center justify-center animate-pulse">
          <Image color="#9CA3AF" className="w-[50px] h-[50px]" strokeWidth={1}/>
        </div>
        <div className="border rounded-lg sm:mb-4 sm:w-full sm:h-[200px] w-[150px] h-full sm:hidden flex items-center justify-center animate-pulse">
          <Image color="#9CA3AF" className="w-[50px] h-[50px]" strokeWidth={1}/>
        </div>
        <div className="sm:mb-4 flex flex-col sm:items-left justify-center w-full">
          <div className="bg-gray-300 h-4 w-[150px] rounded-lg animate-pulse mb-4"/>
          <div className="bg-gray-200 h-2 w-full rounded-lg animate-pulse mb-3"/>
          <div className="bg-gray-200 sm:block hidden h-2 w-full rounded-lg animate-pulse mb-3"/>
          <div className="bg-gray-200 h-2 w-full rounded-lg animate-pulse"/>
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
        {
          isPending ? (
            Array.from({ length: 12 }).map((_, index) => (
              <RecipeCardSkeleton key={index} />
            ))
          ) : (
            recipes.slice(0, 12).map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))
          )
        }
      </div>
      <div className="w-ful flex items-center justify-center my-10">
        <button className="bg-white px-4 py-3 border border-gray-300 mx-auto font-bold rounded-xl shadow-sm hover:bg-gray-50">
          Show More
        </button>
      </div>

    </Fragment>
  )
}

export default RecipeList
