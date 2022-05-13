
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Nav from './NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";


function App() {
  const [name, setName] = useState();
  const [pokimonNameData,SetpokimonName]=useState();
  


  const PokimonName = (data) => {
      setName(data);
      // console.log(data);
  }
  const Sumbit=()=>{
      SetpokimonName(name);
      // console.log(name);
  }
  // useEffect(()=>{
  //    async function ApiCall(){
  //         const fetchData= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokimonNameData}`);
           
  //           fetchData=JSON.stringify(fetchData.data);
  //           console.log(fetchData);
  //    }
  //    ApiCall();
  //   //  console.log(Alldata);
  // },[pokimonNameData])
  // const pokimonNameData="jj";
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/home' element={<Home PokimonName={PokimonName} Sumbit={Sumbit}></Home>}></Route>
        <Route path='/about' element={<About pokimonNameData={pokimonNameData}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
