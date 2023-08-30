import React from 'react'

const LeftSection = () => {
    return (
        <div className="form__left text-xs min-w-[240px] p-10 bg-desktop-sidebar bg-cover bg-no-repeat rounded-lg">

            <div className="flex gap-4 mb-6">
                <div className="flex items-center justify-center border bg-light-blue h-8 w-8 rounded-full">
                    <p className="text-xl font-bold text-marine-blue">1</p>
                </div>

                <div>
                    <p className="uppercase text-xs text-cool-gray">Step 1</p>
                    <h2 className="font-medium text-sm text-white uppercase mt-1">Your info</h2>
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex items-center justify-center border h-8 w-8 rounded-full">
                    <p className="text-xl font-bold text-white">2</p>
                </div>

                <div>
                    <p className="uppercase text-cool-gray">Step 2</p>
                    <h2 className="font-medium text-white uppercase mt-1">Select plan</h2>
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex items-center justify-center border h-8 w-8 rounded-full">
                    <p className="text-xl font-bold text-white">3</p>
                </div>

                <div>
                    <p className="uppercase text-cool-gray">Step 3</p>
                    <h2 className="font-medium text-white uppercase mt-1">Add-ons</h2>
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex items-center justify-center border h-8 w-8 rounded-full">
                    <p className="text-xl font-bold text-white">4</p>
                </div>

                <div>
                    <p className="uppercase text-cool-gray">Step 4</p>
                    <h2 className="font-medium text-white uppercase mt-1">Summary</h2>
                </div>
            </div>

        </div>
    )
}

export default LeftSection