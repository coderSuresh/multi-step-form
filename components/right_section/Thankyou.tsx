import React from 'react'
import Image from 'next/image'

const Thankyou = () => {
    return (
        <div className='h-full flex flex-col items-center md:py-0 py-10 justify-center text-center'>
            <Image src='/assets/images/icon-thank-you.svg' height={70} width={70} alt='thanks-icon' aria-hidden={true} role='presentation' />
            <h2 className='font-bold text-2xl mt-5 mb-3'>Thank you!</h2>
            <p className='text-cool-gray'>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
            </p>
        </div>
    )
}

export default Thankyou