import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="w-full flex xl:h-[600px] lg:h-[400px] h-[350px] items-center mb-10 rounded-xl p-0">\
      <img 
        src="https://eatlikepinoy.com/wp-content/uploads/2021/02/Creamy-Pininyahang-Manok.jpg" 
        className="lg:w-[65%] w-full xl:h-[600px] lg:h-[400px] h-[350px] rounded-l-xl p-0"
        alt=""
      />
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
