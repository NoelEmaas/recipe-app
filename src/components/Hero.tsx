import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="w-full flex h-[600px] items-center mb-10 rounded-xl p-0">\
      <img 
        src="https://eatlikepinoy.com/wp-content/uploads/2021/02/Creamy-Pininyahang-Manok.jpg" 
        className="w-[65%] h-[600px] rounded-l-xl p-0"
        alt=""
      />
      <div className="p-10 h-full w-[35%] bg-[#e3effa] rounded-r-xl flex flex-col justify-center border">
        <h1 className={`text-5xl mb-10 ${playfair_display.className}`}>Malapot na Pininyahang Manok</h1>
        <p className="">
          A creamy Filipino chicken dish that combines the sweetness of pineapple with the richness of evaporated milk. 
          This comforting meal features tender chicken and a medley of colorful vegetables in a luscious sauce.
        </p>
      </div>
    </div>
  )
}

export default Hero
