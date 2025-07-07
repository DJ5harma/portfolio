"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Github, Linkedin, ExternalLink, Download, Mail } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/DJ5harma",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dhananjay-sharma-016550254/",
      color: "hover:text-blue-400",
    },
    {
      name: "LeetCode",
      icon: ExternalLink,
      href: "https://leetcode.com/u/Dhananjay_Sharma_/",
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#9333ea",
            },
            links: {
              color: "#9333ea",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 50,
            y: -mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      {/* Main Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative mx-auto mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img
                  src="/images/profile_pic.jpeg"
                  alt="Dhananjay Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glowing ring effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 rounded-full border-2 border-purple-500/50 blur-sm"
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-gradient-primary"
          >
            Hello!
          </motion.h1>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-foreground"
            >
              I'm{" "}
              <span className="text-gradient-accent glow-text">
                Dhananjay Sharma
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl text-muted-foreground"
            >
              <TypeAnimation
                sequence={[
                  "A Full Stack Developer",
                  2000,
                  "An Algorithmic Thinker",
                  2000,
                  "A Builder Who Breaks sometimes",
                  2000,
                  "A Mind in Constant Debug Mode",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient-secondary"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            From real-time collaborative tools to scalable web applications, 
            I try to bring ideas to life with code.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="glass rounded-xl p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-gradient-primary">1000+</div>
              <div className="text-sm text-muted-foreground">GitHub Contributions</div>
            </div>
            <div className="glass rounded-xl p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-gradient-secondary">650+</div>
              <div className="text-sm text-muted-foreground">DSA Problems</div>
            </div>
            <div className="glass rounded-xl p-4 min-w-[120px]">
              <div className="text-2xl font-bold text-gradient-accent">20+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="/public/Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              href="mailto:sunubhargav2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass rounded-full transition-colors duration-300 ${link.color}`}
                title={link.name}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 