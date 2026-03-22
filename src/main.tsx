import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const Game = React.lazy(() => import('./pages/Game.tsx'))
const Rules = React.lazy(() => import('./pages/Rules.tsx'))
const Events = React.lazy(() => import('./pages/Events.tsx'))
const Tag = React.lazy(() => import('./components/Tag.tsx'))
const Helper = React.lazy(() => import('./pages/Helper.tsx'))
const History = React.lazy(() => import('./pages/History.tsx'))

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
                path: '/helper',
                element: <Helper />
            },
            {
                path: '/history',
                element: <History />
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
