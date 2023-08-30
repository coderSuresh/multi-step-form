import React from 'react'
import { LeftSectionBulletProps } from '@/types/props'

const LeftSectionBullet = ({step, title, active} : LeftSectionBulletProps) => {
  return (
      <div className="flex gap-4 mb-6">
          <div className={`${active ? 'bg-light-blue' : ''} flex items-center justify-center border h-8 w-8 rounded-full`}>
              <p className={`text-xl font-bold ${active ? 'text-marine-blue' : 'text-white'}`}>{step}</p>
          </div>

          <div>
              <p className="uppercase text-xs text-cool-gray">Step {step}</p>
              <h2 className="font-medium text-sm text-white uppercase mt-1">{ title }</h2>
          </div>
      </div>
  )
}

export default LeftSectionBullet