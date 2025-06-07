"use client";

import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Pagination } from "swiper/modules";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";


//membership data
const membershipData = [
  {
    title: "Standard",
    price: "30",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: MdClose,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: MdClose,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "Ultimate",
    price: "45",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "Professional",
    price: "60",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: FaCheck,
        text: "No additional amenities",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[640px] lg:min-h-min"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="border border-red-900 hover:bg-zinc-950/50 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className=" py-3 xl:py-[5px] px-[60px] border-b border-red-900">
                <h4 className="h4">{item.title}</h4>
              </div>
              {/* benefits */}
              <div className="px-[30px] py-[15px] lg:py-[10px] lg:px-[20px]">
                <ul className="flex flex-col gap-5 mb-5 lg:mb-5">
                  {item.benefits.map((item, index) => {
                    return (
                      <li className="flex items-center gap-2" key={index}>
                        <item.icon className="text-red-800 text-lg" />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* price & button */}
                <p className="text-red-800 mb-4 flex gap-1 items-center">
                    <sup className="text-4xl">$</sup>
                    <strong className="text-6xl">{item.price}</strong>
                    <em className="self-end text-2xl">/month</em>
                </p>
                <CustomButton containerStayles="w-[196px] h-[62px]" text="Buy now"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
