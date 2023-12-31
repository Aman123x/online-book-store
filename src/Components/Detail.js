import React from "react";
import "./detail.css";

function Detail({ book }) {

    function nowRead(link){
        window.location.href = link;
    }

  return (
    <div className="book">
      <div>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" />
      </div>
      <div className="book_">
            <h1>{book.volumeInfo.title}</h1>
            <div className="bookDetail">
                <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}</p>
                <p>Published On : {book.volumeInfo.publishedDate}</p>
            </div>
            <p>{book.volumeInfo.description}</p>
            <p className="span">
                <div className="mainSpan">
                    <span>Avg Rating: 4.5 |</span>
                    <span>Page Count: {book.volumeInfo.pageCount} | </span>
                    <span>Publisher: {book.volumeInfo.publisher} | </span>
                    <span>Language: {book.volumeInfo.language}</span>
                </div>
                <div className="bttn">
                    <button onClick={()=>nowRead(book.volumeInfo.infoLink)}>Now Read!</button>
                    <button onClick={()=>nowRead(book.volumeInfo.infoLink)}>More info!</button>
                </div>
            </p>
      </div>
    </div>
  );
}

export default Detail;
