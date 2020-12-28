import React, {useState, useEffect}  from 'react';
import sanityClient from '../Client.js'

import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";



const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

    if(!author) return <div>Loading..</div>


    
    return (
      <main className="relative">
      <img  alt="" className="absolute w-full"/>
      <div className="p-5 lg:pt-48 container mx-auto relative">
          <section className="bg-gray-200 rounded-lg shadow-2xl lg:flex p-20">
              <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 my-auto" alt="me"/>
              <div className="text-lg flex flex-col justify-center">
                  
              <div className="prose lg:prose-xl text-black">
                  <BlockContent blocks={author.bio} projectId="41nsk0at" dataset="production"/>
              </div>
              </div>
          </section>
      </div>
  </main>
        
    )
}

{/* <main className="relative">
<img src={background} alt="me" className="absolute w-full"/>
<div className="p-10 lg:pt-48 container mx-auto relative">
    <section className="bg-gray-200 rounded-lg shadow-2xl lg:flex p-20">
        <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 my-auto" alt="me"/>
        <div className="text-lg flex flex-col justify-center">
            
        <div className="prose lg:prose-xl text-black">
            <BlockContent blocks={author.bio} projectId="41nsk0at" dataset="production"/>
        </div>
        </div>
    </section>
</div>
</main> */}