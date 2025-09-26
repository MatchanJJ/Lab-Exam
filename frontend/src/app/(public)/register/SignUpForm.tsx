"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { CircleAlert, Eye, EyeOff, Lock, Mail, User, AtSign, Globe, UserPlus } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import InputError from "@/components/ui/InputError";

const countries = [
  "Philippines", "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "China",
  "Brazil", "India", "South Korea", "Italy", "Spain", "Netherlands", "Sweden", "Norway",
  "Singapore", "Malaysia", "Thailand", "Indonesia", "Vietnam", "Other"
];

const hobbies = [
  "Programming", "Gaming", "Reading", "Sports", "Music", "Cooking", "Travel", "Photography", "Art",
  "Writing", "Movies", "Dancing", "Hiking", "Swimming", "Cycling", "Gardening"
];

export function SignUpForm() {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    hobbies: [] as string[],
    country: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  // Client-side validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email format is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm password";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (formData.hobbies.length === 0) newErrors.hobbies = "Please select at least one hobby";
    if (!formData.country) newErrors.country = "Country is required";

    setClientErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Real-time validation
  useEffect(() => {
    if (Object.keys(clientErrors).length > 0) {
      const timer = setTimeout(() => {
        validateForm();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [formData, clientErrors]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleHobbyChange = (hobby: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      hobbies: checked 
        ? [...prev.hobbies, hobby]
        : prev.hobbies.filter(h => h !== hobby)
    }));
  };

  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      country: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});
    
    await register({
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      gender: formData.gender,
      hobbies: formData.hobbies,
      country: formData.country,
      setErrors,
    });
    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
        {/* UM CCE Header */}
        <div className="bg-gradient-to-r from-[#188c2d] via-[#188c2d] to-[#004A0E] px-6 py-8 text-[#F2FFFC] text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#EDCE5C] p-3 rounded-full mr-4">
              <img
                src="/nick.jpg"
                alt="UM-CCE Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
            </div>
            <div className="bg-[#F2FFFC]/10 p-3 rounded-full">
              <UserPlus className="h-10 w-10 text-[#F2FFFC]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Join UM-CCE</h1>
          <p className="text-[#F2FFFC]/80 mt-2">College of Computing Education - Student Registration</p>
        </div>

        <CardHeader className="pb-4 pt-8">
          <CardTitle className="text-3xl font-bold text-center text-gray-900">
            Create Your Account
          </CardTitle>
          <CardDescription className="text-center text-lg text-gray-600 mt-2">
            Start your journey in computing education
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          {errors && Object.keys(errors).length > 0 && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6 rounded-lg flex items-center gap-2">
              <CircleAlert className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{errors[Object.keys(errors)[0]][0]}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-[#F2FFFC] rounded-xl p-6 border border-[#188c2d]/10">
              <h3 className="text-xl font-semibold text-[#188c2d] mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Juan Dela Cruz"
                      className="pl-10 h-12 border-gray-300 focus:border-[#188c2d] focus:ring-[#188c2d]"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {clientErrors.name && <InputError messages={[clientErrors.name]} />}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                    Username *
                  </Label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="jdelacruz"
                      className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {clientErrors.username && <InputError messages={[clientErrors.username]} />}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juan@example.com"
                    className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {clientErrors.email && <InputError messages={[clientErrors.email]} />}
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                Account Security
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password *
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter secure password"
                      className="pl-10 pr-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {clientErrors.password && <InputError messages={[clientErrors.password]} />}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm Password *
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {clientErrors.confirmPassword && <InputError messages={[clientErrors.confirmPassword]} />}
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Additional Information
              </h3>
              
              <div className="space-y-6">
                {/* Gender */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    Gender *
                  </Label>
                  <RadioGroup value={formData.gender} onValueChange={handleGenderChange}>
                    <div className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </div>
                  </RadioGroup>
                  {clientErrors.gender && <InputError messages={[clientErrors.gender]} />}
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Country *
                  </Label>
                  <Select value={formData.country} onValueChange={handleCountryChange}>
                    <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country.toLowerCase()}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {clientErrors.country && <InputError messages={[clientErrors.country]} />}
                </div>

                {/* Hobbies */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    Hobbies & Interests * (Select at least one)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {hobbies.map((hobby) => (
                      <div key={hobby} className="flex items-center space-x-2">
                        <Checkbox
                          id={hobby}
                          checked={formData.hobbies.includes(hobby)}
                          onCheckedChange={(checked) => handleHobbyChange(hobby, checked as boolean)}
                        />
                        <Label
                          htmlFor={hobby}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {hobby}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {clientErrors.hobbies && <InputError messages={[clientErrors.hobbies]} />}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-[#188c2d] to-[#004A0E] hover:from-[#004A0E] hover:to-[#003908] text-[#F2FFFC] font-semibold text-lg rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create My Account
                    <UserPlus className="h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-500 font-medium hover:underline"
              >
                Sign In Here
              </Link>
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                © 2025 University of Mindanao - College of Computing Education
              </p>
              <p className="text-xs text-gray-500 mt-1">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}