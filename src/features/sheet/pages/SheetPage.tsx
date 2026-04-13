import Card from '@/components/Card'
import { sheetPlanets, sheetAreas } from '@/features/sheet/data/sheetData'
import TagList from '../components/TagList'
import Tabs from '@/components/Tabs'

const tabs = [
    { label: 'Area Types', content: <TagList tags={sheetAreas} /> },
    { label: 'Planets', content: <TagList tags={sheetPlanets} /> },
]

function SheetPage() {
    return (
        <>
            <Card title="Sheets">
                <Tabs tabs={tabs} />
            </Card>
        </>
    )
}

export default SheetPage
