"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, BookOpen, Users, LogIn, UserPlus, Home } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Programs", href: "#programs", icon: BookOpen },
    { name: "About", href: "#about", icon: Users },
    { name: "Login", href: "/login", icon: LogIn },
    { name: "Register", href: "/register", icon: UserPlus },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <nav className="bg-gradient-to-r from-[#188c2d] via-[#188c2d] to-[#004A0E] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-[#EDCE5C] p-2 rounded-full group-hover:bg-[#E6C14A] transition-colors">
              <img
                src="/nick.jpg"
                alt="UM-CCE Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
            </div>
            <div className="text-[#F2FFFC]">
              <div className="font-bold text-xl">UM-CCE</div>
              <div className="text-sm text-[#F2FFFC]/80">College of Computing Education</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[#EDCE5C] text-[#188c2d] shadow-md"
                      : "text-[#F2FFFC]/90 hover:text-[#F2FFFC] hover:bg-[#188c2d]/70"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F2FFFC] hover:text-[#EDCE5C] transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#188c2d]/95 backdrop-blur-sm">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[#EDCE5C] text-[#188c2d]"
                      : "text-[#F2FFFC]/90 hover:text-[#F2FFFC] hover:bg-[#188c2d]/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}