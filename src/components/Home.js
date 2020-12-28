import React from 'react';
import image from "../BWCA.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="BWCA" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-5 lg:pt-64 px-8">
                <h1 style={{fontSize: '5em', marginBottom: '100px'}} className="text-grey leading-none lg:leading-snug home-name">Welcome To Ken's Blog!</h1>
            </section>
        </main>
    
        )
}