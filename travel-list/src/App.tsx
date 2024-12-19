import { useState } from 'react';
import './App.css';

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

 

  
  

export default function App(){
    return(
<div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
</div>
    )
}



function Logo(){
    return(
        <h1>🌴Far Away💼</h1>
    )
   
}

function Form(){
    const [description, setDescription]=useState("");
    const [quantity, setQuantity] = useState (1);


    function handleSubmit(e){
        e.preventDefault();
        if(!description) return
      const newItem = {quantity,description,id:Date.now(), picked:false};
      console.log(newItem)
     
      setDescription("")
      setQuantity(1)
    }
    return(
        <form action="" className="add-form" onSubmit={handleSubmit}>
       <h3>What do you need for your trip 😍?</h3>
        <div className='inputs'>
        <select name="" id="" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
    {Array.from({length:20}, (_,i)=>i+1).map((num)=>
    <option value={num} key={num} >{num}</option>
    )}
 </select>
 <input type="text" placeholder='item' value={description} onChange={(e)=>setDescription(e.target.value)} />
 <button >Add</button>
</div>
 
        </form>
    )
}

function PackingList(){
    return(
      <div className="list">
        <ul>
        {initialItems.map((item)=>(<ListItem item={item} key={item.id}/>))}
        </ul>
    
        </div>
    );
  }

function ListItem({item}){
    return <li>
        <span>{item.quantity} {item.description}</span>
        <span><button>❌</button></span>
    </li>
  }

function Stats(){
    return(
        <footer className="stats">
          <em>You have X items on your list, and you already packed x(X%)</em>
        </footer>
      )
}