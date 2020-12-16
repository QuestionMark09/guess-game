import React, {useState} from 'react';
import './Gamepage.css'
import Button from './button'
import firebase from '../firebase'
    
    let storageTest=[];
    let btnGuess="START";
    const retrieveRef = firebase.database().ref('WordList');
    retrieveRef.on('value', get);
    
    function get(data){
      var words = data.val();
      var keys = Object.keys(words);
      var testing1=[];
      for (var i = 0; i<keys.length; i++){
        var k = keys[i];
        var theword = words[k].word;
        data = theword;
        testing1.push(theword);
        //console.log(theword)
      }
      storageTest=testing1;
      console.log(testing1);
    }

    let randomWord="";
    let shuffled = "";
    function setWord(){
      var item = storageTest[Math.floor(Math.random() * storageTest.length)];
      console.log("Word: "+item); 
      //let randomWord ="";
      if(item!=null){
        randomWord = item;
      }
      
      function shuffelWord() {
        var shuffledWord = '';
        var word=randomWord;
        word = word.split('');
        while (word.length > 0) {
          shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
        }
        console.log(word);
        return shuffledWord;
      }
      shuffled = shuffelWord();
    }
    
  
    const GuessTheWord = () =>{  
      const [value, setValue] = useState('');
      const [results, setResults] = useState("");
      const onClick = () => { 
            const userGuess = value;
            if(btnGuess==="START"){
              btnGuess="GUESS";
              setWord();
              alert("INPUT SOMETHING TO GENERATE SCRAMBLED WORD !!");
            }
            else{
              console.log("GUESS CLICKED!");
              if(userGuess!==""){
                if (userGuess === randomWord ) setResults(<div><p className="alert alert-success">Correct!</p><br/><div className="guessbtn"><Button onClick={() => window.location.reload(false)}>Play Again</Button></div></div>);
                if (userGuess !== randomWord) setResults(<p className="alert alert-warning">Wrong, guess again</p>);       
              }     
            }
            
        }

      return   (     
        <>
        <div className = "Guess" >
          <h2 className="title">Guess the word !</h2>
          <br/><br/>
            <p className="lead">{shuffled}</p>
            <br/><br/>
            <div className="Guess2">
            <input className="guessinpt" value={value} type="text" onChange = {(e) => setValue(e.target.value)}/>
            </div>
            <br/>
            <div className="guessbtn">
            <Button  type="submit" onClick={onClick} value={btnGuess} >{btnGuess}</Button>
            </div>
            <br/><br/>
            <div className="res">
            <p>{results}</p>
            {
            
            }
            </div>
        </div>
        </>
)
}
export default GuessTheWord;