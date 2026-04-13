import { getEventData } from '@/features/event/data/events'
import TagList from '@/features/sheet/components/TagList'

function EventPage() {
    const data = getEventData()

    return <TagList tags={data} />
}

export default EventPage
