import React from 'react'
import Personal from '@/components/forms/Personal'
import SelectPlan from './forms/SelectPlan'

const RightSection = () => {
    return (
        <div className="form__right mx-auto p-10 text-marine-blue text-sm w-full h-full relative">

            {/* <div className="heading">
                <h2 className="text-2xl font-bold">Personal info</h2>
                <p className="text-cool-gray mt-1">Please provide your name, email address and phone number.</p>
            </div> */}

            <div className="heading">
                <h2 className="text-2xl font-bold">Select your plan</h2>
                <p className="text-cool-gray mt-1">You have the option of monthly or yearly billing.</p>
            </div>

            {/* <Personal /> */}
            <SelectPlan />

        </div>
  )
}

export default RightSection