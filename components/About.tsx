"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import Archivements from "./Archivements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ad veniam non, totam esse ipsa autem necessitatibus veritatis accusantium laboriosam ea eos, pariatur quod et cupiditate libero. Autem, suscipit error. ",
  },

  {
    icon: <IoIosPricetags />,
    title: "excellents prices",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ad veniam non, totam esse ipsa autem necessitatibus veritatis accusantium laboriosam ea eos, pariatur quod et cupiditate libero. Autem, suscipit error. ",
  },

  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ad veniam non, totam esse ipsa autem necessitatibus veritatis accusantium laboriosam ea eos, pariatur quod et cupiditate libero. Autem, suscipit error. ",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28 bg-white" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[680px] mx-auto text-center"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            impedit illo aut ea reiciendis inventore, provident sint dicta. Quos
            dolor quae veniam, eaque sunt commodi nostrum ut laboriosam eveniet
            recusandae!
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border border-neutral-300 p-10 "
                key={index}
              >
                <div className=" text-4xl bg-zinc-950 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center ">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-red-800">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* archivements */}
        <motion.div
        variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2  }}

        >
        <Archivements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
