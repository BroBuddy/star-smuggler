import { Link } from 'react-router-dom'
import Card from './Card'
import { sheetTags } from '@/lib/data'
import { TagSheet } from '@/lib/types'

function Sheet() {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Frequently Used">
               {sheetTags && sheetTags.map((tag: TagSheet, index: number) => (
                    <Link
                        to={`/${tag.id}`}
                        key={index}
                        className="flex flex-col py-2"
                    >
                        <span className="font-mono text-red-500">
                            {tag.id}
                        </span>
                        <span className="font-medium font-sans text-gray-400">
                            {tag.title}
                        </span>
                    </Link>
                ))}
            </Card>
        </section>
    )
}

export default Sheet
