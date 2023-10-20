import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect, useState } from "react";

const Home = () => {
  const [aiResponse, setAIResponse] = useState("");

  useEffect(() => {
    fetch("/api/generate-scenario") // Use the correct API route
      .then((response) => response.json())
      .then((data) => setAIResponse(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Fire Safety Scenario:</h1>
      <p>{aiResponse}</p>
    </div>
  );
};

export default Home;
