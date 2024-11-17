import Image from 'next/image';
import React from 'react';

interface HeroProps {
    title: string;
    description: string;
    image: string;
    image_alt: string;
}

function Hero({ title, description, image, image_alt }: HeroProps) {
    return (
        <div className="flex items-center justify-between gap-8 -mt-16 flex-col md:flex-row bg-main-gradient min-h-screen px-8 py-16 text-white">
            <div className="max-w-lg">
                <h1 className="font-bold text-[38px] mb-4">
                    {title}
                </h1>
                <p className="text-lg">
                    {description}
                </p>
            </div>

            <div className="relative w-[531px] h-[470px]">
                <Image
                    src={image}
                    alt={image_alt}
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}

export default Hero;
