import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SliderProps {
  images: string[]; // Array of image URLs
}

const Slider: React.FC<SliderProps> = ({ images }) => (
  <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto ">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={true}
      showIndicators={false}
      showStatus={false}
      thumbWidth={80} // Width of the thumbnails
      renderArrowPrev={() => null} // Remove custom arrow buttons
      renderArrowNext={() => null} // Remove custom arrow buttons
      className="relative"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center bg-gray-800"
          style={{ height: "400px" }} // Set a fixed height for the image container
        >
          {image ? (
            <img
              src={image}
              className="object-cover w-full h-full rounded-md"
              alt={`Slide ${index + 1}`}
              style={{ height: "100%" }} // Ensure image covers the height of the container
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
          <div className="absolute bottom-[25px] md:bottom-[50px] left-0 px-[15px] md:px-[30px] py-[10px] md:py-[20px] bg-white text-black/[0.9] text-[15px] md:text-[25px] uppercase font-medium cursor-pointer hover:opacity-90">
            Buy now
          </div>
        </div>
      ))}
    </Carousel>
    <style jsx>{`
      .carousel .thumbs-wrapper {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        padding-top: 10px; /* Adjust to add spacing below the carousel */
      }
      .carousel .thumb {
        border-radius: 6px;
        overflow: hidden;
        margin: 0 5px;
        cursor: pointer;
        height: 80px; /* Fixed height for thumbnails */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px; /* Fixed width for thumbnails to match height */
      }
      .carousel .thumb img {
        width: auto;
        height: 80px; /* Ensure thumbnail image covers the height */
        object-fit: cover;
      }
      .carousel .thumb.selected,
      .carousel .thumb:hover {
        border: 2px solid #ffffff; /* Highlight selected or hovered thumbnail */
      }
    `}</style>
  </div>
);

export default Slider;
