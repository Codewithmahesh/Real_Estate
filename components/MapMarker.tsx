// src/components/MapMarker.tsx
"use client";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Item } from "@/types/types"; // Adjust the import path accordingly
import Link from "next/link"; // Import Link from next/link

const iconUrl = (markerIcon as any).src;
const shadowUrl = (markerShadow as any).src;

const defaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapMarkerProps
  extends Pick<
    Item,
    "id" | "latitude" | "longitude" | "title" | "img" | "bedroom" | "price"
  > {}

const MapMarker: React.FC<MapMarkerProps> = ({
  id,
  latitude,
  longitude,
  title,
  img,
  bedroom,
  price,
}) => {
  return (
    <Marker position={[latitude, longitude]} icon={defaultIcon}>
      <Popup>
        <div className="popupContainer flex gap-[20px] max-w-[300px]">
          <img src={img} alt={title} className="w-[64px] h-[48px] object-cover rounded-[5px]" />
          <div className="textContainer flex flex-col justify-between">
            <Link href={`/details/${id}`}>{title}</Link>
            <span>{bedroom} Beds</span>
            <b>${price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
