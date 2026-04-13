import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Preloader from './components/Preloader.tsx'

const Game = React.lazy(() => import('./pages/Game.tsx'))
const Rules = React.lazy(() => import('./features/rule/pages/RulePage.tsx'))
const RuleDetailPage = React.lazy(
    () => import('./features/rule/pages/RuleDetailPage.tsx')
)
const Events = React.lazy(() => import('./features/event/pages/EventPage.tsx'))
const Tag = React.lazy(
    () => import('./features/event/pages/EventDetailPage.tsx')
)
const SheetPage = React.lazy(
    () => import('./features/sheet/pages/SheetPage.tsx')
)
const History = React.lazy(
    () => import('./features/history/pages/HistoryPage.tsx')
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
                path: '/rule',
                element: <Rules />,
            },
            {
                path: '/rule/:tag',
                element: <RuleDetailPage />,
            },
            {
                path: '/event',
                element: <Events />,
            },
            {
                path: '/event/:tagId',
                element: <Tag />,
            },
            {
                path: '/sheet',
                element: <SheetPage />,
            },
            {
                path: '/history',
                element: <History />,
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
