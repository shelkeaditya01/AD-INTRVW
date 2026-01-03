"use client"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Zap, BarChart3, Users, MessageSquare, CheckCircle, Star } from "lucide-react"
import Header from "./dashboard/_components/Header"

export default function Home() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Real Interview Scenarios",
      description: "Practice with actual questions from top companies including Google, Amazon, Microsoft, and more.",
    },
    {
      icon: Zap,
      title: "Instant AI Feedback",
      description: "Get immediate analysis on your answers, delivery, and areas for improvement right after each interview.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your progress with detailed reports showing improvement in confidence, clarity, and response quality.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Learn from industry experts with tips and strategies to ace your technical and behavioral interviews.",
    },
  ]

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Select Your Interview Type",
      description: "Choose from technical, behavioral, or company-specific interviews. Pick the role and difficulty level.",
    },
    {
      number: "02",
      icon: Zap,
      title: "Practice With AI",
      description: "Engage in a realistic interview simulation with our AI interviewer. Answer questions in real-time.",
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Get Instant Feedback",
      description: "Receive detailed analysis on your response quality, tone, pace, and areas for improvement.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Track & Improve",
      description: "Monitor your progress over time with analytics and targeted improvement recommendations.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "This platform helped me prepare for my technical interviews. The AI feedback was incredibly accurate and helped me identify my weak points.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager at Meta",
      content: "The behavioral interview section was game-changing. I felt so much more confident going into my final round interview.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Data Scientist at Amazon",
      content: "Real-time feedback during mock interviews made a huge difference. I could practice as many times as I needed without any time constraints.",
      rating: 5,
    },
    {
      name: "Alex Johnson",
      role: "Backend Developer at Microsoft",
      content: "The platform covers everything from system design to behavioral questions. Absolutely worth the investment in your career.",
      rating: 5,
    },
    {
      name: "Jessica Lee",
      role: "UX Designer at Apple",
      content: "I loved the detailed performance analytics. Watching my improvement over time was really motivating and kept me engaged.",
      rating: 5,
    },
    {
      name: "David Patel",
      role: "Engineering Manager at Netflix",
      content: "The AI is remarkably good at mimicking real interviewers. The pressure simulation helped me stay calm during actual interviews.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f0f0f0_1px,transparent_1px),linear-gradient(0deg,#f0f0f0_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-17">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">AI-Powered Interview Prep</span>
                <h1 className="text-5xl sm:text-6xl font-bold text-black leading-tight">
                  <span className="text-pretty">Master Your Next Interview with AI</span>
                </h1>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                Practice real interview scenarios with our AI-powered mock interview platform. Get instant feedback, identify weak areas, and ace your next opportunity.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <span className="text-lg">✓</span>
                  <span className="text-sm font-medium text-gray-900">Real-time Feedback</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <span className="text-lg">✓</span>
                  <span className="text-sm font-medium text-gray-900">AI Analysis</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/sign-in">
                  <button className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 px-8 h-12 text-base font-semibold rounded-lg transition-colors">
                    Start Practicing Now
                  </button>
                </Link>
                <button className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-8 h-12 text-base font-semibold bg-transparent rounded-lg transition-colors">
                  See How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-black">50K+</div>
                  <p className="text-sm text-gray-600">Users Prepared</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">95%</div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">24/7</div>
                  <p className="text-sm text-gray-600">Available</p>
                </div>
              </div>
            </div>

            {/* Right - Cartoon Images */}
            <div className="relative h-96 md:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-100 to-white rounded-full opacity-40" />
              </div>

              {/* Main Interview Cartoon */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-80 md:h-80">
                  <Image
                    src="/interview-cartoon.jpg"
                    alt="AI mock interview cartoon"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* Success Cartoon - Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 z-20">
                <Image
                  src="/success-cartoon.jpg"
                  alt="Success celebration"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain drop-shadow-md opacity-60"
                />
              </div>

              {/* AI Assistant Cartoon - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 z-20">
                <Image
                  src="/ai-assistant-cartoon.jpg"
                  alt="AI assistant"
                  width={144}
                  height={144}
                  className="w-full h-full object-contain drop-shadow-md opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="relative py-10 md:py-2 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9f9f9_1px,transparent_1px),linear-gradient(0deg,#f9f9f9_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              <span className="text-pretty">Everything you need to succeed</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI-powered platform combines intelligent feedback with expert guidance to help you ace any interview.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 hover:border-black transition-all duration-300 hover:shadow-lg"
                >
                  {/* Card Background Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-black rounded-lg text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-black rounded-full w-0 group-hover:w-8 transition-all duration-300" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 border-2 border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-black">Ready to ace your interview?</h3>
              <p className="text-gray-600 max-w-md">Join thousands of candidates who've improved their interview performance</p>
              <Link href="/sign-in">
              <button className="mt-2 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                Start Free Practice
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section className="relative py-10 md:py-20 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9f9f9_1px,transparent_1px),linear-gradient(0deg,#f9f9f9_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-10">
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-2">
              <span className="text-pretty">How It Works</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A simple 4-step process to help you prepare for your dream job interview.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative group">
                  {/* Connecting Line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 w-8 h-1 bg-gray-200 group-hover:bg-black transition-colors duration-300" />
                  )}
                  
                  <div className="relative bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 hover:border-black transition-all duration-300 h-full hover:shadow-lg">
                    {/* Background Accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 space-y-4">
                      {/* Step Number */}
                      <div className="text-4xl font-bold text-gray-200 group-hover:text-black transition-colors duration-300">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-black rounded-lg text-white group-hover:bg-gray-900 transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-black">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="relative py-20 md:py-32 bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(0deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              <span className="text-pretty">Trusted by Interview Candidates</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join thousands of candidates who've successfully landed their dream jobs with our AI-powered platform.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                {/* Card Background Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{testimonial.content}</p>
                  
                  {/* Divider */}
                  <div className="h-px bg-gray-200" />
                  
                  {/* Author Info */}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-black rounded-full w-0 group-hover:w-8 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-200 text-gray-300 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center mb-3">
              <img 
                src="/AD-logo.png" 
                width={48} 
                height={48} 
                alt="AD-INTRVW Logo" 
                className="h-12 w-12 object-contain -mr-2"
              />
              <h3 className="text-black text-xl font-semibold">AD-INTRVW</h3>
            </div>
            <p className="text-sm text-black">
              Crack Interviews. Powered by AI. Driven by You.
            </p>
            <p className="mt-4 text-xs text-black">© {new Date().getFullYear()} Aditya Shelke. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-black font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-black hover:text-gray-800 transition hover:font-bold">About Us</a></li>
              <li><a href="/contact" className="text-black hover:text-gray-800 transition hover:font-bold">Contact</a></li>
              <li><a href="/careers" className="text-black hover:text-gray-800 transition hover:font-bold">Careers</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-black font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="text-black hover:text-gray-800 transition hover:font-bold">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-black hover:text-gray-800 transition hover:font-bold">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h4 className="text-black font-semibold mb-3">Connect</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/aditya-shelke-ba90742a5" target="_blank" className="text-black hover:text-gray-800 transition hover:font-bold">LinkedIn</a>
              <a href="https://github.com/shelkeaditya01" target="_blank" className="text-black hover:text-gray-800 transition hover:font-bold">GitHub</a>
            </div>
            <p className="mt-4 text-xs text-black">Made with ❤️ by Aditya Shelke.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}