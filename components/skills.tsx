"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss,
  SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./scroll-reveal";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiDocker,
  SiOpenjdk: FaJava,
  SiHtml5,
  SiCss,
  SiFirebase,
};

export default function Skills({ skills }: SkillsProps) {
  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of technologies and tools I work with to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative"
              >
                <Badge
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`px-5 py-2 text-sm cursor-pointer transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </Badge>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative"
                >
                  <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex flex-col items-center gap-3">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      )}
                      <span className="text-sm font-medium text-foreground text-center">
                        {skill.name}
                      </span>

                      {/* Skill level bar */}
                      <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}