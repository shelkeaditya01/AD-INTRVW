"use client"
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import { UserAnswer } from '@/utils/schema'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import NoDataFound from './NoDataFound'

function Feedback({ params }) {
    const [feedbackList, setFeedbackList] = useState();
    const [overallRating, setOverallRating] = useState(0);
    const router = useRouter();

    useEffect(() => {
        GetFeedback();
    }, []);

    const GetFeedback = async () => {
        const result = await db.select()
            .from(UserAnswer)
            .where(eq(UserAnswer.mockIdRef, params.interviewId))
            .orderBy(UserAnswer.id)
        console.log(result);
        setFeedbackList(result);
        
        // Calculate overall rating
        if (result.length > 0) {
            const totalRating = result.reduce((sum, item) => {
                const rating = parseFloat(item.rating) || 0;
                return sum + rating;
            }, 0);
            const avgRating = (totalRating / result.length).toFixed(1);
            setOverallRating(avgRating);
        }
    }

    return (
        <div className='p-4 md:p-10'>
            {feedbackList?.length === 0 ?
                <NoDataFound /> :
                <>
                    <h2 className='text-2xl md:text-3xl font-bold text-green-500'>Congratulations! 🚀</h2>
                    <h2 className='font-bold text-xl md:text-2xl mt-2'>Here is Your Interview Feedback</h2>
                    <h2 className='text-primary text-base md:text-lg mt-3'>
                        Your Overall Rating: <strong>{overallRating}/5</strong>
                    </h2>
                    <h2 className='text-sm md:text-base text-gray-600 mt-2'>
                        Find all Interview Questions with AI-generated Answers, Your answers, Rating & Feedback for Improvement.
                    </h2>

                    {feedbackList && feedbackList.map((item, index) => (
                        <Collapsible className='mt-7' key={index}>
                            <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
                                <span className='font-medium'>Q{index + 1}. {item.question}</span>
                                <ChevronsUpDown className='h-5 w-5 flex-shrink-0' />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className='flex flex-col gap-2 mt-2'>
                                    <h2 className='p-2 border rounded-lg bg-purple-50 text-sm md:text-base'>
                                        <strong>Rating: </strong>
                                        <span className={`font-bold ${
                                            item.rating >= 4 ? 'text-green-600' : 
                                            item.rating >= 3 ? 'text-yellow-600' : 
                                            'text-red-600'
                                        }`}>
                                            {item.rating}/5
                                        </span>
                                    </h2>
                                    <h2 className='p-2 border rounded-lg bg-red-50 text-sm md:text-base text-red-900'>
                                        <strong>Your Answer: </strong>{item.userAns || 'No answer provided'}
                                    </h2>
                                    <h2 className='p-2 border rounded-lg bg-green-50 text-sm md:text-base text-green-900'>
                                        <strong>Correct Answer: </strong>{item.correctAns}
                                    </h2>
                                    <h2 className='p-2 border rounded-lg bg-blue-50 text-sm md:text-base text-blue-900'>
                                        <strong>Feedback: </strong>{item.feedback}
                                    </h2>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </>
            }
            <div className='mt-6 md:mt-10'>
                <Button onClick={() => router.replace('/dashboard')} className='w-full md:w-auto cursor-pointer'>
                    Go Home
                </Button>
            </div>
        </div>
    )
}

export default Feedback
