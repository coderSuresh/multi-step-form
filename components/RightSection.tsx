import React from 'react'
import Personal from '@/components/forms/Personal'

const RightSection = () => {
    return (
        <div className="form__right mx-auto p-10 text-marine-blue text-sm">

            <div className="heading">
                <h2 className="text-2xl font-bold">Personal info</h2>
                <p className="text-cool-gray mt-1">Please provide your name, email address and phone number.</p>
            </div>

            <Personal />

        </div>
  )
}

export default RightSection