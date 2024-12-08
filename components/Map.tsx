"use client";
import React from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import MapMarker from "./MapMarker"; // Import the MapMarker component
import "leaflet/dist/leaflet.css";

interface MapProps {
  items?: any[]; // Set the type to any for your items
  onSelect: (location: string) => void; // Function that receives the selected location as a string
}

const Map: React.FC<MapProps> = ({ items = [], onSelect }) => {
  // Custom component for handling map click events
  const LocationSelector = () => {
    useMapEvents({
      click(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        const location = `${lat}, ${lng}`;
        onSelect(location); // Pass the selected location as a string to onSelect
      },
    });
    return null;
  };

  return (
    <div className="w-full h-[300px] lg:h-full min-h-[400px]">
      <MapContainer
        center={[51.4545, -2.5879]} // Adjust the center as needed
        zoom={7}
        scrollWheelZoom={true}
        className="w-full h-full rounded-[20px]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add the location selector for selecting a new point */}
        <LocationSelector />

        {/* Render markers for items */}
        {items.map((item: any) => (
          <MapMarker
            key={item.id}
            id={item.id}
            latitude={item.latitude}
            longitude={item.longitude}
            title={item.title}
            img={item.img}
            bedroom={item.bedroom}
            price={item.price}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
