import React from 'react'
import StepContext from '@/context/StepContext'
import { FormContext } from '@/context/FormContext'
import { formProps } from '@/types/props'

const NextBackBtn = ({ isFormValid, setNameError, setEmailError, setPhoneError }: formProps) => {

    const { step, setStep } = React.useContext(StepContext)
    const { formdata } = React.useContext(FormContext)

    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (setNameError && setEmailError && setPhoneError) {
            if (isFormValid) {
                setStep(step + 1)
            }
            else {
                e.preventDefault()

                if (!formdata.name?.trim()) {
                    setNameError('Name is required')
                }
                if (!formdata.email?.trim()) {
                    setEmailError('Email is required')
                }
                if (!formdata.phone?.trim()) {
                    setPhoneError('Phone is required')
                }
            }
        } else {
            setStep(step + 1)
        }
    }

    return (
        <div className='flex items-center justify-between md:mb-5 w-full md:absolute fixed bottom-0 left-0 bg-white md:h-auto md:px-10 md:py-0 h-16 mb-0 p-5'>
            {step > 1 ? <button type='button' onClick={() => setStep(step - 1)} className='hover:text-marine-blue text-cool-gray'>Go Back</button> : <div></div>}
            <button type="submit" onClick={handleNextClick} className={` ${step === 4 ? 'bg-purplish-blue' : 'bg-marine-blue'} hover:opacity-90 w-fit text-white rounded-lg px-4 py-2 font-semibold`}>
                {step === 4 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    )
}

export default NextBackBtn