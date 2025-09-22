import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">Talk</span> Startup <span className="text-accent">To Me</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get In Touch With Us Via Email Or Social Media
          </p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              asChild 
              className="group"
            >
              <a href="mailto:ecell@rvu.edu.in">
                <Mail className="w-4 h-4 mr-2" />
                ecell@rvu.edu.in
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:border-primary/40 bg-transparent" 
              asChild
            >
              <a 
                href="https://github.com/ECell-RVUniversity" 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:border-primary/40 bg-transparent" 
              asChild
            >
              <a 
                href="https://www.linkedin.com/company/entrepreneurship-cell-rv-university/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="hover:border-primary/40 bg-transparent" 
              asChild
            >
              <a 
                href="https://www.instagram.com/ecell_rvu?igsh=ZTh1NHlwcnRzcGlu" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground">
              © 2025 ECell RV University. All rights reserved. Made with ❤️ for the startup community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}