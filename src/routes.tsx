import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Preloader from './components/Preloader.tsx'

const Game = React.lazy(() => import('./pages/GamePage.tsx'))
const BookletPage = React.lazy(() => import('./pages/BookletPage.tsx'))
const RuleDetailPage = React.lazy(
    () => import('./features/rule/pages/RuleDetailPage.tsx')
)
const Tag = React.lazy(
    () => import('./features/event/pages/EventDetailPage.tsx')
)
const SheetPage = React.lazy(
    () => import('./features/sheet/pages/SheetPage.tsx')
)
const HelperPage = React.lazy(
    () => import('./features/helper/pages/HelperPage.tsx')
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
                path: '/sheet',
                element: <SheetPage />,
            },
            {
                path: '/booklet',
                element: <BookletPage />,
            },
            {
                path: '/rule/:tag',
                element: <RuleDetailPage />,
            },
            {
                path: '/event/:tagId',
                element: <Tag />,
            },
            {
                path: '/helper',
                element: <HelperPage />,
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
