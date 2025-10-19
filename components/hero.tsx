'use client'

import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center space-y-12">
        {/* Terminal Window */}
        <div className="w-full max-w-lg bg-[#1e2937] rounded-lg shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#374151] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400 text-sm">terminal</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-blue-400">whoami</span>
            </div>
            <div className="text-gray-300">nour_maatouk</div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-blue-400">cat about.txt</span>
            </div>
            <div className="text-gray-300">git commit -m 'feat: new feature'</div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 rounded-full blur-xl opacity-40"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Nour Maatouk"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              Nour Maatouk
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-900 font-medium">
            Software Engineer | AI Enthusiast | Problem Solver|
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl text-center">
          <p className="text-lg text-gray-800 leading-relaxed border border-gray-300 rounded-lg p-6 bg-white/50">
            Passionate about <span className="text-blue-600 font-semibold">computer science</span> and <span className="text-purple-600 font-semibold">data science</span>. I excel in{' '}
            <span className="text-blue-600 font-semibold">software development</span> and <span className="text-green-600 font-semibold">artificial intelligence</span>. Combining problem-solving skills and adaptability to deliver innovative solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
