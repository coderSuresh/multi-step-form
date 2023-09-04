'use client'
import React from 'react'
import Plan from '@/components/right_section/select_plan/Plan'

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

  return (
    <>
      <div className='flex gap-2 mt-10'>

        <Plan name='arcade' plan={plan} price='$9/mo' setPlan={setPlan} />
        <Plan name='advanced' plan={plan} price='$12/mo' setPlan={setPlan} />
        <Plan name='pro' plan={plan} price='$15/mo' setPlan={setPlan} />

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

      <div className='flex items-center justify-between mb-5 w-full absolute bottom-0'>
        <button onClick={() => { }} className='text-cool-gray'>Go Back</button>
        <button type="submit" className="bg-marine-blue w-fit absolute right-20 text-white rounded-lg px-4 py-2 font-semibold">Next Step</button>
      </div>

    </>
  )
}

export default SelectPlan