import React from 'react'
import LeftSectionBullet from './LeftSectionBullet'
import StepContext from '@/context/StepContext'

const LeftSection = () => {

    const { step } = React.useContext(StepContext)

    return (
        <div className="form__left text-xs md:w-[340px] p-10 md:bg-desktop-sidebar bg-mobile-sidebar w-full md:static md:h-full absolute top-0 left-0 h-44 md:block flex justify-center bg-cover bg-no-repeat md:rounded-lg">

            <LeftSectionBullet step={1} title="Your info" active={step === 1 ? true: false} />

            <LeftSectionBullet step={2} title="Select plan" active={step === 2 ? true : false} />

            <LeftSectionBullet step={3} title="Add-ons" active={step === 3 ? true : false} />

            <LeftSectionBullet step={4} title="Summary" active={step === 4  || step === 5 ? true : false} />

        </div>
    )
}

export default LeftSection