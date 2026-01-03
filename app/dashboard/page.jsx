import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10'>
        <div className='mb-10 text-center'>
          <div className='flex items-center justify-center mb-3'>
            <img 
              src="/AD-logo.png" 
              width={70} 
              height={70} 
              alt="AD-INTRVW Logo" 
              className="h-16 w-16 object-contain -mr-3"
            />
            <h1 className='text-3xl font-bold text-gray-900'>AD-INTRVW</h1>
          </div>
          <p className='text-gray-600'>Create & Start Your AI Mock Interview</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
          <AddNewInterview />
        </div>

        <InterviewList />
    </div>
  )
}

export default Dashboard
