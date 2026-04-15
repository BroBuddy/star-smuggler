import { Link } from 'react-router-dom'

function Instructions() {
    return (
        <>
            <p>
                In this game you are “Duke” Springer, star smuggler and
                rogue-about-the-galaxy. On your Antelope-class ship you travel
                about the Pavonis sector in search of wealth, and probably one
                step ahead of both your creditors and the police!
            </p>
            <p>
                In this game you play alone, against the game itself, trying to
                survive and become successful. The rules booklet is divided into
                sections, each of which is numbered (R000 numbers), while the
                events booklet has numbered events paragraphs (E000 numbers).
            </p>
            <p>
                You can learn this game as you play. Simply start with the first
                event{' '}
                <Link to="/event/e001" className="text-light-blue">
                    e001
                </Link>{' '}
                and then read sections as necessary. You may find it convenient
                to read important rules sections first, including
            </p>
            <ul>
                <li>
                    <Link to="/rule/r203">r203</Link> — Daily Actions
                </li>
                <li>
                    <Link to="/rule/r212">r212</Link> — Antelope Class Starship
                </li>
                <li>
                    <Link to="/rule/r221">r221</Link> — Roles of Hirelings
                </li>
                <li>
                    <Link to="/rule/r230">r230</Link> — Combat
                </li>
            </ul>

            <p>
                A pencil and some paper is needed for this game — to keep track
                of your possessions, current situation, special events, etc. You
                may even wish to record enough detail to provide a “personal
                history” of what happens to you in the game.
            </p>
        </>
    )
}

export default Instructions
