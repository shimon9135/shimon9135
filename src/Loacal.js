import  { useEffect } from 'react';
import { useState } from 'react';




function useLocalStorage(key, initalValue){
  const [value, setValue]= useState(()=>{
    return JSON.parse(window.localStorage.getItem(key)) || initalValue;
  });
  useEffect(()=> {
    window.localStorage.setItem(key,value);
  }, [key,value])

return[value,setValue];

}

export default useLocalStorage;