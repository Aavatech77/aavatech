import Hero from '@/components/Hero'
import React from 'react'

function page() {
    return (
        <div>
            <Hero
                title="Lorem ipsum dolor sit amet consectetur. Ipsum enim id."
                description="We deliver cutting-edge software development, cloud solutions, and IT consulting to drive your business forward. We deliver cutting-edge software development, cloud solutions, and IT consulting to drive your business forward"
                image="/assets/about-page/hero.png"
                image_alt="Hero Image"
            />
        </div>
    )
}

export default page