import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandonName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {


    const [livemessage,setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store)=>store.chat.messages);

    useEffect(() => {
        const i = setInterval(()=> {
            //API Polling
            console.log("API Polling");

            dispatch(addMessage({
              name: generateRandonName(),
              message: makeRandomMessage(20),

            }))
        },2000);

        return () => clearInterval(i);
    },[])


  return (
    <>
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
       <div>
        {chatMessages.map((c,i) => (<ChatMessage key = {i}
        name={c.name}
        message={c.message}/>
        ))}
       </div>
       
    </div>

    <form className='w-full p-2 ml-2 border border-black flex ' 
    onSubmit={(e)=>{
      e.preventDefault();
      console.log("On form submit "+ livemessage);

      dispatch(addMessage({
        name:"Harika Vyakaranam",
        message: livemessage,
      }))
    } }>
      <input 
      className=' px-2 w-96' 
      type = "text" 
      value= {livemessage} 
      onChange={(e)=> {
        setLiveMessage(e.target.value);
      }}/>
      <button className='px-2 mx-2 bg-green-100 rounded-lg'>Send</button>
    </form>

    </>
  )
}

export default LiveChat