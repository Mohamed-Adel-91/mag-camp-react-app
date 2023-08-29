import React, { useState } from 'react'

const Login = () => {
    //old value and update
    // eslint-disable-next-line no-unused-vars
    const [Login , setLogin] = useState(true)
    if(Login){
        return(
            <h1>Welcome Mohamed Adel</h1>
        )
        }else{
            return(
                <h1>Welcome Guest</h1>
            )
        }
}

export default Login