
import { useEffect, useState } from 'react';
import './App.css';


function App() {
// now call the server data

const [books,setbooks]=useState([])

useEffect(()=>{

  setInterval(()=>{
    
  fetch("/api/books")
  .then(res=>res.json())
  .then(data=>{
    console.log(data)// we recive the data of book
    setbooks(data)
  })
  .catch((error)=>{
    console.log(error)
  })

   },2000)// Mili scond take new data aajae jab bhi add data karen tu

},[])

const adddata=()=>{

  // SET API FOR FOR ADD 
  
  var name=prompt("Enter Book name : ");
  
  var Author=prompt("Enter Book Author : ");

  if(!name || !Author){ // if any emty tu return karde
    return false
  }
  fetch("/api/add",{
    method:"POST" , // q ke we call post ke requests
    body: JSON.stringify({name,Author}) // set the added data

  }) // for add ke request ke lea
  .then(res=>res.json())
  .then(data=>{
    console.log(data)// we recive the data of book
    
  })
  .catch((error)=>{
    console.log(error)
  })


}

if(!books.length){
  return(
    <h1>Loading ......</h1>
  )
}

  return (
    <div style={{textAlign:"center",marginTop:"20px"}}>
     
     <table style={{margin:"0 auto"}} width="500" border="2">
       <thead>
         <tr>
           <th>BOOKS</th>
           <th>AUTHOR</th>
         </tr>
       </thead>
       <tbody>

         {
           books.map((book,index)=>{
             return(
              <tr key={index}>
              <td>{book.name}</td>
              <td>{book.Author}</td>
            </tr>
             )
           })
         }
       </tbody>
     </table>

<br/>


<button   style={{width:"100px"}} onClick={adddata}>ADD</button>
    </div>
  );
}

export default App;
