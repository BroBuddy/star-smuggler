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
                cols: ['Travel Options'],
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
    {
        tag: 'r203f',
        title: 'Victory & Defeat',
        desc: [
            'An overwhelming victory in this game is paying off your entire spaceship loan of 120,000 S, and have a substantial fortune left for high living (how much left determines the degree of victory you can keep on looking for more endlessly!). However, staying alive and in possession of your spaceship for as long as possible is the real key to success. "Duke" Springer likes the freedom of the spaceways. Losing his ship or his personal freedom is a fate almost worse than death. Of course, even if you are imprisoned, or trapped in a stasis box, you can still hope to keep enough wealth to buy a ship, or otherwise get back into the star faring life again. The only true defeat in the game is death. Actually, the process of playing the game is designed to be sufficient enjoyment unto itself – how well can you survive as a rough-and-tumble free booting captain of the spaceways?',
        ],
    },
    {
        tag: 'r204',
        title: 'Maps & Classifications',
        desc: [
            'Star Smuggler is set in the Pavonis Sector, a distant star region with ten inhabited star systems. Various classifications and codes are used for each system, and a unique mapping system for the various planets. The standard description of the sector is in r207, but variants and modifications are possible (r208 & r209).',
        ],
    },
    {
        tag: 'r204a',
        title: 'System Characteristics',
        desc: [
            'Each star system has a wealth code, a technology (tech) code, and one or more planets, perhaps with a separate asteroid belt as well. Planets have varying tile layouts, gravity, atmosphere.',
        ],
    },
    {
        tag: 'r204b',
        title: 'Wealth Code',
        desc: [
            'This code ranges from 0 to 100, and represents the general level of wealth and economic strength of the system. Generally, in wealthy systems things cost more, while in poorer systems things cost less. However, a high wealth code system could still have numerous slums, with many discontents dwelling in utter poverty. Costs for goods and services will vary with the wealth code; often a cost multiplier is used after consulting the base price table (r241).',
        ],
    },
    {
        tag: 'r204c',
        title: 'Tech Code',
        desc: [
            'This code ranges from 0 to 100, and represents the sophistication of equipment in use. Although all equipment is futuristic, high tech items work better, and are more powerful, than lower tech, but tend to break down more often. Often high tech items bring good prices on low tech worlds, although it may be illegal to introduce such equipment for sale on certain worlds. Technology has important effects on weaponry (r216) and on breakdown (r218).',
        ],
    },
    {
        tag: 'r204d',
        title: 'Planetary Characteristics',
        desc: [
            'Within each system, each planet has various characteristics. This includes the two map tiles used to form the planet, its gravity, and atmosphere. All planets within a star system have the same political structure, and are in constant communication. Travel in orbits, or from one planet to another (within the system) is not normally regulated or supervised carefully — planetary governments concentrate their interest on ships arriving from hyperspace, and at the various spaceports and stations.',
        ],
    },
    {
        tag: 'r204e',
        title: 'Gravity',
        desc: [
            "The gravity factor of a planet varies from 1 to 16, the higher number indicating a stronger pull. A gravity of 10 or more prevents a ship's boat from climbing to orbit (it lacks sufficient fuel and power), although the boat could descend from orbit, or move about on the surface. Asteroids and space stations have a gravity factor of 0, as do ships in orbit, although spin and small accelerations, or the minor mass of the asteroid, provide a light gravity effect on people and items.",
        ],
    },
    {
        tag: 'r204f',
        title: 'Atmosphere',
        desc: [
            'A planet\'s atmosphere is rated as "good," "bad" or "no" air. Regardless of planet atmosphere, land areas with white letters as their title all have good air (on bad or no air planets, they have domes or force screens). In bad or no air (black labeled areas on planets of that type) you need life support to survive (r213). In bad air, normal skimmers will not function — their air-breathing engines automatically and instantly break down. A skimmer purchased on a bad air world will work on that world (due to special engine modifications), but won\'t work on any other bad air world, nor on a world with good air. No skimmer can function in "no air." No air also prevents starships and ship\'s boat from making a powerless glide landing; instead, a powered landing is needed (which uses fuel).',
        ],
    },
    {
        tag: 'r204g',
        title: 'Land Areas',
        desc: [
            'Each planet is composed of two map tiles, joined in a circular shape. The planet has various colored symbols on it, each symbol is a "land area." Each symbol has a name indicating its type, and additional codes for special facilities:',
        ],
        tables: [
            {
                type: 'simple-list',
                cols: ['Symbol Colors denote entrance restrictions'],
                rows: [
                    ['White areas can be entered by any type of travel.'],
                    [
                        "Yellow areas cannot be entered by a starship or ship's boat, but any other form of travel is allowed.",
                    ],
                    [
                        'Red areas can only be entered on foot or in a commercial vehicle, no other form of travel is allowed.',
                    ],
                    [
                        "Purple areas only by starship, ship's boat, or orbital shuttle.",
                    ],
                    [
                        'Area Names in white denote good air within the area, area names in black denote normal planetary air (which may be good, bad or none).',
                    ],
                    [
                        '[b] after the name indicates banking facilities are present (see r232a).',
                    ],
                    [
                        '[m] after the name indicates medical facilities present (r231c).',
                    ],
                ],
            },
            {
                type: 'simple-list',
                cols: ['Area Connectors are lines that indicate travel routes'],
                rows: [
                    [
                        'Short triple-line connector indicates one hour of travel time, regardless of the means used, to move to the other area. This symbol really indicates that the areas are touching, and thus if both have good air in them, travel is possible between without life support, even on a bad or no air planet.',
                    ],
                    [
                        'Long single line connectors with a number indicate a larger distance. The number is the distance in "land steps" between areas. See travel rules (r203a) for time needed to traverse a land step.',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r205',
        title: 'Area Types',
        desc: [
            'There are sixteen different types of areas on planets, each with a different map tile symbol. Sometimes a contact try (r227) will reference one of the paragraphs below, which simply means you roll 2d6 dice to determine which occurs. When you get this result, you may keep rolling (spending the appropriate number of hours for each roll, as indicated) as long as you like, including to the next day and beyond. Some results indicate "no more rolls" which means a new contract try and the appropriate paragraph reference is needed to start again.',
            'Once you finish with the roll(s) in the appropriate paragraph below, and do anything else, you cannot return to that paragraph unless a new contact try (r227) again results in that paragraph. This system may seem peculiar, but it represents the difficulty of dealing with local directories, languages, communication problems, and the fact that the items or services you desire may be rare, already "booked up" for a period, etc.',
        ],
    },
    {
        tag: 'r205a',
        title: 'City',
        image: true,
        desc: [
            'An extensive built-up area with a large population. There are many opportunities to buy and sell items. Banking and medical centers are present. Each roll takes one hour, roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'hire bodyguard (e063)'],
                    ['3', 'no more rolls'],
                    ['4', 'sidearms (e045)'],
                    ['5', 'repair units (e031)'],
                    ['6', 'hire repairman (e060)'],
                    ['7', 'fuel units (e026)'],
                    ['8', 'commercial transport (e074)'],
                    ['9', 'life support units (e029)'],
                    ['10', 'skimmer (e032)'],
                    ['11', 'hire driver (e062)'],
                    ['12', 'hire medic (e065)'],
                ],
            },
        ],
    },
    {
        tag: 'r205b',
        title: 'Colony',
        image: true,
        desc: [
            'A residence outpost on a planet, it can supply nearly every need of the colonists that live on planet. It is very difficult for an outsider to pass without notice in a colony. Banks and medical centers are present. Each roll takes one hour, roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'hypercharges (e025)'],
                    ['3', 'no more rolls'],
                    [
                        '4',
                        'sidearms (e045) or heavy hand weapons (e048) as desired',
                    ],
                    ['5', 'utility suits (e043)'],
                    ['6', 'hire mobile repairman (e061)'],
                    ['7', 'repair units (e030)'],
                    ['8', 'fuel units (e026)'],
                    ['9', 'life support units (e028)'],
                    [
                        '10',
                        'nothing unless tech code 30 or more, then buy GM robot (e038), PS robot (e040), and/or U robot (e042)',
                    ],
                    ['11', 'skimmer (e033)'],
                    ['12', 'skimmer guns (e051)'],
                ],
            },
        ],
    },
    {
        tag: 'r205c',
        title: 'Craters',
        image: true,
        desc: [
            'A cratered region due to natural causes when the planet was formed, or the result of planet-wide wars in the past or present. It is not possible to purchase goods or services here, but items may be found. Anything found is free (there is no charge to you). Each roll takes six hours, roll one die (1d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['1d6', 'Result'],
                rows: [
                    ['1', 'no more rolls'],
                    ['2', 'special event (e070)'],
                    [
                        '3',
                        'damaged utility suit (r213) that requires one repair unit (r219)',
                    ],
                    [
                        '4',
                        'damaged robot that requires one repair unit (r219), roll 1d6 again for type of robot: 1-3 PS robot (r222c), 4-6 U robot (r222b)',
                    ],
                    [
                        '5',
                        "undamaged heavy hand weapon (e049) of system's tech level",
                    ],
                    ['6', 'special event (e085)'],
                ],
            },
        ],
    },
    {
        tag: 'r205d',
        title: 'Gambling',
        image: true,
        desc: [
            'This is an area dedicated to games of chance, sports, and a wide variety of recreational activities. You may win money here (or lose it), make contact with the underworld, or run afoul of the law. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'heavy hand weapon (e048)'],
                    ['3', 'no more rolls'],
                    ['4', 'sidearms (e047)'],
                    ['5', 'hire driver (e062)'],
                    ['6', 'hire bodyguard (e064)'],
                    ['7', 'gamble (e071)'],
                    ['8', 'commercial transport (e074)'],
                    ['9', 'hire repairman (e060)'],
                    ['10', 'hire medic (e065)'],
                    ['11', 'fuel units (e027)'],
                    ['12', 'hire starship gunner (e069)'],
                ],
            },
        ],
    },
    {
        tag: 'r205e',
        title: 'Industrial',
        image: true,
        desc: [
            'An area of industrial research and manufacturing. This is a good area to buy equipment. Banking facilities are present. Each roll takes two hours; roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'hire starship engineer (e067)'],
                    ['3', 'skimmer (e033) and/or skimmer guns (e051)'],
                    ['4', 'PS robot (e060) and/or GM robot (e037)'],
                    ['5', 'U robot (e041)'],
                    ['6', 'hire repairman (e060)'],
                    ['7', 'repair units (e030)'],
                    ['8', 'fuel units (e026)'],
                    ['9', 'commercial transport (e074)'],
                    ['10', 'life support units (e028)'],
                    ['11', 'utility suits (e043) and/or sidearms (e046)'],
                    ['12', 'buy/install stasis units (e057)'],
                ],
            },
        ],
    },
    {
        tag: 'r205f',
        title: 'Military',
        image: true,
        desc: [
            'Military bases and installations have tight security and are generally risky to penetrate. If you can make contact, you may be able to buy military weaponry. Banking facilities are available inside the base, but medical are not (the military send all non-military personnel to civilian hospitals!). Each roll takes four hours; roll one die (1d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['1d6', 'Result'],
                rows: [
                    ['1', 'only buy heavy hand weapons (e050)'],
                    ['2', 'special event (e086)'],
                    ['3', 'no more rolls'],
                    ['4', 'only buy boat guns (e054)'],
                    ['5', 'only buy military utility suits (e044)'],
                    ['6', 'hire starship gunner (e069)'],
                ],
            },
        ],
    },
    {
        tag: 'r205g',
        title: 'Mining',
        image: true,
        desc: [
            'Mining facilities tend to be far from civilization, and this area type does not have life support automatically (workers have their own life support if on a world with bad or no air). Each roll takes three hours; roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'hire mobile repairman (e061)'],
                    ['3', 'no more rolls'],
                    ['4', 'fuel units (e027)'],
                    ['5', 'hire bodyguard (e063)'],
                    ['6', 'special event (e072)'],
                    ['7', 'life support units (e028)'],
                    ['8', 'repair units (e030)'],
                    ['9', 'hire driver (e062)'],
                    ['10', 'utility suits (e044)'],
                    ['11', 'commercial transport (e074)'],
                    ['12', 'U robot (e041)'],
                ],
            },
        ],
    },
    {
        tag: 'r205h',
        title: 'Palace',
        image: true,
        desc: [
            'This is the extensive and elaborate lodging of the royal or political family in power on the planet. There are no items or services regularly for sale, so no dice rolls are given. All contact results in special events. As you might imagine, palaces are normally well guarded.',
        ],
    },
    {
        tag: 'r205i',
        title: 'Prison',
        image: true,
        desc: [
            'The area for storage of criminals and other enemies of society. A prison is normally easier to enter than to leave. Prisoners with life sentences are normally packed into 1 CU Stasis Units (r212e), to save on food and guard requirements. As a result, stasis units of 1 and 2 CU are in common use, including some buying and selling. Each roll takes two hours, roll one die (1d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['1d6', 'Result'],
                rows: [
                    ['1', 'special event (e073)'],
                    ['2', 'no more rolls'],
                    ['3', 'hire bodyguard (e064)'],
                    ['4', 'special event (e087)'],
                    ['5', 'stasis units in 1 CU or 2 CU sizes only (e057)'],
                    ['6', 'no more rolls'],
                ],
            },
        ],
    },
    {
        tag: 'r205j',
        title: 'Rough Terrain',
        image: true,
        desc: [
            'A rugged area of poor visibility (rocks, caves, thick vegetation if planet has air, etc.). Rough terrain is a good place for fugitives, and tends to have rough inhabitants. There are no goods or services regularly for sale.',
        ],
    },
    {
        tag: 'r205k',
        title: 'Ruins',
        image: true,
        desc: [
            'The abandoned and decrepit remains of former civilization. Ruins may be searched for usable items, but equipment found here is at technology level 20 points below the normal planetary tech code (with a minimum tech code of 10 or the planetary code, whichever is less); ignore purchase prices, all found equipment is free. Each roll takes five hours; roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    [
                        '2',
                        "wrecked ship's boat with 1d6 points of damage, roll 1d6 again, on a 5 or 6 result no repair is possible, but you may cannibalize it for two repair units — boat contains no useful cargo or guns, and cannot be moved until fully repaired (r214)",
                    ],
                    [
                        '3',
                        'find one intact robot, roll 1d6 again for type: 1-4 U robot (r222b), 5 PS robot (r222c), 6 GM robot (r222a)',
                    ],
                    ['4', 'find intact skimmer with no fuel'],
                    [
                        '5',
                        'find 1d6 damaged utility suits, each requires one repair unit, after which another 1d6 roll is needed, result of 4-6 means the suit is still unsafe and must be discarded',
                    ],
                    ['6', 'special event (e084)'],
                    [
                        '7',
                        'find damaged skimmer, roll 1d6 again, 1-5 requires one repair unit, 6 cannot be repaired but can be cannibalized for one repair unit instead',
                    ],
                    ['8', 'special event (e088)'],
                    [
                        '9',
                        'find one damaged robot that requires one repair unit to fix, roll 1d6 for type of robot: 1-4 U robot (r222b), 5 PS robot (r222c), 6 GM robot (r222a)',
                    ],
                    ['10', 'find one sidearm'],
                    ['11', 'find one repair unit'],
                    [
                        '12',
                        'find one intact utility suit in a completely destroyed vehicle',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r205l',
        title: 'Rural',
        image: true,
        desc: [
            'An area where food is grown in a life-support environment. Banking facilities are present here. Each roll takes three hours; roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'one sidearm (e046)'],
                    ['3', 'no more rolls'],
                    ['4', 'hire driver (e062)'],
                    ['5', 'hire mobile repairman (e061)'],
                    ['6', 'fuel units (e027)'],
                    ['7', 'life support units (e028)'],
                    ['8', 'commercial transport (e074)'],
                    ['9', 'repair units (e031)'],
                    ['10', 'one U robot (e041)'],
                    ['11', 'hire medic (e065)'],
                    ['12', 'hire bodyguard (e063)'],
                ],
            },
        ],
    },
    {
        tag: 'r205m',
        title: 'Scientific',
        image: true,
        desc: [
            'An area where scientific research and development is performed. Items purchased here are considered one tech level higher than normal (after tech code and normal die roll determines tech level). If an item from here breaks down, it must be returned to this area on this planet for repair, or repaired by an engineer you hired from here. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'stasis units of any size (e057)'],
                    ['3', 'no more rolls'],
                    ['4', 'special event (e075)'],
                    ['5', 'hire starship engineer (e067)'],
                    ['6', 'hire repairman (e060)'],
                    ['7', 'commercial transport (e074)'],
                    ['8', 'PS robot (e039) or GM robot (e037)'],
                    ['9', 'U robot (e041) or utility suits (e043)'],
                    ['10', 'sidearms (e045) or heavy hand weapons (e048)'],
                    ['11', 'skimmer gun (e051) or boat gun (e053)'],
                    ['12', 'starship guns (e055)'],
                ],
            },
        ],
    },
    {
        tag: 'r205n',
        title: 'Slum Area',
        image: true,
        desc: [
            'A region of poverty and high crime. Slums are dangerous for outsiders to enter, but have an opportunity to buy and sell a wide range of items, often at inflated prices. Banking facilities are present. Each roll takes two hours, roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    [
                        '2',
                        'hire starship pilot/navigator (e066) or starship engineer (e067) although neither has papers',
                    ],
                    [
                        '3',
                        'buy U robot (e042), PS robot (e040), and/or GM robot (e038) although serial number plates are removed',
                    ],
                    ['4', 'no more rolls'],
                    [
                        '5',
                        'fuel units (e027), life support units (e029) and/or repair units (e031)',
                    ],
                    ['6', 'hire driver (e062) or buy/sell skimmer (e033)'],
                    ['7', 'special event (e076)'],
                    ['8', 'hire bodyguard (e064)'],
                    ['9', 'sidearms (e047) or heavy hand weapons (e049)'],
                    ['10', 'commercial transport (e074)'],
                    ['11', 'skimmer gun (e052) or boat gun (e054)'],
                    ['12', 'hire medic (e065) without papers'],
                ],
            },
        ],
    },
    {
        tag: 'r205o',
        title: 'Spaceport',
        image: true,
        desc: [
            "The normal landing port for star ships and orbital shuttles. It is the standard location to purchase star ships and equipment, as well as hiring a ship's crew. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):",
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'stasis units of any size (e057)'],
                    ['3', 'no more rolls'],
                    ['4', 'starship (e036) or starship guns (e055)'],
                    ['5', "ship's boat (e034) or boat guns (e053)"],
                    [
                        '6',
                        'commercial transport (e074) including orbital shuttles (r215a)',
                    ],
                    [
                        '7',
                        'hypercharges (e025), fuel units (e026) and/or life support units (e028)',
                    ],
                    ['8', 'utility suits (e043) and/or repair units (e030)'],
                    [
                        '9',
                        'GM robots (e037), PS robots (e039), and/or U robots (e041)',
                    ],
                    [
                        '10',
                        'starship engineer (e067) and/or starship gunner (e068)',
                    ],
                    ['11', 'starship pilot/navigator (e066)'],
                    ['12', 'medic (e065)'],
                ],
            },
        ],
    },
    {
        tag: 'r205p',
        title: 'Space Station',
        image: true,
        desc: [
            'Similar but smaller version of a star port, in orbit around the planet or near the asteroid belt. Conditions are cramped and prices higher, with few opportunities for profit unless contraband is gotten through customs. Banking facilities are present. Each roll takes one hour; roll two dice (2d6):',
        ],
        tables: [
            {
                type: 'roll-table',
                cols: ['2d6', 'Result'],
                rows: [
                    ['2', 'hire repairman (e060)'],
                    ['3', 'no more rolls'],
                    ['4', "ship's boat (e035) or boat guns (e056)"],
                    ['5', 'utility suits (e044)'],
                    [
                        '6',
                        'fuel units (e027), life support units (e029) and/or repair units (e031)',
                    ],
                    ['7', 'hypercharges (e025)'],
                    [
                        '8',
                        'orbital shuttle (e074 for rates, r215a for operation)',
                    ],
                    ['9', 'buy/install stasis units (e057)'],
                    ['10', 'hire starship engineer (e067)'],
                    ['11', 'hire starship pilot/navigator (e066)'],
                    ['12', 'hire starship gunner (e068)'],
                ],
            },
        ],
    },
    {
        tag: 'r206',
        title: 'Asteroids',
        image: true,
        desc: [
            'One game tile represents an asteroid belt, rather than half a planetary surface. There are six asteroids shown on the title, plus a space station. Of course, there are many more than six asteroids in the belt, this is a simplification for game purposes. The asteroid belt is an ideal place to store or hide materials, and occasional finds of value do occur.',
            'Asteroids have a gravity factor of 0 (although they actually have a very light pull). Asteroids have no air, nor atmosphere. No goods or services may be bought at the asteroids, but normal activities and contact tries are possible at the space station (see r205p). The dashed line for the orbit represents ships in the asteroid belt neither at an asteroid, nor docked at the space station.',
            "The connecting lines from asteroids to orbit represent the fact that all asteroids and the station connect to each other through the orbit. It takes one hour to go from any asteroid or the station to orbit, and another hour to go from orbit to any asteroid or the station (regardless of where one started). This is the maximum speed for either a starship or the ship's boat, the only way to go to or from asteroids.",
        ],
    },
    {
        tag: 'r207',
        title: 'Guide to the Pavonis Sector',
        image: true,
        desc: [
            'Ten star systems make up the Pavonis Sector, connected in pattern "one" (see r234). Complete data on each is provided below. Planets and asteroids are listed with the closest one to the star (sun) of the system first, and given the lowest number (i.e.. Planet I is closer than Planet II).',
        ],
    },
    {
        tag: 'r207a',
        title: 'Regari',
        desc: [
            'Once a key center of industrial development, Regari is now a hint of its past glory. People live a poorer lifestyle, and the system has suffered a serious economic depression for years. There is little system defense, and breakdown of equipment is now commonplace.',
        ],
        tables: [
            {
                type: 'simple-list',
                cols: ['1d6', 'System Entry'],
                rows: [
                    ['1', 'e090'],
                    ['2', 'e091'],
                    ['3', 'e096'],
                    ['4', 'e100'],
                    ['5', 'e116'],
                    ['6', 'e093'],
                ],
            },
            {
                type: 'simple-list',
                cols: ['System Codes'],
                rows: [['💰 wealth 0'], ['🛠️ tech 30']],
            },
            {
                type: 'simple-list',
                cols: ['Planet I'],
                rows: [['🪐 layout J-K'], ['🧲 gravity 3'], ['☣️ good air']],
            },
        ],
    },
    {
        tag: 'r207b',
        title: 'Palatek',
        desc: [
            'Palatek attempted to replace the technological preeminence of Regari, but went to such extremes that toxic effluents poisoned the atmosphere. Despite scientific efforts, respiratory diseases remain a common cause of death. System defense is largely under corporate control, and emphasizes protection against industrial espionage.',
        ],
        tables: [
            {
                type: 'simple-list',
                cols: ['1d6', 'System Entry'],
                rows: [
                    ['1', 'e092'],
                    ['2', 'e120'],
                    ['3', 'e105'],
                    ['4', 'e108'],
                    ['5', 'e097'],
                    ['6', 'e103'],
                ],
            },
            {
                type: 'simple-list',
                cols: ['System Codes'],
                rows: [['💰 wealth 30'], ['🛠️ tech 50']],
            },
            {
                type: 'simple-list',
                cols: ['Planet I'],
                rows: [['🪐 layout A-C'], ['🧲 gravity 7'], ['☣️ bad air']],
            },
        ],
    },
    {
        tag: 'r207c',
        title: 'Byzantium',
        desc: [
            'A very old society exists here, noted for its political intrigue and complexity, its vigilant secret police, and underground dungeons that none are said to leave. It is known as a dangerous system to enter, unless one has the right connections.',
        ],
        tables: [
            {
                type: 'simple-list',
                cols: ['1d6', 'System Entry'],
                rows: [
                    ['1', 'e106'],
                    ['2', 'e102'],
                    ['3', 'e093'],
                    ['4', 'e117'],
                    ['5', 'e120'],
                    ['6', 'e104'],
                ],
            },
            {
                type: 'simple-list',
                cols: ['System Codes'],
                rows: [['💰 wealth 50'], ['🛠️ tech 15']],
            },
            {
                type: 'simple-list',
                cols: ['Planet I'],
                rows: [['🪐 layout F-C'], ['🧲 gravity 10'], ['☣️ good air']],
            },
            {
                type: 'simple-list',
                cols: ['Planet II'],
                rows: [['🪐 layout E-B'], ['🧲 gravity 8'], ['☣️ good air']],
            },
        ],
    },
]

export default ruleData
