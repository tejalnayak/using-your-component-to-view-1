import React from "react";

const BookCard = ({ title, author, cover }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img src={cover} alt={title} className="w-full h-40 object-cover mb-3 rounded" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">by {author}</p>
    </div>
  );
};

export default BookCard;