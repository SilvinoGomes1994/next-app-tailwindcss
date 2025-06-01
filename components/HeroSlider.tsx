"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const HeroSlider = () => {
  return (
    <Swiper className="h-full xsm:bottom-5">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-25 ">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] ">
            <h1 className="h1 text-center lg:text-left mb-2 lg:pt-0 mt-10">
              <span>Where hard</span> work meets success
            </h1>
            <p className="text-white italic text-center lg:text-left mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptas dicta quaerat.
            </p>
            <CustomButton
              text="Get Started"
              containerStayles="w-[196px] h-[62px]"
            />
          </div>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="h-full flex justify-end pt-25 ">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] ">
            <h1 className="h1 text-center lg:text-left mb-2 lg:pt-0 mt-10">
              <span>Where hard</span> work meets success
            </h1>
            <p className="text-white italic text-center lg:text-left mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptas dicta quaerat.
            </p>
            <CustomButton
              text="Get Started"
              containerStayles="w-[196px] h-[62px]"
            />
          </div>
        </div>
      </SwiperSlide>
      

      {/* swiper nav buttons */}
      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:bottom-35 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start lg:items-start gap-1 items-end "
        btnStyles="border border-red-900 text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-red-900 transition-all duration-300"
        iconStyles="tex-2xl"
      />
    </Swiper>
  );
};

{
  /* text-white uppercase */
}
export default HeroSlider;
