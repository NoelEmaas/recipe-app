import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="w-full flex xl:h-[600px] lg:h-[400px] sm:h-[350px] h-[250px] items-center mb-10 rounded-xl p-0">
      <div className="pr-2 lg:w-[65%] w-full xl:h-[600px] lg:h-[400px] sm:h-[350px] h-[250px] relative rounded-xl">
        <img 
          src="https://eatlikepinoy.com/wp-content/uploads/2021/02/Creamy-Pininyahang-Manok.jpg" 
          className="h-full w-full lg:rounded-l-xl rounded-xl"
          alt=""
        />
        <div className="lg:hidden block absolute bg-gradient-to-t top-0 from-gray-900 h-full w-[99%] rounded-b-xl"></div>
        <div className="lg:hidden block hidde absolute bottom-4 text-white px-6 pb-4">
          <h1 className={`xl:text-5xl lg:text-3xl text-2xl mb-4 line-clamp-1 ${playfair_display.className}`}>Malapot na Pininyahang Manok</h1>
          <p className="xl:line-clamp-none line-clamp-2 text-sm text-slate-200">
            A creamy Filipino chicken dish that combines the sweetness of pineapple with the richness of evaporated milk. 
            This comforting meal features tender chicken and a medley of colorful vegetables in a luscious sauce.
          </p>
        </div>
      </div>
      <div className="lg:flex flex-col hidden p-10 h-full w-[35%] bg-[#e3effa] rounded-r-xl justify-center border">
        <h1 className={`xl:text-5xl lg:text-3xl text-xl mb-10 ${playfair_display.className}`}>Malapot na Pininyahang Manok</h1>
        <p className="xl:line-clamp-none line-clamp-3">
          A creamy Filipino chicken dish that combines the sweetness of pineapple with the richness of evaporated milk. 
          This comforting meal features tender chicken and a medley of colorful vegetables in a luscious sauce.
        </p>
      </div>
    </div>
  )
}

export default Hero
