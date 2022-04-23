import React from 'react'
import { Link } from 'react-router-dom'
import data from './data2.json'

export function Fixie() {
  return (
    <div>
      <h2>{data.Fixie.title}</h2>
      <div className="pic-multiple">
        {data.Fixie.photos.map((photo, index) => {
          return ( <>
          <Link to={`./${index}`} key={index}>
          <img src={photo.imageURL} alt={photo.title} key={index} />
          </Link>
          </>)
        })}
        </div>
    </div>
  )
}
