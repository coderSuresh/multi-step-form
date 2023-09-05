import React from 'react'
import NextBackBtn from './NextBackBtn'
import { FormContext } from '@/context/FormContext'

const Personal = () => {

  const { formdata, setFormData } = React.useContext(FormContext)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formdata,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  return (
    <div className="mt-10 flex flex-col">

      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input type="text" value={formdata.name} onInput={(e) => handleChange(e)} id="name" placeholder="eg: Stephen King" className="border rounded mb-4 p-2 w-full" />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">Email Address</label>
        <input type="email" value={formdata.email} onInput={(e) => handleChange(e)} id="email" placeholder="eg: stephenking@lorem.com" className="border rounded mb-4 p-2 w-full" />
      </div>

      <div>
        <label htmlFor="phone" className="block mb-1">Phone Number</label>
        <input type="tel" value={formdata.phone} onInput={(e) => handleChange(e)} id="phone" placeholder="eg: +1 234 567 890" className="border rounded mb-4 p-2 w-full" />
      </div>

      <NextBackBtn />

    </div>
  )
}

export default Personal