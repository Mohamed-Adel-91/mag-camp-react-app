import React, { useState } from 'react'

const Names = () => {
    const [name, setName] = useState("Mohamed Adel ");

  return (
    <div>
        {name}
        <button onClick={() => setName("Ahmed Adel ")}>
            Change Name
        </button>

    </div>
  )
}

export default Names