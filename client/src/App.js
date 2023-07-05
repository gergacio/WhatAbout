import './App.css';
import JSONDATA from "./MOCK_DATA.json";
import {useState} from "react";

function App() {
  const [ searchTerm, setSearchTerm] = useState("");
  let a = "";
 
  return (
    <div className="App">
      <div className='nav'>
        {JSONDATA.map((val, key) => {
          return <div key={key}>{val.question}</div>
        })}
      </div>

      <div>
      <div className='search'>
 
 <h4>What About <input type="text" placeholder="..." onChange={ event => {setSearchTerm(event.target.value)}}></input></h4>
</div>
   
      <div className='content'>
   
      {JSONDATA
        .filter((val) => {
          if(searchTerm === ""){
           
            return val
          }else if(val.question.toLowerCase().includes(searchTerm.toLowerCase())){
             a = val.answer;
            return val;
          }
        })
        .map((val,key) => {
          
        return <div className="user" key="key">{val.question}</div> 
      })}
      </div>
      <div>{a}</div>
   
    
      </div>
   
    </div>
  );
}

export default App;
