import {
  ArrowRight,
  BarChart3,
  Brain,
  BrainCircuit,
  Briefcase,
  Cloud,
  Code2,
  Database,
  DatabaseZap,
  FileBarChart,
  Folder,
  Home,
  LayoutDashboard,
  Lightbulb,
  Mail,
  Map,
  MapPin,
  Medal,
  Phone,
  PieChart,
  Star,
  Target,
  Trophy,
  User,
  Wrench,
} from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiPostgresql,
  SiPython,
  SiStreamlit,
} from "react-icons/si";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site-config";
import type { ComponentType } from "react";

export type IconType = ComponentType<{ size?: number | string; className?: string }>;

export const navItems = [
  { label: "Home", href: "#top", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Achievements", href: "#achievements", icon: Trophy },
  { label: "Skills", href: "#skills", icon: Brain },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
] as const;

export const hero = {
  statusBadge: "Open to opportunities",
  firstName: "Jane Njeri",
  lastName: "Njuguna",
  subheading: "Building AI, Analytics & Data Products That Drive Impact",
  roleLine: "Data Analyst | Data Engineer | Data Scientist",
  positioning:
    "I turn messy data into clear insights, useful products and decisions people can act on.",
  deGrowth:
    "I am currently deepening my Data Engineering skills across data pipelines, databases, cloud, orchestration, transformation and scalable data systems — building the foundation to ship complete, production-ready data products.",
} as const;

export const brandTagline = "Data Analyst | Data Engineer | Data Scientist";

export const capabilities = [
  {
    key: "analyze",
    label: "Analyze",
    title: "Data Analytics",
    icon: BarChart3,
    description:
      "Turning raw data and business questions into clear dashboards, KPIs and reporting that people can act on.",
    tools: ["SQL", "Power BI", "BI", "Dashboards", "Business Insights"],
  },
  {
    key: "engineer",
    label: "Engineer",
    title: "Data Engineering",
    icon: Database,
    description:
      "Building reliable pipelines, transformation and cloud data foundations — an active area of professional growth.",
    tools: ["Python", "Pipelines", "dbt", "Docker", "AWS", "Warehousing"],
  },
  {
    key: "model",
    label: "Model",
    title: "Data Science",
    icon: Brain,
    description:
      "Designing predictive models and AI applications — from statistics and machine learning to NLP and geospatial modeling.",
    tools: ["Machine Learning", "Statistics", "AI", "NLP", "Geospatial"],
  },
] as const;

export const skillBadges = [
  { label: "Python", icon: SiPython, color: "text-yellow-500" },
  { label: "SQL", icon: Database, color: "text-cyan-500" },
  { label: "Power BI", icon: BarChart3, color: "text-amber-500" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
  { label: "Machine Learning", icon: Brain, color: "text-fuchsia-500" },
  { label: "NLP", icon: Brain, color: "text-violet-500" },
  { label: "LLM Applications", icon: Brain, color: "text-amber-500" },
  { label: "Streamlit", icon: SiStreamlit, color: "text-rose-500" },
  { label: "AWS", icon: Cloud, color: "text-cyan-500" },
  { label: "GitHub", icon: SiGithub, color: "text-slate-700" },
] as const;

export const stats = [
  { value: "30+", label: "Dashboards Delivered", icon: BarChart3 },
  { value: "10+", label: "Projects Completed", icon: Folder },
  { value: "Top Female", label: "Competition Award", icon: Trophy },
  { value: "Top 10", label: "Competition Finish", icon: Medal },
] as const;

export type ProjectCategory =
  | "Geospatial AI"
  | "Business Intelligence"
  | "Data Engineering"
  | "NLP / LLM"
  | "Machine Learning";

export interface ProjectDetailBlock {
  label: string;
  text: string;
}

export type ProjectVisual = "geospatial" | "climate" | "dashboard" | "analytics";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  accent: string;
  badge: string;
  icon: IconType;
  link: string;
  demo?: string;
  visual: ProjectVisual;
  details: {
    problem: string;
    approach: string;
    data: string;
    keyFindings: string;
    impact: string;
    more: ProjectDetailBlock[];
  };
  pipeline?: string[];
}

export const projects: Project[] = [
  {
    title: "Sentinel-2 Multi-Temporal Crop Classification",
    category: "Geospatial AI",
    description:
      "Solved a pixel-level crop-mapping problem for the Zindi Cote d'Ivoire Byte-Sized Agriculture Challenge by turning multi-temporal Sentinel-2 satellite imagery into a machine learning pipeline that distinguishes cocoa, rubber, and oil palm plantations for scalable agricultural intelligence.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "LightGBM", "Rasterio", "GeoPandas", "Scikit-learn"],
    accent: "bg-teal-500",
    badge: "2nd Place - Top Female",
    icon: Trophy,
    link: "https://github.com/janejeshen/Sentinel2-MultiTemporal-Crop-Classification",
    visual: "geospatial",
    details: {
      problem:
        "Cocoa, rubber and oil palm are often confused at the pixel level in satellite imagery, making large-scale plantation mapping unreliable for agricultural planning.",
      approach:
        "Built a multi-temporal machine learning pipeline that engineers features from time-series Sentinel-2 bands and trains a gradient-boosting classifier to separate the three crop types.",
      data: "Multi-temporal Sentinel-2 satellite imagery with pixel-level labels from the Zindi Cote d'Ivoire Byte-Sized Agriculture Challenge.",
      keyFindings:
        "Exploiting the temporal dimension of satellite imagery improves separation between spectrally similar tree crops versus single-date snapshots.",
      impact: "Earned 2nd Place - Top Female in the challenge and validated an approach that scales to repeatable agricultural intelligence.",
      more: [
        { label: "Category", text: "Geospatial AI" },
        { label: "Ranking", text: "2nd Place - Top Female (Zindi)" },
      ],
    },
    pipeline: [
      "Sentinel-2 Scene",
      "Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Prediction",
    ],
  },
  {
    title: "Climate & Health Risk Prediction",
    category: "Machine Learning",
    description:
      "Built an ensemble gradient-boosting solution for the AI4EAC Health Challenge that predicts climate-sensitive deaths in low-resource settings using demographic, climate, and vegetation features.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "LightGBM", "Scikit-learn", "Pandas", "Feature Engineering"],
    accent: "bg-emerald-500",
    badge: "AI4EAC Health Challenge",
    icon: Medal,
    link: "https://github.com/janejeshen/climate-health-risk-prediction",
    visual: "climate",
    details: {
      problem:
        "Climate-sensitive diseases and deaths are under-measured in low-resource settings, leaving public health teams without forward-looking risk signals.",
      approach:
        "Engineered demographic, climate and vegetation features and trained an ensemble of gradient-boosting models to predict climate-sensitive mortality risk.",
      data: "Demographic, climate and vegetation features provided for the AI4EAC Health Challenge, covering low-resource geographies.",
      keyFindings:
        "Combining demographic context with climate and vegetation signals produced more stable risk predictions than climate features alone.",
      impact: "Delivered an interpretable predictive workflow public health teams can use for planning and early warning.",
      more: [
        { label: "Category", text: "Machine Learning" },
        { label: "Setting", text: "AI4EAC Health Challenge" },
      ],
    },
    pipeline: [
      "Raw Features",
      "Cleaning",
      "Feature Engineering",
      "Ensemble Model",
      "Risk Prediction",
    ],
  },
  {
    title: "Sales Performance Dashboard",
    category: "Business Intelligence",
    description:
      "Designed an interactive dashboard that helps teams monitor sales health, spot seasonal trends early, and turn customer and product insights into revenue-growing actions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Power BI", "Streamlit", "Python", "Pandas"],
    accent: "bg-teal-500",
    badge: "Live Demo",
    icon: BarChart3,
    link: "https://janejeshen-sales-performance-dashboard-streamlit-app-ggstz8.streamlit.app/",
    demo: "https://janejeshen-sales-performance-dashboard-streamlit-app-ggstz8.streamlit.app/",
    visual: "dashboard",
    details: {
      problem:
        "Sales teams lacked a single, real-time view of revenue health, product performance and seasonal movement, slowing down decision-making.",
      approach:
        "Designed an interactive dashboard flow that monitors sales KPIs, surfaces seasonal and customer trends, and points teams toward revenue-growing actions.",
      data: "Sales transaction data covering products, customers, regions and time — prepared and cleaned with Python and Pandas.",
      keyFindings:
        "Clear trend and seasonality views make it faster for teams to spot when, where and why sales move.",
      impact: "A live, self-service dashboard that turns raw sales data into monitoring and action-ready insight.",
      more: [
        { label: "Category", text: "Business Intelligence" },
        { label: "Status", text: "Live demo available" },
      ],
    },
    pipeline: [
      "Source Data",
      "Cleaning (Pandas)",
      "Structured Tables",
      "Dashboard",
      "Insights",
    ],
  },
  {
    title: "Medical Appointment No-Show Analysis",
    category: "Machine Learning",
    description:
      "Analyzed patient appointment data through EDA and statistical testing to uncover the behavioral and operational drivers behind missed medical appointments, translating findings into practical attendance recommendations.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Pandas", "Seaborn", "Statistical Testing"],
    accent: "bg-teal-400",
    badge: "EDA & Hypothesis Testing",
    icon: Star,
    link: "https://github.com/janejeshen/Medical-Appointment-No-Show-Analysis-Using-EDA-Statistical-Testing",
    visual: "analytics",
    details: {
      problem:
        "Missed medical appointments waste capacity and degrade care, but the drivers behind no-shows were not well understood.",
      approach:
        "Ran exploratory data analysis and statistical hypothesis testing on appointment records to isolate behavioral and operational factors linked to no-shows.",
      data: "Patient appointment records with demographics, scheduling details and attendance outcomes.",
      keyFindings:
        "Clear patterns across scheduling channels, wait times and patient attributes provide actionable levers for attendance planning.",
      impact: "Practical, evidence-based recommendations for reducing missed appointments and improving attendance.",
      more: [
        { label: "Category", text: "Statistical Analytics" },
        { label: "Method", text: "EDA & Hypothesis Testing" },
      ],
    },
    pipeline: [
      "Raw Records",
      "Cleaning",
      "EDA",
      "Statistical Testing",
      "Recommendations",
    ],
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "Top Female Competition Award",
    text: "Recognized for strong performance in a data science competition.",
  },
  {
    icon: Medal,
    title: "Top 10 Competition Finish",
    text: "Ranked among the top participants in a competitive data challenge.",
  },
  {
    icon: BarChart3,
    title: "30+ Dashboards Delivered",
    text: "Built interactive dashboards supporting reporting and decision-making.",
  },
  {
    icon: Folder,
    title: "10+ Projects Completed",
    text: "Hands-on experience spanning analytics, BI, machine learning and AI.",
  },
] as const;

