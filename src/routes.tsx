import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Preloader from './components/Preloader.tsx'
import App from './App.tsx'

const Game = React.lazy(() => import('./pages/GamePage.tsx'))
const BookletPage = React.lazy(() => import('./pages/BookletPage.tsx'))
const RuleDetailPage = React.lazy(
    () => import('./features/rule/pages/RuleDetailPage.tsx')
)
const EventDetailPage = React.lazy(
    () => import('./features/event/pages/EventDetailPage.tsx')
)
const StartAdventureEvent = React.lazy(
    () => import('./pages/StartAdventureEvent.tsx')
)

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Game />,
            },
            {
                path: '/rule/:tag',
                element: <RuleDetailPage />,
            },
            {
                path: '/event/e002',
                element: <StartAdventureEvent />,
            },
            {
                path: '/event/:tag',
                element: <EventDetailPage />,
            },
            {
                path: '/booklet',
                element: <BookletPage />,
            },
        ],
    },
])

export default function AppRouter() {
    return (
        <Suspense fallback={<Preloader />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}
