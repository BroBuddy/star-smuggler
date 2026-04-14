import Tabs from '@/components/Tabs'
import Card from '../components/Card'
import Equipment from '../components/Equipment'
import HowToPlay from '../components/HowToPlay'
import Instructions from '../components/Instructions'

const tabs = [
    { label: 'Instructions', content: <Instructions /> },
    { label: 'How To Play', content: <HowToPlay /> },
    { label: 'Equipment', content: <Equipment /> },
]

const GamePage = () => {
    return (
        <>
            <Card title="Star Smuggler">
                <div className="mt-2">
                    <Tabs tabs={tabs} />
                </div>
            </Card>
        </>
    )
}

export default GamePage
