import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Link } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";

import { DiGithubBadge } from "react-icons/di";

const Navbar = () => {
  const githubLink = "https://github.com/g-oneee/postmate-";
  // Replace with your actual GitHub repository URL

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#000000", margin: "0" }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PostMate
        </Typography>
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
        >
          <IconButton size="large" color="inherit">
            <DiGithubBadge />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
