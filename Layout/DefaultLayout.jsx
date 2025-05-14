import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/Components/Header'
function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default DefaultLayout
