import { useSearchParams } from 'next/navigation';
import { RecipeList } from "@/components";
import { Recipe } from '@/types/recipe.type';

interface FilteredRecipeListProps {
  allRecipes: Recipe[];
  displayedRecipes: Recipe[];
  isPending: boolean;
}

const FilteredRecipeList = ({ allRecipes, displayedRecipes, isPending }: FilteredRecipeListProps) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toString() ?? '';

  if (search) {
    return (
      <RecipeList 
        recipes={ 
          allRecipes.filter((recipe) => {
            return recipe.name.toLowerCase().includes(search.toLowerCase());
          })
        }
        isPending={isPending}
      />
    )
  }

  return (
    <RecipeList 
      recipes={displayedRecipes}
      isPending={isPending}
    />
  )
}

export default FilteredRecipeList;