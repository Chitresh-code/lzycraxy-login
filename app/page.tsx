"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Mail, Lock, User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LzyCrazyHomepage() {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Logo and Illustration */}
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/illustration.png"
                    alt="LzyCrazy Illustration"
                    width={280}
                    height={180}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Search for services, products, or entertainment..."
                  className="pl-14 pr-6 py-5 text-lg rounded-2xl border-0 bg-white shadow-lg shadow-slate-200/50 focus:shadow-xl focus:shadow-blue-200/30 transition-all duration-300 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200 font-medium"
                >
                  About Us
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200 font-medium"
                >
                  Services
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200 font-medium"
                >
                  Marketplace
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200 font-medium"
                >
                  Careers
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-4 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200 font-medium"
                >
                  News
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 p-8 border border-white/20">
                {!isSignup ? (
                  /* Login Form */
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
                      <p className="text-slate-500">Sign in to your account</p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <Input
                          type="email"
                          placeholder="Email Address"
                          className="pl-12 pr-4 py-4 border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 transition-all duration-200"
                        />
                      </div>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <Input
                          type="password"
                          placeholder="Password"
                          className="pl-12 pr-4 py-4 border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors">
                        Forgot Password?
                      </button>
                    </div>

                    <Button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                      Sign In
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-slate-500">or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="py-4 border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-all duration-200 hover:shadow-md"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="py-4 border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-all duration-200 hover:shadow-md"
                      >
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>

                    <div className="text-center pt-4">
                      <span className="text-slate-600">{"Don't have an account? "}</span>
                      <button
                        className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                        onClick={() => setIsSignup(true)}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Signup Form */
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold text-slate-800">Create Account</h2>
                      <p className="text-slate-500">Join LzyCrazy today</p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <Input
                          type="text"
                          placeholder="Full Name"
                          className="pl-12 pr-4 py-4 border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 transition-all duration-200"
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 min-w-[80px]">
                          <span className="text-lg">🇮🇳</span>
                          <span className="ml-2 text-sm font-medium text-slate-600">+91</span>
                        </div>
                        <div className="relative group flex-1">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                          <Input
                            type="tel"
                            placeholder="Phone Number"
                            className="pl-12 pr-4 py-4 border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <Input
                          type="email"
                          placeholder="Email Address"
                          className="pl-12 pr-4 py-4 border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 transition-all duration-200"
                        />
                      </div>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <Input
                          type="password"
                          placeholder="Create Password"
                          className="pl-12 pr-4 py-4 border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="text-sm text-slate-600 space-y-3 bg-slate-50/50 rounded-xl p-4">
                      <p>
                        We may use your contact information to improve your experience.{" "}
                        <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                          Learn more
                        </button>
                      </p>
                      <p>
                        By signing up, you agree to our{" "}
                        <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                          Terms of Service
                        </button>
                        ,{" "}
                        <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                          Privacy Policy
                        </button>
                        , and{" "}
                        <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                          Cookie Policy
                        </button>
                      </p>
                    </div>

                    <Button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                      Create Account
                    </Button>

                    <div className="text-center pt-4">
                      <span className="text-slate-600">Already have an account? </span>
                      <button
                        className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                        onClick={() => setIsSignup(false)}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200/60">
          <div className="flex flex-wrap justify-between items-center text-sm text-slate-600 max-w-7xl mx-auto">
            <div className="flex items-center space-x-6">
              <span className="font-medium">India</span>
              <span className="text-slate-400">|</span>
              <span>Available in:</span>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">
                  हिन्दी
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">
                  English
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">
                  বাংলা
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">
                  العربية
                </button>
              </div>
            </div>
            <div className="flex space-x-8">
              <button className="hover:text-slate-800 font-medium transition-colors">Privacy</button>
              <button className="hover:text-slate-800 font-medium transition-colors">Terms</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
