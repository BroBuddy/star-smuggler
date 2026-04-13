import Card from '@/components/Card'
import Tabs from '@/components/Tabs'
import TagList from '@/features/sheet/components/TagList'
import { sheetTags } from '@/features/sheet/data/sheetData'

const historyTags = JSON.parse(localStorage.getItem('star-smuggler') || '[]')

const tabs = [
    { label: 'Frequently Used', content: <TagList tags={sheetTags} /> },
    { label: 'History', content: <TagList tags={historyTags} /> },
]

function HelperPage() {
    return (
        <>
            <Card title="Helper">
                <Tabs tabs={tabs} />
            </Card>
        </>
    )
}

export default HelperPage
