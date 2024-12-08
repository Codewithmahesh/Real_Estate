"use client";
import listData from "@/app/lib/dummydata"; 
import React from "react";
import Card from "./Card";

const List = () => {
  return (
    <div className="list flex flex-col gap-8">
      {listData.map((item: any) => (
        <Card
          key={item.id} 
          item={{
            id: item.id,
            title: item.title,
            img: item.img,
            bedroom: item.bedroom,
            bathroom: item.bathroom,
            price: item.price,
            address: item.address,
          }}
        />
      ))}
    </div>
  );
};

export default List;
