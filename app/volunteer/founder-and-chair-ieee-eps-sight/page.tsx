"use client"

import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"

export default function FounderChairSIGHTPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-amber-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push("/#volunteer")}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-all duration-300 hover:gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Volunteer Experience</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-8 mb-8 border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-amber-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-md border border-orange-200 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <img
                  src="/logos/ieee-eps-sight.png"
                  alt="IEEE EPS SIGHT logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-amber-800 bg-clip-text text-transparent mb-2">
                Founder and Chair
              </h1>
              <p className="text-lg text-orange-600 font-medium mb-2">
                IEEE EPS SIGHT
              </p>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <div className="p-1.5 bg-orange-100 rounded-lg">
                  <Calendar className="w-4 h-4 text-orange-600" />
                </div>
                <span>Jun 2024 - Feb 2025</span>
              </div>
              <a
                href="https://ieee.org/sight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-medium rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg hover:gap-3 group/link"
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
              <div className="relative aspect-video bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50 overflow-hidden">
                <img
                  src="/logos/ieee-eps-sight.png"
                  alt="IEEE EPS SIGHT Event"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>

            {/* Event Gallery */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text text-transparent mb-4">
                Event Gallery
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="aspect-video bg-gradient-to-br from-orange-100 to-amber-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border border-orange-300 group"
                  >
                    <div className="w-full h-full flex items-center justify-center text-orange-600 group-hover:text-orange-700 transition-colors">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white opacity-50 group-hover:opacity-100 transition-opacity">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span className="text-white text-xl">📋</span>
                </div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text text-transparent">
                  About & Responsibilities
                </h2>
              </div>
              <div className="prose prose-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  As the Founder and Chair of IEEE EPS SIGHT (Special Interest Group on Humanitarian Technology), I established and led the chapter from its inception. This role involved creating the chapter's vision, organizing humanitarian technology-focused events, and coordinating regular meetings to advance the chapter's mission. I was responsible for strategic planning, team leadership, and ensuring the chapter's activities aligned with IEEE's humanitarian technology goals. Under my leadership, the chapter successfully launched multiple initiatives and established itself as a key player in the local tech community.
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
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Founded and established IEEE EPS SIGHT chapter</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Developed chapter vision and strategic direction</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Organized humanitarian technology events and workshops</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Coordinated and led regular team meetings</span>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="flex-1">Managed chapter operations and member engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
