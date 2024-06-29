"use client";

import { useState } from "react";
import { Lobster } from "next/font/google";
import { Search, Menu } from "lucide-react";
import { Collapsible } from "@/components";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const HamburgerIcon = ({ onClick }: { onClick: () => void}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onClick();
    setIsOpen(!isOpen);
  };

  return(  
    <button 
      onClick={handleClick} 
      className={`flex flex-col justify-center items-center mr-2 ${!isOpen && 'gap-y-[1px]'} lg:hidden`}
    >
      <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} />
      <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100' }`} />
      <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`} />
    </button>
  )
}

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <header className="animate-fade-down-enter lg:py-16 lg:border-0 border-b py-8 lg:mb-0 mb-10">
      <div className="flex items-center justify-between container mx-auto px-4">
        <h1 className={`w-[200px] ${lobster.className} lg:text-4xl text-3xl`}>FlavorShare</h1>
        <ul className="lg:flex hidden items-center gap-x-10 font-medium">
          <li>Homepage</li>
          <li>Recipes</li>
          <li>Categories</li>
          <li>Favorites</li>
        </ul>
        <div className="w-[200px] lg:flex hidden items-center justify-end gap-x-4">
          <Search />
          <button className="font-medium">Search</button>
        </div>
        <HamburgerIcon onClick={handleCollapsible}/>
        <Collapsible collapsed={isCollapsed}/>
      </div>
    </header>
  )
}

export default Header;