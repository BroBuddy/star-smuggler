import { Event } from '../types/EventType'

const eventData: Event[] = [
    {
        tag: 'e001',
        title: 'The Adventure Begins',
        time: 'takes 0 hours',
        desc: [
            'Due to bad luck and loan sharks, your financial situation is getting very desperate. Your small merchant starship never seems to have a full cargo hold, but operating costs are high. Your cash is almost gone, and another payment is due to the sector financiers. Maybe, just maybe, you can make ends meet if you look for illegal goods, and begin to take chances.',
            'Consult R201B to determine your starting attributes, and your skills, for your new career as a Star Smuggler, then continue reading here:',
            'You have a sturdy and reliable Antelope class starship (R212) built to tech level 1 standards (R210) and outfitted with a Hopper class ship’s boat (R214) and starship guns (R216A), both also tech level 1. The starship has six Hypercharges (R212B) and the boat has 15 fuel units (FUs, R211). In addition, a stasis unit (R212E) is mounted in the pilot’s compartment with 2 CU capacity, to protect the occupants in case of disaster. You personally own a utility suit (R213) and a sidearm (R216D), both of tech level 1. Your only money is in your pocket: 1d6 times 100, plus 150 Secs (for example, a 1d6 roll of “3” means 3x100, then +150, or 450 Secs, see R232A).',
            'You have no crew or hirelings, no cargo, and no repair units. However, you do have proper papers and are not “wanted” in any system (R228). This is the first day of the week, so you have 10 days until your next starship payment is due (R203E).',
            'You are currently at the sole planet in the Regari system (R207A) of the Pavonis sector, at the spaceport (R205O). This morning you decide to take up a life of smuggling. You check over your starship guns and personal sidearm, and prepare to find profit through any means. See R203 for the activities available to you.',
        ],
    },
    {
        tag: 'e002',
        title: 'Repossession Team',
        time: 'takes 1 hour',
        desc: [
            'A repossession team is in the area. Ignore this event (they’re after someone else!) unless you have defaulted on your loan (R203E) and your starship is in this area. If they’re after you, the following occurs:',
            'The team of six men surround the spaceship. One is a mobile attorney (E5, M0, H4) with repossession writs, two are heavy gunners (E8, M6, H3) with explosive heavy hand weapons of tech 6, and three are bodyguards (E9, M2, H6) with tech 6 sidearms. They are deployed for battle and in the first round open fire on the starship, one heavy hand gunner at the airlock, the other at the cargo hold hatch, from dispersed range. They know their business, and will blast either open with any hit. They will then try to board the ship and take control either of the engineering or pilot compartment (possible if they are the only persons in either compartment). They will escort off the ship anyone who surrenders, but will attempt to kill anyone who fights them or attempts to remain on board. If they succeed, they gain control of the ship, force all other persons off it with whatever they can carry - you lose your starship.',
        ],
    },
]

export default eventData
