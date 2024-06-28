"use client";

import { useParams } from "next/navigation"

import { Playfair_Display } from "next/font/google"
import { Recipe } from "@/types/recipe.type"
import { useEffect, useState } from "react"

import { Title } from "@/components"

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] })

const RecipeDetailsPage = () => {
  const [recipe, setRecipe] = useState<Partial<Recipe>>({});
  const { id } = useParams(); 

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`/api/recipe/${id}`);
      const data = await response.json();
      setRecipe(data);
    }

    fetchRecipe();
  }, [id]);

  return (
    <main className="container px-2 mx-auto mb-20">
      <h1 className={`text-5xl font-bold mb-6 ${playfair_display.className}`}>{ recipe.name }</h1>
      <hr className="mb-6 mx-auto"/>
      <p className="mb-6">{recipe.description}</p>
      <img src={recipe.image} className="rounded-lg border mb-8" alt="" />
      <Title title="Ingredients" />
      <ul className="list-disc ml-5 mb-10">
        {
          recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="mb-2">{ingredient}</li>
          ))
        }
      </ul>
      <Title title="Instructions" />
      <p>{ recipe.instructions }</p>
    </main>
  )
}

export default RecipeDetailsPage
