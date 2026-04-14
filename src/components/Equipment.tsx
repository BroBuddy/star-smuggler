import { Link } from 'react-router-dom'

function Equipment() {
    return (
        <>
            <p>
                Star Smuggler includes this instruction booklet, a separate
                events booklet, a sheet of twelve planetary titles (one of which
                is asteroids) to be assembled in various ways. and two dice. The
                box corner tabs include cut-out markers of Duke Springer, his
                spaceship, its boat, and a typical skimmer, which may be useful
                in the game as markers.
            </p>

            <p>
                The planetary tiles each have an identification letter (A
                through K), and two are placed together to form a circular
                planet. Which tiles are used for which planets is given in the{' '}
                <Link to="/rule/r207">Guide to the Pavonis Sector</Link>.
            </p>

            <p>
                When a die (singular of dice) roll is required, the rules often
                indicate this by “1d6” — meaning one die is rolled, or “2d6” —
                meaning two dice are rolled and totaled. Sometimes an amount is
                added or subtracted to the roll (or total in the case of 2d6).
                This is indicated by a “+” or “–” sign and the amount. For
                example, “1d6+1” indicates a roll of one die, with one added
                afterward.
            </p>
        </>
    )
}

export default Equipment
