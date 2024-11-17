import React from 'react'
import People from '@/public/assets/about-page/people.jpeg'
import Image from 'next/image'
function About() {
    return (
        <div className=' bg-[#4874AE]/10'>
            <div className='container  flex flex-col-reverse gap-16 md:flex-row'>

                <Image src={People} alt='People about us' />

                <div className='flex flex-col gap-8'>
                    <h2 className="text-4xl font-bold">
                        Lorem <span className="text-blue-600">ipsum</span>
                    </h2>
                    <h1 className='text-2xl font-bold'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About