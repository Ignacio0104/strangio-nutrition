import React from "react";

export default function Footer() {
  return (
    <div className="w-full absolute h-40 bottom-0 bg-gray-800 text-white">
      <div className="flex h-[100%] pl-4 sm:pl-6">
        <div className="flex flex-col justify-center items-end">
          <h3 className="font-tan sm:text-xl text-sm">Antonella Strangio</h3>
          <h4 className="sm:text-sm text-xs">Nutrición</h4>
        </div>
        <div className="ml-10 pt-4 h-[100%]"></div>
      </div>
    </div>
  );
}
