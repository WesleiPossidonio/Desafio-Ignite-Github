import { Outlet } from 'react-router-dom'

import { Header } from '../Components/Header'

export const AddHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
