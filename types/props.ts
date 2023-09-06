export type ChildrenProps = {
    children: React.ReactNode
}

export type LeftSectionBulletProps = {
    step: number,
    title: string,
    active: boolean,
}

export type PlanProps = {
    name: string,
    price: string,
    plan: React.SetStateAction<string>,
    setPlan:React.Dispatch<React.SetStateAction<string>>,
}

export type AddonProps = {
    title: string,
    description: string,
    price: string,
    addons: string[],
    setAddons: React.Dispatch<React.SetStateAction<string[]>>,
}

export type HeadingProps = {
    title: string,
    description: string,
}

export type formProps = {
    isFormValid: boolean,
    setNameError?: React.Dispatch<React.SetStateAction<string>>,
    setEmailError?: React.Dispatch<React.SetStateAction<string>>,
    setPhoneError?: React.Dispatch<React.SetStateAction<string>>,
}
