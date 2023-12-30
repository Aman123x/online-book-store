import React,{useState} from 'react'
import axios from "axios";
import "./Navbar.css";
import logo from '../Images/logo.png';
import keazonBooks from '../Images/KeazoNBOOKS.png';
import bell from "../Images/bell.png"
import diamond from "../Images/diamond.png"
import heart from "../Images/book-heart.svg"
import search from "../Images/search.png"
import user from "../Images/user.png"

const Navbar=({setData})=> {

    const [searchResult,setSearchResult]=useState("");
    const [btn,setBtn]=useState("");
    

    function handleResult(){
        setBtn(searchResult);
        booklist(searchResult)
    }

    async function booklist(searchResult){
        console.log(btn);
        try{
            const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchResult}&key=AIzaSyCn3L5HhuNI5WWHb-oOe8mPfhs2XtZB6mk`)

            console.log(response.data);
            setData(response.data);
        }
        catch(err){
            console.log(err.response.data);
        }
    }

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt='img'/>
            <img src={keazonBooks} alt='img'/>    
        </div>
        <div className='search'>
            <img src={search} alt='img'/>
            <input type='search' 
                placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'
                onChange={(e)=>setSearchResult(e.target.value)}
                value={searchResult}
            />
            <button type='submit' onClick={handleResult}>Search</button>
        </div>
        <div className='account'>
            <img src={heart} alt='img'/>
            <img src={bell} alt='img'/>
            <img src={diamond} alt='img'/>
            <img src={user} alt='img'/>
        </div>

    </div>
  )
}

export default Navbar