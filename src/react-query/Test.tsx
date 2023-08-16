import axios from "axios";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("/");

    };
    fetchTodos()
  },[]);
  return <div>Test</div>;
};

export default Test;
