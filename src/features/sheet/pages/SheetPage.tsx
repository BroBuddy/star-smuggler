import Card from '@/components/Card'
import {
    sheetPlanets,
    sheetAreas,
    sheetTags,
} from '@/features/sheet/data/sheetData'
import TagList from '../components/TagList'

const sections = [
    { title: 'Frequently Used', tags: sheetTags },
    { title: 'Planets', tags: sheetPlanets },
    { title: 'Area Types', tags: sheetAreas },
]

function SheetPage() {
    return (
        <>
            {sections.map(({ title, tags }) => (
                <Card key={title} title={title}>
                    <TagList tags={tags} />
                </Card>
            ))}
        </>
    )
}

export default SheetPage
