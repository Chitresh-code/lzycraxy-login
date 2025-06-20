"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Mail, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LzyCrazyHomepage() {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Logo and Illustration */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/illustration.png"
                  alt="LzyCrazy Illustration"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search here..."
                  className="pl-12 py-4 text-lg rounded-full border-gray-200 bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                About Us
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                LzyCrazy Services
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                LzyCrazy Marketplace
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                We Are Hiring
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                LzyCrazy News
              </Button>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="max-w-md mx-auto w-full">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {!isSignup ? (
                /* Login Form */
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-10 py-3 border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input type="password" placeholder="Password" className="pl-10 py-3 border-gray-200 rounded-lg" />
                    </div>
                  </div>

                  <div className="text-right">
                    <button className="text-blue-500 hover:text-blue-600 text-sm">Forgot Password?</button>
                  </div>

                  <Button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium">
                    Login
                  </Button>

                  <div className="text-center text-gray-500 text-sm">or continue with</div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="py-3 border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50"
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
                      className="py-3 border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600"
                    onClick={() => setIsSignup(true)}
                  >
                    Create New Account
                  </Button>
                </div>
              ) : (
                /* Signup Form */
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input type="text" placeholder="Full Name" className="pl-10 py-3 border-gray-200 rounded-lg" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-3">
                        <span className="text-sm">🇮🇳</span>
                        <span className="ml-1 text-sm">+91</span>
                      </div>
                      <Input type="tel" placeholder="Phone Number" className="flex-1 py-3 border-gray-200 rounded-lg" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-10 py-3 border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input type="password" placeholder="Password" className="pl-10 py-3 border-gray-200 rounded-lg" />
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      We may use your contact information to improve your experience.{" "}
                      <button className="text-blue-500 hover:text-blue-600">Learn more</button>
                    </p>
                    <p>
                      By clicking Sign Up, you agree to our{" "}
                      <button className="text-blue-500 hover:text-blue-600">Terms of Service</button>,{" "}
                      <button className="text-blue-500 hover:text-blue-600">Privacy Policy</button>, and{" "}
                      <button className="text-blue-500 hover:text-blue-600">Cookies Policy</button>
                    </p>
                  </div>

                  <Button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium">
                    Signup
                  </Button>

                  <div className="text-center">
                    <button className="text-blue-500 hover:text-blue-600 text-sm" onClick={() => setIsSignup(false)}>
                      Already have an account?
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>India</span>
              <span>|</span>
              <span>LzyCrazy offered in:</span>
              <div className="flex space-x-4">
                <button className="text-blue-500 hover:text-blue-600">हिन्दी</button>
                <button className="text-blue-500 hover:text-blue-600">English</button>
                <button className="text-blue-500 hover:text-blue-600">বাংলা</button>
                <button className="text-blue-500 hover:text-blue-600">العربية</button>
              </div>
            </div>
            <div className="flex space-x-6">
              <button className="hover:text-gray-800">Privacy</button>
              <button className="hover:text-gray-800">Terms</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
