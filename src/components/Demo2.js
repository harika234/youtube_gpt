import React, { useRef, useState } from 'react'

const Demo2 = () => {
    let x = 10;
    
    const ref = useRef(0);
    let[y,sety] = useState(0); 

    console.log("rendering....");
    
  return (
    <div className='w-96 h-96 m-4 p-2 border border-black'>
        <div>
            <button 
            className='bg-green-200 p-2 m-4 '
            onClick={()=> {
                x= x+1;
                console.log("x = " + x);
                
            }}>Increase x</button>
            
           <span className='font-bold text-xl'>let = {x}</span> 
        </div>
        
        <div>
            <button 
            className='bg-green-200 p-2 m-4 '
            onClick={()=> {
               sety(y+1);
            }}>Increase y</button>
           <span className='font-bold text-xl'>state = {y}</span> 
        </div>

        <div>
            <button 
            className='bg-green-200 p-2 m-4 '
            onClick={()=> {
                ref.current= ref.current+1;
                console.log("ref=",ref.current)
            }}>Increase ref</button>
           <span className='font-bold text-xl'>Ref = {ref.current}</span> 
        </div>
    </div>
  )
}

export default Demo2