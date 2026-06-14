import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='xs:w-[250px] w-full'
  >
    <div className='w-full bg-gradient-to-br from-[#915EFF] to-[#7c3ee0] p-[1px] rounded-[20px]'>
      <div className='bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </div>
  </motion.div>
);

const services = [
  { title: "React Developer", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { title: "Node.js Backend", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { title: "MongoDB Design", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { title: "3D Web Designer", icon: "https://cdn.worldvectorlogo.com/logos/threejs-1.svg" },
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
      >
        Hi! I'm <span className='text-[#915EFF] font-semibold'>Anshul Tiwari</span>, a passionate Full Stack Developer from{" "}
        <span className='text-[#7c3ee0]'>Kanpur, India</span>. I specialize in building end-to-end web applications using React, Node.js, Express, and MongoDB. With a love for clean code and sleek UIs, I turn complex ideas into fast, scalable, and beautiful digital experiences. Let's create something amazing together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
