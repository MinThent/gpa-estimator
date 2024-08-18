import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col gap-4 p-4'>  
        <h3 className='justify-center font-semibold text-3xl text-center text-slate-50 sm:text-3xl md:text-4xl'>
        Estimate your <span className='text-blue-400 hover:text-blue-600 transform duration-300'>GPA</span> with this neat little application
        </h3>
        <p className='text-lg text-slate-50 sm:text-xl md:text-2xl'>
            Note: Since some subjects take 4 credits, the total number should be inputted as "2" to estimate correctly.
        </p>
    </div>
  )
}
