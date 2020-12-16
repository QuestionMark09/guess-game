import React from 'react';
import firebase from '../firebase'
import './Addword.css'

export default function Flist({ retrieve }){
    const deleteWord = () =>{
        const retrieveRef = firebase.database().ref('WordList').child(retrieve.id);
        retrieveRef.remove();
    };
    console.log(retrieve)
    return(

            <table className="wordlist">
            <tr>
                <td>
                {retrieve.word}
                </td>
                <td className="delbtn">
                    <button onClick={deleteWord}><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
            </table>
   )
}