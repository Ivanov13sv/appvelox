import React from 'react'
import { Outlet } from 'react-router-dom'

export const TestLayout = () => {
  return (
    <div> 
      <Outlet />
    </div>
  )
}
