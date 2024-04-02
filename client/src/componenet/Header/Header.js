import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">UserData App</Typography>

          <Box display={"flex"} marginLeft="auto">
            <>
              <Button
                sx={{ margin: 1, color: "white" }}
                LinkComponent={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                sx={{ margin: 1, color: "white" }}
                LinkComponent={Link}
                to="/adduser"
              >
                Add User
              </Button>
            </>

            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/search"
            >
              Search
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
