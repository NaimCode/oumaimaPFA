import React from 'react'
import NavbarBoutiquier from './navbarBoutiquier'

const Dashboard = ({ type,children }) => {

    return (
        <div className='flex flex-col h-screen items-stretch'>
            <NavbarBoutiquier />
            <div className='flex-grow w-screen'>
                {children}
            </div>
        </div>
    )
}

export default Dashboard