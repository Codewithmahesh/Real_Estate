"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SingleForm from "@/components/SingleForm";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { FaCheckCircle, FaStarHalfAlt } from "react-icons/fa";
import { FaHouseChimney, FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

// Fix default icon issue in Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const page = () => {
  // Sample coordinates for the location (latitude, longitude)
  const coordinates: [number, number] = [12.9716, 77.5946]; // Replace with the actual location coordinates

  return (
    <div>
      <div className="declaimer flex gap-3 p-[.8%] items-center justify-center bg-slate-800 text-white ">
        <span className="capitalize">
          Look in your new home with flexible payment plans and special
          discounts!
        </span>
        <Link href={"#"}>Learn More</Link>
      </div>

      <Wrapper>
        <div className="container flex flex-col lg:flex-row justify-center my-7 gap-10">
          {/* Left Section */}
          <div className="left w-full lg:w-1/2 items-center">
            <div className="left__content flex flex-col justify-center items-center">
              {/* Main Image */}
              <div className="mainImage relative h-[400px] w-[600px] shadow-2xl p-1 bg-gray-300 rounded-[28px]">
                <img
                  src="/house/h1.avif"
                  className="object-cover h-full w-full rounded-[28px]"
                  alt="House"
                />
                <div className="absolute justify-center top-4 right-4 bg-white bg-opacity-90 text-black px-4 py-2 rounded-full flex items-center shadow-md">
                  <IoLocationSharp className="cursor-pointer" />
                  <Link href={"#"} className="cursor-pointer hover:underline">
                    123 Main Street, City
                  </Link>
                </div>
              </div>
              {/* Small Images */}
              <div className="subImages mt-4 ml-1">
                <div className="right__content grid grid-cols-3 gap-4 h-[120px] w-[590px]">
                  <img
                    src="/house/h2.avif"
                    className="h-full w-full object-cover rounded-xl shadow-md"
                    alt="Sub Image 1"
                  />
                  <img
                    src="/house/h4.avif"
                    className="h-full w-full object-cover rounded-xl shadow-md"
                    alt="Sub Image 2"
                  />
                  <div className="relative">
                    <img
                      src="/house/h3.avif"
                      className="object-cover h-full w-full rounded-xl shadow-md"
                      alt="Sub Image 3"
                    />
                    <div
                      className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white flex 
                      items-center justify-center rounded-xl hover:bg-opacity-70 transition duration-300"
                    >
                      <Link
                        href={"#"}
                        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition duration-300"
                      >
                        Show More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form mt-12 w-full flex justify-center">
                <SingleForm />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right flex flex-col justify-start w-full lg:w-1/2">
            <div className="right__content">
              <div className="shareheading flex items-center mt-8">
                <div className="flex text-gray-800 text-3xl font-bold">
                  Aruna Grandview Residences at Sinar Valley
                </div>
              </div>

              <div className="type flex items-center justify-between w-full mt-4">
                <div className="type__heading font-normal tracking-wider text-gray-500 flex items-center justify-between gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <FaHouseChimney />
                    <span>Residence</span>
                  </div>
                  <div className="stars flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl" />
                    ))}
                    <FaStarHalfAlt className="text-yellow-500 text-xl" />
                  </div>
                </div>
              </div>

              <div className="overview mt-10 flex items-center justify-center gap-7 border-2 border-gray-300 p-5 rounded-2xl shadow-2xl">
                <div className="price flex-col">
                  <div className="text-5xl font-semibold text-gray-800">
                    $1,650,500
                  </div>
                  <div className="text-sm text-gray-600 font-medium mx-2 mt-2">
                    Discounted Price
                  </div>
                </div>
                <div className="h-10 rounded-md w-1 bg-gray-300 shadow-2xl"></div>
                <div className="area flex-col">
                  <div className="text-5xl font-semibold text-gray-800">
                    258 m2
                  </div>
                  <div className="text-sm text-gray-600 font-medium mx-2 mt-2">
                    Including Yard
                  </div>
                </div>
                <div className="h-10 rounded-md w-1 bg-gray-300 shadow-2xl"></div>
                <div className="area flex-col">
                  <div className="text-5xl font-semibold text-gray-800">
                    4 BHK
                  </div>
                  <div className="text-sm text-gray-600 font-medium mx-2 mt-2 flex items-center justify-start gap-2"></div>
                </div>
              </div>

              <div className="desc mt-10 p-6 bg-gray-50 border rounded-lg shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Property Details
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Discover the perfect blend of comfort and elegance with Aruna
                  Grandview Residences at Sinar Valley. This exquisite property
                  offers spacious living with a modern design, making it an
                  ideal choice for families and individuals alike. Whether
                  you're looking for a place to call home or a sound investment,
                  this residence has it all.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    <FaCheckCircle className="inline text-green-500 mr-2" />
                    Located in the serene and picturesque Sinar Valley.
                  </li>
                  <li>
                    <FaCheckCircle className="inline text-green-500 mr-2" />
                    Flexible payment plans with exclusive discounts.
                  </li>
                  <li>
                    <FaCheckCircle className="inline text-green-500 mr-2" />
                    Close proximity to schools, shopping centers, and parks.
                  </li>
                  <li>
                    <FaCheckCircle className="inline text-green-500 mr-2" />
                    Modern architecture with eco-friendly design elements.
                  </li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Key Highlights
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enjoy a spacious yard, a luxurious 4-bedroom layout, and
                    high-end amenities designed to cater to your every need.
                    With breathtaking views and a premium location, this
                    property is more than a home—it's a lifestyle.
                  </p>
                </div>
              </div>

              <div className="map h-full mt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Location Map
                </h3>
                <MapContainer
                  center={coordinates}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="h-[300px] w-full rounded-lg"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={coordinates}>
                    <Popup>
                      <div className="flex items-center justify-start gap-4">
                        <img
                          src="/house/h1.avif"
                          alt="Property Image"
                          className="w-[150px] h-[100px] object-cover rounded-md shadow-lg"
                        />
                        <div className="flex flex-col">
                          <div className="text-xl font-semibold text-gray-800 mb-2">
                            Aruna Grandview Residences
                          </div>
                          <div className="text-gray-600 mb-3">Sinar Valley</div>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
