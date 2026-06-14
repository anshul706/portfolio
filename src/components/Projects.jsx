import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#915EFF]/20 cursor-pointer group'
      whileHover={{ y: -8 }}
    >
      <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute inset-0 flex justify-end m-3'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='bg-black/60 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#915EFF] transition-colors duration-300'
          >
            <span className='text-white text-xs font-bold'>GH</span>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-[#aaa6c3] text-[14px] leading-[22px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const projects = [
  {
    name: "TukTuk App",
    description: "A premium transport booking application with real-time tracking, driver matching, and a sleek dashboard for both riders and drivers.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "mongodb", color: "text-green-400" },
      { name: "node.js", color: "text-pink-400" },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    source_code_link: "https://github.com/",
  },
  {
    name: "Career Guru",
    description: "A full MERN application that helps users discover the right career path through assessments, role suggestions, and curated learning resources.",
    tags: [
      { name: "mern", color: "text-purple-400" },
      { name: "react", color: "text-green-400" },
      { name: "mongodb", color: "text-pink-400" },
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    source_code_link: "https://github.com/anshul706/career-guru",
  },
  {
    name: "Rhythmix App",
    description: "Social music streaming platform with collaborative playlists, real-time listening rooms, and immersive animated UI.",
    tags: [
      { name: "next.js", color: "text-blue-400" },
      { name: "supabase", color: "text-green-400" },
      { name: "framer-motion", color: "text-pink-400" },
    ],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    source_code_link: "https://github.com/",
  },
  {
    name: "Driver Drowsiness Detection",
    description: "AI-powered real-time system using OpenCV and deep learning to detect driver fatigue and alert for road safety.",
    tags: [
      { name: "python", color: "text-blue-400" },
      { name: "opencv", color: "text-green-400" },
      { name: "tensorflow", color: "text-pink-400" },
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    source_code_link: "https://github.com/",
  },
];

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>My work</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
      >
        Real-world projects showcasing my skills in full-stack development, AI, and 3D web design.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
