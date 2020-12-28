import React, {useEffect, useState} from 'react';
import sanityClient from "../Client.js"

export default function Projects() {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, [])

    return (
        <main className="min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center">Ken's Projects</h1>
                <h2 className="text-lg text-center text-black flex justify-center mb-12 mt-2">Check out the project links below if you'd like to learn more.</h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-gray-100 p-4">
                        <h3 className="text-black text-center text-3xl  mb-2 ">
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                        </h3>
                        <div className="text-black text-xs space-x-4">
                            <span className=" ml-0 mr-0 pl-0 pr-0">
                                <strong className="font-bold ml-0 mr-0">Finished on </strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span className=" ml-0 mr-0 pl-1 pr-0">
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span className=" ml-0 mr-0 pl-1 pr-0">
                                <strong className="font-bold ml-0 mr-0">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading relaxed">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-orange-500 font-bold hover:underline hover:text-orange-500 text-xl">
                                View The Project
                            </a>
                            
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}