"use client"
import React from 'react'

function UpgradePage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 mock interviews",
        "Basic AI feedback",
        "Standard questions",
        "Email support"
      ],
      current: true
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      features: [
        "Unlimited mock interviews",
        "Advanced AI feedback",
        "Custom questions",
        "Priority support",
        "Performance analytics",
        "Interview recordings"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom branding",
        "API access",
        "Dedicated support",
        "Advanced analytics"
      ]
    }
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
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>Upgrade Your Plan</h3>
        <p className='text-gray-600 text-lg'>Choose the perfect plan for your interview preparation</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white border-2 rounded-lg p-8 relative ${
              plan.popular ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                Most Popular
              </div>
            )}
            
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.name}</h3>
            <div className='mb-6'>
              <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
              <span className='text-gray-600 ml-2'>/ {plan.period}</span>
            </div>

            <ul className='space-y-3 mb-8'>
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className='flex items-start gap-2'>
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className='text-gray-700 text-sm'>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.current 
                  ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                  : plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
              disabled={plan.current}
            >
              {plan.current ? 'Current Plan' : 'Upgrade Now'}
            </button>
          </div>
        ))}
      </div>

      <div className='mt-12 text-center'>
        <p className='text-gray-600'>All plans include a 14-day money-back guarantee</p>
      </div>
    </div>
  )
}

export default UpgradePage
