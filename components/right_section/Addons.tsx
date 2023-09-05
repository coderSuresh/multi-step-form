'use client'
import React from 'react'
import AddonCard from '@/components/right_section/addons/AddonCard'
import NextBackBtn from './NextBackBtn'
import { FormContext } from '@/context/FormContext'
import { data } from '@/utils/data'

const Addons = () => {

  const { formdata, setFormData } = React.useContext(FormContext)

  const [addons, setAddons] = React.useState<string[]>(formdata.addons || [])
  const [pricing, setPricing] = React.useState<any>(data['monthly'])
  const [billingTime, setBillingTime] = React.useState<string>('mo')

  // TODO: reuse this get pricing function among select plan and addons
  const getPricing = () => {
    if (formdata.billing === 'monthly') {
      setPricing(data['monthly'])
      setBillingTime('mo')
    } else {
      setPricing(data['yearly'])
      setBillingTime('yr')
    }
  }

  React.useEffect(() => {
    setFormData({
      ...formdata,
      addons: addons
    })

    getPricing()

  }, [addons])

  return (
    <>
      <div className='mt-10'>
        <AddonCard
          title='Online Service'
          description='Access to multiplayer games'
          price={`+$${pricing.online_service}/${billingTime}`}
          addons={addons}
          setAddons={setAddons}
        />
        <AddonCard
          title='Larger Storage'
          description='Extra 1TB of cloud save'
          price={`+$${pricing.larger_storage}/${billingTime}`}
          addons={addons}
          setAddons={setAddons}
        />
        <AddonCard
          title='Customizable Profile'
          description='Custom theme on your profile'
          price={`+$${pricing.customizable_profile}/${billingTime}`}
          addons={addons}
          setAddons={setAddons}
        />

        <NextBackBtn />
      </div>
    </>
  )
}

export default Addons