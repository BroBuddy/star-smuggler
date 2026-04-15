import Tabs, { TabItem } from '@/components/Tabs'
import Card from '../components/Card'
import Equipment from '../components/Equipment'
import HowToPlay from '../components/HowToPlay'
import Instructions from '../components/Instructions'
import { ClipboardList, Dice1, Pen } from 'lucide-react'

const tabs: TabItem[] = [
    {
        label: 'Intro',
        icon: <ClipboardList size={16} />,
        content: <Instructions />,
    },
    {
        label: 'How To Play',
        icon: <Dice1 size={16} />,
        content: <HowToPlay />,
    },
    { label: 'Equipment', icon: <Pen size={16} />, content: <Equipment /> },
]

const GamePage = () => {
    return (
        <>
            <Card title="Star Smuggler">
                <Tabs tabs={tabs} />
            </Card>
        </>
    )
}

export default GamePage
