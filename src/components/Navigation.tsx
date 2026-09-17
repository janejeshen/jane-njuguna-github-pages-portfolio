import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className={`text-xl font-bold bg-gradient-primary bg-clip-text transition-all duration-300 ${
            isScrolled ? "text-transparent" : "text-white"
          }`}>
            Portfolio
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["about", "projects", "skills", "experience", "certifications", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors duration-300 capitalize ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-primary hover:shadow-teal transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;