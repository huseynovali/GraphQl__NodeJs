import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { DELETE_USER, GET_Users } from "./querys";
import { Link } from "react-router-dom";

function Home() {
  const { loading, error, data } = useQuery(GET_Users);
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_Users }], 
  });

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser({
        variables: { userId },
      });
    } catch (error) {
      console.error( error.message);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data?.getUsers?.map((item) => (
        <div>
          <Link to={item._id}>
            <p>{item.username}</p>
          </Link>
          <button onClick={() => handleDeleteUser(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
