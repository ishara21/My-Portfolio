"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  GraduationCap,
  Code2,
  Palette,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CursorFollower from "@/components/cursor-follower";
import ScrollReveal from "@/components/scroll-reveal";
import MagneticButton from "@/components/magnetic-button";
import AnimatedText from "@/components/animated-text";

interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface PortfolioData {
  name: string;
  role: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  cvUrl: string;
  socials: Social[];
}

const fallbackAbout: PortfolioData = {
  name: "Hashini Abeyrathne",
  role: "SLIIT Undergraduate Student",
  about: `Hi, I'm Hashini Abeyrathne — a dedicated Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). I'm passionate about building modern, clean, and creative web applications that prioritize user experience above all else.

My journey in tech began with a fascination for how digital products shape our daily lives. Since then, I've been on a relentless pursuit to master the art and science of software development. I believe in minimal design, thoughtful interactions, and code that speaks for itself.

When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or diving deep into the latest technologies. I thrive on challenges and am always eager to learn something new.

I specialize in full-stack web development with a strong foundation in modern JavaScript frameworks, database management, and UI/UX design principles. My goal is to create digital solutions that not only function flawlessly but also deliver memorable user experiences.`,
  email: "hashiniabeyrathne21@example.com",
  phone: "+94 78 521 4403",
  location: "Colombo, Sri Lanka",
  profileImage: "/profile.jpg",
  cvUrl: "/cv.pdf",
  socials: [
    { platform: "GitHub", url: "https://github.com/hashini-abeyrathne", icon: "SiGithub" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/hashini-abeyrathne", icon: "SiLinkedin" },
    { platform: "Twitter", url: "https://twitter.com/hashini_dev", icon: "SiX" },
    { platform: "Instagram", url: "https://instagram.com/hashini.dev", icon: "SiInstagram" },
  ],
};

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "BSc (Hons) in Information Technology at SLIIT",
  },
  {
    icon: Code2,
    title: "Full Stack",
    description: "Proficient in modern web technologies & frameworks",
  },
  {
    icon: Palette,
    title: "Design Driven",
    description: "Passionate about clean, minimal & creative UI/UX",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Always exploring and adopting new technologies",
  },
];

export default function AboutPage() {
  const [data, setData] = useState<PortfolioData>(fallbackAbout);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/portfolio");
        const result = await res.json();
        if (result.success && result.data) {
          setData({
            name: result.data.name,
            role: result.data.role,
            about: result.data.about,
            email: result.data.email,
            phone: result.data.phone,
            location: result.data.location,
            profileImage: result.data.profileImage,
            cvUrl: result.data.cvUrl,
            socials: result.data.socials,
          });
        }
      } catch {
        // Use fallback
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

  const paragraphs = data.about.split("\n\n").filter(Boolean);

  return (
    <>
      <CursorFollower />
      <Navbar />

      <main className="min-h-screen pt-20 overflow-hidden">
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MagneticButton>
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Hero section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Profile Image */}
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-border">
                    <Image
                      src={data.profileImage}
                      alt={`${data.name} - Profile Picture`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/5" />
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl hidden lg:block"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/30 rounded-xl hidden lg:block"
                    animate={{ rotate: [0, -5, 0, 5, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>
              </ScrollReveal>

              {/* Text content */}
              <div>
                <ScrollReveal direction="right">
                  <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
                    About Me
                  </span>
                </ScrollReveal>

                <AnimatedText
                  text={data.name}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
                  delay={0.3}
                />

                <ScrollReveal direction="right" delay={0.4}>
                  <p className="text-xl text-primary font-medium mb-6">{data.role}</p>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.5}>
                  <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {data.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-primary" />
                      {data.email}
                    </span>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.6}>
                  <div className="flex gap-4">
                    <MagneticButton>
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <a href={data.cvUrl} download>
                          <Download className="w-4 h-4 mr-2" />
                          Download CV
                        </a>
                      </Button>
                    </MagneticButton>
                    <MagneticButton>
                      <Button asChild variant="outline" className="border-border">
                        <Link href="/#contact">Get In Touch</Link>
                      </Button>
                    </MagneticButton>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Separator />
        </div>

        {/* About text */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                About Me
              </h3>
            </ScrollReveal>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Separator />
        </div>

        {/* Highlights */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
                What Defines Me
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.title} delay={0.1 * (index + 1)}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 text-center group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Fun facts */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "16+", label: "Technologies" },
                { number: "3+", label: "Years Coding" },
                { number: "∞", label: "Cups of Coffee" },
              ].map((stat, index) => (
                <ScrollReveal key={stat.label} delay={0.1 * (index + 1)}>
                  <div className="text-center p-6">
                    <motion.span
                      className="text-4xl md:text-5xl font-bold text-primary block mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {stat.number}
                    </motion.span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer name={data.name} socials={data.socials} />
    </>
  );
}