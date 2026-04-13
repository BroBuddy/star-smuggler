import { getEventTags } from '@/features/event/data/events'
import { Link } from 'react-router-dom'

function EventPage() {
    return (
        <div className="flex flex-wrap my-2">
            {getEventTags.map((id, index) => (
                <Link
                    to={`/event/${id}`}
                    key={index}
                    className="flex flex-wrap w-5 p-1 text-blue"
                >
                    <span className="font-mono">{id}</span>
                </Link>
            ))}
        </div>
    )
}

export default EventPage
