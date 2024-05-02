import React from 'react'

const Card = ({title, figure, src, alt}) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <div>
          <h1>{title}</h1>
          <h2>{figure}</h2>
      </div>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Card