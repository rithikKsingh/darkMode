import React, { useEffect, useState } from 'react'
import { ReactComponent as Sun } from './Sun.svg'
import { ReactComponent as Moon } from './Moon.svg'
import './DarkMode.css'
export const DarkMode = () => {
    const [theme,setTheme]=useState('light')
    
    const toggleTheme=()=>{
       const newTheme=theme==='light'?'dark':'light';
       setTheme(newTheme);
       //so when we open the site, the site remembers the color
       localStorage.setItem("selectedTheme",newTheme);
    }

    useEffect(()=>{
        const selectedTheme=localStorage.getItem('selectedTheme')
        if(selectedTheme){
            setTheme(selectedTheme)
        }
    },[])

    useEffect(()=>{
      document.body.setAttribute("data-theme",theme)
    },[theme])

  return (
    <div className='dark_mode'>
        <input
         className='dark_mode_input'
         type='checkbox'
         id='darkmode-toggle'
         onChange={toggleTheme}
         checked={theme==='dark'}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            <Sun/>
            <Moon/>
        </label>
    </div>
  )
}
