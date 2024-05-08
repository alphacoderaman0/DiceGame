import React from 'react'
import styled from 'styled-components'

const App = () => {


  return (
    <div >
      <Button>I am from Button Tag</Button>
    </div>
  )
}

export default App;


const Button = styled.button`
  background-color: black;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  `;



// style={{display:'flex',justifyContent:'center', alignItems:'center',height:'100vh'}}