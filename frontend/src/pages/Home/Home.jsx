import React from "react";
import { useQuery } from "react-query";
import axiosClient from "../../utils/axios";

const Home = () => {
  const fetchDrops = async () => {
    // const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
    // const headers = {
    //     Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    // };
    // const response = await axiosClient.get('/drop', { headers });
    const response = await axiosClient.get("/");
    return response.data;
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["test"],
    queryFn: fetchDrops,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: {error.message}</p>;

  return <ul>{data.msg}</ul>;
};

export default Home;
