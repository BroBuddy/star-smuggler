import React from 'react'

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

export const routes = [
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
]
