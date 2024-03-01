

import React from 'react'

const Recipe = ({label,calories,img,ingredientLines}) => {
  return (
    <div>
      <h2>{label}</h2>
      <h2>{calories}</h2>
      <img src={img}/>

      <ol>
        {
          ingredientLines.map((item,index)=>{
           return <li key={index}>{item}</li>
          })
        }
      </ol>
    </div>
  )
}

export default Recipe