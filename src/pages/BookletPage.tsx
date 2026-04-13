import Card from '@/components/Card'
import Tabs from '@/components/Tabs'
import EventPage from '@/features/event/pages/EventPage'
import RulePage from '@/features/rule/pages/RulePage'

const tabs = [
    { label: 'Rules', content: <RulePage /> },
    { label: 'Events', content: <EventPage /> },
]

function BookletPage() {
    return (
        <>
            <Card title="Booklets">
                <Tabs tabs={tabs} />
            </Card>
        </>
    )
}

export default BookletPage
