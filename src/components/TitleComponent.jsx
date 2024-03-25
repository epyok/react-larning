import React from 'react'

function TitleComponent(props) {

  const designTitle = { color: "green"};
  return (
    <div>
      <h1 style={designTitle}> {props.title} </h1>
    </div>
  )
}

export default TitleComponent