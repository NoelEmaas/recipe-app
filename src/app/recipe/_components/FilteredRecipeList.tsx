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
  const category = searchParams.get('category')?.toString() ?? '';

  if (!allRecipes || !displayedRecipes) {
    return (
      <RecipeList 
        displayLoadingOnly={true}
      />
    )
  }

  if (search) {
    if (category) {
      return (
        <RecipeList 
          recipes={ 
            allRecipes.filter((recipe) => {
              return recipe.name.toLowerCase().includes(search.toLowerCase()) && recipe.category.toLowerCase() === category.toLowerCase();
            })
          }
          isPending={isPending}
        />
      )
    }

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

  if (category) {
    return (
      <RecipeList 
        recipes={ 
          allRecipes.filter((recipe) => {
            return recipe.category.toLowerCase() === category.toLowerCase();
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