'use client'
import React from 'react'
import NextBackBtn from './NextBackBtn'

const Summary = () => {
  return (
    <>
      <div className="mt-10 bg-magnolia p-5 rounded-lg">
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-semibold'>Arcade (Monthly)</h3>
            <p className='text-cool-gray underline'>Change</p>
          </div>
          <div>
            <p className='font-semibold'>$12.00</p>
          </div>
        </div>

        <hr className="my-5" />

        <div className='flex items-center justify-between my-3'>
          <p className="text-cool-gray">Online service</p>
          <p>+$1/mo</p>
        </div>

        <div className='flex items-center justify-between my-3'>
          <p className="text-cool-gray">Larger storage</p>
          <p>+$2/mo</p>
        </div>
      </div>

      <div className='flex items-center justify-between p-5'>
        <p className='text-cool-gray'>Total (per month)</p>
        <p className='font-semibold text-lg text-purplish-blue'>+$12/mo</p>
      </div>

      <NextBackBtn />

    </>
  )
}

export default Summary