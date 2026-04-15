import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import Tabs from '@/components/Tabs'
import TagList from '@/components/TagList'
import EventPage from '@/features/event/pages/EventPage'
import RulePage from '@/features/rule/pages/RulePage'
import { BookOpen, History, Zap } from 'lucide-react'
import { useMemo } from 'react'

function BookletPage() {
    const historyTags = useMemo(
        () => JSON.parse(localStorage.getItem('star-smuggler') || '[]'),
        []
    )

    const tabs = [
        { label: 'Rules', icon: <BookOpen size={16} />, content: <RulePage /> },
        { label: 'Events', icon: <Zap size={16} />, content: <EventPage /> },
        {
            label: 'History',
            icon: <History size={16} />,
            content: <TagList tags={historyTags} />,
        },
    ]

    return (
        <>
            <PageHeader tag="Reference" title="Booklets" />

            <Card>
                <Tabs tabs={tabs} />
            </Card>
        </>
    )
}

export default BookletPage
