"use client";

import { Navigation } from "@/components/ui/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
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
    { number: "70+", label: "Years of Excellence" },
    { number: "5000+", label: "Graduates HBD Sir" },
    { number: "95%", label: "Employment Rate" },
    { number: "100+", label: "Industry Partners" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Shape Your Future in
                  <span className="text-yellow-400"> Computing</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Join the University of Mindanao College of Computing Education and become part of the next generation of technology leaders and innovators HBD SIR.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold">
                  <Link href="/register" className="flex items-center">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Link href="#programs">Explore Programs</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
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
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-blue-100">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-10 w-10 text-white" />
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
      <section id="programs" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-20 text-center space-y-4 my-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-8">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of computing programs designed for the digital age.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{program.type}</div>
                        <div className="font-medium">{program.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6">
                      {program.description}
                    </CardDescription>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/register">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

    <section id="about" className="min-h-screen mt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="mt-40 text-4xl font-bold text-gray-900">About UM-CCE</h2>
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
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-gray-700">CHED Recognized Programs</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Matina Campus, Davao City, Philippines</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>cce@umindanao.edu.ph</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>(082) 300-5456</span>
              </div>
            </div>
            <Button variant="secondary" size="lg" className="w-full mt-6" asChild>
              <Link href="/register">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-400 p-2 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <div className="font-bold text-lg">UM-CCE</div>
                  <div className="text-sm text-gray-400">College of Computing Education</div>
                </div>
              </div>
              <p className="text-gray-400">
                Empowering students with cutting-edge computing education and preparing them 
                for successful careers in technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="#programs" className="block hover:text-white transition-colors">Programs</Link>
                <Link href="#about" className="block hover:text-white transition-colors">About</Link>
                <Link href="/register" className="block hover:text-white transition-colors">Register</Link>
                <Link href="/" className="block hover:text-white transition-colors">Login</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Computer Science</div>
                <div className="hover:text-white transition-colors cursor-pointer">Information Technology</div>
                <div className="hover:text-white transition-colors cursor-pointer">Information Systems</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 University of Mindanao - College of Computing Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}