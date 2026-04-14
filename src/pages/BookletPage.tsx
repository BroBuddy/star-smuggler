import Card from '@/components/Card'
import Tabs from '@/components/Tabs'
import TagList from '@/components/TagList'
import EventPage from '@/features/event/pages/EventPage'
import { useEventService } from '@/features/event/services/EventService'
import RulePage from '@/features/rule/pages/RulePage'
import { useRuleService } from '@/features/rule/services/RuleService'

const historyTags = JSON.parse(localStorage.getItem('star-smuggler') || '[]')

function BookletPage() {
    const { getRuleCount } = useRuleService()
    const { getEventCount } = useEventService()

    const tabs = [
        { label: `${getRuleCount()} Rules`, content: <RulePage /> },
        { label: `${getEventCount()} Events`, content: <EventPage /> },
        { label: 'History', content: <TagList tags={historyTags} /> },
    ]

    return (
        <Card title="Booklets">
            <Tabs tabs={tabs} />
        </Card>
    )
}

export default BookletPage
