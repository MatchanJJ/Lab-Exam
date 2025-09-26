"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { 
  Users, 
  Award, 
  Code, 
  Database, 
  Globe, 
  Lightbulb,
  ChevronRight,
  Star,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { title } from "process";

export default function LandingPage() {
  const programs = [
    {
      title: "Bachelor of Science in Computer Science",
      description: "Comprehensive program covering algorithms, software engineering, and computer systems.",
      icon: Code,
      duration: "4 Years",
      type: "Undergraduate"
    },
    {
      title: "Bachelor of Science in Information Technology",
      description: "Focus on practical IT skills, system administration, and enterprise technologies.",
      icon: Database,
      duration: "4 Years",
      type: "Undergraduate"
    },
    {
      title: "Bachelor of Science in Information Systems",
      description: "Bridge between technology and business, focusing on system design and management.",
      icon: Globe,
      duration: "4 Years",
      type: "Undergraduate"
    },
    {
        title: "Bachelor of Library and Information Science",
        description: "Program focused on library management, information organization, and digital archiving.",
        icon: Users,
        duration: "4 Years",
        type: "Undergraduate"
    },
    {
        title: "Bachelor of Science in Entertainment and Multimedia Computing",
        description: "Creative program combining computing with digital media, animation, and game design.",
        icon: Lightbulb,
        duration: "4 Years",
        type: "Undergraduate"
    },
    {
        title: "Bachelor of Multimedia Arts",
        description: "Interdisciplinary program blending art, design, and technology for digital media creation.",
        icon: Star,
        duration: "4 Years",
        type: "Undergraduate"
    }

    
  ];

  const features = [
    {
      title: "Expert Faculty",
      description: "Learn from industry professionals and PhD holders with extensive experience.",
      icon: Users
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art computer laboratories and cutting-edge technology.",
      icon: Lightbulb
    },
    {
      title: "Industry Partnerships",
      description: "Strong connections with tech companies for internships and job placements.",
      icon: Award
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "2000+", label: "Graduates" },
    { number: "95%", label: "Employment Rate" },
    { number: "50+", label: "Industry Partners" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#188c2d] via-[#188c2d] to-[#004A0E] text-[#F2FFFC] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Shape Your Future in
                  <span className="text-[#EDCE5C]"> Computing</span>
                </h1>
                <p className="text-xl text-[#F2FFFC]/80 leading-relaxed">
                  Join the University of Mindanao College of Computing Education and become part of the next generation of technology leaders and innovators.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#EDCE5C] hover:bg-[#E6C14A] text-[#188c2d] font-semibold">
                  <Link href="/register" className="flex items-center">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#188c2d text-[#188c2d] hover:bg-[#188c2d] hover:text-[#F2FFFC]">
                  <Link href="#programs">Explore Programs</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#F2FFFC]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#F2FFFC]/20">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-[#EDCE5C]">{stat.number}</div>
                      <div className="text-sm text-[#F2FFFC]/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose UM-CCE?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our college provides world-class education with a focus on practical skills and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-[#188c2d]/20">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#188c2d] to-[#004A0E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-10 w-10 text-[#F2FFFC]" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-r from-[#F2FFFC] to-[#F2FFFC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 my-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of computing programs designed for the digital age.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col h-full"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#188c2d] to-[#004A0E] rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#F2FFFC]" />
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{program.type}</div>
                        <div className="font-medium">{program.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#188c2d] transition-colors">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <CardDescription className="text-gray-600 mb-6">
                      {program.description}
                    </CardDescription>
                    <div className="mt-auto">
                      <Button className="w-full bg-[#188c2d] hover:bg-[#004A0E] text-[#F2FFFC]" asChild>
                        <Link href="/register">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="min-h-[100vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About UM-CCE</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  The University of Mindanao College of Computing Education has been at the forefront of 
                  technology education in the Philippines for over 15 years. We are committed to providing 
                  world-class education that prepares students for successful careers in the rapidly evolving 
                  field of computing.
                </p>
                <p>
                  Our programs are designed to combine theoretical knowledge with practical skills, ensuring 
                  our graduates are industry-ready and capable of driving innovation in their chosen fields.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="h-5 w-5 text-[#EDCE5C] fill-current" />
                <span className="text-gray-700">CHED Recognized Programs</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#188c2d] to-[#004A0E] rounded-2xl p-8 text-[#F2FFFC]">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#EDCE5C]" />
                  <span>Matina Campus, Davao City, Philippines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#EDCE5C]" />
                  <span>cce@umindanao.edu.ph</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#EDCE5C]" />
                  <span>(082) 300-5456</span>
                </div>
              </div>
              <Button variant="secondary" size="lg" className="w-full mt-6 bg-[#EDCE5C] hover:bg-[#E6C14A] text-[#188c2d]" asChild>
                <Link href="/register">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#188c2d] text-[#F2FFFC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#EDCE5C] p-2 rounded-full">
                  <img
                    src="/nick.jpg"
                    alt="UM-CCE Logo"
                    className="h-10 w-10 object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">UM-CCE</div>
                  <div className="text-sm text-[#F2FFFC]/70">College of Computing Education</div>
                </div>
              </div>
              <p className="text-[#F2FFFC]/70">
                Empowering students with cutting-edge computing education and preparing them 
                for successful careers in technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-[#F2FFFC]/70">
                <Link href="#programs" className="block hover:text-[#F2FFFC] transition-colors">Programs</Link>
                <Link href="#about" className="block hover:text-[#F2FFFC] transition-colors">About</Link>
                <Link href="/register" className="block hover:text-[#F2FFFC] transition-colors">Register</Link>
                <Link href="/login" className="block hover:text-[#F2FFFC] transition-colors">Login</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <div className="space-y-2 text-[#F2FFFC]/70">
                <div className="hover:text-[#F2FFFC] transition-colors cursor-pointer">Computer Science</div>
                <div className="hover:text-[#F2FFFC] transition-colors cursor-pointer">Information Technology</div>
                <div className="hover:text-[#F2FFFC] transition-colors cursor-pointer">Information Systems</div>
                <div className="hover:text-[#F2FFFC] transition-colors cursor-pointer">Library and Information Science</div>
                <div className="hover:text-[#F2FFFC] transition-colors cursor-pointer">Entertainment and Multimedia Computing</div>
                <div className="hover:text-[#F2FFFC] transition-colors cursor-pointer">Multimedia Arts</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#F2FFFC]/20 mt-8 pt-8 text-center text-[#F2FFFC]/70">
            <p>&copy; 2025 University of Mindanao - College of Computing Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}