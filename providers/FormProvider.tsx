import React from 'react'
import { ChildrenProps } from '@/types/props'
import { FormContext } from '@/context/FormContext'

const FormProvider = ({ children }: ChildrenProps) => {

  const [formdata, setFormData] = React.useState({})

  return (
  <FormContext.Provider value={{formdata, setFormData}}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider