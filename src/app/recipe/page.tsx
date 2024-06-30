"use client";

import { Playfair_Display } from "next/font/google";
import { RecipeList, Seasonal } from "@/components"
import { useFetchRecipes } from "@/hooks/recipe.hook";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const RecipePage = () => {
  const {
    data,
    isPending,
    error
  } = useFetchRecipes();

  return (
    <main className="mx-auto">
      <div className="animate-fade-down-enter w-full h-fit relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-16 flex flex-col items-center gap-y-4 w-full px-6">
          <h1 className={`sm:text-5xl text-3xl text-black font-bold px-4 tYext-center ${playfair_display.className}`}>Discover Recipes</h1>
          <p className="text-gray-700 px-4 text-center">Explore a wide variety of recipes from different categories</p>
          <input type="text" className="sm:w-[600px] w-full rounded-full px-6 py-4 mt-4 border border-gray-400" placeholder="Search recipes"/>
        </div>
        <img src="/images/recipe_background.jpg" alt="" className="h-[300px] w-full object-cover mb-14"/>
      </div>
      <div className="container mx-auto px-4">
        <RecipeList 
          recipes={ data! }
          isPending={ isPending }
        />
      </div>
    </main>
  )
}

export default RecipePage
