import React, {useState} from 'react';
import firebase from "../firebase"
import Button from './button'
import './Addword.css'
function Addcomp(){
  const[word,setWord] = useState('')

  const handleOnChange = (e) => {
    setWord(e.target.value);
  };

  const Retrieve=()=>{
      const retrieveRef = firebase.database().ref("WordList");
    const retrieve = {
        word,
        complete: false, 
    };

    retrieveRef.push(retrieve); 
  }
    return (
        <div className='svword'>
          <input type="text" id="inputText" className="svnpt" onChange={handleOnChange} value={word}/>
          <Button onClick={Retrieve}> Save </Button>
        </div>
      );
    }
export default Addcomp;