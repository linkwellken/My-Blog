import React from 'react';
import image from "../BWCA.jpg";

export default function Home() {
    return (
        <div>
            <img src={image} alt="BWCA" className="absolute object-cover w-full h-full" />
            <main className=" min-h-screen p-20">
                <section className="container mx-auto pt-10">
                    <h1 className="text-5xl relative flex text-center justify-center">Welcome To My Blog!</h1>
                </section>
            </main>
        </div>
    
        )
}

