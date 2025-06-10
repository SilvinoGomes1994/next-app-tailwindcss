"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

// variants
const FooterContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const FooterItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 px-5">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={FooterContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* info */}
          <motion.div variants={FooterItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt=""
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae itaque.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-red-800" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>

              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-x1 text-red-800" />
                <span>(510) 710-3464 (510) 648-6326</span>
              </li>

              <li>
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-x1 text-red-800" />
                  <span>sayhell@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* blog */}
          <motion.div variants={FooterItem}>
            <h4 className="h4 text-red-800 mb-4 ">Recent blog posts</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-red-800 transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to say motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  June 03, 2025
                </p>
              </Link>
            </div>

            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-red-800 transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to say motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  June 03, 2025
                </p>
              </Link>
            </div>

            {/* post */}
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-red-800 transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to say motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  June 03, 2025
                </p>
              </Link>
            </div>
          </motion.div>

          {/* gallery */}
          <motion.div variants={FooterItem}>
            <h4 className="h4 text-red-800 mb-4">Galley</h4>
            {/* gallery imgs */}
            <div className="flex flex-wrap gap-2">
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/01.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/02.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/03.webp"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/04.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/05.webp"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/silvino.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/rosy.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link className="w-[100px] h-[100px]" href="#">
                <Image
                  className="object-cover w-full h-full"
                  src={"/assets/img/trainers/sofia.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
          {/* newsletter */}
          <motion.div variants={FooterItem}>
            <h4 className="h4 text-red-800 mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur libero id voluptates qui nemo harum.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-zinc-950 bg-amber-50"
                />
                <CustomButton containerStayles="h-[50px] px-8" text="send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full ">
            <span>&copy; Copyright 2025 Joelkempofitness</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-red-800 transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-red-800 transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-red-800 transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
