"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { Recipe } from "@/types/recipe.type";
import { MoveRight } from 'lucide-react';

import Link from "next/link";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("/api/recipe");
      const data = await response.json();
      setRecipes(data);
    }

    fetchRecipes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRecipeIndex((prevIndex) => 
          (prevIndex + 1) % recipes.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [recipes.length]);

  const currentRecipe = recipes[currentRecipeIndex];

  return (
    <div className="animate-fade-up-enter w-full flex xl:h-[600px] lg:h-[400px] sm:h-[350px] h-[250px] items-center mb-10 rounded-xl p-0">
      <div className="pr-2 lg:w-[65%] w-full xl:h-[600px] lg:h-[400px] sm:h-[350px] h-[250px] relative rounded-xl">
        <img 
          src={currentRecipe?.image}
          className={`h-full w-full lg:rounded-l-xl rounded-xl duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          alt=""
        />
        <div className="lg:hidden block absolute bg-gradient-to-t top-0 from-gray-900 h-full w-[99%] rounded-b-xl"></div>
        <div className="lg:hidden block hidde absolute bottom-4 text-white px-6 pb-4">
          <h1 className={`xl:text-5xl lg:text-3xl text-2xl mb-4 line-clamp-1 ${playfair_display.className} transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentRecipe?.name}
          </h1>
          <p className="xl:line-clamp-none line-clamp-2 text-sm text-slate-200">
            {currentRecipe?.description}
          </p>
        </div>
      </div>
      <div className="lg:flex flex-col hidden p-10 h-full w-[35%] bg-slate-50 rounded-r-xl justify-center border">
        <h1 className={`xl:text-5xl lg:text-3xl text-xl mb-10 ${playfair_display.className} transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {currentRecipe?.name}
        </h1>
        <p className={`xl:line-clamp-none line-clamp-3 transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {currentRecipe?.description}
        </p>
        <Link 
          href={`/recipe/${currentRecipe?.id}`}
          className="bg-gray-50 font-bold mt-10 flex gap-x-3 hover:italic hover:gap-x-4 duration-100"
        >
          View Recipe
          <MoveRight size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Hero
