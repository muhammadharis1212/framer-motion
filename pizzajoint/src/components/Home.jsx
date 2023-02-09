import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home container">
      <h3>Welcome to Pizza Joint</h3>
      <button onClick={() => navigate("base")}>Create Your Pizza</button>
    </div>
  );
};

export default Home;
