import React from 'react'
import { useParams } from 'react-router'
import data from './data2.json'

export function Details() {
  const params =
    useParams<{ categories: 'Nippon' | 'Fixie'; photoIndex: string }>()
  return (
    <div>
      <h1>{data[params.categories].photos[Number(params.photoIndex)].title}</h1>
      <img
        src={data[params.categories].photos[Number(params.photoIndex)].imageURL}
      />
    </div>
  )
}
