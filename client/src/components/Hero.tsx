import { PiCaretRightBold } from "react-icons/pi";
import cabinet_img from "./assets/cabinet_img.png"
import { PrimaryButton } from "./Buttons";

const Hero = () => {
  return (
    <section className="p-4 flex justify-between items-center bg-[var(--surface)] rounded-lg">
      <div className="w-1/2 flex flex-col gap-4 items-center text-center">
        <h1 className="font-bold text-3xl">
          Build Your Dream PC
        </h1>

        <PrimaryButton
          href="/"
          className="px-4 py-2 flex items-center gap-2"
          text="Start Now"
          iconRight={<PiCaretRightBold />}
        />
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img className="" src={cabinet_img} alt="" />
      </div>
    </section>
  )
};

export default Hero;