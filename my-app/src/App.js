import React, { useState } from 'react';
// import './App.css';

function App() {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  // initialize 

  // AddNumber 
  const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
      if (gridFull) {
        break;
      }
      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;

      if (newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }

    }
  }

  // Swipe

  // Check Gameover

  // Reset

  return (<div style={{
    background: '#aaaaaa',
    width: "max-content",
    margin: "auto",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  }}>
    {data.map((row, oneIndex) => {
      return (
        <div style={{ display: 'flex' }} key={oneIndex} >
          {row.map((digit, index) => (
            <Block num={digit} key={index} />
          ))}
        </div>
      );
    })
    }</div>);
}

const Block = ({ num }) => {
  const { blockStyle } = style;

  return (<div style={{
    ...blockStyle,
    //background: getColor(num),
    color: num === 2 || num === 4 ? "#645B52" : "#7c7a7a",
  }}
  >
    {/* {num !== 0 ? num : ""} */}
    {num}
  </div>);
}

const style = {
  blockStyle: {
    height: 80,
    width: 80,
    background: "lightgray",
    margin: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    color: "white",
    fontWeight: "500",
  }
};

export default App;
