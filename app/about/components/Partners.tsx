import React from 'react'
import earthClientLogo from '@/public/assets/about-page/354-3549351_client-earth-logo.png';
import bioTecheLogo from '@/public/assets/about-page/biotechne+logo.png';
import Inmark from '@/public/assets/about-page/Inmarc-client-logos-Recovered-32.png';
import clientlogo from '@/public/assets/about-page/clientlogo-8-3.png'
import KudosClient from '@/public/assets/about-page/Kudos-Client-Logo-3.png'
import Image from 'next/image';


const partners = [
    {
        logo: earthClientLogo,
    },
    {
        logo: bioTecheLogo,
    },
    {
        logo: Inmark,
    },
    {
        logo: clientlogo,
    },
    {
        logo: KudosClient,
    },
]
function Partners() {
    return (
        <div className='bg-[#4874AE]/10'>
            <h1 className='text-3xl text-center pt-20'>
                Our Partnership and Collabratiors
            </h1>
            <div className='grid grid-cols-5 gap-4'>
                {partners.map((partner, index) => (
                    <div key={index} className=' p-4 rounded-md flex flex-col justify-center items-center'>
                        <Image src={partner.logo} alt='partner logo' />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Partners