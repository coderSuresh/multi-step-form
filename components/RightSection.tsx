import React from 'react'

const RightSection = () => {
    return (
        <div className="form__right p-10 text-marine-blue text-sm">

            <div className="heading">
                <h2 className="text-2xl font-bold">Personal info</h2>
                <p className="text-cool-gray mt-1">Please provide your name, email address and phone number.</p>
            </div>

            <form action='#' className="mt-10 flex flex-col">

                <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input type="text" id="name" placeholder="eg: Stephen King" className="border rounded mb-4 p-2 w-full" />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1">Email Address</label>
                    <input type="email" id="email" placeholder="eg: stephenking@lorem.com" className="border rounded mb-4 p-2 w-full" />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-1">Phone Number</label>
                    <input type="tel" id="phone" placeholder="eg: +1 234 567 890" className="border rounded mb-4 p-2 w-full" />
                </div>

                <button type="submit" className="bg-marine-blue w-fit self-end text-white rounded-lg px-4 py-2 mt-10 font-semibold">Next Step</button>

            </form>

        </div>
  )
}

export default RightSection