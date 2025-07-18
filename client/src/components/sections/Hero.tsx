import { PiCaretRightBold } from "react-icons/pi";
import cabinet_img from "../../assets/cabinet_img.png"

const Hero = () => {
  return (
    <section className="px-4 py-8 flex justify-between items-center bg-[var(--surface)] rounded-2xl">
      <div className="w-1/2 flex flex-col gap-4 items-center text-center">
        <h1 className="font-bold text-3xl">
          Build Your Dream PC
        </h1>

        {/* <p className="text-sm">
          Whether you’re a gamer, creator, or pro user, design a rig that fits your needs and budget.
        </p> */}

        <button className="px-4 py-2 flex items-center gap-2 bg-[var(--primary-2)] text-[var(--background)] rounded hover:bg-[var(--primary-1)] active:bg-[var(--secondary-1)]">
          <p className="">
            Start Now
          </p>
          <PiCaretRightBold />
        </button>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img className="" src={cabinet_img} alt="" />
      </div>
    </section>
  )
};

export default Hero;