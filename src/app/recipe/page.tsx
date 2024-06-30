"use client";

import { Error } from "@/components";
import { Playfair_Display } from "next/font/google";
import { Recipe } from "@/types/recipe.type";
import { useFetchRecipes } from "@/hooks/recipe.hook";
import { useState, useEffect, Suspense } from "react";

import FilteredRecipeList from "./_components/FilteredRecipeList";
import Search from "./_components/Search";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const RecipePage = () => {
  const {
    data: recipes,
    isPending,
    error
  } = useFetchRecipes();

  const [recipeRange, setRecipeRange] = useState(12);
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (recipes) {
      setDisplayedRecipes(recipes.slice(0, recipeRange));
    }
  }, [recipes, recipeRange]);

  const handleShowMore = () => {
    if (recipes) {
      setRecipeRange(prevRange => prevRange + 12);
    }
  }

  if (error) {
    return <Error />
  }

  return (
    <main className="mx-auto">
      <div className="animate-fade-down-enter w-full h-fit relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-16 flex flex-col items-center gap-y-4 w-full px-6">
          <h1 className={`sm:text-5xl text-3xl text-black font-bold px-4 tYext-center ${playfair_display.className}`}>Discover Recipes</h1>
          <p className="text-gray-700 px-4 text-center">Explore a wide variety of recipes from different categories</p>
          <Suspense fallback={<div>Loading ...</div>}>
            <Search />
          </Suspense>
        </div>
        <img src="/images/recipe_background.jpg" alt="" className="h-[300px] w-full object-cover mb-14"/>
      </div>
      <div className="container mx-auto px-4">
        <Suspense>
          <FilteredRecipeList allRecipes={recipes!} displayedRecipes={displayedRecipes} isPending={isPending} />
        </Suspense>
        <div className="w-ful flex items-center justify-center my-10">
          <button 
            className="bg-white px-4 py-3 border border-gray-300 mx-auto font-bold rounded-xl shadow-sm hover:bg-gray-50"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      </div>
    </main>
  )
}

export default RecipePage;
