"use client";

import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const brandImages = [
  {
    src: "/assets/img/brands/brand-1.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-2.jpg",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-3.jpg",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-4.jpg",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-5.jpg",
    href: "",
  },
];

import { motion } from "framer-motion";

//variants
const brandContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Brands = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          viewport={{ once: false, amount: 0.3 }}
          whileInView={"show"}
          className="grid grid-cols-2 lg:grid-cols-5 py-20"
        >
          {brandImages.map((img, index) => {
            return (
              <motion.div variants={brandItem} key={index} className="w-[204px] h-[204px]">
                <Link className="group" href={{ pathname: img.href }}>
                  <Image
                    className="opacity-90 group-hover:opacity-100 transition-all mx-auto object-cover  w-full h-full pb-2"
                    src={`${basePath}${img.src}`}
                    width={204}
                    height={204}
                    alt=""
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
