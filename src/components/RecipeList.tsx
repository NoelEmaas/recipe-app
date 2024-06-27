"use client";


import { useState, useEffect, Fragment } from "react";
import { Playfair_Display } from "next/font/google";
import { Recipe } from "@/types/recipe.type";
import { RecipeCard } from "@/components";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

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
      <h1 className={`text-3xl font-bold mb-8 ${playfair_display.className}`}>Recipes</h1>
      <div className="grid grid-cols-4 gap-8">
        {
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))
        }
      </div>
    </Fragment>
  )
}

export default RecipeList
