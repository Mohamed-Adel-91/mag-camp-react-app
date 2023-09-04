import React, { useEffect, useState } from 'react'

const About = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('count: %d',count);
    setInterval(()=>console.log('tick',1000))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <h1>About</h1>
      {count}<br/>
      <button onClick={()=>setCount(count+ 1)}>+</button><br/>
      <button onClick={()=>setCount(count- 1)}>-</button><br/>
      <h3>Test React App for Study</h3>
    </div>
  )
}

export default About