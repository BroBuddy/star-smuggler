import Card from '@/components/Card'
import ListTable from '@/components/ListTable'
import PageHeader from '@/components/PageHeader'
import { parseLinks } from '@/lib/parseLinks'

const event = {
    tag: 'e001',
    title: 'The Adventure Begins',
    time: 'takes 0 hours',
    image: true,
    desc: [
        'Due to bad luck and loan sharks, your financial situation is getting very desperate. Your small merchant starship never seems to have a full cargo hold, but operating costs are high. Your cash is almost gone, and another payment is due to the sector financiers. Maybe, just maybe, you can make ends meet if you look for illegal goods and begin to take chances.',
        'Consult R201B to determine your starting attributes, and your skills, for your new career as a Star Smuggler, then continue reading here:',
    ],
    tables: [
        {
            cols: ['Starting Setup'],
            rows: [
                ['Starship: Antelope class (R212)'],
                ['Tech Level: 1 (R210)'],
                ['Ship’s Boat: Hopper class (R214)'],
                ['Ship Guns: R216A'],
                ['Hypercharges: 6 (R212B)'],
                ['Boat Fuel: 15 FUs (R211)'],
                ['Stasis Unit: 2 CU (R212E)'],
                ['Equipment: Utility suit (R213), Sidearm (R216D)'],
                ['Status: No crew, no cargo, no repair units'],
                ['Legal: Clean record (R228)'],
                ['Time: 10 days until next payment (R203E)'],
            ],
        },
        {
            cols: ['Credits'],
            rows: [['Roll 1d6 × 100 + 150 Secs']],
        },
        {
            cols: ['System Context'],
            rows: [
                ['Sector', 'Pavonis'],
                ['Location', 'Regari system (R207A)'],
                ['Position', 'Spaceport (R205O)'],
            ],
        },
        {
            cols: ['Next Step'],
            rows: [['See R203 for available activities']],
        },
    ],
}

function StartAdventureEvent() {
    return (
        <>
            <PageHeader tag={event.tag} title={event.title} time={event.time} />

            {event.image && (
                <div className="eventImage">
                    <img
                        src={`/images/events/${event.tag}.png`}
                        alt={event.title}
                    />
                </div>
            )}

            <Card>
                {event.desc?.map((p, i) => (
                    <p key={i}>{parseLinks(p)}</p>
                ))}
            </Card>

            {event.tables?.map((table, index) => (
                <ListTable key={index} table={table} />
            ))}
        </>
    )
}

export default StartAdventureEvent
