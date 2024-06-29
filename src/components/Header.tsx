import { Lobster } from "next/font/google";
import { Search } from "lucide-react";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <header className="animate-fade-down-enter flex items-center justify-between sm:py-16 py-12 container mx-auto px-4">
      <h1 className={`w-[200px] ${lobster.className} sm:text-4xl text-3xl`}>FlavorShare</h1>
      <ul className="lg:flex hidden items-center gap-x-10 font-medium">
        <li>Homepage</li>
        <li>Recipes</li>
        <li>Categories</li>
        <li>Favorites</li>
      </ul>
      <div className="w-[200px] flex items-center justify-end gap-x-4">
        <Search />
        <button className="font-medium">Search</button>
      </div>
    </header>
  )
}

export default Header;