"use client";
import { Box, Typography, Slider } from "@mui/material";
import React, { useState } from "react";
import { ImPriceTags } from "react-icons/im";

const PriceSlider = () => {
  //   slider
  const [value, setValue] = useState([0, 10000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div>
      <div
        className="flex items-center gap-4 justify-start pl-5 bg-gray-100 shadow-lg p-2 rounded-full 
          border border-gray-300"
      >
        <ImPriceTags className="text-2xl text-gray-600" />
        <div className="">
          <Typography
            component="div"
            className="text-xl text-gray-600 tracking-wider"
          >
            Price Range
          </Typography>
        </div>
      </div>
      <div>
        <Box width={300}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value}`}
            min={0}
            max={10000}
            step={100}
            sx={{
              "& .MuiSlider-thumb": {
                backgroundColor: "pink", // Thumb color
              },
              "& .MuiSlider-rail": {
                backgroundColor: "black", // Rail (track) color
              },
              "& .MuiSlider-track": {
                backgroundColor: "gray", // Track color
              },
            }}
            className="mt-4 ml-4 "
          />
          <Typography variant="body2" color="textSecondary">
            Selected price range: ${value[0]} - ${value[1]}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default PriceSlider;
