import Card from '../components/Card'
import Equipment from '../components/Equipment'
import HowToPlay from '../components/HowToPlay'
import Instructions from '../components/Instructions'

const sections = [
    { title: 'Star Smuggler', component: <Instructions /> },
    { title: 'How To Play', component: <HowToPlay /> },
    { title: 'Equipment', component: <Equipment /> },
]

const Game = () => {
    return (
        <>
            {sections.map(({ title, component }) => (
                <Card key={title} title={title}>
                    {component}
                </Card>
            ))}
        </>
    )
}

export default Game
