import React from 'react'
import Personal from '@/components/right_section/Personal'
import SelectPlan from '@/components/right_section/SelectPlan'
import Addons from '@/components/right_section/Addons'
import Summary from '@/components/right_section/Summary'
import Thankyou from '@/components/right_section/Thankyou'
import StepContext from '@/context/StepContext'
import FormProvider from '@/providers/FormProvider'

const RightSection = () => {

    const { step } = React.useContext(StepContext)

    const [heading, setHeading] = React.useState({
        title: '',
        description: ''
    })

    const renderHeading = () => {
        switch (step) {
            case 1:
                setHeading({
                    title: 'Personal info',
                    description: 'Please provide your name, email address and phone number.'
                })
                break;

            case 2:
                setHeading({
                    title: 'Select your plan',
                    description: 'You have the option of monthly or yearly billing.'
                })
                break;

            case 3:
                setHeading({
                    title: 'Pick add-ons',
                    description: 'Addons help enhance your gaming experience.'
                })
                break;

            case 4:
                setHeading({
                    title: 'Finishing up',
                    description: 'Double check everything looks OK before confirming.'
                })
                break;

            default:
                break;
        }
    }

    React.useEffect(() => {
        renderHeading()
    }, [step])

    return (
        <div className="form__right mx-auto p-10 text-marine-blue text-sm w-full h-full relative">

            {
                step <= 4 &&
                <div className="heading">
                    <h2 className="text-2xl font-bold">{heading.title}</h2>
                    <p className="text-cool-gray mt-1">{heading.description}</p>
                </div>
            }

            <FormProvider>
                {step === 1 && <Personal />}
                {step === 2 && <SelectPlan />}
                {step === 3 && <Addons />}
                {step === 4 && <Summary />}
                {step === 5 && <Thankyou />}
            </FormProvider>

        </div>
    )
}

export default RightSection