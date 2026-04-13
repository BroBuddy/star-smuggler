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
                event (
                <Link to="/event/e001" className="text-blue">
                    E001
                </Link>
                ) and then read sections as necessary. You may find it
                convenient to read important rules sections first, including{' '}
                <Link to="/rule/r203">R203</Link>,&nbsp;
                <Link to="/rule/r212">R212</Link>,&nbsp;
                <Link to="/rule/R221">R221</Link> and{' '}
                <Link to="/rule/r230">R230</Link>, or if ambitious, read all the
                rules sections first (<Link to="/rule/r201">R201</Link>-
                <Link to="/rule/r232">R232</Link>).
            </p>
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
