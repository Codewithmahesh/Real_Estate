import { Button, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineBedroomChild } from "react-icons/md";

const DropdownFilter = () => {
  //   drop down menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div
        className="flex items-center gap-4 mt-10 justify-start pl-5 bg-gray-100 shadow-lg p-2 rounded-full 
          border border-gray-300"
      >
        <MdOutlineBedroomChild className="text-2xl text-gray-600" />
        <div className="">
          <Typography
            component="div"
            className="text-xl text-gray-600 tracking-wider"
          >
            Rooms
          </Typography>
        </div>
      </div>
      <div className="flex items-center mt-6 justify-center gap-5">
        <div>
          <div className="flex">
            <Button
              id="basic-button-bathrooms"
              aria-controls={open ? "basic-menu-bathrooms" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="contained" // Added variant for consistency
              size="large" // Increased button size
              // color="primary"
              className="text-lg border-2 text-gray-800 bg-gray-200 border-slate-300 hover:border-slate-500" // Increased text size
            >
              <div>BHK</div>
              <div>
                <FaAngleDown className="ml-2 text-xl" />
              </div>
            </Button>
          </div>
          <Menu
            id="basic-menu-bedrooms"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>1 BHK</MenuItem>
            <MenuItem onClick={handleClose}>2 BHK</MenuItem>
            <MenuItem onClick={handleClose}>3 BHK</MenuItem>
            <MenuItem onClick={handleClose}>4+ BHK</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;
