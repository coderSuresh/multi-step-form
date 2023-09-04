import React from 'react'
import StepContext from '@/context/StepContext'

const NextBackBtn = () => {

    const { step, setStep } = React.useContext(StepContext)

    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setStep(step + 1)
    }

    return (
        <div className='flex items-center justify-between mb-5 w-full absolute bottom-0'>
            {step > 1 && <button onClick={() => setStep(step - 1)} className='text-cool-gray'>Go Back</button>}

            <button type="submit" onClick={handleNextClick} className={` ${step === 4 ? 'bg-purplish-blue' : 'bg-marine-blue'} ${step === 1 && 'mb-5'} w-fit absolute right-20 text-white rounded-lg px-4 py-2 font-semibold`}>
                {step === 4 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    )
}

export default NextBackBtn