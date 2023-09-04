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