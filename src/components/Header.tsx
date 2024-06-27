import { Lobster } from "next/font/google";
import { Search } from "lucide-react";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex items-center justify-between py-16">
      <h1 className={`w-[200px] header-title ${lobster.className} text-4xl`}>FlavorShare</h1>
      <ul className="flex items-center gap-x-10 font-medium">
        <li>Homepage</li>
        <li>Categories</li>
        <li>Favorites</li>
        <li>About</li>
      </ul>
      <div className="w-[200px] flex items-center justify-end gap-x-4">
        <Search />
        <button className="font-medium">Search</button>
      </div>
    </header>
  )
}

export default Header;