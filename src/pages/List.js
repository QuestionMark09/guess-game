import React, {useState, useEffect} from 'react';
import firebase from "../firebase"
import Flist from './fList'
import "./Addword.css"

 function List (){
    const [list,setList] = useState();
    
    useEffect(()=>{
        const retrieveRef = firebase.database().ref('WordList');
        retrieveRef.on('value', (snapshot) => {
            const lists = snapshot.val();
            const list = [];
            for (let id in lists){
                list.push({id, ...lists[id]});
            }   
            setList(list);
            console.log(list);
        });
    }, []);
    
    return(
        <div>
            <p className="label">Word List</p>
            {list ? list.map((retrieve, index)=><Flist retrieve={retrieve} key={index}/>):''}
        </div>
    );

}
export default List