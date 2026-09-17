import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, Trophy, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Science and Analytics",
      issuer: "Moringa School",
      date: "February 2023",
      // credentialId: "MSC-DSA-2023-001",
      description: "Intensive, project-based training in Data Science & Analytics covering Python, SQL, statistics/probability, and machine learning fundamentals.",
      verifyUrl: "https://drive.google.com/file/d/1ZPlnxL2nlyQqn4j-0-yYygKLNQNMpfQg/view?usp=sharing",
      type: "certification"
    },
    {

      "title": "Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      "issuer": "Tata Consultancy Services (via Forage)",
      "date": "May 2025",
      "description": "Completed a virtual job simulation focused on business data visualization. Developed executive-ready visuals, framed strategic questions for senior leadership, and presented insights to support effective decision-making.",
      "verifyUrl": "https://www.theforage.com/simulations/tata/data-visualisation-empowering-business",
      "type": "certification"

    }


  ];

  const achievements = [
    {
      title: "Top Female participant in Côte d’Ivoire Byte-Sized Agriculture Challenge",
      issuer: "Zindi Afria",
      date: "July 2025",
      description: "Awarded recognition as the Top Female Participant in the Côte d’Ivoire Byte-Sized Agriculture Challenge organized by Zindi Africa, for demonstrating exceptional data science skills, innovative problem-solving, and delivering high-quality project outcomes during the 8-month competition.",
      type: "achievement"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and academic achievements that showcase my dedication to excellence
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Award className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Credential ID</p>
                    <p className="text-sm font-mono text-foreground">{cert.credentialId}</p>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    className="flex items-center space-x-1 text-primary hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    <span>Verify</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary text-center">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Trophy className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground">{achievement.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Star size={12} />
                    <span>{achievement.date}</span>
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;