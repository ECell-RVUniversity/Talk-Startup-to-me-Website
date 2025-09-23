"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Users, Heart, Mail, MessageCircle, File } from "lucide-react"

export function SponsorsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "Maximize Visibility",
      description: "Feature your brand across app, website, social media (30k+ reach), newsletters, and event swag.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Engage & Activate",
      description: "Host workshops, showcase tech, and integrate product tasks to reach  developers directly.",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Champion gender equity in tech through measurable support—mentorship hours, project outcomes, and participant placements.",
      color: "text-primary",
    },
  ]

  const contacts = [
    {
      name: "Ayush S Kulkarni",
      role: "PR Lead",
      whatsapp: "+918660697430",
      email: "ayushskulkarnibtech24@rvu.edu.in",
    },
    {
      name: "Vanshaj Garg",
      role: "President",
      whatsapp: "+919649353930",
      email: "vanshaj.btech23@rvu.edu.in",
    },
  ]

  const socialLinks = [
    { 
      name: "Whatsapp", 
      url: "https://chat.whatsapp.com/J0MfKUwIZ6J8WfemIBbdlJ"
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/company/entrepreneurship-cell-rv-university/"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/ecell_rvu?igsh=ZTh1NHlwcnRzcGlu"
    },
  ]

  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Sponsor</span> Us Or Become Our <span className="text-accent">Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in empowering the next generation of developers and making a lasting impact in the tech community
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center border-2 hover:border-primary/30 hover:shadow-lg transition">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      benefit.color === "text-primary" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Cards */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-10">Get in Touch</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contacts.map((person, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/30 transition">
                <CardContent className="p-6 text-left">
                  <h4 className="text-xl font-semibold">{person.name}</h4>
                  <p className="text-muted-foreground mb-4">{person.role}</p>

                  <div className="space-y-3">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${person.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                      {person.name === "Ayush S Kulkarni" && (
                        <span className="ml-2">| Phone: <span className="underline">+91 86606 97430</span></span>
                      )}
                    </a>
                    {/* Email */}
                    <a
                      href={`mailto:${person.email}?subject=ECell%20Partnership%20Inquiry&body=Hello%20${person.name},`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Mail className="w-5 h-5" /> {person.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Links */}
        
        {/* Join Us Form */}
      <div className="relative text-center mb-20 px-4">
  {/* Background Gradient Animation */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x opacity-20 rounded-3xl blur-3xl"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
      Join ECell RVU 
    </h3>

    <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 animate-fadeIn">
      <b>Connect with us and become part of our journey</b>
    </p>

    <div className="max-w-2xl mx-auto">
      <Button size="lg" asChild className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
        <a 
          href="https://linktr.ee/ecell.rvu" 
          target="_blank" 
          rel="noreferrer"
        >
          Visit Our Linktree
        </a>
      </Button>
    </div>
  </div>
</div>


        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can work together to create meaningful impact in the startup ecosystem.
              </p>
              <Button size="lg" asChild className="group">
                <a href="mailto:ecell@rvu.edu.in?subject=Partnership%20Inquiry">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us for Partnership
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}