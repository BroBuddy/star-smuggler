import Card from '@/components/Card'
import Tabs, { TabItem } from '@/components/Tabs'
import TagList from '@/components/TagList'
import { sheetAreas, sheetPlanets } from '@/features/sheet/data/sheetData'

const historyTags = JSON.parse(localStorage.getItem('star-smuggler') || '[]')

const tabs: TabItem[] = [
    { label: 'Area Types', content: <TagList tags={sheetAreas} /> },
    { label: 'Planets', content: <TagList tags={sheetPlanets} /> },
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
