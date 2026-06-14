import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! I will get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#100d25] p-8 rounded-2xl border border-[#915EFF]/30'
      >
        <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg border border-[#915EFF]/20 focus:border-[#915EFF] focus:outline-none transition-colors font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg border border-[#915EFF]/20 focus:border-[#915EFF] focus:outline-none transition-colors font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg border border-[#915EFF]/20 focus:border-[#915EFF] focus:outline-none transition-colors font-medium resize-none'
              required
            />
          </label>

          <button
            type='submit'
            className='py-3 px-8 rounded-xl bg-[#915EFF] hover:bg-[#7c3ee0] text-white font-bold w-fit shadow-lg shadow-[#915EFF]/25 transition-all duration-300 hover:scale-105'
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
