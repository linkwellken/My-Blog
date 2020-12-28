// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../Client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
        asset->{
          _id,
          url
        }, 
        alt
      }
    }`)
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
      <main className="bg-white-100 mn-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center">Ken's Blog</h1>
          <h2 className="text-lg text-gray-600 flex text-center justify-center mt-2 mb-12">Blockchain, Smart Contracts, Health, and Stoicism</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData && allPostsData.map((post, index) => (
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-black-400" key={index}>
                  <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"/>
                  <span className="block relative h-full flex justify-end items-end p-2">
                    <h3 className="text-white text-lg text-center font-blog mx-auto p-1 bg-gray-800 text-white bg-opacity-70 rounded">
                      {post.title}
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
          </div>
        </section>
      </main>


  );
}