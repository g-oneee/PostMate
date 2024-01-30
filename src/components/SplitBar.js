import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const SplitBar = ({ method, setMethod }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setMethod(options[index]);
    setSelectedIndex(index);
    setAnchorEl(null);
    // You can perform additional actions based on the selected index here
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["POST", "GET", "PUT", "DELETE"];

  return (
    <div>
      <Button
        // variant="contained"
        // color="primary"
        // color="black"
        style={{
          color: "white",
          backgroundColor: "#000000",
          marginTop: "5px",
          marginRight: "10px",
        }}
        aria-controls="split-button-menu"
        aria-haspopup="true"
        size={"large"}
        onClick={handleClick}
      >
        {options[selectedIndex]}
      </Button>
      <Menu
        id="split-button-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SplitBar;
