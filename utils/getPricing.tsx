import { data } from '@/utils/data'

const getPricing = (formdataBilling: string | undefined, setPricing: React.Dispatch<any>, setBillingTime: React.Dispatch<string>) => {
  if (formdataBilling === 'monthly') {
    setPricing(data['monthly'])
    setBillingTime('mo')
  } else {
    setPricing(data['yearly'])
    setBillingTime('yr')
  }
}

export { getPricing }