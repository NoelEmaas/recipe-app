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
      <div className="logos group relative overflow-hidden whitespace-nowrap pb-20 sm:[mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max md:pr-5 pr-4">
          <div className='grid grid-cols-3 md:gap-x-8 gap-x-8'>
            {
              seasonal.slice(0, 3).map((recipe) => (
                <SeasonalCard key={recipe.id} {...recipe} />
              ))
            }
          </div>
        </div>

        {/* <!-- Duplicate of the above for infinite effect --> */}
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <div className='grid grid-cols-3 md:gap-x-8 gap-x-6'>
            {
              seasonal.slice(0, 3).map((recipe) => (
                <SeasonalCard key={recipe.id} {...recipe} />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Seasonal
