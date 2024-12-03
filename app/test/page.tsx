"use client";
import axios from "axios";
import { useEffect } from "react";

const page = () => {
  const testapi = async () => {
    try {
      const res = await axios.post("/api/klaviyo", {
        email: "20221a05c9@gmail.com",
      });
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    testapi();
  }, []);
  return <div></div>;
};

export default page;
