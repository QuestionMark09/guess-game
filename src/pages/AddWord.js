import React from 'react';
import Addcomp from './Addcomp'
import List from './List'
import './Addword.css';

function AddWord(){
    return (
      <nav>
        <div className='add'><Addcomp></Addcomp> </div>
        <br/>
        <div className="list"><List></List></div>
      </nav> 
       
      );
    }
export default AddWord;