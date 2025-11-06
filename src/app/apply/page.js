import ApplyForm from '@/components/ApplyForm'
import React from 'react'

const page = () => {
  return (
<div className="my-10 text-center sm:px-7 px-4">
  <h1 className="text-3xl font-bold text-gray-900 mb-3">
    Apply as a Doctor
  </h1>
  <p className="text-gray-600 text-base max-w-xl mx-auto">
    Join our healthcare network and offer your expertise to patients online. 
    Fill out the application form to become part of our trusted medical team.
  </p>

    <ApplyForm/>

</div>

  )
}

export default page
