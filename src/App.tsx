// 4QVH2LI6YTXDN0J9fpaoHHtDeT08d56JWC_XYlLLvKo
// 6PCaQLL55oRIjVLolrFMyx4FT5cDFiyrbAlMLtFvl2M
import React from 'react'
import { Route, Routes } from 'react-router'
import { Landing } from './pages/Landing'
import { Nippon } from './pages/Nippon'
import { Fixie } from './pages/Fixie'
import {Details} from './pages/Details'
import { Link } from 'react-router-dom'

export type PhotosType = {
  title: string
  description: string
  photos: { title: string; imageURL: string }[]
}

export function App() {
  return (
    <div>
      <header>
        <h1>What occupies my daydreams</h1>
        <h2>Photo Gallery of Hobbies</h2>
      </header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="Nippon" element={<Nippon />} />
          <Route path="Fixie" element={<Fixie />} />
          <Route path="/:categories/:photoIndex" element={<Details />} />
          <Route path="*" element={'noMatch'} />
        </Routes>
      <footer>
        <Link to="https://www.amheiser.me/"> 
        <p>Created by Amheiser</p>
        </Link>
      </footer>
    </div>
  )
}
