"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkerd, SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MagneticButton from "./magnetic-button";
import { IconType } from "react-icons";

interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface FooterProps {
  name: string;
  socials: Social[];
}

const socialIconMap: Record<string, IconType> = {
  SiGithub,
  SiLinkerd,
  SiX: RiTwitterXFill,
  SiInstagram,
};

export default function Footer({ name, socials }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl font-bold text-foreground">
              H<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socials.map((social) => {
              const IconComponent = socialIconMap[social.icon];
              return (
                <MagneticButton key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    aria-label={social.platform}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </a>
                </MagneticButton>
              );
            })}
          </motion.div>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="border-border hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-primary fill-primary" /> using
            Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}