/* eslint-disable @next/next/no-img-element */
"use client";

import { useAuth } from "@/hooks/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, AtSign, Globe, Heart, LogOut, BookOpen, Award } from "lucide-react";

export default function Dashboard() {
  const { user, logout } = useAuth({ middleware: "auth" });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FFFC] to-[#F2FFFC]/90">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#188c2d] via-[#188c2d] to-[#004A0E] text-[#F2FFFC] p-8 rounded-2xl mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="bg-[#EDCE5C] p-3 rounded-full flex items-center justify-center">
                <img
                  src="/nick.jpg"
                  alt="UM-CCE Logo"
                  className="h-10 w-10 object-cover rounded-full"
                />
                </div>
              <div>
                <h1 className="text-3xl font-bold">Welcome to UM-CCE Portal</h1>
                <p className="text-[#F2FFFC]/80">College of Computing Education</p>
              </div>
            </div>
            <Button 
              onClick={logout}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Card */}
        <Card className="mb-8 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="bg-[#EDCE5C] p-2 rounded-full">
                <img
                  src="/nick.jpg"
                  alt="UM-CCE Logo"
                  className="h-10 w-10 object-cover rounded-full"
                />
              </div>
              Hello, {user.name}! 🎓
            </CardTitle>
            <p className="text-[#F2FFFC]/80 mt-2">
              Welcome to your UM-CCE student portal. Here&apos;s your registered information:
            </p>
          </CardHeader>
        </Card>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#188c2d]">
                <BookOpen className="h-5 w-5" />
                Student Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <Badge className="bg-[#188c2d]/10 text-[#188c2d] border-[#188c2d]/20">Active</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Program:</span>
                  <span className="font-medium">Computing Education</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">Undergraduate</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Info */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#188c2d]">
                <Award className="h-5 w-5" />
                Academic Info
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Level:</span>
                  <span className="font-medium">1st Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Semester:</span>
                  <span className="font-medium">1st Semester</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AY:</span>
                  <span className="font-medium">2024-2025</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-lg border-0 bg-white/95">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#188c2d]">
                <img
                  src="/nick.jpg"
                  alt="UM-CCE Logo"
                  className="h-10 w-10 object-cover rounded-full"
                />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full justify-start bg-[#188c2d]/10 text-[#188c2d] border-[#188c2d]/20 hover:bg-[#188c2d]/20" variant="outline">
                  View Grades
                </Button>
                <Button className="w-full justify-start bg-[#188c2d]/10 text-[#188c2d] border-[#188c2d]/20 hover:bg-[#188c2d]/20" variant="outline">
                  Class Schedule  
                </Button>
                <Button className="w-full justify-start bg-[#188c2d]/10 text-[#188c2d] border-[#188c2d]/20 hover:bg-[#188c2d]/20" variant="outline">
                  Course Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Profile Details */}
        <Card className="shadow-xl border-0 bg-white/95">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <p className="text-[#F2FFFC]/80">Your registered details in the UM-CCE system</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#F2FFFC] rounded-lg border border-[#188c2d]/10">
                  <div className="bg-[#188c2d] p-2 rounded-lg">
                    <User className="h-5 w-5 text-[#F2FFFC]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#188c2d]">Full Name</p>
                    <p className="text-gray-700 text-lg">{user.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[#F2FFFC] rounded-lg border border-[#188c2d]/10">
                  <div className="bg-[#188c2d] p-2 rounded-lg">
                    <AtSign className="h-5 w-5 text-[#F2FFFC]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#188c2d]">Username</p>
                    <p className="text-gray-700 text-lg">{user.username}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[#F2FFFC] rounded-lg border border-[#188c2d]/10">
                  <div className="bg-[#188c2d] p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-[#F2FFFC]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#188c2d]">Email Address</p>
                    <p className="text-gray-700 text-lg">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#F2FFFC] rounded-lg border border-[#188c2d]/10">
                  <div className="bg-[#188c2d] p-2 rounded-lg">
                    <div className="h-5 w-5 bg-[#F2FFFC] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-[#188c2d]">Gender</p>
                    <p className="text-gray-700 text-lg capitalize">{user.gender}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[#F2FFFC] rounded-lg border border-[#188c2d]/10">
                  <div className="bg-[#188c2d] p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-[#F2FFFC]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#188c2d]">Country</p>
                    <p className="text-gray-700 text-lg capitalize">{user.country}</p>
                  </div>
                </div>

                {/* Hobbies */}
                <div className="flex items-start gap-4 p-4 bg-[#F2FFFC] rounded-lg border border-[#188c2d]/10">
                  <div className="bg-[#188c2d] p-2 rounded-lg">
                    <Heart className="h-5 w-5 text-[#F2FFFC]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#188c2d] mb-3">Hobbies & Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {user.hobbies?.map((hobby: string) => (
                        <Badge 
                          key={hobby} 
                          className="bg-[#EDCE5C]/20 text-[#188c2d] hover:bg-[#EDCE5C]/30 border-[#EDCE5C]/50"
                        >
                          {hobby}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center py-8 border-t border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#EDCE5C] p-2 rounded-full mr-3">
              <img
                src="/nick.jpg"
                alt="UM-CCE Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold text-[#188c2d]">University of Mindanao</p>
              <p className="text-gray-600">College of Computing Education</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 UM-CCE Student Portal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
