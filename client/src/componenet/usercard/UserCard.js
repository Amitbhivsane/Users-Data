import * as React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

// import toast from "react-hot-toast";
export default function UserCard({
  id,
  first_name,
  last_name,
  email,
  gender,
  avatar,
  domain,
  available,
}) {
  const navigate = useNavigate();
  const handelEdit = () => {
    navigate(`/edituser/${id}`);
  };

  const handelDelete = async () => {
    try {
      const data = await axios.delete(`/api/v1/users/delete/${id}`);
      if (data?.success) {
        alert("user delete");
        navigate("/");
      }
    } catch (error) {}
  };
  return (
    <Card
      sx={{
        width: "30%",
        margin: "auto",
        height: "20%",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": { boxShadow: "5px 5px 10px #ccc" },
      }}
    >
      <Box display={"flex"}>
        <IconButton onClick={handelEdit} sx={{ marginLeft: "auto" }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handelDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </Box>

      <CardHeader
        avatar={
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={avatar} />
          </Stack>
        }
        title={first_name}
        subheader={last_name}
      />

      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Gender :- {gender}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Email :- {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Domain : {domain}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Available : {available}
        </Typography>
      </CardContent>
    </Card>
  );
}
