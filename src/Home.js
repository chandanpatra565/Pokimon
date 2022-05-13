
import React from "react";

const Home = ({PokimonName,Sumbit}) => {

    return (
        <>
            <input type="text" placeholder="pleace enter your pokimon name" onChange={(event) => PokimonName(event.target.value)}></input>
            <br></br>
            <input type="button" onClick={() => Sumbit()} value="submit"></input>
        </>
    )
}
export default Home;