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
    fontWeight: "600",
  }
};

export default App;
