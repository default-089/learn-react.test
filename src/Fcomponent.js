import React from 'react'

export default function Fcomponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}{props.name.length > 0 ? "," : ""} ({props.age})</h1>
    </div>
  )
}
Fcomponent.defaultProps = {
  age: 24
}