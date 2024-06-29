"use client";

import { useState, useEffect, Fragment } from "react";
import { Recipe } from "@/types/recipe.type";
import { RecipeCard } from "@/components";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("/api/recipe");
      const data = await response.json();
      setRecipes(data);
    }

    fetchRecipes();
  }, []);

  return (
    <Fragment>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
        {
          recipes.slice(0, 12).map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))
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
