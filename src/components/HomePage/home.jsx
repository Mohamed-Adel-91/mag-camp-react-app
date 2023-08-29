import React from 'react'

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <h1>{props.name}</h1>
      <img src={props.img} alt="" />
    </div>
  )
}

export default Home