import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div>
      <ComponentB stringVal = "this is string" arrayVal = {[10,20,30,40]} />
      <ComponentB stringVal = "this is string" arrayVal = {[10,20,30,40]} />
      {/* <ComponentB objectVal = {{property: "Object property value 1"}} />
      <ComponentB numberVal = {100000} />
      <ComponentB booleanVal1 = {true} />
      <ComponentB booleanVal2 = {false} /> */}
    </div>
  )
}
export default ComponentA