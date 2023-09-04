import React from 'react'
import { AddonProps } from '@/types/props'

const AddonCard = ({ title, description, price }: AddonProps) => {
    return (
        <div className="border w-full rounded-lg p-5 flex items-center gap-3 mb-4">
            <input type="checkbox" id="online-service" />
            <label htmlFor="online-service" className='flex items-center w-full'>
                <div className='flex-grow'>
                    <h3 className='font-semibold'>{title}</h3>
                    <p className="text-cool-gray">{description}</p>
                </div>
                <p className='text-purplish-blue'>+${price}/mo</p>
            </label>
        </div>
    )
}

export default AddonCard