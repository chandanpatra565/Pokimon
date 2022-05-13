
import axios from "axios";
import React, { useEffect, useState } from "react";

const About = (props) => {
    const [Alldata,SetAlldata]=useState();
    useEffect(()=>{
        async function ApiCall(){
             const fetchData= await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokimonNameData}`);
              
                SetAlldata(fetchData.data);
                const obj=JSON.stringify(fetchData);
               SetAlldata(obj);

        }
        ApiCall();
       //  console.log(Alldata);
     },[Alldata])

    return (
        <>
            {
                Alldata
            }
        </>
    )
}
export default About;