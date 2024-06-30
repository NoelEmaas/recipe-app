"use client";

import { 
  Categories,
  Hero, 
  Error,
  RecipeList,
  Seasonal,
  Title
} from "@/components";

import { useFetchRecipes } from "@/hooks/recipe.hook";

const Home = () => {
  const { data, isPending, error } = useFetchRecipes();
  
  if (error) {
    return <Error />
  }

  return (
    <main >
      <div className="container mx-auto px-4">
        <Hero 
          recipes={ data! } 
          isPending={ isPending }
        />
        <Title title="Perfect for this Season" />
        <Seasonal 
          recipes={ data! } 
          isPending={ isPending }
        />
        <Title title="Categories" />
        <Categories />
        <Title title="Discover Recipes" />
        <RecipeList 
          recipes={ data! } 
          isPending={ isPending }
        />
      </div>
    </main>
  );
}

export default Home;
