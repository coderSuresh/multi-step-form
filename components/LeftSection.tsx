import React from 'react'
import LeftSectionBullet from './LeftSectionBullet'

const LeftSection = () => {
    return (
        <div className="form__left text-xs min-w-[240px] p-10 bg-desktop-sidebar bg-cover bg-no-repeat rounded-lg">

            <LeftSectionBullet step={1} title="Your info" active={true} />

            <LeftSectionBullet step={2} title="Select plan" active={false} />

            <LeftSectionBullet step={3} title="Add-ons" active={false} />

            <LeftSectionBullet step={4} title="Summary" active={false} />

        </div>
    )
}

export default LeftSection