import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { GET_User } from "./querys";

function Detail() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_User, {
    variables: { userId: id },
  });

  return <div>Detail</div>;
}

export default Detail;
