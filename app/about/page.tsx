import React from 'react'
import Hero from './components/Hero'
import Objective from './components/Objective'
import About from './components/About'
import Team from './components/Team'
import Partners from './components/Partners'
import Workwithus from './components/Workwithus'

function page() {
    return (
        <div>
            <Hero />
            <Objective />
            <About />
            <Team />
            <Partners />
            <Workwithus />
        </div>

    )
}

export default page