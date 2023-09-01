'use client'
import React from 'react'
import Image from 'next/image'

const SelectPlan = () => {

  const [plan, setPlan] = React.useState('arcade')
  const [billing, setBilling] = React.useState('monthly')

  const billTogglerRef = React.useRef<HTMLInputElement>(null)

  const handleBillingChange = () => {
    if (billTogglerRef.current?.checked) {
      setBilling('yearly')
    } else {
      setBilling('monthly')
    }
  }

  const handlePlanChange = (plan: string) => {
    setPlan(plan)
  }

  return (
    <>
      <div className='flex gap-2 mt-10'>

        <input type="radio" id='arcade' checked={plan === 'arcade'} onChange={() => handlePlanChange('arcade')} className='hidden' />
        <label htmlFor="arcade">
          <div className={`border ${plan === 'arcade' && 'border-strawberry-red'} cursor-pointer rounded-lg p-4 w-32`}>
            <Image src='/assets/images/icon-arcade.svg' height={40} width={40} alt='arcade icon' aria-hidden='true' role='presentation' />
            <h3 className="mt-8 font-semibold">Arcade</h3>
            <p className="text-cool-gray">$9/mo</p>
          </div>
        </label>

        <input type="radio" id='advanced' checked={plan === 'advanced'} onChange={() => handlePlanChange('advanced')} className='hidden' />
        <label htmlFor="advanced">
          <div className={`border ${plan === 'advanced' && 'border-strawberry-red'} cursor-pointer rounded-lg p-4 w-32`}>
            <Image src='/assets/images/icon-advanced.svg' height={40} width={40} alt='advanced icon' aria-hidden='true' role='presentation' />
            <h3 className="mt-8 font-semibold">Advanced</h3>
            <p className="text-cool-gray">$12/mo</p>
          </div>
        </label>

        <input type="radio" id='pro' checked={plan === 'pro'} onChange={() => handlePlanChange('pro')} className='hidden' />
        <label htmlFor="pro">
          <div className={`border ${plan === 'pro' && 'border-strawberry-red'} cursor-pointer rounded-lg p-4 w-32`}>
            <Image src='/assets/images/icon-pro.svg' height={40} width={40} alt='pro icon' aria-hidden='true' role='presentation' />
            <h3 className="mt-8 font-semibold">Pro</h3>
            <p className="text-cool-gray">$15/mo</p>
          </div>
        </label>

      </div>

      <div className="flex gap-8 items-center justify-center p-3 rounded-lg mt-8 bg-magnolia w-full">
        <p className={`font-semibold ${billing === 'yearly' ? 'text-cool-gray' : ''}`}>Monthly</p>

        <div className="toggle">
          <input type="checkbox" ref={billTogglerRef} onChange={handleBillingChange} className='hidden' id="toggle" />
          <label htmlFor="toggle" className='cursor-pointer'>
            <div className="outer border h-6 w-10 rounded-full bg-marine-blue relative">
              <div className={`inner border h-3 w-3 rounded-full bg-white transition-all mt-[5px] ${billing === 'yearly' ? 'ml-5' : 'ml-1'}`}></div>
            </div>
          </label>
        </div>

        <p className={`font-semibold ${billing === 'monthly' ? 'text-cool-gray' : ''}`}>Yearly</p>
      </div>

    </>
  )
}

export default SelectPlan