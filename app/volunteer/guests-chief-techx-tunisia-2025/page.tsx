"use client"

import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function GuestsChiefPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push("/#volunteer")}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Volunteer Experience</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-md border border-blue-200 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <img
                  src="/logos/ieee-cs.png"
                  alt="IEEE CS SYP Activities TechX Tunisia 2025 logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2">
                Guests Chief
              </h1>
              <p className="text-lg text-blue-600 font-medium mb-2">
                IEEE CS SYP Activities TechX Tunisia 2025
              </p>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <span>Aug 2025 - Sep 2025</span>
              </div>
              <a
                href="https://techx.tn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:gap-3 group/link"
              >
                Visit Organization Website
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Image */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
                <img
                  src="/logos/ieee-cs.png"
                  alt="TechX Tunisia 2025 Event"
                  className="w-full h-full object-contain p-8 opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/80 via-blue-900/40 to-purple-900/40">
                  <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-500">
                    <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                      TechX
                    </div>
                    <div className="text-2xl text-gray-200">Event images will be uploaded soon</div>
                    <div className="mt-4 flex gap-2 justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Gallery */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
                Event Gallery
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-300 group"
                  >
                    <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white opacity-50 group-hover:opacity-100 transition-opacity">
                          <span className="text-xl">📷</span>
                        </div>
                        <span className="text-xs">Gallery {i}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* About & Responsibilities */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-xl">📋</span>
                </div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  About & Responsibilities
                </h2>
              </div>
              <div className="prose prose-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  As the Guests Chief for TechX Tunisia 2025, I was responsible for coordinating and managing all guest-related activities for this major tech conference. This role involved directly contacting international speakers, startup founders, and industry experts to invite them to participate in the event. I successfully managed relationships with multiple international speakers, ensuring their involvement. My efforts contributed significantly to making TechX Tunisia 2025 a successful event, attracting high-quality speakers and engaging content.
                </p>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl hover:border-green-300 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent">
                  Key Responsibilities
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Contacted and coordinated with international speakers and startups</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Managed speaker logistics and communication</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Coordinated directly with international industry experts</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Ensured successful speaker participation and engagement</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Contributed to overall event success and quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
