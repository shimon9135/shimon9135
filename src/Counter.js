import React from "react";

import useLocalStorage from "./Loacal";
import images1 from './images/ipm1.jpg';
 import images2 from './images/ipm2.jpg';
 import images3 from './images/ipm3.jpg';
 import images4 from './images/ipm4.jpg';
 import images5 from './images/ipm5.jpg';

 
    
    

 function getImage(){
     let images = [images1, images2, images3, images4, images5]
     let count = window.localStorage.getItem('count')
    
     return images[count % 5]
     
   }
   
   
function Counter(){
    const [count, setCount]= useLocalStorage('count', 0);
    
    // const [disable,setDisable]= React.useState();
  
    
    function decrementCount(){
        if(count <=0){
            return count + 1;
        }else{
            setCount(count -1 )
        }
        
    
 
    }
    return(
        <div>
            <p>{count }</p>
           {/* <button disabled={disable} onClick={() => setDisable()}></button> */}
           {/* <button disabled={disable} onClick={() => setDisable(false)}></button> */}
            <button onClick={decrementCount}>-     
           </button>
            
            <button onClick={() => setCount(count + 1)}>+   
             </button>
            
                      
            <img src={getImage()} alt="" height="630px" width="1000"/> 
        </div>
    )
    }

export default Counter;
    

 
