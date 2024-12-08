import React from "react";
import { location } from "@/app/lib/navData";

const Location = () => {
  return (
    <div>
      <section className="location py-16">
        <div className="container mx-auto px-4">
          <div className="heading text-center mb-10">
            <h1 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-bold">
              Explore by Location
            </h1>
            <p className="text-slate-600 opacity-90 mt-4 text-base md:text-lg max-w-3xl mx-auto">
              Discover beautiful locations and choose from a range of properties
              including Villas, Offices, and Apartments. Find your perfect place
              in the most sought-after areas.
            </p>
          </div>

          <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
            {location.map(
              (
                item: {
                  cover: string | undefined;
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  Villas:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  Offices:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  Apartments:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  key={index}
                >
                  <img
                    src={item.cover}
                    alt=""
                    className="rounded-lg w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <h5 className="text-xl font-semibold">{item.name}</h5>
                    <p className="mt-2 flex space-x-4">
                      <label className="opacity-80">{item.Villas}</label>
                      <label className="opacity-80">{item.Offices}</label>
                      <label className="opacity-80">{item.Apartments}</label>
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-[rgba(15,28,47,0.5)] z-0 m-5 rounded-lg"></div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
