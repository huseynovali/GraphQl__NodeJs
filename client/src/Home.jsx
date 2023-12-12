import { useQuery } from "@apollo/client";
import React from "react";
import { GET_Users } from "./querys";
import { Link } from "react-router-dom";

function Home() {
  const { loading, error, data } = useQuery(GET_Users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("d", data);
  return (
    <div>
      {data?.getUsers?.map((item) => (
        <Link to={item._id}>
          <p>{item.username}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;
