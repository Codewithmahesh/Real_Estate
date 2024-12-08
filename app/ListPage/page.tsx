// pages/ListPage.tsx
"use client"
import React from "react";
import { listData } from "../lib/dummydata";
import Wrapper from "@/components/Wrapper";
import Filter from "@/components/Filter";
import Card from "@/components/Card";
import Map from "@/components/Map"; 
import { Item } from "@/types/types"; 

const ListPage = () => {
  const data: Item[] = listData; 

  return (
    <Wrapper>
      <div className="listPage flex flex-col lg:flex-row h-screen">
        <div className="listContainer flex-1 lg:flex-[3] overflow-y-scroll h-full pr-4">
          <div className="wrapper flex flex-col gap-12 p-4">
            {/* Filter Component */}
            <Filter />
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContainer bg-[#fcf5f3] flex-1 lg:flex-2 h-full">
          <Map items={listData} onSelect={function (location: string): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      </div>
    </Wrapper>
  );
};

export default ListPage;
