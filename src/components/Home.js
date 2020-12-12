import React from 'react';
import image from "../BWCA.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="BWCA" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-800 leading-none lg:leading-snug home-name">Welcome!</h1>
            </section>
        </main>
    
        )
}