import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full absolute h-40 bottom-0 bg-dark-green text-white z-50">
      <div className="flex items-center justify-between h-[100%] px-4 sm:px-6 gap-0 lg:gap-20 md:gap-10">
        <div className="w-[10%] sm:w-[20%] lg:w-[33%]">
          <Image
            src="/resources/Images/anto-logo-white.png"
            alt="Page logo"
            width={80}
            height={80}
            priority
          />
        </div>
        <div className="flex flex-row sm:flex-col justify-center items-center sm:w-[33%] w-[50%]">
          <div className="flex flex-col items-end text-white-cream">
            <h3 className="font-tan text-xs sm:text-sm md:text-xl lg:text-2xl">
              Antonella Strangio
            </h3>
            <h4 className="sm:text-sm text-xs items-end">Nutrición</h4>
          </div>
        </div>

        <div className="w-[33%] h-[20%]">
          <div className="flex flex-row justify-between m-auto">
            <a href="" className="">
              <Image
                src="/resources/Images/instagram_icon.png"
                alt="Page logo"
                width={25}
                height={25}
                className="w-6 h-6 sm:w-10 sm:h-10"
                priority
              />
            </a>
            <a href="">
              <Image
                src="/resources/Images/linkedin_icon.png"
                alt="Page logo"
                width={35}
                height={35}
                className="w-6 h-6 sm:w-10 sm:h-10"
                priority
              />
            </a>
            <a href="">
              <Image
                src="/resources/Images/whatsapp_icon.png"
                alt="Page logo"
                width={35}
                height={35}
                className="w-6 h-6 sm:w-10 sm:h-10"
                priority
              />
            </a>
            <a href="">
              <Image
                src="/resources/Images/tiktok_icon.png"
                alt="Page logo"
                width={35}
                height={35}
                className="w-6 h-6 sm:w-10 sm:h-10"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
