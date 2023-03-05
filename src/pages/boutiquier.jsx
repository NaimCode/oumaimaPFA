import React from 'react'
import Map from '../map'
import NavbarBoutiquier from '../components/dashboard/navbarBoutiquier'

const Boutiquier = () => {
  return (
    <div className='h-screen w-screen'>
      <NavbarBoutiquier/>
    <div className='flex-grow w-full h-full'>
    <Map/>
    </div>
    </div>
  )
}

export default Boutiquier