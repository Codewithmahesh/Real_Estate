"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "@/app/style/swiper-styles.css";
import { properties } from "@/app/lib/dummydata"; // Import your properties array

const SwiperProperty = ({ propertyId }: { propertyId: number }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // Find the selected property based on the propertyId
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="swiper-container">
      {/* Main Image Slider */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {property.imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {property.imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={imageUrl}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProperty;
