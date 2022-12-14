import React from 'react'
import { NavLink, Outlet, useNavigation } from 'react-router-dom';


export const Layout = () => {
    const { state } = useNavigation();
    return (
        <div>
            {state === 'loading' ? 'Loading your data' : null }
            <header><NavLink to={'/'}>Home</NavLink></header>
            <main><Outlet /></main>
        </div>
    )
}