import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const AddUser = () => {
  const navigate = useNavigate();
  // const id = localStorage.getItem("userId");
  const [inputs, setinputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    avatar: "",
    domain: "",
    available: "",
  });
  //inputes
  const handelchange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      const { data } = await axios.post(`/api/v1/users/create`, {
        // user: id,
        first_name: inputs.first_name,
        last_name: inputs.last_name,
        email: inputs.email,
        gender: inputs.gender,
        avatar: inputs.avatar,
        domain: inputs.domain,
        available: inputs.available,
      });
      if (data?.success) {
        alert("user Created");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(inputs);
  return (
    <>
      <form onSubmit={handelsubmit}>
        <Box
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px"}
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          marginTop={"30px"}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            padding={3}
            color={"gray"}
          >
            Create A Posts
          </Typography>

          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            First Name:
          </InputLabel>
          <TextField
            name="first_name"
            value={inputs.first_name}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Last Name:
          </InputLabel>
          <TextField
            name="last_name"
            value={inputs.last_name}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Email:
          </InputLabel>
          <TextField
            name="email"
            value={inputs.email}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={inputs.gender}
              onChange={handelchange}
            >
              <FormControlLabel
                value={"male"}
                label="Male"
                control={<Radio />}
              />
              <FormControlLabel
                value={"female"}
                label="Female"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image Url:
          </InputLabel>
          <TextField
            name="avatar"
            value={inputs.avatar}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Domain:
          </InputLabel>
          <TextField
            name="domain"
            value={inputs.domain}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <FormControl>
            <FormLabel>Available</FormLabel>
            <RadioGroup
              name="available"
              value={inputs.available}
              onChange={handelchange}
            >
              <FormControlLabel value={"Yes"} label="Yes" control={<Radio />} />
              <FormControlLabel value={"No"} label="No" control={<Radio />} />
            </RadioGroup>
          </FormControl>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddUser;
