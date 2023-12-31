import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';
import logo from '../Images/logo.png';
import keazonBooks from '../Images/KeazoNBOOKS.png';
import bell from '../Images/bell.png';
import diamond from '../Images/diamond.png';
import heart from '../Images/book-heart.svg';
import search from '../Images/search.png';
import user from '../Images/user.png';

const Navbar = ({ setData }) => {
  const [searchResult, setSearchResult] = useState('');

  useEffect(() => {
    // Fetch initial data for "sherlock holmes" and "harry potter"
    fetchInitialData('sherlock holmes');
    fetchInitialData('harry potter');
  }, []);

  async function fetchInitialData(searchResult) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchResult}&key=${process.env.REACT_APP_GOOGLE_BOOK_API_KEY}`
      );
  
      // Extract the new items from the response
      const newItems = response.data.items || [];
  
      // Combine the new data with the existing data, filtering out duplicates
      setData((prevData) => {
        const existingItems = prevData.items || [];
        const uniqueItems = [...existingItems, ...newItems].filter(
          (item, index, self) =>
            index ===
            self.findIndex((i) => i.id === item.id)
        );
  
        return {
          items: uniqueItems,
        };
      });
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function fetchData(searchResult){
    try{
        const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchResult}&key=${process.env.REACT_APP_GOOGLE_BOOK_API_KEY}`)

        console.log(response.data);
        setData(response.data);
    }
    catch(err){
        console.log(err.response.data);
    }
}

  function handleResult() {
      const cloneSearch=searchResult
      fetchData(cloneSearch);
      setSearchResult("");
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="img" />
        <img src={keazonBooks} alt="img" />
      </div>
      <div className="search">
        <img src={search} alt="img" />
        <input
          type="search"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          onChange={(e) => setSearchResult(e.target.value)}
          value={searchResult}
        />
        <button type="submit" onClick={handleResult}>
          Search
        </button>
      </div>
      <div className="account">
        <img src={heart} alt="img" />
        <img src={bell} alt="img" />
        <img src={diamond} alt="img" />
        <img src={user} alt="img" />
      </div>
    </div>
  );
};

export default Navbar;
