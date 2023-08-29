import React from 'react'

const Loop = () => {

    const programmes = 
    ['JavaScript', 'C++', 'Java', 'Python', 'Ruby', 'C#', 'Kotlin', 'PHP'];
  return (
    <div>
        {programmes.map((programme) => <h3>{programme}</h3>)}
    </div>
  )
}

export default Loop