import React from 'react'
import { Route, Routes } from 'react-router'
import {Home} from './pages/home'

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
        
      </Routes>
   </main>
  </div>
}
