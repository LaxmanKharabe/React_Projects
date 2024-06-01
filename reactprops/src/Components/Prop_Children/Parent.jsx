import React from 'react'

const Parent = ({children}) => {
    const [name, setName] = React.useState("Laxman Kharabe")
  return (
    <div>
      {children}
    </div>
  )
}

export default Parent
