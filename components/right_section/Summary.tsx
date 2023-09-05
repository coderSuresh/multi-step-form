'use client'
import React from 'react'
import NextBackBtn from './NextBackBtn'
import { FormContext } from '@/context/FormContext'
import { data } from '@/utils/data'
import { getPricing } from '@/utils/getPricing'

const Summary = () => {

  const { formdata, setFormData } = React.useContext(FormContext)

  const [pricing, setPricing] = React.useState<any>(data[formdata.billing || 'monthly'])
  const [totalPrice, setTotalPrice] = React.useState<number>(0)
  const [billingTime, setBillingTime] = React.useState<string>(formdata.billing === 'yearly' ? 'yr' : 'mo')

  React.useEffect(() => {
    getPricing(formdata.billing, setPricing, setBillingTime)

    !formdata.plan && setFormData({
      ...formdata,
      plan: 'arcade',
    })

    setTotalPrice(() => {
      const planPrice = pricing[formdata.plan!]

      if (formdata.addons?.length! > 0) {
        const addonsPrice = formdata.addons?.reduce((total: number, addon: string) => {
          return total + pricing[addon.toLowerCase().replace(/\s/g, '_')]
        }, 0)
        return planPrice + addonsPrice
      }
    })

  }, [])

  const renderAddons = () => {
    return formdata.addons?.map((addon: string, i) => {
      return (
        <div key={i} className='flex items-center justify-between my-3'>
          <p className="text-cool-gray">{addon}</p>
          <p>+${pricing[addon.toLowerCase().replace(' ', '_')]}</p>
        </div>
      )
    })
  }

  return (
    <>
      <div className="mt-10 bg-magnolia p-5 rounded-lg">
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-semibold'>
              {formdata.plan?.charAt(0).toUpperCase()! + formdata.plan?.slice(1)} ({formdata.billing})
            </h3>
            <p className='text-cool-gray underline'>Change</p>
          </div>
          <div>
            <p className='font-semibold'>${pricing[formdata.plan!]}</p>
          </div>
        </div>

        {(formdata.addons?.length! > 0) && <hr className="my-5" />}

        {renderAddons()}

      </div>

      <div className='flex items-center justify-between p-5'>
        <p className='text-cool-gray'>Total (per {formdata.billing?.split('ly')[0]})</p>
        <p className='font-semibold text-lg text-purplish-blue'>
          +${totalPrice}/{billingTime}
        </p>
      </div>

      <NextBackBtn />

    </>
  )
}

export default Summary