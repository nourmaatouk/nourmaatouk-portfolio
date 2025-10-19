'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{animation: 'blob 7s infinite'}}></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{animation: 'blob 7s infinite 2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{animation: 'blob 7s infinite 4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-blue-500 bg-blue-50 px-4 py-2 rounded-full">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-balance">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nour Maatouk
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-foreground">
                Software Engineering Student
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI & Data Science Enthusiast | ML Engineer | Full-Stack Developer
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
              Passionate about computer science and data science, I excel in software development and artificial intelligence. I have led and contributed to several tech projects and competitions, combining problem-solving skills and adaptability to deliver innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 hover:bg-secondary/50">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Button asChild variant="ghost" size="icon" className="hover:text-blue-600 hover:bg-blue-50">
                <a href="https://www.linkedin.com/in/nour--maatouk" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:text-purple-600 hover:bg-purple-50">
                <a href="https://github.com/nour--maatouk" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:text-pink-600 hover:bg-pink-50">
                <a href="mailto:nourmaatouk88@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:text-green-600 hover:bg-green-50">
                <a href="tel:+21694281444">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile image with creative circle frame */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80">
              {/* Outer decorative glow circle */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
              
              {/* Image container - circular */}
              <div className="absolute inset-0 bg-white rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Nour Maatouk"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top right accent */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl">
                🚀
              </div>

              {/* Bottom left accent */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl">
                💡
              </div>

              {/* Right side decorative circle accent */}
              <div className="absolute right-0 top-1/2 transform translate-x-16 -translate-y-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-60 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  )
}
