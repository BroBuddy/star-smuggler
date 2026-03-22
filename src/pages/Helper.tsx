import { sheetPlanets, sheetAreas, sheetTags } from '@/lib/data'
import { TagSheet } from '@/lib/types'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const sections = [
    { title: 'Frequently Used', tags: sheetTags },
    { title: 'Planets', tags: sheetPlanets },
    { title: 'Area Types', tags: sheetAreas },
]

function TagList({ tags }: { tags: TagSheet[] }) {
    return (
        <div className="flex flex-wrap">
            {tags.map((tag: TagSheet, index: number) => (
                <Link
                    to={`/${tag.id}`}
                    key={index}
                    className="flex flex-col w-1/2 py-2 px-2"
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

function Helper() {
    return (
        <section className="flex flex-col py-2 w-full">
            {sections.map(({ title, tags }) => (
                <Card key={title} title={title}>
                    <TagList tags={tags} />
                </Card>
            ))}
        </section>
    )
}

export default Helper