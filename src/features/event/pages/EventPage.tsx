import Card from '@/components/Card'
import { EventIds } from '@/features/event/data/events'
import { Link } from 'react-router-dom'

function EventPage() {
    return (
        <Card title="Events">
            <div className="flex flex-wrap my-2">
                {EventIds.map((id, index) => (
                    <Link
                        to={`/event/${id}`}
                        key={index}
                        className="flex flex-wrap w-5 p-1 text-blue"
                    >
                        <span className="font-mono">{id}</span>
                    </Link>
                ))}
            </div>
        </Card>
    )
}

export default EventPage
