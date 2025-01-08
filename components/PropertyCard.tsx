import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";
// import PropertyModal from "@/components/PropertyModal"; // Importing the PropertyModal component

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  bhk: number;
  type: string;
  status: string;
  location: string;
  description: string;
  imageUrls: string[]; // Pass an array of image URLs
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  price,
  image,
  bhk,
  type,
  status,
  location,
  description,
  imageUrls, // Receive the image URLs
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageClick = () => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "blue";
      case "Ongoing":
        return "orange";
      case "Completed":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <div style={{ position: "relative", margin: "0 auto" }}>
        {/* Type Label at the Top */}
        <div className="text-slate-950 absolute top-3 left-3 bg-white p-2 rounded-full text-xs font-semibold opacity-90 z-10 uppercase tracking-widest ">
          {type}
        </div>

        {/* Main Card */}
        <Card
          sx={{
            height: "350px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            color: "white",
            overflow: "hidden",
            border: "2px solid cyan",
            cursor: "pointer", // Indicate clickable image
          }}
          onClick={handleImageClick}
        >
          <CardContent
            sx={{
              backgroundColor: "rgba(255, 255, 255, .8)",
              padding: "16px",
              borderRadius: "8px",
              margin: "5px",
            }}
          >
            <div className="flex justify-between items-center tracking-widest ">
              {/* Title */}
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <Link href={"#"} className="hover:underline">
                  {title}
                </Link>
              </Typography>
              {/* Price */}
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {price}
              </Typography>
            </div>

            {/* Location and Status */}
            <div style={{ marginTop: "8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Location */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <IoLocation className="text-xl text-blue-700" />
                  <Typography
                    variant="body2"
                    sx={{ color: "black", fontSize: "14px", fontWeight: 500 }}
                  >
                    {location}
                  </Typography>
                </div>
                {/* Status */}
                <Typography
                  sx={{
                    backgroundColor: getStatusColor(status),
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontSize: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  {status}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyCard;
