import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';

const App=()=> {

  const [data,setData]=useState([]);
  // const [id,setId]=useState("");
  //console.log(id);
  

  return (
    <div>
      <Navbar setData={setData}/>
      {/* <detail id={id}/> */}
      <BookList bookData={data}/>
    </div>
  );
}

export default App;
