import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-100 border-2 border-gray-10 rounded-lg pb-5">
      <h3 className="text-lg font-semibold px-5 mt-3 mb-2">{title}</h3>
      <div className="h-[2px] bg-gray-200"/>
      <p className="text-gray-600 px-5 mt-3">{description}</p>
    </div>
  );
};

export default Card;
