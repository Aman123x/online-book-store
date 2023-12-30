import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';

const App=()=> {

  const [data,setData]=useState("");
  

  return (
    <div>
      <Navbar setData={setData}/>
      <BookList data={data}/>
    </div>
  );
}

export default App;
