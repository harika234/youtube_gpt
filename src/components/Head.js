import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const[searchQuery,setSearchQuery] = useState("");
  const[suggestions,setSuggestions] = useState([]);
  const[showSuggestions,setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=>store.search);

  

  useEffect(()=> {
      
      const timer = setTimeout(()=> {
        if(searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestions()
        }


      },200);      
      return () => {
        clearTimeout(timer);
      }
  },[searchQuery]);

  const getSearchSuggestions = async() => {
    
    
    const data= await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));

    }
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());

  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img 
        onClick={()=> toggleMenuHandler()}
        
        className="h-10 cursor-pointer" alt = "menu" src ="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"/>
        <a href = "/" >
        <img className="h-10" alt = "youtube-logo" src = "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
        </a>
      </div>

      <div className='col-span-10 px-10'>
        <div>
        <input 
        className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>Search
        </button>
        </div>
        {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[27rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map(s=><li key = {s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>)}
                 
            </ul>
        </div>)}

      </div>

      <div className='col-span-1'>
        <img className="h-8" alt = "user" src = "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"/>
      </div>
    </div>
  )
}

export default Head