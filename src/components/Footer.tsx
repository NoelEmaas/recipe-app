import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F0F0] border-t pt-14">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-4xl mb-4 ${lobster.className}`}>FlavorShare</h1>
            <p className="text-gray-700 w-[600px]">
              "Your ultimate destination for culinary exploration and creativity. 
              Discover a vast array of recipes from everyday meals to gourmet delights, curated by food lovers worldwide. 
              Browse by cuisine, ingredient, or dietary preference, and find your next favorite dish."
            </p>
          </div>
          <div className="flex items-center gap-x-28">
            <div>
              <h2 className="font-medium mb-4">FlavorShare</h2>
              <ul className="text-gray-700 flex flex-col gap-y-2">
                <li>Homepage</li>
                <li>Categories</li>
                <li>Favorites</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium mb-4">Legal</h2>
              <ul className="text-gray-700 flex flex-col gap-y-2">
                <li>Terms</li>
                <li>Conditions</li>
                <li>Cookies</li>
                <li>Copyright</li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium mb-4">Follow</h2>
              <ul className="text-gray-700 flex flex-col gap-y-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t mt-16 py-5">
          <p className="text-gray-700 text-sm">&copy; 2024 FlavorShare - All Rights Reserved</p>
          <ul className="flex items-center gap-x-8 text-gray-700">
            <li><Facebook className='w-5 h-5'/></li>
            <li><Instagram className='w-5 h-5'/></li>
            <li><Twitter className='w-5 h-5'/></li>
            <li><Youtube className='w-5 h-5'/></li>
          </ul>
        </div>
        <div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