export const skillCategories = [
  {
    title: "Programming & Databases",
    icon: Code2,
    items: ["Python", "SQL", "PostgreSQL", "SQL Server", "Git", "Bash"],
  },
  {
    title: "Analytics & Statistics",
    icon: BarChart3,
    items: ["EDA", "Statistics", "Data Cleaning", "Data Validation", "Feature Engineering", "Data Analysis"],
  },
  {
    title: "Business Intelligence",
    icon: PieChart,
    items: ["Power BI", "DAX", "Excel", "Data Storytelling", "Dashboard Design"],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    items: ["Scikit-learn", "NLP", "LLMs", "Machine Learning", "AI Applications", "Prompt Engineering"],
  },
  {
    title: "Geospatial AI",
    icon: Map,
    items: ["Google Earth Engine", "CHIRPS", "ERA5", "GeoPandas", "Rasterio", "Folium", "Spatial Analysis"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["AWS", "Docker", "Linux / WSL", "dbt", "Streamlit", "Databricks", "GitHub"],
  },
] as const;

export const dataEngineeringJourney = {
  eyebrow: "Currently Going Deeper",
  title: "Data Engineering",
  nodes: ["SQL", "Python", "Docker", "dbt", "AWS", "Data Pipelines", "Warehousing"],
  text: "Currently strengthening my data engineering foundations — from reliable pipelines and transformations to cloud-based data platforms.",
} as const;

export interface ExperienceContribution {
  category: string;
  description: string;
  icon: IconType;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  employmentType?: string;
  period?: string;
  summary: string;
  contributions: ExperienceContribution[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Go Chapa",
    role: "Data Analyst",
    employmentType: "Professional Experience",
    period: "Jan 2024 — Jan 2026",
    summary:
      "Analyzed business and operational data to support reporting, uncover insights and help translate data into practical decisions.",
    contributions: [
      {
        category: "Data Analysis",
        description: "Analyzed business and operational data to identify trends, patterns and areas requiring attention.",
        icon: BarChart3,
      },
      {
        category: "Data Preparation",
        description: "Cleaned, organized and prepared data for analysis and reporting.",
        icon: Database,
      },
      {
        category: "Reporting & Insights",
        description: "Prepared analytical reports and presented findings in a clear format for business understanding.",
        icon: FileBarChart,
      },
      {
        category: "Decision Support",
        description: "Translated data findings into practical insights that supported data-driven business decisions.",
        icon: Lightbulb,
      },
    ],
  },
  {
    company: "Kiondo Market",
    role: "Data Analyst / BI Analyst",
    employmentType: "Professional Experience",
    period: "July 2023 — Dec 2023",
    summary:
      "Delivered analytics and BI support for sales and business operations — turning transaction and product data into dashboards and reports that helped teams monitor performance and act faster.",
    contributions: [
      {
        category: "BI & Dashboards",
        description: "Built Power BI dashboards for business insights.",
        icon: LayoutDashboard,
      },
      {
        category: "Business Metrics",
        description: "Translated business questions into measurable metrics.",
        icon: Target,
      },
      {
        category: "Reporting",
        description: "Improved reporting workflows.",
        icon: FileBarChart,
      },
      {
        category: "Decision Support",
        description: "Supported data-driven decision making.",
        icon: Lightbulb,
      },
    ],
  },
  {
    company: "Kurasa Africa",
    role: "Data Analyst / Intern",
    employmentType: "Part-time",
    period: "June 2025 — Sep 2025",
    summary:
      "Supported educational data work — analyzing operational datasets and building reports and dashboards that helped stakeholders understand performance and make informed decisions.",
    contributions: [
      {
        category: "Data Analysis",
        description: "Analyzed operational datasets.",
        icon: Database,
      },
      {
        category: "Reporting & BI",
        description: "Created reports and dashboards.",
        icon: BarChart3,
      },
      {
        category: "Decision Support",
        description: "Supported data-driven decisions.",
        icon: Lightbulb,
      },
      {
        category: "Python & SQL",
        description: "Worked with Python and SQL.",
        icon: Code2,
      },
    ],
  },
] as const;

export interface CareerStage {
  title: string;
  description: string;
  icon: IconType;
}

export const careerTimeline: CareerStage[] = [
  {
    title: "Data Analytics",
    description: "Clean data, answer questions and surface insights through analysis, dashboards and reporting.",
    icon: BarChart3,
  },
  {
    title: "Business Intelligence",
    description: "Turn metrics and KPIs into dashboards that drive faster, more confident decisions.",
    icon: LayoutDashboard,
  },
  {
    title: "Machine Learning & AI",
    description: "Predict outcomes and build AI applications — from geospatial models to NLP and LLM products.",
    icon: BrainCircuit,
  },
  {
    title: "Data Engineering",
    description: "Currently going deeper — pipelines, transformation, cloud platforms and scalable data systems.",
    icon: DatabaseZap,
  },
];

export const contact = {
  eyebrow: "Get in Touch",
  heading: "Let's Talk Data.",
  text: "Have a data problem, analytics project or AI idea? I'd love to connect and explore what we can build.",
  items: [
    { icon: MapPin, title: "Location", text: "Nairobi, Kenya" },
    { icon: Phone, title: "Phone", text: "+254 740 903 846", href: "tel:+254740903846" },
    { icon: Mail, title: "Email", text: "janenjuguna550@gmail.com", href: "mailto:janenjuguna550@gmail.com" },
  ],
} as const;

export const socials = [
  { label: "GitHub", icon: SiGithub, href: GITHUB_URL },
  { label: "LinkedIn", icon: SiLinkedin, href: LINKEDIN_URL },
] as const;

export const heroButtons = {
  primary: { label: "View Projects", href: "#projects", icon: ArrowRight },
  secondary: [
    { label: "Download CV", href: CV_URL },
    { label: "GitHub", href: GITHUB_URL, external: true },
    { label: "LinkedIn", href: LINKEDIN_URL, external: true },
  ],
} as const;