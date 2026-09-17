import { Mail, Heart } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { Icon: SiGithub, href: "https://github.com/janejeshen", label: "GitHub" },
    { Icon: SiLinkedin, href: "https://www.linkedin.com/in/jane-njuguna", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:janenjuguna550@gmail.com", label: "Email" }, // updated email
  ];

  return (
    <footer className="bg-deep-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-gray-400">Turning data into decisions</p>
          </div>

          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            {links.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-400 hover:text-primary transition-colors duration-300 p-2"
                aria-label={label}
                title={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart size={16} className="text-primary mx-1" />
            <span>by Jane Njuguna</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
