import Image from 'next/image'
import { PlanProps } from '@/types/props'

const Plan = ({ name, price, plan, setPlan }: PlanProps) => {

    const handlePlanChange = (plan: string) => {
        setPlan(plan)
    }

    const showName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <>
            <input type="radio" id={name} checked={plan === name} onChange={() => handlePlanChange(name)} className='hidden' />
            <label htmlFor={name}>
                <div className={`border ${plan === name && 'border-purplish-blue'} cursor-pointer rounded-lg p-4 w-32`}>
                    <Image src={`/assets/images/icon-${name}.svg`} height={40} width={40} alt={`${name} icon`} aria-hidden='true' role='presentation' />
                    <h3 className="mt-8 font-semibold">{showName}</h3>
                    <p className="text-cool-gray">{price}</p>
                </div>
            </label>
        </>
    )
}

export default Plan