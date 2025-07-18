"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const trainerData = [
  {
    image: "/assets/img/trainers/01.jpg",
    name: "Joel Uluri",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam praesentium.",

    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },

  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam praesentium.",

    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },

  {
    image: "/assets/img/trainers/silvino.jpg",
    name: "Silvino Gomes",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam praesentium.",

    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },

  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam praesentium.",

    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh] bg-white" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className="h2 text-center mb-6">Our trainers</motion.h2>
        {/* trainers grid */}
        <motion.div 
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* trainer image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={`${basePath}${trainer.image}`} fill className="object-cover blur-[0.6px] brightness-90 grayscale-15 " alt="trainer" />
                </div>
                {/* trainer name */}
                <h4 className="h4 mb-2">{trainer.name}</h4>
                {/* trainer role */}
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                {/* trainer description */}
                <p className="mb-6 max-w-[320px] mx-auto">{trainer.description}</p>
                {/* socials media */}
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={{pathname: social.href}}
                          className="hover:text-red-700 transition-all"
                        >
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
        <motion.div
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        >
          <CustomButton containerStayles="w-[196px] h-[62px]" text="See all trainers"/>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
