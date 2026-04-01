import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISkill {
  name: string;
  icon: string;
  category: string;
  level: number;
}

export interface IProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface ISocial {
  platform: string;
  url: string;
  icon: string;
}

export interface IPortfolio extends Document {
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
  skills: ISkill[];
  projects: IProject[];
  socials: ISocial[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 100 },
});

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  liveUrl: { type: String, default: "" },
  githubUrl: { type: String, default: "" },
  featured: { type: Boolean, default: false },
});

const SocialSchema = new Schema<ISocial>({
  platform: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String, required: true },
});

const PortfolioSchema = new Schema<IPortfolio>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    tagline: { type: String, required: true },
    bio: { type: String, required: true },
    about: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    location: { type: String, default: "" },
    profileImage: { type: String, default: "/profile.jpg" },
    cvUrl: { type: String, default: "/cv.pdf" },
    skills: [SkillSchema],
    projects: [ProjectSchema],
    socials: [SocialSchema],
  },
  { timestamps: true }
);

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Portfolio: Model<IPortfolio> =
  mongoose.models.Portfolio || mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);

export const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);