import Card from '@/components/Card'
import TagList from '@/features/sheet/components/TagList'
import { sheetTags } from '@/features/sheet/data/sheetData'

const historyTags = JSON.parse(localStorage.getItem('star-smuggler') || '[]')

const sections = [
    { title: 'Frequently Used', tags: sheetTags },
    { title: 'History', tags: historyTags },
]

function HistoryPage() {
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

export default HistoryPage
