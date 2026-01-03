"use client"
import React from 'react'

function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      title: "Create Your Interview",
      description: "Enter the job position, description, and your years of experience. Our AI will generate relevant interview questions tailored to your profile.",
      icon: "📝",
      color: "blue"
    },
    {
      number: "2",
      title: "Enable Camera & Microphone",
      description: "Set up your camera and microphone to simulate a real interview environment. This helps you practice your body language and speaking skills.",
      icon: "📹",
      color: "purple"
    },
    {
      number: "3",
      title: "Answer Questions",
      description: "Record your answers using voice input. Our speech-to-text technology captures your responses in real-time for analysis.",
      icon: "🎤",
      color: "green"
    },
    {
      number: "4",
      title: "Get AI Feedback",
      description: "Receive instant feedback with ratings and improvement suggestions. Our AI analyzes your answers and provides actionable insights.",
      icon: "🤖",
      color: "orange"
    },
    {
      number: "5",
      title: "Review & Improve",
      description: "Check your feedback, compare with ideal answers, and track your progress over time. Practice makes perfect!",
      icon: "📊",
      color: "pink"
    }
  ];

  const tips = [
    "Find a quiet, well-lit space for your interview",
    "Dress professionally to get into the right mindset",
    "Practice speaking clearly and at a moderate pace",
    "Take your time to think before answering",
    "Review feedback carefully and work on weak areas"
  ];

  return (
    <div className='p-10'>
      <div className='text-center mb-12'>
        <div className='flex items-center justify-center mb-4'>
          <img 
            src="/AD-logo.png" 
            width={70} 
            height={70} 
            alt="AD-INTRVW Logo" 
            className="h-16 w-16 object-contain -mr-3"
          />
          <h2 className='text-3xl font-bold text-gray-900'>AD-INTRVW</h2>
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>How AD-INTRVW Works</h3>
        <p className='text-gray-600 text-lg'>Master your interviews in 5 simple steps</p>
      </div>

      <div className='max-w-4xl mx-auto space-y-8 mb-16'>
        {steps.map((step, index) => (
          <div key={index} className='flex gap-6 items-start'>
            <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center flex-shrink-0`}>
              <span className='text-3xl'>{step.icon}</span>
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-3 mb-2'>
                <span className={`w-8 h-8 rounded-full bg-${step.color}-600 text-white flex items-center justify-center font-bold`}>
                  {step.number}
                </span>
                <h3 className='text-2xl font-bold text-gray-900'>{step.title}</h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-4xl mx-auto'>
        <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
          <span>💡</span>
          Pro Tips for Success
        </h3>
        <ul className='space-y-3'>
          {tips.map((tip, index) => (
            <li key={index} className='flex items-start gap-3'>
              <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className='text-gray-700'>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-12 text-center'>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to get started?</h3>
        <a href='/dashboard' className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors'>
          Create Your First Interview
        </a>
      </div>
    </div>
  )
}

export default HowItWorksPage
