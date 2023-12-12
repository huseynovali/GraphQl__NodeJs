import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router';

function Detail() {

    let {id} = useParams();
    const { loading, error, data } = useQuery(GET_Users,{
        variables:{userId:id}
    });
    console.log(data);
  return (
    <div>Detail</div>
  )
}

export default Detail