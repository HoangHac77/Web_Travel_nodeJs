import React from 'react'
import HomeComponents from '../components'
import {Outlet} from "react-router-dom"

const MasterLayout = () => {
  return (
    <>
    
        {/* Header */}
        <HomeComponents.Header/>

        {/* main */}
        <Outlet/>

        {/* Footer */}
        <HomeComponents.Footer/>
    </>
  )
}

export default MasterLayout