import { FileText, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="gradient-btn rounded-lg p-1.5">
              <FileText className="h-4 w-4" />
            </div>
            <span className="font-display font-bold text-foreground">
              DocuGov <span className="gradient-text">AI</span>
            </span>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </div>

          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          © 2026 DocuGov AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
