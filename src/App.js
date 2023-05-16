import { useState } from "react";
import "./App.css";
import cityList from './store-cities.json';


const App = () => {
  // Begin adding your code here

  const [inputValue, setInputValue ]=useState("")//user's input
  const [newItems,setNewItems] = useState([])

  const handleChange = (event)=>{
    // console.log("target:",event.target.value)
    setInputValue(event.target.value)
    const filteredItems =cityList.filter(item=>item.toLowerCase().startsWith(event.target.value.toLowerCase()) && event.target.value );//filtered cities
    setNewItems(filteredItems) 
  }
  return <div className="App">
      <h1> User's Value: {}</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      {newItems.map((city,i)=><h5 key={i}>{city}</h5>)}
    </div>;

};

export default App;
