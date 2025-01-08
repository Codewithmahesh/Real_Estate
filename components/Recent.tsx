import React from "react";
import RecentCard from "./RecentCard";
import { Item } from "@/types/types";
import { listData } from "@/app/lib/dummydata";

const Recent = () => {
  const data: Item[] = listData;

  return (
    <div>
      <section className="recent padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mt-8">
            <h1 className="text-slate-900 text-3xl md:text-6xl lg:text-5xl font-bold">
              Recent Property Listed
            </h1>
            <p className="text-slate-900 opacity-80 mt-4 text-base md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis officia, quidem voluptas ea maiores eos dignissimos!
            </p>
          </div>
          <div className="grid grid-cols-1 md:p-14 lg:mx-auto  sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 ">
            {data.map((item) => (
              <RecentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recent;
