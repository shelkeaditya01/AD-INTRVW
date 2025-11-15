"use client"
import { MockInterview } from '@/utils/schema';
import React,{ useEffect, useState } from 'react'
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import Webcam from 'react-webcam';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Interview({params}) {

    const [interviewData,setInterviewData]=useState();
    const[webCamEnabled,setWebCamEnabled]=useState(false);
    const[startingInterview,setStartingInterview]=useState("Start Interview");

    useEffect(() => {
      console.log(params.interviewId);
      getInterviewDetails();
      }, [])

    //   Getting Interview deatails from mockId or interviewId

      const getInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId));
        setInterviewData(result[0]);
        console.log("InterviewData"+interviewData)
      }

  return (
    <div className='my-10'>
      <h2 className='font-bold text-2xl'>Let's Get Started 🚀</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        
        {interviewData ? (
          <div className='flex flex-col my-5 gap-5'>
            
            <div className='p-5 rounded-lg border shadow-sm'>
              <h2 className='font-bold text-lg mb-4'>Interview Details</h2>
              <div className='space-y-3'>
                <div>
                  <p className='text-sm text-gray-600'>Job Role</p>
                  <p className='font-semibold'>{interviewData.jobPosition}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Job Description</p>
                  <p>{interviewData.jobDesc}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Experience</p>
                  <p className='font-semibold'>{interviewData.jobExperience} years</p>
                </div>
              </div>
            </div>

            <div className='p-5 border rounded-lg border-yellow-400 bg-yellow-100'>
              <h2 className='flex gap-2 items-center text-yellow-800 font-bold mb-2'>
                <Lightbulb className='w-5 h-5' />
                Information
              </h2>
              <p className='text-yellow-600 text-sm'>
                {process.env.NEXT_PUBLIC_INFORMATION || "Enable your camera and microphone for the best experience."}
              </p>
            </div>
          </div>
        ) : (
          <div className="my-5 text-gray-500">Loading interview details...</div>
        )}

        <div className='flex flex-col'>
          <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
            {webCamEnabled ? (
              <div className='relative'>
                <Webcam
                  onUserMedia={() => setWebCamEnabled(true)}
                  onUserMediaError={() => setWebCamEnabled(false)}
                  mirrored={true}
                  style={{ height: 400, width: '100%' }}
                  className='object-cover'
                />
                <div className='absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-2'>
                  <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
                  LIVE
                </div>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center p-12 min-h-[400px] bg-gray-50'>
                <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                  <WebcamIcon className='w-10 h-10 text-blue-600' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Camera Setup Required</h3>
                <p className='text-gray-600 text-center mb-6 max-w-sm text-sm'>
                  Enable your camera and microphone to start the interview.
                </p>
                <Button 
                  className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3' 
                  onClick={() => setWebCamEnabled(true)}
                >
                  <WebcamIcon className='w-4 h-4 mr-2' />
                  Enable Camera & Microphone
                </Button>
                <p className='text-xs text-gray-500 mt-4'>Your privacy is protected.</p>
              </div>
            )}
          </div>
        </div>

      </div>

      <div className='flex justify-end items-end'>
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
          <Button onClick={()=>{setStartingInterview("Starting....")}} disabled={!webCamEnabled}>
            {startingInterview}
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default Interview
