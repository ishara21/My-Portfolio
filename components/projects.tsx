"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./scroll-reveal";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for building great digital experiences.
            </p>
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500">
                  {/* Project image placeholder */}
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                          <span className="text-2xl font-bold text-primary">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          Project Preview
                        </span>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background"
                        >
                          <SiGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-2" />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-border text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-border text-muted-foreground"
                        >
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more/less button */}
        {projects.length > 3 && (
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
              >
                {showAll ? "Show Less" : `View All Projects (${projects.length})`}
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}