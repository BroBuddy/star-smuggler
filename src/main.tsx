import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const Game = React.lazy(() => import('./pages/Game.tsx'))
const Rules = React.lazy(() => import('./features/rule/pages/RulePage.tsx'))
const RuleDetailPage = React.lazy(
    () => import('./features/rule/pages/RuleDetailPage.tsx')
)
const Events = React.lazy(() => import('./features/event/pages/EventPage.tsx'))
const Tag = React.lazy(
    () => import('./features/event/pages/EventDetailPage.tsx')
)
const Helper = React.lazy(() => import('./features/sheet/pages/SheetPage.tsx'))
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
                path: '/helper',
                element: <Helper />,
            },
            {
                path: '/history',
                element: <History />,
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
