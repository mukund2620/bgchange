import { useState } from 'react';
import './App.css';

function App() {
  const [myStyle, setMyStyle] = useState({
    background: 'white',
    color: 'black',
    
  })

  const changeColor = ()=> {

    if(myStyle.background == 'white'){
      setMyStyle({
        background: 'black',
        color: 'white'
      })
    }
    else {
      setMyStyle({
        background: 'white',
        color: 'black'
      })

    }

  }


 
  return (
    <div className='main' style={myStyle}>
      <h1>LetsUpgrad Assignment 1</h1>
      <button className='button-9' onClick={changeColor}>Change BG</button>
    </div>  
  );
}
  
export default App;




