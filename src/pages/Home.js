import React from 'react';
import './Home.css'
import aclogo from '../components/aclogo.png';
import ccse from '../components/ccse.png'
function Home() {
  return (
    <div className="homerun">
      <div className="logo">
      <img src={aclogo} alt="Logo" width="300px" height="150px" />  
      <img src={ccse} alt="Logo" width="150px" height="150px"/>
      </div>
      <br/>
      <br/>
      <h1 className="header">Welcome Humans !!</h1>
      <br/>
      <br/>
      <h2 className="header">Read The Instruction Before Playing !</h2>
      <br/>
      <br/>
      <h3 className="header1">INSTRUCTION !!!!</h3>
      <br/>
        <p className="paragraph">* Please do not delete the "ERROR" word in the AddWord tab.</p>
        <br/>
        <p className="paragraph">* Add word in the Addword tab to be used in game. You can delete words EXCEPT the "ERROR" word.</p>
        <br/>
        <p className="paragraph">*Click the Play tab to play. Enjoy!!</p>
    </div>
  );
}

export default Home;
