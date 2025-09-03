import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const NextPageBtn = (props: { text: string, path: string }) => {
  return (
    <Link to={props.path} className="p-3 flex items-center justify-center gap-2 bg-[var(--positive)] rounded text-[var(--accent)]">
      <span className="text-xl font-medium">{props.text}</span>
      <PiArrowRightBold className="text-2xl" />
    </Link>
  )
};

export default NextPageBtn;