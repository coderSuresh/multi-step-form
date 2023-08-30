import React from 'react'
import { LeftSectionBulletProps } from '@/types/props'

const LeftSectionBullet = ({step, title} : LeftSectionBulletProps) => {
  return (
      <div className="flex gap-4 mb-6">
          <div className="flex items-center justify-center border bg-light-blue h-8 w-8 rounded-full">
              <p className="text-xl font-bold text-marine-blue">1</p>
          </div>

          <div>
              <p className="uppercase text-xs text-cool-gray">Step 1</p>
              <h2 className="font-medium text-sm text-white uppercase mt-1">Your info</h2>
          </div>
      </div>
  )
}

export default LeftSectionBullet