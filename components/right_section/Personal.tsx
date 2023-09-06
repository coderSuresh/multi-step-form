import React from 'react'
import NextBackBtn from './NextBackBtn'
import { FormContext } from '@/context/FormContext'

const Personal = () => {

  const { formdata, setFormData } = React.useContext(FormContext)

  const [isFormValid, setIsFormValid] = React.useState<boolean>(false)

  const [nameError, setNameError] = React.useState<string>('')
  const [emailError, setEmailError] = React.useState<string>('')
  const [phoneError, setPhoneError] = React.useState<string>('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formdata,
      [e.currentTarget.id]: e.currentTarget.value
    })

    switch (e.currentTarget.id) {
      case 'name':
        if (e.currentTarget.value) {
          setNameError('')
        }
        break
      case 'email':
        if (e.currentTarget.value) {
          setEmailError('')
        }
        break
      case 'phone':
        if (e.currentTarget.value) {
          setPhoneError('')
        }
        break
    }
  }

  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (formdata.name && formdata.email && formdata.phone) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [formdata])

  return (
    <form action='#' ref={formRef} className="mt-10 flex flex-col">

      <div>
        <div className='flex items-center justify-between'>
          <label htmlFor="name" className="block mb-1">Name</label>
          {nameError && <span className='text-strawberry-red'>{nameError}</span>}
        </div>
        <input type="text" value={formdata.name} onInput={(e) => handleChange(e)} id="name" placeholder="eg: Stephen King" className="border rounded mb-4 p-2 w-full" />
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label htmlFor="email" className="block mb-1">Email</label>
          {emailError && <span className='text-strawberry-red'>{emailError}</span>}
        </div>
        <input type="email" value={formdata.email} onInput={(e) => handleChange(e)} id="email" placeholder="eg: stephenking@lorem.com" className="border rounded mb-4 p-2 w-full" />
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label htmlFor="phone" className="block mb-1">Phone</label>
          {phoneError && <span className='text-strawberry-red'>{phoneError}</span>}
        </div>
        <input type="tel" value={formdata.phone} onInput={(e) => handleChange(e)} id="phone" placeholder="eg: +1 234 567 890" className="border rounded mb-4 p-2 w-full" />
      </div>

      <NextBackBtn
        isFormValid={isFormValid}
        setNameError={setNameError}
        setEmailError={setEmailError}
        setPhoneError={setPhoneError}
      />

    </form>
  )
}

export default Personal