import React from 'react'
import { Link } from 'react-router-dom'
import data from './data2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export function Nippon() {
  // const params = useParams<{dayDreams: string}>()
  return (
    <div>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={`/Fixie`}>Fixie</Link>
          </li>
        </ul>
      </nav>
      <h3>{data.Nippon.photos[0].title}</h3>
      <div className="pic-multiple">
        {data.Nippon.photos.map((photo, index) => {
          return (
            <>
              <Link to={`./${index}`} key={index}>
                <img src={photo.imageURL} alt={photo.title} key={index} />
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}
