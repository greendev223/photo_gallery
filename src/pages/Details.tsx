import React from 'react'
import { useParams } from 'react-router'
import data from './data2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function Details() {
  const params =
    useParams<{ categories?: 'Nippon' | 'Fixie'; photoIndex: string}>()
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
          <li className="is-active">
            <Link to={`/${params.categories}`}>
              {data[params.categories!].title}
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="last-title">
        {data[params.categories!].photos[Number(params.photoIndex)].title}
      </h1>
      <img
        className="last"
        src={
          data[params.categories!].photos[Number(params.photoIndex)].imageURL
        }
      />
    </div>
  )

}