import React, { useState } from 'react'
import './App.css'

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [Ctime, setCtiem] = useState(time)

  const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtiem(time)
  }
  setInterval(updateTime,1000)

  return (
    <div className='main'>
      <h1 className='box'>
        {Ctime}
      </h1>
    </div>
  )
}

export default App