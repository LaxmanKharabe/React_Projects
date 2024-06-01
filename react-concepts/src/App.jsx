import React, { useState } from 'react'
import './App.css'
import Component from './Component'

function App() {
  const [price, setPrice] = useState("")
    
  function handlePrice(){
      setPrice("$100")
  }
  // const user = {
  //   name: '',
  //   age: 0
  // }

  // function acceptData(name, age){
  //   user.name = name;
  //   user.age = age

  //   console.log(user);
  // }

  // function handleClick(){
  //   console.log("Clicked me");
  // }
  return (
    <>
      {/* <button onClick={handleClick}>Click Me</button>  <br /><br />

      belolw button will not work as parantesis used. function is already get executed. <br/>
      <button onClick={handleClick()}>Click me</button> <br /><br />

      {/* Passing some data */}
      {/* <button onClick={()=>acceptData("Laxman", 26)}>Pass Data</button> */}

      <Component ></Component>
       <div>
            <p data-testid="price">{price}</p>
            <button onClick={handlePrice}>Apply Discount</button>
        </div>
    </>
  )
}

export default App
