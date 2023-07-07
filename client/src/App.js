import './App.css';
import JSONDATA from "./MOCK_DATA.json";
import {useState} from "react";
let Img = require('./img/wa_home.png');

function App() {
  const [ searchTerm, setSearchTerm] = useState("");
  let a = "";
 
  return (
    
  
    <div className='App'>
      {/* list terms */}
      <div className='search_term'>
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
    

          <div>


        {/* home img */}
        <div className="home_img"><img src={Img} alt="home-img"/></div>
          {/* search sections */}
        <div className="content">
  
          <div className='search shadow'>
                  <p className="shadow inputText">What About<input className='inputText' type="text" placeholder="..." onChange={ event => {setSearchTerm(event.target.value)}}></input>?</p>
                </div>

                <div className="definition">{a}</div>

          </div>

          </div>

         
           
     </div>



 
  );
}

export default App;
