import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
  title: "Data Analyst Intern",
  company: "Kurasa Africa",
  period: "June 2025 – Present",
  description: `• Clean and prepare school assessment data by removing duplicates, fixing missing or wrong values, and making the format consistent so the data is reliable.\n
  • Use SQL/Python to combine student, class, and school results (like scores, growth, and attendance) into weekly and monthly reports.\n
  • Create easy-to-use dashboards that show performance trends, student groups, and risk alerts to help academic and operations teams make better decisions.\n
  • Explore the data to find reasons behind performance and turn those insights into clear recommendations for school leaders.\n
  • Keep records of data sources, definitions, and workflows so the team can work together smoothly and new members can onboard faster.
  • Automate regular reports and data checks to save time and reduce manual work.
`,
  technologies: [
    "Python (Pandas, NumPy, Jupyter)",
    "SQL (PostgreSQL)",
    "Power BI",
    "Looker Studio",
    "Excel",
    "Matplotlib",
    "Seaborn",
    "Git/GitHub"
  ]
}
,
    {
  title: "Data Analyst Intern",
  company: "Kiondo Market",
  period: "July 2023 – December 2023",
  description: `• Looked at sales, profits, and costs for Fresh Foods. Shared weekly trends by product, and supplier to guide decisions.\n
    • Built easy-to-use dashboards showing key numbers like revenue, units sold, average order value, margins, and wastage so teams could track everything in one place.\n
    • Reviewed product groups to see which items sold well or poorly, and suggested changes in pricing, promotions, and product mix.\n
    • Checked how discounts worked to find the right balance boosting sales without hurting profits.\n
    • Studied shopping baskets and customer groups to spot cross-sell chances and highlight the most valuable customers.\n
    • Worked with supply and operations teams to cut stockouts and reduce waste by tracking stock levels and re-order points.\n
    • Cleaned and organized sales and inventory data so reports were accurate and reliable.`,
  technologies: [
    "Python (Pandas, NumPy, Jupyter)",
    "MySQL",
    "Looker Studio",
    "Excel/Google Sheets",
    "Matplotlib",
    "Seaborn",
    "Git/GitHub"
  ]
}
,
    {
  title: "Online Marketer",
  company: "Freelancer (Upwork)",
  period: "December 2021 – May 2022",
  description: `• Planned and ran marketing campaigns for online shops and NFT launches, making sure messages, designs, and funnels matched the right audience.\n
• Grew and managed Discord communities by setting up channels, roles, and bots, hosting Q&A sessions and giveaways, and engaging with members through messages and events.\n
• Promoted NFT launches on Discord, Twitter (X), and Telegram, and worked with creators and influencers to increase visibility and trust.\n
• Built simple funnels to track where new users came from, and tested different headlines, buttons, and landing pages to improve clicks and conversions.\n
• Made weekly reports on results (like reach, engagement, sales) and shared clear recommendations on what to do next.\n
• Planned content calendars and wrote posts, announcements, emails, and landing page copy, keeping the brand voice and community rules consistent.
`,
  technologies: [
    "Discord ",
    "X & Telegram",
    "Looker Studio (Data Studio)",
    "Canva / Figma",
    "Excel / Google Sheets"
  ]
}

  ];

  const education = [
    {
      degree: "Diploma in Data Science and Analytics",
       school: "Zetech University",
       period: "January 2024 – Present",
       description: `• Currently pursuing a diploma focused on statistics, data wrangling, and applied machine learning.
• Completed coursework in Python programming, SQL/databases, probability & statistics, data visualization, and ethics in data use.
• Built hands-on projects: KPI dashboards for business performance, a supervised ML classification model, and an ETL pipeline for cleaning and aggregating raw datasets.
• Collaborate on team assignments using Git; document methods and communicate insights for non-technical stakeholders.`,
    },
    {
      degree: "Data Science and Analytics",
      school: "Moringa School",
      period: "July 2022-February 2023",
      description: `• Intensive, project-based training in Data Science & Analytics covering Python, SQL, statistics/probability, and machine learning fundamentals.
• Performed data wrangling and exploratory analysis, engineered features, and built/evaluated models (classification & regression) with scikit-learn.
• Created clear visualizations and dashboards to communicate insights to non-technical stakeholders and support data-driven decisions.
• Practiced reproducible workflows (clean notebooks, version control), experiment tracking, and responsible data/ML ethics.`

    },
    {
      degree: "BSc in Community Health and Development",
      school: "Catholic University Of Eastern Africa",
      period: "November 2020-April 2022"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                    <Badge variant="outline" className="self-start sm:self-auto mt-1 sm:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <div className="text-muted-foreground mb-4 whitespace-pre-line">{exp.description}</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <Badge variant="outline" className="self-start sm:self-auto mt-1 sm:mt-0">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{edu.school}</p>
                  <div className="text-muted-foreground whitespace-pre-line">{edu.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;