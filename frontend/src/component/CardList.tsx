import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Card from "./Card";

interface CardData {
  id: number;
  title: string;
  description: string;
}

const CardList: React.FC = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch data from the backend whenever the searchTerm changes
    const fetchData = async () => {
      try {
        const response = await axios.get<CardData[]>(
          `${process.env.REACT_APP_API_URL}/api/data`,
          {
            params: { query: searchTerm }, // Send searchTerm as a query parameter
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="w-full">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-10 my-20 md:w-1/2 md:mx-auto px-10">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
