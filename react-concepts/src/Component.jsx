import React, { useEffect, useState } from 'react'

const Component = () => {

    const[numb, setNumb]=useState(10)
    useEffect(()=>{
    })
  return (
    <div>
      {
        numb
      }
    </div>
  )
}

export default Component
