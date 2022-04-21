import React from 'react'
import { Link } from 'react-router-dom'
import data from './data2.json'

//This the main landing page for the phot gallery.
//It is the first page that is loaded when the app is started.
//`/${Object.keys(data)[0]}`I need this explained in class. 
export function Home() {
  return (<>
    <div>
      <main>
        <button>Home</button>
        <section>
          <div>
          <h2 className="Pic-1">
            <Link to={`/${Object.keys(data)[0]}`}></Link>
          </h2>
            <p>
              {data.Nippon.description}
            </p>
            <img className="pic-1"src={data.Nippon.photos[0].imageURL} alt={data.Nippon.title} />
          </div>
        </section>
      </main>
    </div>
 </> )
  
}