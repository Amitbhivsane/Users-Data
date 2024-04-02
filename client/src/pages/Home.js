import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../componenet/usercard/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  // get all users
  const getallUsers = async () => {
    try {
      const { data } = await axios.get(`/api/v1/users/allusers`);
      if (data?.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);

  useEffect(() => {
    getallUsers();
  }, []);

  return (
    <div>
      <div
      // style={{
      //   height: "20%",
      //   width: "auto",
      //   alignContent: "start",
      //   padding: "5px",
      // }}
      >
        {users &&
          users.map((user, index) => (
            <UserCard
              id={user?._id}
              isUser={localStorage.getItem("userId") === user?.user?._id}
              key={index}
              first_name={user?.first_name}
              last_name={user?.last_name}
              avatar={user?.avatar}
              email={user?.email}
              domain={user.domain}
              available={user.available}
              gender={user.gender}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
