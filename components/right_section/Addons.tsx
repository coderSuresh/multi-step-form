'use client'
import React from 'react'
import AddonCard from '@/components/right_section/addons/AddonCard'
import NextBackBtn from './NextBackBtn'

const Addons = () => {

  const [addons, setAddons] = React.useState<string[]>([])

  return (
    <>
      <div className='mt-10'>
        <AddonCard
          title='Online Service'
          description='Access to multiplayer games'
          price='1'
          addons={addons}
          setAddons={setAddons}
        />
        <AddonCard
          title='Larger Storage'
          description='Extra 1TB of cloud save'
          price='2'
          addons={addons}
          setAddons={setAddons}
        />
        <AddonCard
          title='Customizable Profile'
          description='Custom theme on your profile'
          price='2'
          addons={addons}
          setAddons={setAddons}
        />

        <NextBackBtn />
      </div>
    </>
  )
}

export default Addons