"use client";

import React from "react";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Instagram } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Body = () => {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center pt-16 text-center overflow-hidden"
      >
        <ParticlesBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Siddharth
              </span>
            </h1>

            <div className="animate-slide-up delay-100">
              <p className="text-xl md:text-3xl text-muted-foreground mb-8">
                Full Stack Developer crafting exceptional digital experiences
              </p>

              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              With extensive hands-on experience in developing modern web applications, I specialize in crafting scalable, efficient, and user-friendly solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up delay-200">
            <a
            href="https://drive.google.com/uc?id=1Xno_57JjyxP-mFQ0c6Rf2M_k_lHcbyZC&export=download"
            download="Siddharth_Sharma_Resume.pdf"
            className="group flex items-center gap-2 bg-blue-500 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all"
            >
              My Resume
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>


              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/sidsince2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors backdrop-blur-md"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sidsince2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors backdrop-blur-md"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/sid_since2003/"
                  className="p-3 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors backdrop-blur-md"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>
    </main>
  );
};

export default Body;
