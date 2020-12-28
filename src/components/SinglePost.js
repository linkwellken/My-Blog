import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../Client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container pt-3 shadow-lg mx-auto bg-gray-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="font text-3xl lg:text-6xl mb-4">
                {postData.title}
              </h2>
              <div className="flex justify-center text-white">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Ken"
                />
                <h4 className="font flex items-center text-center pl-2 text-2xl">
                  {postData.name}
                </h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(postData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
        </div>
        <div className="p2 lg:px-35  lg:py-30 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId="41nsk0at"
            dataset={"production"}
          />
        </div>
      </div>
    </div>
  );
}