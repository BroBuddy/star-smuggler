import { sheetPlanets, sheetAreas } from '@/lib/data'
import { TagSheet } from '@/lib/types'
import { Link } from 'react-router-dom'
import Card from './Card'

function TagList({ tags }: { tags: TagSheet[] }) {
    return (
        <div className="flex flex-wrap">
            {tags.map((tag: TagSheet, index: number) => (
                <Link
                    to={`/${tag.id}`}
                    key={index}
                    className="flex flex-col w-1/3 py-2 px-2"
                >
                    <span className="font-mono">
                        {tag.id}
                    </span>
                    <span className="font-medium font-sans text-gray-400">
                        {tag.title}
                    </span>
                </Link>
            ))}
        </div>
    )
}

function Sector() {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Planets">
                <TagList tags={sheetPlanets} />
            </Card>
            <Card title="Area Types">
                <TagList tags={sheetAreas} />
            </Card>
        </section>
    )
}

export default Sector