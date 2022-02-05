import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pikachu = () => {
const [num, setNum]=useState(0);
const [name,setName]=useState("Pokemon!");
const [moves,setMoves]=useState(30)

useEffect(()=>{
  const  gettingData = async ()=> {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    setName(response.data.name);
    setMoves(response.data.name.length);
  } 
  gettingData()
})
      return(

      <div className='outerDiv'>
      <h1>you have selected <span style={{color:"violet",textDecoration: "underline"}}> {num} </span>Number</h1>
      <h1>My name is <span style={{color:"violet", textDecoration: "underline"}}> {name} </span> </h1>
      <h1>I have <span style={{color:"violet", textDecoration: "underline"}}> {moves}</span> moves yet </h1>


  <select 
value={num}
onChange={(event)=>{
setNum(event.target.value) 
}}>

  <option value="1">1</option>
  <option value="25">25</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="7">7</option>
  <option value="15">15</option>
</select>





    </div>
  )
}

export default Pikachu
