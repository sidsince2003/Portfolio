'use client';

import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql, SiJupyter, SiTailwindcss, SiAnaconda } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [15, -15],
    transition: { 
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechnologyIcon = ({ href, icon: Icon, color, duration }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-gray-400 p-4"
    >
      <Icon className={`text-7xl ${color}`} />
    </motion.div>
  </a>
);

const Technologies = () => {
  const technologies = [
    { href: "https://reactjs.org/", Icon: RiReactjsLine, color: "text-cyan-400", duration: 1.5 },
    { href: "https://www.mysql.com/", Icon: SiMysql, color: "", duration: 2 },
    { href: "https://jupyter.org/", Icon: SiJupyter, color: "text-orange-600", duration: 4 },
    { href: "https://www.djangoproject.com/", Icon: BiLogoDjango, color: "text-green-900", duration: 3 },
    { href: "https://tailwindcss.com/", Icon: SiTailwindcss, color: "text-sky-500", duration: 4.5 },
    { href: "https://www.anaconda.com/", Icon: SiAnaconda, color: "text-green-600", duration: 5 },
  ];

  return (
    <div id='Skills' className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <TechnologyIcon
            key={index}
            href={tech.href}
            icon={tech.Icon}
            color={tech.color}
            duration={tech.duration}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;