import React from 'react'

type formDataTypes = {
    name?: string,
    email?: string,
    phone?: string,
    plan?: 'arcade' | 'advanced' | 'pro',
    billing?: 'monthly' | 'yearly',
    addons?: string[],
}

export const FormContext = React.createContext({
    formdata: {} as formDataTypes,
    setFormData: (formdata: formDataTypes) => {}
})