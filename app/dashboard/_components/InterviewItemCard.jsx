import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({ interview }) {

  const router=useRouter();

  const onStart=()=>{
    router.push('/dashboard/interview/'+interview?.mockId)
  }

  const onFeedbackpressClick=()=>{
    router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
  }
  
  return (
    <div className="border shadow-sm rounded-lg p-5 hover:shadow-md transition-shadow">
      <h2 className="font-semibold text-lg mb-2">{interview?.jobPosition}</h2>
      <p className="text-sm text-gray-600">{interview?.jobExperience} years of experience</p>
      <p className="text-xs text-gray-400 mb-4">Created At: {interview?.createdAt}</p>

      <div className="flex gap-3 mt-4">
        <Button
          onClick={onFeedbackpressClick}
          size="sm"
          variant="outline"
          className="flex-1"
        >
          Feedback
        </Button>

        <Button
          onClick={onStart}
          size="sm"
          className="flex-1"
        >
          Start
        </Button>
      </div>
    </div>
  )
}

export default InterviewItemCard
