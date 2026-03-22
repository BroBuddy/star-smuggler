import Card from '../components/Card'
import Credits from '../components/Credits'
import Equipment from '../components/Equipment'
import HowToPlay from '../components/HowToPlay'
import Instructions from '../components/Instructions'

const sections = [
    { title: 'Star Smuggler', component: <Instructions /> },
    { title: 'How To Play', component: <HowToPlay /> },
    { title: 'Equipment', component: <Equipment /> },
    { title: 'About The Game', component: <Credits /> },
]

const Game = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            {sections.map(({ title, component }) => (
                <Card key={title} title={title}>
                    {component}
                </Card>
            ))}
        </section>
    )
}

export default Game