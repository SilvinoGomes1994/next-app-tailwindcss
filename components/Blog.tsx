"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

//Meu Path para o caminho das imagens
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
];

const Blog = () => {
  return (
    <section className="bg-zinc-950 text-white py-24 " id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[430px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => {

              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                    <Image
                      src={`${basePath}${post.img}`}
                      width={320}
                      height={266}
                      alt=""
                      className="mb-6 justify-center items-center"
                    />
                    <div className="flex flex-col items-start">
                      <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                        {post.date}
                      </p>
                      <Link
                        className="hover:text-red-800 transition-all duration-300"
                        href={{ pathname: post.href }}
                      >
                        <h5 className="h5">{post.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles=" bg-red-800 text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-red-700 transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CustomButton
              containerStayles="block w-[196px] h-[62px] mx-auto"
              text="View all"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
