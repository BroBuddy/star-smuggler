import { Rule } from '../types/RuleType'

const ruleData: Rule[] = [
    {
        tag: 'r201',
        title: 'Characters',
        desc: [
            'Each character in the game has three ratings: Marksmanship ("M"), Hand-to-Hand fighting ("H"), and Endurance ("E"). Each is rated numerically, with higher numbers superior. Characters may also have skills, such as pilot/navigator, gunner, medic, driver, etc. Characters may possess certain items of equipment, whose quality depends on the "Tech Code" (technology level), or other items of worth, whose value depends on where they are bought and sold.',
            'The characters include yourself, the Star Smuggler Duke Springer (see r201b), any followers in your crew or party, and any other characters, creatures, or robots encountered during the game. Characters can be friendly or hostile, intelligent or unintelligent.',
            'When a character joins your party, note his (or her) vital statistics as needed. You can voluntarily dismiss or abandon members of your party if you wish (sometimes expedient when making an escape, or if money or equipment runs short). Dismissal or abandonment may have penalties to you (r220b). Characters encountered who don\'t join your party can be ignored after the event, they simply go on their way, and "disappear" from the game.',
            'To determine your own personal characteristics at the start of the game, see r201b.',
        ],
    },
    {
        tag: 'r201a',
        title: 'Characteristics and Skills',
        desc: [
            'Marksmanship measures your ability to fire all ranged weapons (sidearms, skimmer guns, etc.) except starship guns (which require a special skill instead). The higher your rating, the better you shoot. Ratings range from 0 to 6, if none is given, assume a 0 rating. See r230d for rules on firing ranged weapons.',
            'Hand-to-hand measures your ability in close combat. The higher your rating, the better. Ratings range from 0 to 6. This hand-to-hand rating also determines defense against such attacks, see r230g for details.',
            'Endurance value is a measure of how much damage you can take in combat, and still survive. See r231 for detailed rules about wounds.',
        ],
    },
    {
        tag: 'r201b',
        title: 'Your Character — Duke Springer',
        desc: [
            'You begin play as the star smuggler, Duke Springer, a talented and experienced starship pilot who is having trouble being successful in legal commercial enterprises. You have a starship (Antelope-class), a speedy and versatile small merchant vessel that can be operated by just one person, a pilot-navigator like yourself. In addition, you are a qualified starship gunner (can operate the guns of your ship), but the guns are only Tech Code 1 (low quality). You are an excellent shot with smaller weapons, with a marksmanship of 5. After a rough-and-tumble life in many spaceports, bars, and back alleys your hand-to-hand combat is even better, with a rating of 6. Coming from a high-gravity home planet, and because of your life, your body is in excellent condition, your endurance value is 10. In addition to these characters, you have a Cunning rating (r202) which other characters do not. See e001 for complete details of your possessions at the start of the game.',
        ],
    },
    {
        tag: 'r202',
        title: 'Cunning',
        desc: [
            'Cunning is an ability that combines smooth talking, staying cool, thinking fast in an emergency, rapidly figuring alternatives when a plan is blocked, and generally outsmarting your adversaries. Duke Springer is the only character with a Cunning rating. The first time you play, roll 1d6 (one die) to obtain your rating. If you have played before, you can adjust your Cunning by one in each subsequent game. If you found the game too difficult, or if you lost, increase your Cunning by one (+1). If you wish more challenge, or if you won, reduce your Cunning by one (-1). When you feel you have become an expert, trying playing with a Cunning rating of 0! When an event calls for a "Cunning roll," you roll one die and must get less than or equal to your Cunning rating to succeed, unless some other requirement is indicated.',
        ],
    },
    {
        tag: 'r203',
        title: 'Daily Actions',
        desc: [
            'At the start of each day, you either perform normal travel and contact, or stay in place for RRR (Rest, Recuperation and Repair). At the end of each day, you must check for breakdowns of equipment, and after each 10-day week, make payments on your loan. Each is explained in detail below. Time: each day has ten (10) hours for activity. All events are timed in hours, or sometimes take the rest of the day. If an event goes over the normal limit, you automatically get extra hours that day to finish it (an event will not carry over to the next day). Any other people in your party either travel with you, or stay behind doing little (see r220 for details).',
        ],
    },
    {
        tag: 'r203a',
        title: 'Travel',
        desc: [
            'During a normal day of travel and contact, you may travel about the land area (r204g). You have the following travel options, provided the vehicle is present and available:',
        ],
        tables: [
            {
                type: 'simple-list',
                rows: [
                    [
                        'Walk on foot: travel one land step per day, or spend an hour to move to an adjacent (connected by triple line) area',
                    ],
                    [
                        'Hire a commercial land vehicle: one hour per land step, see r215',
                    ],
                    [
                        'Drive a skimmer: if you own one, one hour per step, see r215',
                    ],
                    [
                        "Fly the Ship's Boat: 1/10 hour per step, 1 hour to go to or from orbit/space station, see r214 for details",
                    ],
                    [
                        'Take the Orbital Shuttle: 1 hour to or from space station or spaceport, see r215 for details',
                    ],
                    [
                        'Pilot Starship: 1/10 hour per step, 1 hour to or from orbit/space station, can also travel between planets (r212f-g) and between star systems (r212a-d)',
                    ],
                ],
            },
        ],
        note: [
            'When you travel, each new area entered requires a check for detection, with an entry event if detection occurs, see r225 for complete rules. You can travel more than once per day, provided you have sufficient hours left for the next travel, and you have sufficient fuel (r211) and life support (r213) where necessary. You may alternate travel and contact activities in the same day, provided sufficient time remains.',
        ],
    },
    {
        tag: 'r203b',
        title: 'Contact',
        desc: [
            'During a day of travel and contact, you may attempt to make contacts. See r227 for details and procedure. Basically, in a contact try you consult the Entry & Contact Table (r233) for the result, so it may take many attempts before you find what you are seeking (i.e., get the desired result).',
        ],
    },
    {
        tag: 'r203c',
        title: 'RRR — Rest, Recuperation & Repair',
        desc: [
            'This action is allowed only if you spend a full day (all 10 hours) doing it. No travel and no contact is allowed during an RRR day.',
            'At the start of an RRR day, first determine if an unwanted contact occurs (see r227a). If nothing happens, you can spend the day repairing equipment (r219) or healing (r231). A character cannot heal and repair at the same time, but some in your party could be healing while others are involved in repair work. If a repairman or mobile repairman is needed, you must have already arranged to have him (or it) present during the RRR day — searching for repairmen is not part of RRR.',
        ],
    },
    {
        tag: 'r203d',
        title: 'Breakdown',
        desc: [
            "At the end of each day, any vehicle or piece of equipment you used may break down. Consult r218 for details. Preventive maintenance (r218b) avoids the danger of breakdown. Breakdown need not be checked for vehicles that didn't move (even if providing life support and/or communications), or for starships and boats in orbit or docked at a space station.",
            'Breakdown of individual items (such as weapons) is separate from any vehicle carrying them, or any other device.',
        ],
    },
    {
        tag: 'r203e',
        title: 'Loan Payments',
        desc: [
            'At the end of each 10-day week, a loan payment is due on your Antelope-class starship. The ship originally cost 120,000 Secs (Sector Exchange Units, the "money" used here, see r232a), and your loan for this amount is 300 S interest due each 10-day week. In addition to interest, you can also pay back any part of the principal (the original 120,000 S) as well. Interest payments do not reduce the principal, and even if you pay some of the principal, interest continues at 300 S per 10-day until the full principal is paid.',
            'If you default on your loan (fail to pay interest) you have 30 days (three 10-day weeks) to pay the entire principal, after which the loan company begins attempts to repossess the ship (and appropriate events begin occurring!). Once you miss a payment, you can\'t make up with just that payment — the whole loan becomes due (the loan company are "sharks" — who else would loan you so much?).',
            "Incidentally, half the principal (60,000 S) is due ten years hence, and the rest of the principal (another 60,000 S) is due twenty years hence, but it's unlikely you'll play long enough to worry about this!",
            "Using banks to hold some of your money, you can have loan payments made from your account (in case you aren't around a place with banks when the week is up). See r232a for details.",
        ],
    },
]

export default ruleData
