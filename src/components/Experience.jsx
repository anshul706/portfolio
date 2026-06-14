import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance & Personal Projects",
    date: "2023 – Present",
    iconBg: "#383E56",
    points: [
      "Built end-to-end web apps with React, Node.js, Express & MongoDB.",
      "Developed TukTuk App – real-time transport booking platform.",
      "Created Blockchain Supply Chain DApp using Solidity & Ethers.js.",
      "Built Rhythmix – social music streaming app with Next.js & Supabase.",
    ],
  },
  {
    title: "AI/ML Developer",
    company: "Academic Research Projects",
    date: "2022 – 2023",
    iconBg: "#1d1836",
    points: [
      "Developed Driver Drowsiness Detection with Python, OpenCV & TensorFlow.",
      "Implemented real-time alert system achieving 95%+ accuracy.",
      "Collaborated with peers on AI model training and dataset preparation.",
      "Presented research findings and deployed project for demo usage.",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.3, 0.75)}
    className='relative pl-8 pb-10 border-l-2 border-[#915EFF]/40 last:border-l-0'
  >
    <div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50' />
    <div className='bg-[#1d1836] rounded-2xl p-6 border border-[#915EFF]/20 hover:border-[#915EFF]/50 transition-all duration-300'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3'>
        <div>
          <h3 className='text-white font-bold text-[22px]'>{experience.title}</h3>
          <p className='text-[#915EFF] font-semibold text-[15px]'>{experience.company}</p>
        </div>
        <span className='text-[#aaa6c3] text-sm bg-[#915EFF]/10 px-3 py-1 rounded-full whitespace-nowrap'>{experience.date}</span>
      </div>
      <ul className='space-y-2'>
        {experience.points.map((point, i) => (
          <li key={i} className='text-[#aaa6c3] text-[14px] pl-4 border-l-2 border-[#00d2ff]/30 leading-relaxed'>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider text-center'>What I have done</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>Experience.</h2>
      </motion.div>

      <div className='mt-16 max-w-3xl mx-auto'>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
