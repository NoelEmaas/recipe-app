"use client";

import { useState, useEffect, Fragment } from 'react'
import { Playfair_Display } from 'next/font/google'

import { Recipe } from '@/types/recipe.type'
import { SeasonalCard } from '@/components'

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const Seasonal = () => {
  const [seasonal, setSeasonal] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchSeasonal = async () => {
      const response = await fetch("/api/recipe");
      const data = await response.json();
      setSeasonal(data);
    }

    fetchSeasonal();
  }, []);
  
  return (
    <Fragment>
      <h1 className={`text-3xl font-bold mb-8 ${playfair_display.className}`}>Perfect for this Season</h1>
      <div className="grid grid-cols-3 gap-8 mb-20">
        {
          seasonal.slice(0, 3).map((recipe) => (
            <SeasonalCard key={recipe.id} {...recipe} />
          ))
        }
      </div>
    </Fragment>
  )
}

export default Seasonal
