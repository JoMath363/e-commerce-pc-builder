import { PiCpuBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="mt-8 flex gap-16 p-8 flex-wrap bg-gray-900">
      <div className="w-1/1 flex items-center justify-center gap-2 text-[var(--background)] text-3xl">
        <PiCpuBold />
        <p>PC Builder</p>
      </div>

      <div className="flex flex-col gap-4 text-white">
        <h2 className="font-medium text-lg">
          CONTACT US
        </h2>

        <p>
          <span className="">Adress:</span>
          <br />
          <span className="text-gray-400">123 Tech Avenue, Suite 456 </span>
          <br />
          <span className="text-gray-400">San Francisco, CA 94103, USA</span>
        </p>

        <p>
          <span className="">Call:</span>
          <br />
          <span className="text-gray-400">+1 (555) 123-4567</span>
        </p>

        <p>
          <span className="">Email:</span>
          <br />
          <span className="text-gray-400">support@pcbuilderstore.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 text-white">
        <h2 className="font-medium text-lg">
          NAVIGATE
        </h2>

        <a href="" className="text-gray-400 hover:underline">Home</a>
        <a href="" className="text-gray-400 hover:underline">Products</a>
        <a href="" className="text-gray-400 hover:underline">Build</a>
        <a href="" className="text-gray-400 hover:underline">Cart</a>
        <a href="" className="text-gray-400 hover:underline">Profile</a>
      </div>

      <p className="w-1/1 text-center text-gray-500">
        © 2025 PCBuilder Store. All rights reserved.
      </p>
    </div>
  )
};

export default Footer;