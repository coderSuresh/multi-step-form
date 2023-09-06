import React from 'react'
import { AddonProps } from '@/types/props'

const AddonCard = ({ title, description, price, addons, setAddons }: AddonProps) => {

    const id = title.toLowerCase().replace(' ', '-')

    const handleAddonChange = (title: string) => {
        if (!addons.includes(title)) {
            setAddons([...addons, title])
        } else {
            setAddons(() => addons.filter(addon => addon != title))
        }
    }

    return (
        <div className={`${addons.includes(title) && 'border-purplish-blue bg-magnolia'} border hover:border-purplish-blue w-full rounded-lg p-5 flex items-center gap-5 mb-4`}>
            <input
                checked={addons.includes(title)}
                type="checkbox"
                onChange={() => handleAddonChange(title)}
                id={id}
                className='relative h-0 w-0 mr-3 before:border before:border-light-gray checked:before:content-["\f00c"] checked:before:font-["Fontawesome"] before:text-md before:flex before:items-center before:justify-center before:text-white before:h-5 before:w-5 before:rounded before:checked:bg-purplish-blue before:absolute before:-top-2  before:left-0'
            />
            <label htmlFor={id} className='flex items-center w-full'>
                <div className='flex-grow'>
                    <h3 className='font-semibold'>{title}</h3>
                    <p className="text-cool-gray">{description}</p>
                </div>
                <p className='text-purplish-blue'>{price}</p>
            </label>
        </div>
    )
}

export default AddonCard