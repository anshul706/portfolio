import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import anshulPhoto from "../assets/anshul_FINAL_ULTIMATE.png";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      {/* Left side text - takes up left half */}
      <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 z-10'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent' />
        </div>

        <div className='w-1/2'>
          <h1 className='font-black text-white lg:text-[70px] sm:text-[55px] xs:text-[45px] text-[36px] lg:leading-[88px] mt-2'>
            Hi, I'm{" "}
            <span className='text-[#915EFF]'>Anshul<br/>Tiwari</span>
          </h1>
          <p className='text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[15px] lg:leading-[36px] mt-3'>
            I build{" "}
            <span className='text-[#00d2ff] font-bold'>
              <Typewriter
                words={['Full Stack Apps', '3D Experiences', 'REST APIs', 'Real-time Systems']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </p>
          <p className='text-[#aaa6c3] text-[15px] mt-2'>📍 Kanpur, India</p>

          <div className='mt-8 flex gap-4 flex-wrap'>
            <a href='#projects'>
              <button className='px-6 py-3 bg-[#915EFF] text-white rounded-full font-semibold hover:bg-[#7c3ee0] transition-all duration-300 shadow-lg shadow-[#915EFF]/30 hover:scale-105'>
                Explore My Work
              </button>
            </a>
            <a href='#contact'>
              <button className='px-6 py-3 border-2 border-[#915EFF] text-[#915EFF] rounded-full font-semibold hover:bg-[#915EFF] hover:text-white transition-all duration-300 hover:scale-105'>
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right side Photo with Glow */}
      <div className='absolute right-[-5%] top-[15%] w-[60%] h-[70%] flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='relative group cursor-pointer'
        >
          {/* Animated Background Glow */}
          <div className='absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-[#00d2ff] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse' />
          
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className='relative'
          >
            <img 
              src={anshulPhoto} 
              alt='Anshul Tiwari' 
              className='w-[450px] h-[550px] object-cover rounded-2xl border-2 border-white/10 shadow-2xl shadow-[#915EFF]/20'
            />
            {/* Overlay Gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent rounded-2xl' />
          </motion.div>
        </motion.div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-[#aaa6c3] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
