'use client'
import React from 'react'
import AddonCard from '@/components/forms/addons/AddonCard'

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

        <div className='flex items-center justify-between mb-5 w-full absolute bottom-0'>
          <button onClick={() => { }} className='text-cool-gray'>Go Back</button>
          <button type="submit" className="bg-marine-blue w-fit absolute right-20 text-white rounded-lg px-4 py-2 font-semibold">Next Step</button>
        </div>
      </div>
    </>
  )
}

export default Addons