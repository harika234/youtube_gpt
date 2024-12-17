import React from 'react'





const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className="h-8" alt = "user" src = "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"/>
        <span className='font-bold px-2'>
            {name}
        </span>
        <span>
            {message}
        </span>
    </div>
  )
}

export default ChatMessage