import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  if (!orderPopup) return null;

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
      <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1>Order Now</h1>
          <IoMdCloseCircleOutline
            onClick={handleOrderPopup}
            className="text-2xl cursor-pointer"
          />
        </div>
        {/* Add form */}
        <div className="mt-4">
            <input type="text" 
            placeholder="Name" 
            className="form-input w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" />
            <input type="email" 
            placeholder="Email" 
            className="form-input w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" />
            <input type="text" 
            placeholder="Address" 
            className="form-input w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" />
            <div className="flex justify-center">
                <Button
                text="Order Now"
                bgColor={"bg-red-500"}
                textColor={"text-white"} 
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
