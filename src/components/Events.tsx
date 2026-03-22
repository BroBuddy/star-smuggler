import { EventIds } from '@/service/events'
import { Link } from 'react-router-dom'
import Card from './Card'

function Events() {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Events">
                <div className="flex flex-wrap">
                    {EventIds.map((id, index) => (
                        <Link
                            to={`/${id}`}
                            key={index}
                            className="flex flex-col w-1/6 py-2"
                        >
                            <span className="font-mono text-red-500">
                                {id}
                            </span>
                        </Link>
                    ))}
                </div>
            </Card>
        </section>
    )
}

export default Events