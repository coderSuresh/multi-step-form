import React from 'react'
import StepContext from '@/context/StepContext'
import { ChildrenProps } from '@/types/props'

const StepProvider = ({ children }: ChildrenProps) => {

  const [step, setStep] = React.useState(1)

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  )
}

export default StepProvider