import React from 'react'

const Home = (props) => {
  return (
    <div>
      Home
      <h1>{props.name}</h1>
      <img src={props.img} alt="" />

    </div>
  )
}

export default Home