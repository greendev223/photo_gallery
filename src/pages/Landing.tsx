import React from 'react'
import { Link } from 'react-router-dom'
import data from './data2.json'

//This the main landing page for the phot gallery.
//It is the first page that is loaded when the app is started.
//`/${Object.keys(data)[0]}` Same as /Nippon (write up more later) I need this explained in class. 
export function Landing() {
  console.log(Object.keys(data)[0])
  return (
    <>
      <div>
        <main>
          {/* <button>
           Home
          </button> */}
          <section>
            <div className="Landing">
              <h2 className="Pic-1">
                <Link to={`/${Object.keys(data)[0]}`}>Nippon</Link>
              </h2>
              <p>{data.Nippon.description}</p>
              <img
                className="pic-1"
                src={data.Nippon.photos[0].imageURL}
                alt={data.Nippon.photos[0].title}
              />
              <h2 className="Pic-1">
                <Link to={`/${Object.keys(data)[1]}`}>Fixie</Link>
              </h2>
              <p>{data.Fixed.description}</p>
              <img
                className="pic-1"
                src={data.Fixed.photos[0].imageURL}
                alt={data.Fixed.photos[0].title}
              />
            </div>
          </section>
        </main>
      </div>
    </>
  )
  
}