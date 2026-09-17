import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories =[
  {
    title: "Data Analyst",
    skills: [
      "Python", "SQL",
      "Pandas", "NumPy", "Statsmodels",
      "Data Cleaning", "Exploratory Data Analysis (EDA)", "Descriptive Statistics",
      "A/B Testing", "Trend Analysis", "KPI Reporting", "Dashboard Design",
      "Power BI", "Tableau", "Microsoft Excel",
      "Matplotlib", "Seaborn"
    ]
  },
  {
    title: "Data Scientist",
    skills: [
      "Python", "SQL", "C",
      "Pandas", "NumPy", "scikit-learn", "Statsmodels",
      "TensorFlow", "PyTorch", "H2O", "AutoGluon",
      "Predictive Modeling", "Classification Modeling", "Time Series Analysis",
      "Natural Language Processing (NLP)", "Deep Learning", "Statistics", "Data Analysis",
      "Matplotlib", "Seaborn"
    ]
  },
  {
    title: "Machine Learning Engineer",
    skills: [
      "Python", "C",
      "TensorFlow", "PyTorch", "H2O", "AutoGluon",
      "scikit-learn", "Pandas", "NumPy",
      "Model Training & Evaluation", "Model Optimization",
      "AWS", "Jupyter Notebook", "Visual Studio Code"
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git", "Jira", "Anaconda", "Google Colab",
      "Jupyter Notebook", "Visual Studio Code", "AWS",
      "Power BI", "Tableau", "Microsoft Excel", "Microsoft Office Suite"
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving", "Critical Thinking", "Time Management",
      "Effective Communication", "Teamwork", "Presentation Skills",
      "Attention to Detail", "Business Acumen"
    ]
  }
]
;

  return (
    <section id="skills" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;