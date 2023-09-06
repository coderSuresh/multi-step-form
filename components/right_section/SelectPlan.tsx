'use client'
import React from 'react'
import Plan from '@/components/right_section/select_plan/Plan'
import NextBackBtn from './NextBackBtn'
import { FormContext } from '@/context/FormContext'
import { data } from '@/utils/data'
import { getPricing } from '@/utils/getPricing'

const SelectPlan = () => {

  const { formdata, setFormData } = React.useContext(FormContext)

  const [plan, setPlan] = React.useState<string>(formdata.plan || 'arcade')
  const [billing, setBilling] = React.useState<string>(formdata.billing || 'monthly')
  const [pricing, setPricing] = React.useState<any>(data['monthly'])
  const [billingTime, setBillingTime] = React.useState<string>('mo')

  const billTogglerRef = React.useRef<HTMLInputElement>(null)

  const handleBillingChange = () => {
    if (billTogglerRef.current?.checked) {
      setBilling('yearly')
    } else {
      setBilling('monthly')
    }
  }

  React.useEffect(() => {
    setFormData({
      ...formdata,
      plan: plan as 'arcade' | 'advanced' | 'pro'
    })
  }, [plan])

  React.useEffect(() => {
    setFormData({
      ...formdata,
      billing: billing as 'monthly' | 'yearly'
    })
    getPricing(billing, setPricing, setBillingTime)

  }, [billing])

  return (
    <>
      <div className='flex justify-center gap-2 mt-10'>

        <Plan name='arcade' plan={plan} price={`$${pricing.arcade}/${billingTime}`} setPlan={setPlan} />
        <Plan name='advanced' plan={plan} price={`$${pricing.advanced}/${billingTime}`} setPlan={setPlan} />
        <Plan name='pro' plan={plan} price={`$${pricing.pro}/${billingTime}`} setPlan={setPlan} />

      </div>

      <div className="flex gap-8 items-center justify-center p-3 rounded-lg mt-8 bg-magnolia w-full">
        <p className={`font-semibold ${billing === 'yearly' ? 'text-cool-gray' : ''}`}>Monthly</p>

        <div className="toggle">
          <input type="checkbox" ref={billTogglerRef} checked={billing === 'yearly'} onChange={handleBillingChange} className='hidden' id="toggle" />
          <label htmlFor="toggle" className='cursor-pointer'>
            <div className="outer border h-6 w-10 rounded-full bg-marine-blue relative">
              <div className={`inner border h-3 w-3 rounded-full bg-white transition-all mt-[5px] ${billing === 'yearly' ? 'ml-5' : 'ml-1'}`}></div>
            </div>
          </label>
        </div>

        <p className={`font-semibold ${billing === 'monthly' ? 'text-cool-gray' : ''}`}>Yearly</p>
      </div>

      <NextBackBtn />

    </>
  )
}

export default SelectPlan