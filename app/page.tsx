"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import CursorFollower from "@/components/cursor-follower";
import PageTransition from "@/components/page-transition";

interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  cvUrl: string;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

// Fallback data
const fallbackData: PortfolioData = {
  name: "Hashini Abeyrathne",
  role: "SLIIT Undergraduate Student",
  tagline:
    "Specialized in Information Technology — crafting clean, minimal & creative digital experiences.",
  bio: "I'm a passionate IT undergraduate at SLIIT who loves turning complex problems into elegant, user-friendly solutions.",
  about: "",
  email: "hashini.abeyrathne@example.com",
  phone: "+94 77 123 4567",
  location: "Colombo, Sri Lanka",
  profileImage: "/profile.jpg",
  cvUrl: "/cv.pdf",
  skills: [
    { name: "React", icon: "SiReact", category: "Frontend", level: 90 },
    { name: "Next.js", icon: "SiNextdotjs", category: "Frontend", level: 85 },
    { name: "TypeScript", icon: "SiTypescript", category: "Languages", level: 85 },
    { name: "JavaScript", icon: "SiJavascript", category: "Languages", level: 92 },
    { name: "Node.js", icon: "SiNodedotjs", category: "Backend", level: 80 },
    { name: "Python", icon: "SiPython", category: "Languages", level: 75 },
    { name: "MongoDB", icon: "SiMongodb", category: "Database", level: 82 },
    { name: "PostgreSQL", icon: "SiPostgresql", category: "Database", level: 70 },
    { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend", level: 90 },
    { name: "Figma", icon: "SiFigma", category: "Design", level: 78 },
    { name: "Git", icon: "SiGit", category: "Tools", level: 88 },
    { name: "Docker", icon: "SiDocker", category: "Tools", level: 65 },
    { name: "Java", icon: "SiOpenjdk", category: "Languages", level: 72 },
    { name: "HTML5", icon: "SiHtml5", category: "Frontend", level: 95 },
    { name: "CSS3", icon: "SiCss3", category: "Frontend", level: 90 },
    { name: "Firebase", icon: "SiFirebase", category: "Backend", level: 70 },
  ],
  projects: [
    {
      title: "EcoTrack — Sustainability Dashboard",
      description:
        "A comprehensive sustainability tracking platform with real-time analytics and beautiful data visualizations.",
      image: "/projects/ecotrack.jpg",
      tags: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://ecotrack-demo.vercel.app",
      githubUrl: "https://github.com/hashini/ecotrack",
      featured: true,
    },
    {
      title: "MindSpace — Mental Health App",
      description:
        "A mental health and wellness application featuring mood tracking, guided meditation, and AI-powered recommendations.",
      image: "/projects/mindspace.jpg",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI"],
      liveUrl: "https://mindspace-app.vercel.app",
      githubUrl: "https://github.com/hashini/mindspace",
      featured: true,
    },
    {
      title: "DevConnect — Developer Social Platform",
      description:
        "A social networking platform for developers to share code, collaborate on projects, and build their network.",
      image: "/projects/devconnect.jpg",
      tags: ["React", "Firebase", "Material UI", "Redux", "Socket.io"],
      liveUrl: "https://devconnect-platform.vercel.app",
      githubUrl: "https://github.com/hashini/devconnect",
      featured: true,
    },
    {
      title: "TaskFlow — Project Management Tool",
      description:
        "An intuitive project management app with Kanban boards, time tracking, and team collaboration.",
      image: "/projects/taskflow.jpg",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "DnD Kit", "Zustand"],
      liveUrl: "https://taskflow-tool.vercel.app",
      githubUrl: "https://github.com/hashini/taskflow",
      featured: false,
    },
    {
      title: "FoodieHub — Recipe Sharing Platform",
      description:
        "A community-driven recipe sharing platform with meal planning and nutritional analysis.",
      image: "/projects/foodiehub.jpg",
      tags: ["React", "Express", "MongoDB", "Cloudinary", "Stripe"],
      liveUrl: "https://foodiehub-demo.vercel.app",
      githubUrl: "https://github.com/hashini/foodiehub",
      featured: false,
    },
    {
      title: "WeatherWise — Smart Weather App",
      description:
        "A beautifully designed weather app with location-based forecasts and interactive maps.",
      image: "/projects/weatherwise.jpg",
      tags: ["Next.js", "TypeScript", "OpenWeather API", "Mapbox", "Framer Motion"],
      liveUrl: "https://weatherwise-app.vercel.app",
      githubUrl: "https://github.com/hashini/weatherwise",
      featured: false,
    },
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/hashini-abeyrathne", icon: "SiGithub" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/hashini-abeyrathne", icon: "SiLinkedin" },
    { platform: "Twitter", url: "https://twitter.com/hashini_dev", icon: "SiX" },
    { platform: "Instagram", url: "https://instagram.com/hashini.dev", icon: "SiInstagram" },
  ],
};

export default function Home() {
  const [data, setData] = useState<PortfolioData>(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/portfolio");
        const result = await res.json();
        if (result.success && result.data) {
          setData(result.data);
        }
      } catch {
        // Use fallback data
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full"
          />
          <span className="text-muted-foreground text-sm tracking-widest uppercase">
            Loading
          </span>
        </motion.div>
      </div>
    );
  }

  return (
    <PageTransition>
      <CursorFollower />
      <Navbar />
      <main className="overflow-hidden">
        <Hero name={data.name} role={data.role} tagline={data.tagline} />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-border" />
        </div>

        <Skills skills={data.skills} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-border" />
        </div>

        <Projects projects={data.projects} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-border" />
        </div>

        <ContactSection
          email={data.email}
          phone={data.phone}
          location={data.location}
        />
      </main>
      <Footer name={data.name} socials={data.socials} />
    </PageTransition>
  );
}