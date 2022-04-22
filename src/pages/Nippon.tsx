import React from 'react'
import data from './data2.json'

export function Nippon() {
  // const params = useParams<{dayDreams: string}>()
  return (<>
    <div>
      <h2>
        {data.Nippon.photos[0].title}
        </h2>
      <div className="pic-multiple">
        </div>
    </div>
 </> )
}
