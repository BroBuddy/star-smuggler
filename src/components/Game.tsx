import Card from './Card'
import Credits from './Credits'
import Equipment from './Equipment'
import HowToPlay from './HowToPlay'
import Instructions from './Instructions'

const Game = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Star Smuggler">
                <Instructions />
            </Card>

            <Card title="How To Play">
                <HowToPlay />
            </Card>

            <Card title="Equipment">
                <Equipment />
            </Card>

            <Card title="About The Game">
                <Credits />
            </Card>
        </section>
    )
}

export default Game
