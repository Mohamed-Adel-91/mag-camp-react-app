import React from 'react'
import SingIN from './SingIN'
import SingOut from './SingOut'

const Sign = (props) => {
  const isSign = props.isSign

  // if(isSign){
  //   return <SingIN/>
  // }return <SingOut/>

  return(
    <>
      {isSign ? <SingIN/> : <SingOut/>}
    </>
  )
}

export default Sign