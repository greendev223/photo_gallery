import React from 'react'
import { Link } from 'react-router-dom'
import data from './data2.json'

// type data = {
//   title: string
//   description: string
//   photos: string[]
//This the main landing page for the phot gallery.
//It is the first page that is loaded when the app is started.
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
          </div>
        </section>
      </main>
    </div>
 </> )
  
}