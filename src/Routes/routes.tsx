import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { AboutIssues } from '../Pages/Issues'
import { AddHeader } from './AddHeader'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AddHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/Issues" element={<AboutIssues />} />
      </Route>
    </Routes>
  )
}
