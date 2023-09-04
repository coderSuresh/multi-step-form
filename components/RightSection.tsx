import React from 'react'
import Personal from '@/components/right_section/Personal'
import SelectPlan from '@/components/right_section/SelectPlan'
import Addons from '@/components/right_section/Addons'
import Summary from '@/components/right_section/Summary'
import Thankyou from '@/components/right_section/Thankyou'

const RightSection = () => {
    return (
        <div className="form__right mx-auto p-10 text-marine-blue text-sm w-full h-full relative">

            {/* <div className="heading">
                <h2 className="text-2xl font-bold">Personal info</h2>
                <p className="text-cool-gray mt-1">Please provide your name, email address and phone number.</p>
            </div> */}

            {/* <div className="heading">
                <h2 className="text-2xl font-bold">Select your plan</h2>
                <p className="text-cool-gray mt-1">You have the option of monthly or yearly billing.</p>
            </div> */}

            {/* <div className="heading">
                <h2 className="text-2xl font-bold">Pick add-ons</h2>
                <p className="text-cool-gray mt-1">Addons help enhance your gaming experience.</p>
            </div> */}

            {/* <div className="heading">
                <h2 className="text-2xl font-bold">Finishing up</h2>
                <p className="text-cool-gray mt-1">Double check everything looks OK before confirming.</p>
            </div> */}

            {/* <Personal /> */}
            {/* <SelectPlan /> */}
            {/* <Addons /> */}
            {/* <Summary /> */}
            <Thankyou />

        </div>
    )
}

export default RightSection