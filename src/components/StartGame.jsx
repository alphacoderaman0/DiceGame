import React from 'react';
import styled from 'styled-components'

const StartGame = () => {
  return (
    <Container>
      <div>
      <img src='/images/dices 1.png' alt='Dices'/>
      </div>
      <div className="main">
        <Paragraph>DICE GAME</Paragraph>
        <Button>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;


const Container = styled.div`
  max-width: 1182px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  /* flex-direction: row;
  justify-content: center;
   */
`;


const Paragraph = styled.p`
  font-size:96px;
  font-weight: 600;
  white-space: nowrap;

`;


const Button = styled.button`
  background-color: #000000;
  margin-left: 57%;
  color: #ffffff;
  width:220px;
  height:44px;
  border: none;
  border-radius: 5px;
  font-size: 16px ;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;


  &:hover{
    background-color: #fff;
    color: #000;
    border: 2px solid;
    transition: 0.3s background ease-in;
  }

`;

