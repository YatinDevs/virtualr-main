import React from "react";
import {
  caContactNo1,
  caContactNo2,
  caEmailid,
  caLogo,
} from "../constants/template";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

function NavbarInfo() {
  return (
    <div className="bg-[#f4f4f4] flex justify-between items-center p-2 py-4">
      <div>
        <img src={caLogo} className="w-20 h-10" alt="calogo" />
      </div>
      <div className="flex space-x-4">
        <div className="text-[#00afe9] text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4">
          <IoCallOutline />
        </div>
        <div>
          <p className="text-[#274584] text-xl"> Call Us On</p>
          <p className="text-gray-700">
            {caContactNo2} | {caContactNo1}
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="text-[#00afe9] text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4">
          <TfiEmail />
        </div>
        <div>
          <p className="text-[#274584] text-xl"> Leave a message</p>{" "}
          <p className="text-gray-700">{caEmailid}</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarInfo;
