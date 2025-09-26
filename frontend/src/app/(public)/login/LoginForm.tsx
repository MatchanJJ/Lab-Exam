"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  CircleAlert,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";

export function LoginForm() {
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    try {
      await login({
        login: formData.login,
        password: formData.password,
        remember: formData.rememberMe,
        setErrors,
        setStatus: () => {}, // Add a no-op function or your own status handler
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FFFC] to-[#F2FFFC]/90 py-8">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Side - Login Form */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#EDCE5C] p-3 rounded-full mr-3">
                    <img
                      src="/CCE_Logo.png"
                      alt="UM-CCE Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="bg-[#005E11]/10 p-3 rounded-full">
                    <Lock className="h-8 w-8 text-[#005E11]" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-[#005E11]">Welcome Back</h1>
                <p className="text-gray-600 mt-2">Sign in to your UM-CCE account</p>
              </div>

              {/* Error Display */}
              {errors && Object.keys(errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6 rounded-lg flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{errors[Object.keys(errors)[0]][0]}</span>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="login" className="text-sm font-medium text-gray-700">
                    Username or Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="login"
                      name="login"
                      type="text"
                      autoComplete="username"
                      placeholder="Enter your username or email"
                      className="pl-10 h-12 border-gray-300 focus:border-[#005E11] focus:ring-[#005E11] rounded-lg"
                      value={formData.login}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="pl-10 pr-12 h-12 border-gray-300 focus:border-[#005E11] focus:ring-[#005E11] rounded-lg"
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
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      className="h-4 w-4 text-[#005E11] focus:ring-[#005E11] border-gray-300 rounded"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-gray-700">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#005E11] hover:text-[#004A0E] font-medium hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#005E11] to-[#004A0E] hover:from-[#004A0E] hover:to-[#003908] text-[#F2FFFC] font-semibold rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              {/* Footer Links */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-[#005E11] hover:text-[#004A0E] font-medium hover:underline"
                  >
                    Create Account
                  </Link>
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    © 2025 University of Mindanao - College of Computing Education
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image/Branding */}
            <div 
              className="hidden lg:flex items-center justify-center p-12 bg-cover bg-center bg-no-repeat relative"
              style={{
                backgroundImage: 'url(/dpt.jpg)',
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#005E11]/80 to-[#004A0E]/80 backdrop-blur-sm"></div>
              
              <div className="relative text-center text-[#F2FFFC] max-w-md z-10">
                <div className="mb-6">
                  <div className="bg-[#EDCE5C] p-6 rounded-full inline-block mb-4">
                    <img
                      src="/CCE_Logo.png"
                      alt="UM-CCE Logo"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Welcome to UM-CCE</h2>
                <p className="text-[#F2FFFC]/80 text-lg mb-6">
                  University of Mindanao College of Computing Education - Where technology meets innovation.
                </p>
                {/* Placeholder for your image */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}