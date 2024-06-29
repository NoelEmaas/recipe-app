import { Playfair_Display } from "next/font/google";
import { RecipeList } from "@/components"

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const RecipePage = () => {
  return (
    <main className="mx-auto">
      <div className="w-full h-fit relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-16 flex flex-col items-center gap-y-4 border">
          <h1 className={`text-5xl text-black font-bold text-white px-4 ${playfair_display.className}`}>Discover Recipes</h1>
          <p className="text-gray-700 px-4">Explore a wide variety of recipes from different categories</p>
          <input type="text" className="w-[600px] rounded-full px-6 py-4 mt-4 border border-gray-400" placeholder="Search recipes"/>
        </div>
        <img src="/images/recipe_background.jpg" alt="" className="h-[300px] w-full object-cover mb-20"/>
      </div>
      <div className="container mx-auto">
        <RecipeList />
      </div>
    </main>
  )
}

export default RecipePage
