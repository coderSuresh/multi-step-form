import React from 'react'
import NextBackBtn from './NextBackBtn'

const Personal = () => {
  return (
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

      <NextBackBtn />

    </form>
  )
}

export default Personal