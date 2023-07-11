import './App.css';
import {Data} from "./MOCK_DATA";
import {useState} from "react";
let Img = require('./images/home_page.png');

function App() {
  let a = "";
  let b = "";
  const [ searchTerm, setSearchTerm] = useState("");


  return (
    <div className='App'>

         
   
             {/* home img */}
              <div className="home_img">
                <div className='himg'><img src={Img} alt="home-img"/></div>    
                         
                        {/* list terms */}
                  <div className='search_term'>

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
         

               </div>
         
          {/* search sections */}   
          <div className='search shadow'>
            <p>What About <input className='inputText' type="text" placeholder="type here" onChange={ event => {setSearchTerm(event.target.value)}}></input></p>
          </div>
        {/* content */}
        <div className="definition">
         
            <p>{a[0]}</p>
            <p>{a[1]}</p>
         </div>  
       

      
        </div>
  );
}

export default App;
