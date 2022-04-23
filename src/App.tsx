// 4QVH2LI6YTXDN0J9fpaoHHtDeT08d56JWC_XYlLLvKo
// 6PCaQLL55oRIjVLolrFMyx4FT5cDFiyrbAlMLtFvl2M
import React from 'react'
import { Route, Routes } from 'react-router'
import { Landing } from './pages/Landing'
import { Nippon } from './pages/Nippon'
import { Fixie } from './pages/Fixie'


export function App() {
  return (
    <div>
      <header>
        <h1>What occupies my daydreams</h1>
        <h2>Photo Gallery of Hobbies</h2>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="Nippon" element={<Nippon />}/>
            <Route path="Fixie" element={<Fixie />}/>
            <Route path='*' element={'noMatch'}/>
        </Routes>
      </main>
    </div>
  )
}
