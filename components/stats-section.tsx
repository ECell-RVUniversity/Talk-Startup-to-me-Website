export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Guest <span className="text-primary">Speaker</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mr. Arshdeep Singh
          </p>
        </div>

        {/* Guest Speaker Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - GIF placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {/* Replace src with your GIF path */}
              <img 
                src="/Arshdeep.gif" 
                alt="Mr. Arshdeep Singh Animation"
                className="w-full h-auto rounded-lg shadow-2xl border-2 border-primary/20"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                About <span className="text-primary">Mr. Arshdeep Singh</span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                Mr. Arshdeep Singh is a product-driven entrepreneur and engineer with extensive 
                experience in building and scaling technology solutions within the startup ecosystem. 
                As the Founder & CEO of Edock and the driving force behind Decodes, he specializes 
                in creating user-friendly digital products that combine clean design, scalable 
                front-end systems, and robust back-end architecture.
              </p>
              
              <p className="mb-4">
                Beyond product development, Mr. Singh is deeply committed to mentoring emerging 
                entrepreneurs and student innovators. Known for his hands-on approach, from shaping 
                user experience to writing production-grade code, he collaborates with early-stage 
                founders and tech teams to refine ideas into practical, scalable, and impactful solutions.
              </p>
              
              <p>
                His unique blend of technical expertise and entrepreneurial insight makes him an 
                inspiring guide for students venturing into startups.
              </p>
            </div>
            
            {/* Optional: Add some highlight badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Founder & CEO
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Product Engineer
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Startup Mentor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}