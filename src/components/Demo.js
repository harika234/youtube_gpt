import {useState,useMemo} from 'react'
import { findPrime } from '../utils/helper';


const Demo = () => {
    const [text,setText] = useState(0);
    const [isDarkTheme,setIsDarkTheme] = useState(false);
    
    //heavy operation
    const prime = useMemo(()=>findPrime(text),[text]);
  
  
    return (
    <div className={`m-4 p-2 w-96 border border-black ${
        isDarkTheme ? 'bg-gray-900 text-white' : ''
    }`}>
    

        <div>
            <button className='m-10 p-2 bg-green-200' 
            onClick = {() => setIsDarkTheme(!isDarkTheme)}>
                Toggle
            </button>
        </div>

        <div>
            <input
            className='border border-black w-72 px-2'
             type = "number" value= {text} 
             onChange={(e)=> {
                setText(e.target.value)
            }}/>
        </div>
            <h1 className='mt-4 font-bold text-xl'>nth prime: {prime}</h1>
        <div>

        </div>
    </div>
  )
}

export default Demo