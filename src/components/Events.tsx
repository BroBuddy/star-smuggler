import { EventIds } from '@/service/events'
import { Link } from 'react-router-dom'
import Card from './Card'
import { useState } from 'react'

function Events() {
    const [openGroup, setOpenGroup] = useState<string | null>(null)

    const groups = EventIds.reduce((acc, id) => {
        const group = id.slice(0, 2)

        if (!acc[group]) acc[group] = []
        acc[group].push(id)
        
        return acc
    }, {} as Record<string, string[]>)

    return (
        <section className="flex flex-col py-2 w-full">
            {Object.entries(groups).map(([group, ids]) => (
                <Card key={group}>
                    <button
                        className="w-full text-left font-mono text-gray-300 flex justify-between items-center"
                        onClick={() => setOpenGroup(openGroup === group ? null : group)}
                    >
                        <span>{group} <span className="text-gray-500 text-xs">({ids.length})</span></span>
                        <span>{openGroup === group ? '▲' : '▼'}</span>
                    </button>

                    {openGroup === group && (
                        <div className="flex flex-wrap mt-2">
                            {ids.map((id, index) => (
                                <Link
                                    to={`/${id}`}
                                    key={index}
                                    className="font-mono text-red-500 w-1/6 py-1"
                                >
                                    {id}
                                </Link>
                            ))}
                        </div>
                    )}
                </Card>
            ))}
        </section>
    )
}

export default Events