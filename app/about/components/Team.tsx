import React from 'react'
import aavatar from '@/public/assets/about-page/aavatar.png'
import baverly from '@/public/assets/about-page/baverly.png'
import bill from '@/public/assets/about-page/bill.png'
import john from '@/public/assets/about-page/john.png'
import Image from 'next/image'
import AnimateInView from '@/components/animate/AnimateInView'




const teams = [
    {
        pic: aavatar,
        name: 'John Peter',
        post: 'COO'
    },
    {
        pic: baverly,
        name: 'John Peter',
        post: 'COO'
    },
    {
        pic: bill,
        name: 'John Peter',
        post: 'COO'
    },
    {
        pic: john,
        name: 'John Peter',
        post: 'COO'
    },
]

const TeamsCard = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {teams.map((team, index) => (
                <div key={index} className='bg-[#4874AE]/10 p-4 rounded-md flex flex-col items-center'>
                    <Image src={team.pic} alt={team.name} width={50} height={50} />
                    <h2>{team.name}</h2>
                    <p>{team.post}</p>
                </div>
            ))}
        </div>
    )
}
function Team() {
    return (
        <div className='container mt-8 mb-8'>
            <AnimateInView type='scale'>
                <h1 className='text-3xl mb-8 font-bold'>
                    Our Team
                </h1>
                <TeamsCard />
            </AnimateInView>
        </div>
    )
}

export default Team