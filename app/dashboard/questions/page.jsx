"use client"
import React from 'react'

function QuestionsPage() {
  const questionCategories = [
    {
      category: "Behavioral Questions",
      icon: "💬",
      questions: [
        "Tell me about yourself",
        "What's your biggest weakness?",
        "Describe a challenging situation you faced",
        "How do you handle conflict?",
        "Why do you want to work here?"
      ]
    },
    {
      category: "Technical Questions",
      icon: "💻",
      questions: [
        "Explain your technical expertise",
        "Describe a complex project you worked on",
        "How do you stay updated with technology?",
        "What's your development process?",
        "Explain a technical challenge you solved"
      ]
    },
    {
      category: "Leadership Questions",
      icon: "👥",
      questions: [
        "Describe your leadership style",
        "How do you motivate team members?",
        "Tell me about a time you led a project",
        "How do you handle underperforming team members?",
        "What makes a good leader?"
      ]
    },
    {
      category: "Problem-Solving Questions",
      icon: "🧩",
      questions: [
        "How do you approach problem-solving?",
        "Describe a time you solved a difficult problem",
        "How do you prioritize tasks?",
        "Tell me about a mistake you made",
        "How do you make decisions under pressure?"
      ]
    }
  ];

  return (
    <div className='p-10'>
      <h2 className='font-bold text-3xl mb-2'>Interview Questions Bank</h2>
      <p className='text-gray-600 mb-8'>Browse common interview questions by category</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {questionCategories.map((cat, index) => (
          <div key={index} className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-3xl'>{cat.icon}</span>
              <h3 className='text-xl font-bold text-gray-900'>{cat.category}</h3>
            </div>
            <ul className='space-y-2'>
              {cat.questions.map((question, qIndex) => (
                <li key={qIndex} className='flex items-start gap-2 text-gray-700'>
                  <span className='text-blue-600 mt-1'>•</span>
                  <span className='text-sm'>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center'>
        <h3 className='text-xl font-bold text-gray-900 mb-2'>Want to practice these questions?</h3>
        <p className='text-gray-600 mb-4'>Create a mock interview and get AI-powered feedback on your answers</p>
        <a href='/dashboard' className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
          Start Practicing
        </a>
      </div>
    </div>
  )
}

export default QuestionsPage
