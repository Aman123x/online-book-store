import React, { useState, useEffect } from "react";
import Detail from "./Detail";

const truncateText = (text, maxLength) => {
  if (!text) return '';
  const lengthh = Math.min(text.length, maxLength);
  return text.length > lengthh ? text.substring(0, lengthh) + '...' : text;
};

const BookList = ({ bookData }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  useEffect(() => {
    // Reset selectedBook when bookData changes
    setSelectedBook(null);
  }, [bookData]);

  return (
    <div className="container">
      <div className="detail">
        {selectedBook ? (
          <Detail book={selectedBook} />
        ) : (
          Array.isArray(bookData.items) &&
          bookData.items.slice(0, 2).map((book) => (
            book.volumeInfo.imageLinks && (
              <div key={book.id} className="bookdetails">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  onClick={() => handleBookClick(book)}
                />
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{truncateText(book.volumeInfo.description, 100)}</p>
                  <button
                    className="btn"
                    onClick={() => handleBookClick(book)}
                  >
                    Now Read
                  </button>
                </div>
              </div>
            )
          ))
        )}
      </div>

      <div className="card">
        <h4>More Books</h4>
        {Array.isArray(bookData.items) &&
          bookData.items.slice(2).map((book) => (
            book.volumeInfo.imageLinks && (
              <img
                onClick={() => handleBookClick(book)}
                key={book.id}
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            )
          ))}
      </div>
    </div>
  );
};

export default BookList;
