import React from 'react'
import { HeadingProps } from '@/types/props'

const Heading = ({ title, description }: HeadingProps) => {
    return (
        <div className="heading">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-cool-gray mt-1">{description}</p>
        </div>
    )
}

export default Heading