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