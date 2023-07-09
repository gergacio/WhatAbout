import './App.css';
import {Data} from "./MOCK_DATA";
import {useState} from "react";
let Img = require('./images/wa_home.png');

function App() {
  let a = "";
  let b = "";
  const [ searchTerm, setSearchTerm] = useState("");
  const [ show, setShow] = useState("");

  return (
    <div className='App'>
      {/* list terms */}
      <div className='search_term'>
        {/* <p>What about...</p> */}
        <p>What about...</p>
          {Data
            .filter((val) => {
              if(searchTerm === ""){
              
                return val
              }else if(val.question.toLowerCase().includes(searchTerm.toLowerCase())){
                a = val.answer;
                b = val.path;

                return val;
              }
            })
            .map((val,key) => {
              
            return <div className="user" key="key"> {val.question}</div> 
          })} 

          </div>
          <div>
        {/* home img */}
         <div className="home_img"><img src={Img} alt="home-img"/></div>
          {/* search sections */}
         <div className="content">
  
          <div className='search shadow'>
                  <p className="shadow inputText">What About<input className='inputText' type="text" placeholder="....." onChange={ event => {setSearchTerm(event.target.value)}}></input>?</p>
                </div>
                <hr />
                <div className="definition">
                  <p>{a[0]}</p>
                  <p>{a[1]}</p>
                
                </div>
           
                <button onClick={() => setShow(!show)}>info</button>
                <div>
                { show ?  <img src={b} alt="val"/>  : null }
                </div>
              
          </div>

          </div>       
     </div>
 
  );
}

export default App;
