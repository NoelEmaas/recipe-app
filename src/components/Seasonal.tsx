"use client";

import { useState, useEffect, Fragment } from 'react'

import { Recipe } from '@/types/recipe.type'
import { SeasonalCard } from '@/components'

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
