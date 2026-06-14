import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const skills = [
  { name: "React JS", color: "#61DAFB", level: "Expert" },
  { name: "JavaScript", color: "#F7DF1E", level: "Expert" },
  { name: "Node.js", color: "#339933", level: "Advanced" },
  { name: "MongoDB", color: "#47A248", level: "Advanced" },
  { name: "Express.js", color: "#aaa6c3", level: "Advanced" },
  { name: "Python", color: "#3776AB", level: "Intermediate" },
  { name: "REST APIs", color: "#FF6B6B", level: "Expert" },
  { name: "Three.js", color: "#915EFF", level: "Intermediate" },
  { name: "Tailwind CSS", color: "#06B6D4", level: "Expert" },
  { name: "Git & GitHub", color: "#F05032", level: "Advanced" },
  { name: "Docker", color: "#2496ED", level: "Beginner" },
  { name: "TypeScript", color: "#3178C6", level: "Intermediate" },
];

const SkillCard = ({ name, color, level, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    whileHover={{ scale: 1.08, y: -5 }}
    className='flex flex-col items-center gap-3 p-5 rounded-xl bg-[#151030] border border-white/10 hover:border-[#915EFF]/60 transition-all duration-300 cursor-default w-[140px] sm:w-[160px]'
  >
    <div
      className='w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold'
      style={{ background: `${color}22`, color, border: `2px solid ${color}55` }}
    >
      {name.charAt(0)}
    </div>
    <p className='text-white font-semibold text-sm text-center'>{name}</p>
    <span className='text-[10px] px-2 py-0.5 rounded-full' style={{ background: `${color}22`, color }}>{level}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>Technologies I work with</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
      >
        A comprehensive toolkit spanning the full stack — from crafting immersive frontends to architecting scalable backends.
      </motion.p>

      <div className='mt-16 flex flex-wrap justify-center gap-6'>
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
