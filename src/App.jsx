import React from "react";
import BookCard from "./components/bookcard"; // Importing the BookCard component

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://via.placeholder.com/150" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://via.placeholder.com/150" },
  { id: 3, title: "1984", author: "George Orwell", cover: "https://via.placeholder.com/150" },
];

const App = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Digital Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} title={book.title} author={book.author} cover={book.cover} />
        ))}
      </div>
    </div>
  );
};

export default App;