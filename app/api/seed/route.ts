import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

const SkillSchema = new mongoose.Schema({
  name: String,
  icon: String,
  category: String,
  level: Number,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  tags: [String],
  liveUrl: String,
  githubUrl: String,
  featured: Boolean,
});

const SocialSchema = new mongoose.Schema({
  platform: String,
  url: String,
  icon: String,
});

const PortfolioSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    tagline: String,
    bio: String,
    about: String,
    email: String,
    phone: String,
    location: String,
    profileImage: String,
    cvUrl: String,
    skills: [SkillSchema],
    projects: [ProjectSchema],
    socials: [SocialSchema],
  },
  { timestamps: true }
);

const PortfolioModel =
  mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);

const seedData = {
  name: "Hashini Abeyrathne",
  role: "SLIIT Undergraduate Student",
  tagline:
    "Specialized in Information Technology — crafting clean, minimal & creative digital experiences.",
  bio: "I'm a passionate IT undergraduate at SLIIT who loves turning complex problems into elegant, user-friendly solutions. With a keen eye for design and a love for clean code, I create digital experiences that are both beautiful and functional.",
  about: `Hi, I'm Hashini Abeyrathne — a dedicated Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). I'm passionate about building modern, clean, and creative web applications that prioritize user experience above all else.

My journey in tech began with a fascination for how digital products shape our daily lives. Since then, I've been on a relentless pursuit to master the art and science of software development. I believe in minimal design, thoughtful interactions, and code that speaks for itself.

When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or diving deep into the latest technologies. I thrive on challenges and am always eager to learn something new.

I specialize in full-stack web development with a strong foundation in modern JavaScript frameworks, database management, and UI/UX design principles. My goal is to create digital solutions that not only function flawlessly but also deliver memorable user experiences.`,
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
        "A comprehensive sustainability tracking platform that helps organizations monitor their carbon footprint, energy consumption, and environmental impact with real-time analytics.",
      image: "/projects/ecotrack.jpg",
      tags: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://ecotrack-demo.vercel.app",
      githubUrl: "https://github.com/hashini/ecotrack",
      featured: true,
    },
    {
      title: "MindSpace — Mental Health App",
      description:
        "A mental health and wellness application featuring mood tracking, guided meditation sessions, journaling capabilities, and AI-powered wellness recommendations.",
      image: "/projects/mindspace.jpg",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI"],
      liveUrl: "https://mindspace-app.vercel.app",
      githubUrl: "https://github.com/hashini/mindspace",
      featured: true,
    },
    {
      title: "DevConnect — Developer Social Platform",
      description:
        "A social networking platform exclusively for developers to share code snippets, collaborate on projects, and build their professional network.",
      image: "/projects/devconnect.jpg",
      tags: ["React", "Firebase", "Material UI", "Redux", "Socket.io"],
      liveUrl: "https://devconnect-platform.vercel.app",
      githubUrl: "https://github.com/hashini/devconnect",
      featured: true,
    },
    {
      title: "TaskFlow — Project Management Tool",
      description:
        "An intuitive project management application with Kanban boards, time tracking, team collaboration features, and automated workflow management.",
      image: "/projects/taskflow.jpg",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "DnD Kit", "Zustand"],
      liveUrl: "https://taskflow-tool.vercel.app",
      githubUrl: "https://github.com/hashini/taskflow",
      featured: false,
    },
    {
      title: "FoodieHub — Recipe Sharing Platform",
      description:
        "A community-driven recipe sharing platform with meal planning, nutritional analysis, and social features for food enthusiasts.",
      image: "/projects/foodiehub.jpg",
      tags: ["React", "Express", "MongoDB", "Cloudinary", "Stripe"],
      liveUrl: "https://foodiehub-demo.vercel.app",
      githubUrl: "https://github.com/hashini/foodiehub",
      featured: false,
    },
    {
      title: "WeatherWise — Smart Weather App",
      description:
        "A beautifully designed weather application with location-based forecasts, severe weather alerts, interactive maps, and personalized recommendations.",
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

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI);
    }

    await PortfolioModel.deleteMany({});
    await PortfolioModel.create(seedData);

    return NextResponse.json({ success: true, message: "Database seeded successfully!" });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}