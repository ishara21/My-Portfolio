"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

export default function Hero({ name, role, tagline }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-4">
            Hi, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground leading-none">
            {name}
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              role,
              2000,
              "Full Stack Developer",
              2000,
              "UI/UX Enthusiast",
              2000,
              "Creative Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-primary"
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-12"
        >
          {tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-lg group"
          >
            <a href="#projects">
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              View My Work
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border hover:border-primary/50 px-8 py-6 text-base font-medium rounded-lg"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}