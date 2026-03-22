import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const Game = React.lazy(() => import('./components/Game'))
const Rules = React.lazy(() => import('./components/Rules'))
const Events = React.lazy(() => import('./components/Events'))
const Tag = React.lazy(() => import('./components/Tag'))
const Sector = React.lazy(() => import('./components/Sector'))
const Sheet = React.lazy(() => import('./components/Sheet'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
         {
                path: '/',
                element: <Game />
            },
            {
                path: '/rules',
                element: <Rules />
            },
            {
                path: '/events',
                element: <Events />
            },
            {
                path: '/:tagId',
                element: <Tag />
            },
            {
                path: '/sector',
                element: <Sector />
            },
            {
                path: '/sheet',
                element: <Sheet />
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
