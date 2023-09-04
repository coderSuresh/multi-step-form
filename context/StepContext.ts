import React from 'react'

const StepContext = React.createContext({
    step: 0,
    setStep: (step: number) => {}
})

export default StepContext