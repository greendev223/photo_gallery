// 4QVH2LI6YTXDN0J9fpaoHHtDeT08d56JWC_XYlLLvKo
// 6PCaQLL55oRIjVLolrFMyx4FT5cDFiyrbAlMLtFvl2M
import React from 'react'
import { Route, Routes } from 'react-router'
import {Home} from './pages/Home'

export function App() {
  return <div>
    <header>
      <h1>What occupies my daydreams</h1>
      <h2>Photo Gallery of Hobbies</h2>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
        
      </Routes>
   </main>
  </div>
}
