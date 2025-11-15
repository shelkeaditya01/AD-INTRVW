"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "./dashboard/_components/Header";
import { useEffect, useRef, useState } from "react";

function SampleQuestionsCarousel() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questions = [
    "Tell me about yourself and your background",
    "What's your biggest professional achievement?",
    "How do you handle challenging situations at work?",
    "Where do you see yourself in 5 years?",
    "Why should we hire you for this position?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-h-[80px] flex items-center justify-center">
      <p className="text-white text-sm sm:text-base font-medium animate-fade-in">
        "{questions[currentQuestion]}"
      </p>
    </div>
  );
}

function CountUpAnimation({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function LiveActivityFeed() {
  const [activities, setActivities] = useState([
    { user: "Sarah M.", action: "completed an interview", role: "Software Engineer", time: "2 min ago", rating: 4.5 },
    { user: "John D.", action: "got hired at", role: "Google", time: "5 min ago", rating: 5 },
    { user: "Priya S.", action: "practiced for", role: "Product Manager", time: "8 min ago", rating: 4.2 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivities = [
        { user: "Alex K.", action: "completed an interview", role: "Data Scientist", time: "just now", rating: 4.8 },
        { user: "Maria L.", action: "got hired at", role: "Microsoft", time: "1 min ago", rating: 5 },
        { user: "David W.", action: "practiced for", role: "Frontend Developer", time: "3 min ago", rating: 4.6 },
      ];
      const randomActivity = newActivities[Math.floor(Math.random() * newActivities.length)];
      setActivities(prev => [randomActivity, ...prev.slice(0, 2)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {activities.map((activity, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all animate-fade-in"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {activity.user.charAt(0)}
            </div>
            <div>
              <p className="text-sm">
                <span className="font-semibold">{activity.user}</span> {activity.action}{" "}
                <span className="font-semibold text-blue-600">{activity.role}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-sm font-semibold">{activity.rating}</span>
            <span>★</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function InteractiveDemo() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const demoQuestions = [
    {
      question: "Tell me about yourself and your background",
      userAnswer: "I'm a software engineer with 3 years of experience in full-stack development. I've worked on projects using React, Node.js, and AWS, leading a team of 4 developers.",
      aiRating: 4.5,
      aiFeedback: "Great start! You mentioned specific technologies and leadership experience. Consider adding a notable achievement or project outcome to make it more impactful."
    },
    {
      question: "What's your biggest professional achievement?",
      userAnswer: "I led the development of a customer portal that increased user engagement by 40% and reduced support tickets by 25%.",
      aiRating: 4.8,
      aiFeedback: "Excellent! You provided specific metrics and demonstrated business impact. This is a strong answer that shows measurable results."
    },
    {
      question: "How do you handle challenging situations at work?",
      userAnswer: "I stay calm, break down the problem into smaller parts, and collaborate with my team to find solutions. For example, when we faced a critical bug...",
      aiRating: 4.2,
      aiFeedback: "Good approach! You showed problem-solving skills and teamwork. Complete the example to make it more concrete and memorable."
    },
    {
      question: "Where do you see yourself in 5 years?",
      userAnswer: "I see myself in a senior technical role, mentoring junior developers and contributing to architectural decisions while continuing to grow my technical skills.",
      aiRating: 4.6,
      aiFeedback: "Strong answer! You showed ambition balanced with realistic goals. You mentioned both technical growth and leadership, which is excellent."
    },
    {
      question: "Why should we hire you for this position?",
      userAnswer: "I bring 3 years of relevant experience, a proven track record of delivering projects on time, and strong problem-solving skills that align perfectly with your team's needs.",
      aiRating: 4.4,
      aiFeedback: "Good answer! You highlighted relevant experience and skills. Consider adding a specific example or mentioning company research to make it more personalized."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Sample Interview Question</h3>
          <p className="text-blue-100">Click on different questions to see AI feedback</p>
        </div>
        
        <div className="p-6">
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {demoQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedQuestion(index);
                  setShowAnswer(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedQuestion === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Question {index + 1}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-gray-900 mb-2">Question:</p>
              <p className="text-gray-700">{demoQuestions[selectedQuestion].question}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Sample Answer:</p>
              <p className="text-gray-700">{demoQuestions[selectedQuestion].userAnswer}</p>
            </div>

            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              {showAnswer ? 'Hide' : 'Show'} AI Feedback
            </button>

            {showAnswer && (
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-900">AI Feedback:</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">
                      {demoQuestions[selectedQuestion].aiRating}/5
                    </span>
                    <span className="text-yellow-500">★</span>
                  </div>
                </div>
                <p className="text-gray-700">{demoQuestions[selectedQuestion].aiFeedback}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const features = [
    {
      title: "AI-Powered Feedback",
      description: "Get instant, detailed feedback on your interview performance with AI-driven insights.",
      icon: "🤖",
    },
    {
      title: "Real Interview Scenarios",
      description: "Practice with realistic interview questions tailored to your target role and industry.",
      icon: "🎯",
    },
    {
      title: "Confidence Building",
      description: "Simulate real interviews and track your progress with every attempt.",
      icon: "💪",
    },
    {
      title: "Expert Guidance",
      description: "Learn from best practices and get personalized tips to improve your skills.",
      icon: "📚",
    },
    {
      title: "Performance Analytics",
      description: "Track your improvement over time with detailed performance metrics and insights.",
      icon: "📊",
    },
    {
      title: "Dream Job Ready",
      description: "Master interviews and land your dream job with PrepBridge's comprehensive platform.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/PrepHome.webp"
            alt="PrepBridge Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            PrepBridge
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
            Your AI-powered partner to master interviews from practice to performance.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
            Get instant feedback, simulate real interview scenarios, & boost your confidence
            with every attempt. Get ready to showcase your skills & land your dream job.
          </p>

          <Link href="/sign-in">
            <Button className="mt-8 bg-white hover:bg-gray-100 text-black text-base sm:text-lg px-6 py-3 rounded-md font-semibold">
              Schedule Your Interview Now!
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                <CountUpAnimation end={15} suffix="K+" />
              </div>
              <div className="text-sm text-gray-600">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                <CountUpAnimation end={50} suffix="K+" />
              </div>
              <div className="text-sm text-gray-600">Interviews Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                <CountUpAnimation end={92} suffix="%" />
              </div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                <CountUpAnimation end={500} suffix="+" />
              </div>
              <div className="text-sm text-gray-600">Companies Hiring</div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PrepBridge?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to ace your interviews and land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Interview</h3>
              <p className="text-gray-600">Enter job details and let AI generate relevant questions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice & Record</h3>
              <p className="text-gray-600">Answer questions using voice recording in real-time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Feedback</h3>
              <p className="text-gray-600">Receive AI-powered ratings and improvement suggestions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "PrepBridge helped me land my dream job at Google! The AI feedback was incredibly accurate and helped me improve my answers."
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "The realistic interview scenarios and instant feedback made all the difference. I felt confident going into my actual interviews."
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Best interview prep tool I've used! The AI understands context and provides actionable feedback. Highly recommended!"
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Live Activity
            </h2>
            <p className="text-lg text-gray-600">
              See what others are achieving right now
            </p>
          </div>
          <LiveActivityFeed />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Try It Yourself
            </h2>
            <p className="text-lg text-gray-600">
              Experience our AI-powered feedback instantly
            </p>
          </div>
          <InteractiveDemo />
        </div>
      </section>

      {/* Skills Covered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Skills We Help You Master
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Communication', 'Problem Solving', 'Technical Skills', 'Behavioral', 'Leadership', 'Critical Thinking', 'Teamwork', 'Adaptability'].map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg text-center border border-blue-200 hover:border-blue-500 transition-all hover:shadow-md">
                <p className="font-semibold text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-300 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-lg sm:text-xl mb-2 text-white/90">
              Join thousands of successful candidates who prepared with PrepBridge
            </p>
            <p className="text-sm sm:text-base text-white/80">
              Start practicing today and land your dream job tomorrow
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Instant AI Feedback</h3>
              <p className="text-sm text-white/80">Get detailed feedback on every answer</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Practice Anytime</h3>
              <p className="text-sm text-white/80">24/7 access to unlimited interviews</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Track Progress</h3>
              <p className="text-sm text-white/80">Monitor improvement over time</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sign-in">
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 rounded-lg font-bold shadow-2xl transform hover:scale-105 transition-all">
                Get Started for Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-4 rounded-lg font-bold transition-all shadow-lg">
              Watch Demo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>5 free interviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-black text-xl font-semibold mb-3">PrepBridge</h3>
            <p className="text-sm text-black">
              Crack Interviews. Powered by AI. Driven by You.
            </p>
            <p className="mt-4 text-xs text-black">© {new Date().getFullYear()} Aditya Shelke. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-black font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-black hover:text-gray-800 transition">About Us</a></li>
              <li><a href="/contact" className="text-black hover:text-gray-800 transition">Contact</a></li>
              <li><a href="/careers" className="text-black hover:text-gray-800 transition">Careers</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-black font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="text-black hover:text-gray-800 transition">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-black hover:text-gray-800 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h4 className="text-black font-semibold mb-3">Connect</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/aditya-shelke-ba90742a5" target="_blank" className="text-black hover:text-gray-800 transition">LinkedIn</a>
              <a href="https://github.com/shelkeaditya01" target="_blank" className="text-black hover:text-gray-800 transition">GitHub</a>
            </div>
            <p className="mt-4 text-xs text-black">Made with ❤️ by Aditya Shelke.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
