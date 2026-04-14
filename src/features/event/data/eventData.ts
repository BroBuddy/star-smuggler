import { Event } from '../types/EventType'

const eventData: Event[] = [
    {
        tag: 'e001',
        title: 'The Adventure Begins',
        time: 'takes 0 hours',
        image: true,
        desc:
            '<p>Due to bad luck and loan sharks, your financial situation is getting very desperate. Your small merchant starship never seems to have a full cargo hold, but operating costs are high. Your cash is almost gone, and another payment is due to the sector financiers. Maybe, just maybe, you can make ends meet if you look for illegal goods and begin to take chances.</p>' +
            '<p>Consult R201B to determine your starting attributes, and your skills, for your new career as a Star Smuggler, then continue reading here:</p>' +
            "<p>You have a sturdy and reliable Antelope class starship (R212) built to tech level 1 standards (R210) and outfitted with a Hopper class ship's boat (R214) and starship guns (R216A), both also tech level 1. The starship has six Hypercharges (R212B) and the boat has 15 fuel units (FUs, R211). In addition, a stasis unit (R212E) is mounted in the pilot's compartment with 2 CU capacity, to protect the occupants in case of disaster. You personally own a utility suit (R213) and a sidearm (R216D), both of tech level 1. Your only money is in your pocket: 1d6 times 100, plus 150 Secs (for example, a 1d6 roll of '3' means 3x100, then +150, or 450 Secs).</p>" +
            "<p>You have no crew or hirelings, no cargo, and no repair units. However, you do have proper papers and are not 'wanted' in any system (R228). This is the first day of the week, so you have 10 days until your next starship payment is due (R203E).</p>" +
            '<p>You are currently at the sole planet in the Regari system (R207A) of the Pavonis sector, at the spaceport (R205O). This morning you decide to take up a life of smuggling. You check over your starship guns and personal sidearm, and prepare to find profit through any means. See R203 for the activities available to you.</p>',
    },
    {
        tag: 'e002',
        title: 'Repossession Team',
        time: 'takes 1 hour',
        image: true,
        desc:
            "<p>A repossession team is in the area. Ignore this event (they're after someone else!) unless you have defaulted on your loan (R203E) and your starship is in this area. If they're after you, the following occurs:</p>" +
            '<p>The team of six men surround the spaceship. One is a mobile attorney with repossession writs, two are heavy gunners with explosive heavy hand weapons of tech level 6, and three are bodyguards with tech 6 sidearms. They are deployed for battle and in the first round open fire on the starship, one heavy hand gunner at the airlock, the other at the cargo hold hatch, from dispersed range. They know their business, and will blast either open with any hit. They will then try to board the ship and take control either of the engineering or pilot compartment (possible if they are the only persons in either compartment). They will escort off the ship anyone who surrenders, but will attempt to kill anyone who fights them or attempts to remain on board. If they succeed, they gain control of the ship, force all other persons off it with whatever they can carry - you lose your starship.</p>',
    },
    {
        tag: 'e003',
        title: 'Armored Vehicles',
        time: 'takes 1 hour',
        image: true,
        desc:
            '<p>You are attacked by armored military vehicles, see R311. Determine tech level (R210) with table R235, and then roll 1d6 to determine the exact composition of the force:</p>' +
            '<p>1-3: One vehicle and three infantrymen</p><p>4-5: Two vehicles and four infantrymen</p><p>6: Three vehicles and six infantrymen</p>' +
            "<p>Each infantryman is E6, M4, H3. Each vehicle has heavy armor, reducing hit results by two (that is, a single or double hit becomes a miss, a triple hit becomes a single hit, etc.), and is armed with a boat gun (R230K). Each vehicle has a crew of three: a driver, gunner, and commander (each E6, M3 with sidearms), who only leave the tank if it is disabled, and then will attempt to flee.</p><p>If you defeat the tank(s) but don't destroy them, you can capture and repair them. A tank functions like a skimmer (R215C), with the following variations: it takes up 45 CU space, has a capacity of 6 CU for crew and cargo, plus 6 CU of fuel, which it consumes at the rate of 2 FU per day. It moves at half the speed of a skimmer, and therefore is slower than anything other than walking on foot.</p>" +
            "<p>Private use of a tank is illegal in all systems, but having it in cargo (not in use) is allowed if weapons are permitted. If you use the tank as a vehicle to enter any area, and are detected (R238) immediately see E018 if there are any military areas on the planet. Otherwise, see E017 and ignore normal detection events. If you are not detected, proceed normally. If you later get into combat and use the tank, you will become 'wanted' in the system if any of your opponents escape the battle alive.</p>",
    },
    {
        tag: 'e004',
        title: 'Plague Carriers',
        time: 'takes rest of day',
        image: true,
        desc: '<p>You have come in contact with diseased people carrying the plague. For each person in your party roll 1d6:</p><p>1-3 no disease</p><p>4-6 contract the plague</p><p>Persons who catch the plague lose one Endurance point each day. A PS robot (R222C) cannot stop this, but a medic (R221F) who rolls 5-6 on 1d6 can prevent it, and can treat anyone in the party but himself. To cure the plague once contracted, the person must either survive one week of its effect or receive medical treatment (R231A). Once cured, normal RRR (R203C) or medical treatment (R231A) is needed to regain lost endurance. Once you survive the plague, you are thereafter immune to it. As long as anyone in your party has the plague, all those who don’t yet have it, and aren’t yet immune must check once a day to see if they get the disease.</p>',
    },
    {
        tag: 'e005',
        title: 'Robot Caravan',
        time: 'takes 0 hours',
        image: true,
        desc: `<p>You see a caravan of robots, composed of one controller robot and 1d6+1 utility robots (R222B). Roll 1d6 to determine what they are carrying:</p>
                <p>1. nothing</p>
                <p>2. 3 FU per U-robot</p>
                <p>3. 3 RU per U-robot</p>
                <p>4. 3 LSU per U-robot</p>
                <p>5. 3 CU of luxury foodstuffs (base value 5 S per CU) per U-robot</p>
                <p>6. 3 CU of refined ore (base value 10 S per CU) per U-robot</p>
            <p>You can ignore them, or you can disable the controller robot and capture the caravan (disabling is easily done, as the robot can’t fight back!). (See R211 for FU, RU, etc.) If you disable the controller and capture it, the event takes 1 hour and roll 1d6:</p>
                <p>1. E117</p>
                <p>2. E017</p>
                <p>3. E059</p>
                <p>4. E117</p>
                <p>5. E017</p>
                <p>6. no effect</p>
            <p>You can repair a disabled controller and reprogram it for your own use by a Starship Engineer using an RU. The controller is tech 5, costs 4 S per day to operate, and guides utility robots along a preplanned route using a radio and automatic alarm signals. You can use it to move goods or food from area to area, but it, and any U-robots with it, will be lost if their entry is detected and they are unaccompanied.</p>
            <p>A functioning controller robot can be sold at any Mining or Industrial area for a base price of 300 S (takes 1 hour to do).</p>`,
    },
    {
        tag: 'e006',
        title: 'Hit Man',
        time: 'takes 1 hour',
        image: true,
        desc: `<p>A hit man with a contract on you makes a surprise attack without warning (R230I). He is E7, M6, H5 with a tech 6 heavy hand weapon. If he loses 4 or more endurance, he instantly escapes along a route he pre-planned (you cannot follow or continue the combat).</p>`,
    },
    {
        tag: 'e007',
        title: 'Government Spy',
        time: 'takes rest of day',
        image: true,
        desc: `<p>You encounter a spy for some government (you’re not sure which). If you are carrying any government or military secrets, he will buy them from you for 600 S flat fee if they are for this star system, or 1,500 S if for any other system. If you have no secrets, he will offer to sell you a set of secret government documents (for this star system) for 350 S flat fee — they look genuine, and take up no space.</p>`,
    },
    {
        tag: 'e008',
        title: 'Escaped Prisoners',
        time: 'takes 1 hour',
        image: true,
        desc: `<p>Your party is suddenly rushed by a group of escaped prisoners. Determine number of prisoners by a 2d6 roll. Each is E6, M1, H4 and unarmed, although willing to use any weapons they can capture. Refer to R305 for combat.</p>
            <p>They will instantly escape if they get a vehicle. Otherwise, they are trying to take your clothes, weapons, and other possessions, and will leave if these are given willingly.</p>
            <p>You will have to return to your starship or spend 10 S from a local bank account for new clothes as your next activity.</p>`,
    },
    {
        tag: 'e009',
        title: 'Pheromone Dealer',
        time: 'takes rest of day',
        image: true,
        desc: `<p>You meet a dealer in pheromones, chemicals that influence the behavior of others. He tries to sell you 1d6 doses of pheromones for a base price of 80 S each, and will succeed (he is using pheromones on you) unless you succeed in a Cunning roll (R202).</p>
            <p>If you succeed in the roll, you may buy them or not at half that price, as you desire.</p>
            <p>You may use pheromones later in any purchase or sale, to double or halve the price as you desire. When you use a dose, roll one die: if the result is 6 the effect reverses (doubles prices instead of halves, etc.) but you need not complete the transaction.</p>
            <p>The doses are very small, you can carry them on your person without requiring any CU space.</p>`,
    },
    {
        tag: 'e010',
        title: 'Industrial Spy',
        time: 'takes rest of day',
        image: true,
        desc: `<p>You encounter an industrial espionage agent, who is willing to buy or sell industrial secrets for a base price (R229A) of 500 S. He will only make one transaction (one purchase, or one sale).</p>`,
    },
    {
        tag: 'e011',
        title: 'Gem Dealer',
        time: 'takes rest of day',
        image: true,
        desc: `<p>You meet a gem dealer who handles stolen gems and jewelry. He will buy any amount of such goods (including legal ones, if you have them) for a base price (R229A) of 1,800 S per CU, and sell any for a base price of 2,000 S per CU.</p>
            <p>It is impossible to attack him, since his money and merchandise is held by another agent (which is why transactions take so long).</p>`,
    },
    {
        tag: 'e012',
        title: 'Royal Party',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>You encounter a group that includes a member of the royal family and 2d6 bodyguards who ignore you.</p>\n<p>You may decide to attempt an attack to kidnap the royal person. If you do, refer to R302.</p>\n<p>Each bodyguard is E5, M3, H4, armed with sidearms (determine tech level per R210). . If you kill every bodyguard, the royal prince will surrender to you, the kidnapping is successful. If you successfully kidnap the prince, on any subsequent day you can attempt to ransom him (takes no time, but must have access to communications equipment, and be at his home planet). Roll 1d6 for result:</p><p>1-2: Negotiations continue, try again tomorrow sometime.</p><p>3: No deal, you get no ransom and are now <em>“wanted”</em> (R228) in this system. You can dispose of the prince as you wish (he’s of no further use).</p><p>4: They pay a base price (R229A) of 1000 S for his return.</p><p>5: They pay a base price (R229A) of 5000 S for his return.</p><p>6: They offer tons of money, but when you make the exchange (in this area), you are ambushed (see R327 and subtract one from the dice roll) by 20 men, each E8, M6, H5 with heavy hand weapons (see R210 for tech level). The prince will be killed in the firefight, and you will discover that they brought only fake money that is totally worthless.</p>',
    },
    {
        tag: 'e013',
        title: 'Bandits',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>You are trailed and attacked by a group of bandits. There are 1d6+2 of them, each with E 1d6+2, M4, H4, armed with sidearms (see R210 for tech level). Refer to R327 for the combat situation.</p>',
    },
    {
        tag: 'e014',
        title: 'Gamblers',
        time: 'takes rest of day',
        image: true,
        desc:
            '<p>Several “high roller” gamblers invite you to join a private game. If you agree, you must go alone and decide how much money you take. Then roll 1d6 to see the results of your activities for the day and evening:</p>' +
            '<p>1. You are attacked by three men, each E5, M4, H4 with sidearms (see R210 for tech level). They demand your money and weapons and will leave with them. If you refuse, see R327 and add one to your dice roll.</p>' +
            '<p>2. You have bad luck in the games, lose all the money you brought.</p>' +
            '<p>3. You have poor luck in the games, lose half the money you brought.</p>' +
            '<p>4. If you succeed with a Cunning roll (R202), you double the money you brought. Otherwise, you break even.</p>' +
            '<p>5. You have good luck and double the money you brought.</p>' +
            '<p>6. You have excellent luck. If you succeed with a Cunning roll (R202), you get five times the money you brought; if you fail, you get triple the money you brought.</p>',
    },
    {
        tag: 'e015',
        title: 'Gunrunner',
        time: 'takes rest of day',
        image: true,
        desc: `
            <p>You meet a gunrunner (E8, M5, H4) who has a skimmer and a commercial vehicle. The skimmer has a driver, skimmer guns, and a gunner (E7, M4, H5). He also has three bodyguards (each E6, M5, H4) armed with heavy hand weapons. The skimmer guns are tech 4, for all other items determine tech level (see R210). If you decide to attack them, see R301. If you damage or destroy the commercial vehicle, roll 1d6 below and get the indicated items free. If you decide to bargain instead, roll 1d6 and see the list below; you can attack after you start to bargain, but in that case see R230.</p>
            <p>1. They will buy any weapons you have, at base price (R229A) for 5 S per sidearm, 5 S per tech level for a heavy hand weapon, 40 S for skimmer gun, 400 S for a boat gun.</p>
            <p>2. They will sell weapons at the following base prices (R229A): tech 3 sidearms for 3 S each, heavy hand weapons (roll for tech level, see R210) in 6 CU crates of 5 guns for 40 S per crate.</p>
            <p>3. Military explosive heavy hand weapons (roll for tech level, see R210) for 20 S base price (R229A) each.</p>
            <p>4. Artillery beam weapon for 1500 S, it is tech 3, 8 CU in size, and fires like a starship gun (R216A) and thus requires an appropriately skilled starship gunner to operate. To fire it must be emplaced on the ground, which takes three men one round, or two men two rounds. Firing in battle consumes 1 FU (R211).</p>
            <p>5. If your party is on foot, the gunners automatically attack, see R304, otherwise they simply offer to buy any sidearms you have for 2 S each.</p>
            <p>6. They offer to sell what they claim is an alien weapon of unknown purpose for a base price (R229A) of 600 S. If you buy it, refer to E083 afterward.</p>`,
    },
    {
        tag: 'e016',
        title: 'Bootlegger',
        time: 'takes rest of day',
        image: true,
        desc: '<p>You meet a bootlegger who offers you any amount of Kroyxan brandy (with no tax stamps) at 85 S for each 1 CU case. The unstamped brandy can be sold at any Gambling area for a base price (R229A) of 200 S per case. You can obtain tax stamps for the brandy whenever you have the chance to obtain false papers, and for the same price a set of papers would cost. Properly stamped brandy can be sold in any City area for 500 S per case or Palace area for 600 S per case, base price (R229A).</p>',
    },
    {
        tag: 'e017',
        title: 'Police Try to Capture You',
        time: 'takes rest of day',
        image: true,
        desc: '<p>You are suddenly confronted by a police special engagement team, trying to capture you, refer to R312. The police team has three skimmers, each with a driver, skimmer gun and gunner (E6, M5, H3) and two troopers (E7, M4, H6) with heavy hand weapons and sidearms. Determine tech level of their equipment in R210. You can surrender and avoid combat, see E023 immediately. If you are defeated in combat, see E023 also, but while there receive medical treatment for any wounds (R231A).</p>',
    },
    {
        tag: 'e018',
        title: 'Military Patrol',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>You encounter a military patrol of six men, see R324. If a battle occurs, determine tech level (R210) and consult the appropriate description below:</p><p>Tech 1 Patrol: Two troopers have sidearms, four have heavy hand guns.</p><p>Tech 2 Patrol: All six troopers have heavy hand guns.</p><p>Tech 3 Patrol: All six have heavy hand guns, two are explosive weapons.</p><p>Tech 4 Patrol: All six have heavy hand guns, the patrol leader has a dalurium-screen helmet that protects him from any psionic attack, and carries a pack of four frag-grenades.</p><p>Tech 5 Patrol: All six have a heavy hand gun and four frag grenades, three of the six have shimmer-screen that reduces accuracy of weapon fire against them by two (-2) (if captured and it breaks down, it cannot be fixed).</p><p>Tech 6 Patrol: All six have heavy hand guns and four frag grenades except the patrol leader, who instead carries a portable field scrambler, any hit from which causes instant breakdown to a vehicle on a 1d6 roll of 4-6. The scrambler is 2 CU and has no effect on a starship with ECM.</p><p>Frag Grenades: Explosive weapons of 3 tech levels below that of the troops carrying them (reflects their inaccuracy if thrown or fired from grenade launchers).</p><p>Note: If you have a tank, or a ship’s boat that has used boat guns to fire on planet (and there were any survivors), or a starship that fired its guns on planet (and there were survivors), the patrol will also have a heavy artillery weapon, see E015 result 4 for details of this device.</p>',
    },
    {
        tag: 'e019',
        title: 'Customs Inspection',
        time: 'takes 1d6 hours',
        image: true,
        desc: `
            <p>As you pass through customs, you are delayed by agents looking for anyone without papers (R228), stolen goods, or items illegal in all systems. If you are in a starship, they will search the ship (R229D). If you refuse to pay any duties (see below), or have anything improper per above, see E080. Roll 1d6 as well, to determine which type of item has duty charges:</p>
            <p>1. Liquor or any type of alcoholic beverage at 5 S per CU.</p>
            <p>2. Any vehicles (including your own ship’s boat, if present, or the starship itself!) at 5 S per vehicle.</p>
            <p>3. Any robots at 10 S per robot.</p>
            <p>4. Any type of ore, at 2 S per CU.</p>
            <p>5. Any living animals or plants are contraband and will be automatically confiscated, there is no charge, and they are permanently lost.</p>
            <p>6. Any radioactives at 10 S per CU.</p>`,
    },
    {
        tag: 'e020',
        title: 'Payment on Arrival',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>When you reach New Karma spaceport, space station or colony with the gypsies, roll 1d6. If you receive any rubies, they can be sold at list value to any gem dealer you encounter, or bartered at half their value for anything in lieu of normal money payments. Rubies cannot be deposited in a bank account. Die roll results are:</p><p>1: Clan leader gives you a sack of rubies with a value of 53,000 S.</p><p>2: Clan leader admits he doesn’t have that many rubies, but gives you a small sack with a value of 8,000 S.</p><p>3-6: The clan leader says one of the children has a broken arm (he does), suffered in your rough landing — since the clan did not arrive all in good condition, you violated the agreement and he’ll pay nothing. Even if you threaten them or search them at gunpoint, you will find no more rubies, and in fact...</p>',
    },
    {
        tag: 'e021',
        title: 'Palatek Inspection',
        time: 'takes rest of day',
        image: true,
        desc: '<p>The Palatek inspection team searches for any items you obtained from Industrial or Scientific areas. If in your starship, see R229D, otherwise they search every person and vehicle in your party. All such items they find are taken and held in custody at the space station (or in an orbiting mother ship) for further examination. It is obvious from their strength that resistance is impossible, although if in your starship, you can hyperjump and then easily kill the few poorly armed men on board (see R212C).</p><p>Items taken for inspection will be returned after a number of days equal to their tech level, and meanwhile you will be required to attend classes instructing you in the laws of the Palatek system. You learn that industrial espionage is punishable by death, as are numerous infringements of the rights of corporations. On the other hand, crimes against individual persons do not seem to entail serious punishments.</p>',
    },
    {
        tag: 'e022',
        title: 'Psionic Attacks',
        time: 'take no time',
        image: true,
        desc: `
            <p>Only psionicists may make psionic attacks. A special procedure is used:</p>
            <p>1. Choose the size of the attack, from 1 to 6, and select one person as the target.</p>
            <p>2. Roll 1d6. If the roll equals or exceeds the attack size, you inflict a number of hits to the target equal to the size of the attack. If the roll is less than the size of the attack, the attacker takes a number of hits equal to the die roll. For wound effects, see R231.</p>
            <p>3. The size of the attack is limited by the Psionic Power of the attacker. The total of all attack strengths made during a day cannot exceed the psionic power of the individual. Special Abilities: A psionicist can use his/her power points as defense against psionic attacks, on a non-psionic person, but not a psionic person. Each point of power used in defense protects one person for one round.</p>`,
    },
    {
        tag: 'e023',
        title: 'Go to Jail',
        time: 'takes rest of day',
        image: true,
        desc: '<p>You are put in the nearest prison in this system (if none, go to the nearest City or Colony). You lose all equipment and money. At the start of each day roll 1d6, subtracting one (-1) if in a City or Colony. A result of “1” means you escape, any other result means you remain in prison that day.</p><p>If you escape, roll 1d6 again for each character in your party, “1” or “2” mean they escape with you (or rejoin you upon your escape, in which they aided), any other result means that member of your party has disappeared. If you escape in an area that lacks good air, you have managed to steal a utility suit. Escape takes the first hour of the day, you can continue travelling for the remaining time period. After 1d6 hours this day you will become “wanted” in this system.</p>',
    },
    {
        tag: 'e024',
        title: 'Ask the Nipnans for Help',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>If you have personal and ship’s papers (R228), are not “wanted” in this system (R228), and do not have any items purchased on Mynkuria, the Nipnans help extricate your ship and you are free to proceed. Any crewman with you but without papers is arrested and lost.</p><p>Otherwise, with their overwhelming force of warships, they confiscate everything you own, including your starship and cargo, and put you and your crew in jail, see E023. Boy, you really blew it this time!</p>',
    },
    {
        tag: 'e025',
        title: 'Buy Starship Hypercharges',
        time: 'takes rest of day',
        desc: '<p>You can buy hypercharges and install them in your starship. They cannot be stored as cargo or otherwise transported. Each hypercharge has a standard cost of 500 S.</p>',
    },
    {
        tag: 'e026',
        title: 'Buy & Sell Items',
        time: 'if not timed, takes 1 hour',
        desc: '<p>Refer to the appropriate paragraph below for the specific item to be bought or sold, and the base prices (R229A). In some cases, you can only buy, or only sell, as indicated.</p>',
    },
    {
        tag: 'e027',
        title: 'Fuel Units',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R211) each unit 2 S to buy, 1 S to sell, base price.</p>',
    },
    {
        tag: 'e028',
        title: 'Life Support Units',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R211) each unit 1 S to buy base, cannot sell.</p>',
    },
    {
        tag: 'e029',
        title: 'Life Support Units',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R211) each unit 2 S to buy base, cannot sell.</p>',
    },
    {
        tag: 'e030',
        title: 'Repair Units',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R211) each unit 1 S to buy, 1 S to sell, base price.</p>',
    },
    {
        tag: 'e031',
        title: 'Repair Units',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R211) each unit 2 S to buy, 1 S to sell, base price.</p>',
    },
    {
        tag: 'e032',
        title: 'Skimmer',
        time: 'if not timed, takes 1 hour',
        desc: '<p>One skimmer (R215C) can be bought for a base price of 40 S, or sold for a base price of 30 S. A skimmer that won’t work on this planet cannot be sold here.</p>',
    },
    {
        tag: 'e033',
        title: 'Skimmer',
        time: 'if not timed, takes 1 hour',
        desc: '<p>One skimmer (R215C) can be bought for a base price of 60 S or sold for a base price of 30 S. A skimmer that won’t work on this planet cannot be sold here.</p>',
    },
    {
        tag: 'e034',
        title: 'Ship’s Boat',
        time: 'if not timed, takes 1 hour',
        desc: `<p>One Hopper class ship’s boat (R214) can be bought for a base price of 900 S or sold for a base price of 600 S.</p>
            <p>E035 Ship’s Boat: one Hopper class ship’s boat (R214) can be bought for a base price of 1200 S, or sold for a base price of 500 S.</p>`,
    },
    {
        tag: 'e035',
        title: 'Ship’s Boat',
        time: 'if not timed, takes 1 hour',
        desc: '<p>One Hopper class ship’s boat (R214) can be bought for a base price of 1200 S, or sold for a base price of 500 S.</p>',
    },
    {
        tag: 'e036',
        title: 'Buy Starship',
        time: 'takes rest of day',
        image: true,
        desc: '<p>You can buy an Antelope class starship (R212) for 120,000 S cash. You cannot buy one on credit, since your credit is now bad (start a new game if you want to do that!). The starship comes with no cargo, no crew, no starship guns, and only one Hypercharge, although you are free to buy more at 500 S each. The starship comes with all normal ship’s papers (R228) unless you are “wanted.” If you’re wanted, you can get the ship, but without papers (it is bought illegally). Note that the starship does not come with a ship’s boat. Determine tech level of the starship using R210. It may not be tech 1 (as was your original Antelope class)!</p>',
    },
    {
        tag: 'e037',
        title: 'GM Robo',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R222A) each 20 S to buy, 100 S to sell, base price.</p>',
    },
    {
        tag: 'e038',
        title: 'GM Robot',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R222A) each 200 S to buy base price, cannot sell.</p>',
    },
    {
        tag: 'e039',
        title: 'PS Robot',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R222C) each 120 S to buy base price, cannot sell. PS Robot must be programmed to a person present when it is bought.</p>',
    },
    {
        tag: 'e040',
        title: 'PS Robot',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R222C) each 200 S to buy base price, cannot sell. PS Robot must be programmed to a person present when it is bought.</p>',
    },
    {
        tag: 'e041',
        title: 'U Robot',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R222B) each 80 S to buy, 50 S to sell, base price.</p>',
    },
    {
        tag: 'e042',
        title: 'U Robot',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R222B) each 150 S to buy, 40 S to sell, base price.</p>',
    },
    {
        tag: 'e043',
        title: 'Utility Suit',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R213) suit 10 S to buy, 5 S to sell, base price.</p>',
    },
    {
        tag: 'e044',
        title: 'Utility Suit',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R213) suit 20 S to buy base price, cannot sell. Suits here are heavy-duty, will self-seal a two-hit wound.</p>',
    },
    {
        tag: 'e045',
        title: 'Sidearms',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216D) each 2 S to buy base price, cannot sell.</p>',
    },
    {
        tag: 'e046',
        title: 'Sidearms',
        time: 'if not timed, takes 1 hour',
        desc: `<p>(R216D) each 5 S to buy base price, cannot sell. If in a Rural area, no more than one may be bought.</p>
            <p>E047 Sidearms: (R216D) each 4 S to buy, 2 S to sell, base price.</p>
            <p>E048 Heavy Hand Weapons: (R216D) each 10 S to buy base, cannot sell.</p>
            <p>E049 Heavy Hand Weapons: (R216D) each 15 S to buy, 10 S to sell, base.</p>
            <p>E050 Heavy Hand Weapons: (R216D) each 30 S to buy base price, may not sell. Weapons here have explosive effects also.</p>
            <p>E051 Skimmer Guns: (R216C) each 25 S to buy, 10 S to sell, base price.</p>
            <p>E052 Skimmer Guns: (R216C) each 40 S to buy, 30 S to sell, base price.</p>
            <p>E053 Boat Guns: (R216B) each 80 S to buy, 30 S to sell, base price.</p>
            <p>E054 Boat Guns: (R216B) each 150 S to buy base price, cannot sell. Before purchase, roll 1d6, a “6” indicates they are armor-piercing guns that automatically inflict one critical hit with each normal hit (instead of normal critical hit procedure) against all targets except starships.</p>
            <p>E055 Starship Guns: (R216A) each 200 S per tech level to buy, cannot sell. You may select guns of a lower tech level to get a lower price.</p>
            <p>E056 Starship Guns: (R216A) each 300 S per tech level to buy, 100 S per tech level to sell, base price. You can only buy starship guns of the listed tech level here, you cannot buy lower level guns.</p>`,
    },
    {
        tag: 'e047',
        title: 'Sidearms',
        time: 'if not timed, takes 1 hour',
        desc: '<p>Sidearms: (R216D) each 4 S to buy, 2 S to sell, base price.</p>',
    },
    {
        tag: 'e048',
        title: 'Heavy Hand Weapons',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216D) each 10 S to buy base, cannot sell.</p>',
    },
    {
        tag: 'e049',
        title: 'Heavy Hand Weapons',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216D) each 15 S to buy, 10 S to sell, base.</p>',
    },
    {
        tag: 'e050',
        title: 'Heavy Hand Weapons',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216D) each 30 S to buy base price, may not sell. Weapons here have explosive effects also.</p>',
    },
    {
        tag: 'e051',
        title: 'Skimmer Guns',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216C) each 25 S to buy, 10 S to sell, base price.</p>',
    },
    {
        tag: 'e052',
        title: 'Skimmer Guns',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216C) each 40 S to buy, 30 S to sell, base price.</p>',
    },
    {
        tag: 'e053',
        title: 'Boat Guns',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216B) each 80 S to buy, 30 S to sell, base price.</p>',
    },
    {
        tag: 'e054',
        title: 'Boat Guns',
        time: 'if not timed, takes 1 hour',
        image: true,
        desc: '<p>(R216B) each 150 S to buy base price, cannot sell. Before purchase, roll 1d6, a “6” indicates they are armor-piercing guns that automatically inflict one critical hit with each normal hit (instead of normal critical hit procedure) against all targets except starships.</p>',
    },
    {
        tag: 'e055',
        title: 'Starship Guns',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216A) each 200 S per tech level to buy, cannot sell. You may select guns of a lower tech level to get a lower price.</p>',
    },
    {
        tag: 'e056',
        title: 'Starship Guns',
        time: 'if not timed, takes 1 hour',
        desc: '<p>(R216A) each 300 S per tech level to buy, 100 S per tech level to sell, base price. You can only buy starship guns of the listed tech level here, you cannot buy lower level guns.</p>',
    },
    {
        tag: 'e057',
        title: 'Stasis Units',
        time: 'N/A',
        desc: '<p>Units of any size can be bought, at 50 S base price per CU of size in the unit. You cannot sell stasis units here.</p>',
    },
    {
        tag: 'e058',
        title: 'False Accusation of Contraband',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>After a cursory examination at a customs post, four agents accuse you of carrying contraband, regardless of whether you are or not. They demand an immediate payment of 500 S as a “fine.” If you pay the fine, they leave, ignoring any actual contraband. If you refuse the fine but don’t resist, you are sent to jail (E023) for ten days. Meanwhile, your crew lands the ship at the nearest space port or space station (or colony, if neither of the above), and waits for you, doing RRR for that period. Those whose salaries become unpaid will leave. If you decide to fight, see E080.</p>',
    },
    {
        tag: 'e059',
        title: 'Traps!',
        time: 'no time',
        image: true,
        desc: '<p>You have blundered into a trap. Roll 1d6 to determine the results:</p><p>1 A powerful magnetic field causes immediate breakdown (R218) of any robots, but has no effect on vehicles or other equipment.</p><p>2 Alarms go off. Immediately roll for an Entry Encounter (R225A) for this area, making the customary subtract of one (-1) from the die roll.</p><p>3 Poison gas floods the area, any person not in a Utility Suit nor within a vehicle providing life support (R213) suffers 1d6 hits instantly (R231).</p><p>4 Mine Explodes! suffer 2d6 hits to each vehicle or person present, 2-7 is multiple hit results, 8-12 disablement (see R230K for interpreting vehicle damage effects).</p><p>5 Flaming liquid is sprayed on each vehicle and person. Each person suffers 1d6 hits (R230), skimmers or commercial vehicles suffer one hit each and break down, other vehicles are unaffected.</p><p>6 Trap malfunctions, no effect.</p>',
    },
    {
        tag: 'e060',
        title: 'Hire Repairman',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>You may hire a repairman who will work in this land area only. He will repair any vehicles or equipment (R219) for a base price (R229A) of 5 S per day. Repair units will cost an additional 5 S each unless you provide them to the repairman to use.</p>',
    },
    {
        tag: 'e061',
        title: 'Hire Mobile Repairman',
        time: 'takes 1 hour',
        image: true,
        desc: '<p>You hire a repairman who will work in whatever area you choose. He will repair any vehicles or equipment (R219) for a base price (R229A) of 5 S per day. If he must travel outside of his home area, for each area he must travel to the repair site the salary doubles (moving to a neighboring area will cost you 10 S per day, two areas away 20 S per day, etc.). He will not leave the planet, but will go up to a space station (but not to orbit). If he leaves his home area you must provide repair units for the work; if he works in his home area, you can provide them, or have him use his own, which cost you an extra 5 S each. Mobile repairmen will arrange for their own transportation, you need not provide it.</p>',
    },
    // {
    //     tag: 'e062-E069',
    //     title: 'Hirelings Available',
    //     time: 'takes 1 hour',
    //     desc:
    //         '<p>One or more hirelings for your party are available. Consult the specific paragraph below for the type of hireling, his base price (R229A) weekly salary, and his death payment (R220B) if he dies in your service. Hirelings found in Slum areas have no death payments. Hirelings from slums will lack papers. All hirelings must be paid at the start of each 10-day week of work.</p>',
    // },
    {
        tag: 'e062',
        title: 'Skimmer Driver',
        time: 'takes 1 hour',
        desc: '<p>With E 1d6+1, M0, H2. Base salary is 4 S per week, death payment 30 S unless from slums. He will refuse to leave this star system, and if shanghied will refuse to work.</p>',
    },
    {
        tag: 'e063',
        title: 'Bodyguard',
        time: 'takes 1 hour',
        desc: '<p>With E 1d6+1, M 1d6, H 1d6-1 (minimum of 1). Base salary is 5 S per week, death payment 40 S unless from slums.</p>',
    },
    {
        tag: 'e064',
        title: 'Bodyguards',
        time: 'takes 1 hour',
        desc: '<p>One or two available, each E 1d6+2, M 1d6+1 (maximum of 6), H 1d6. Each already has a sidearm (see R210 for tech level). Base salary is 10 S per week, death payment 40 S unless from slums, for each bodyguard you decide to hire.</p>',
    },
    {
        tag: 'e065',
        title: 'Medic',
        time: 'takes 1 hour',
        desc: '<p>With E 1d6, M0, H1. Base salary is 10 S per week, death payment 80 S unless from slums.</p>',
    },
    {
        tag: 'e066',
        title: 'Pilot/Navigator',
        time: 'takes 1 hour',
        desc: 'With E 1d6, M 1d6-1, M 1d6-2 (minimum of 1). Base salary is 20 S per week unless piloting within stasis unit (R212E) which reduces base price to 15 S per week. He requires a 20 S bonus “sign on” payment to join, death payment is 200 S unless from the slums.',
    },
    {
        tag: 'e067',
        title: 'Starship Engineer',
        time: 'takes 1 hour',
        desc: 'With E 1d6+1, M 1d6-1, H 1d6. Base salary is 15 S per week unless a 2 CU stasis unit is in the engineering compartment for him (R212) which reduces base salary to 10 S per week. He requires a 15 S bonus “sign on” payment to join, death payment is 120 S unless he is from the slums.',
    },
    {
        tag: 'e068',
        title: 'Starship Gunner',
        time: 'takes 1 hour',
        desc: '<p>With E 1d6+1, M 1d6, H 1d6-1 (minimum of 1). Base salary is 15 S per week unless turret has a 2 CU stasis unit (R212E) which reduces it to 10 S per week. In addition, he requires a 10 S bonus “sign-on” payment to join. Death payment is 100 S unless he is from the slums.</p>',
    },
    {
        tag: 'e069',
        title: 'Starship Gunner',
        time: 'takes 1 hour',
        desc: '<p>With E 1d6+1, M 1d6+1 (maximum of 6), H 1d6. Base salary is 15 S per week unless turret has a 2 CU stasis unit (R212E) which reduces it to 10 S per week. He has his own sidearm (determine tech level per R210). He requires a 20 S bonus “sign on” payment to join. Death payment is 100 S unless he is from the slums.</p>',
    },
    {
        tag: 'e070',
        title: 'Radioactive Area',
        time: 'No time',
        desc: '<p>You are in a radioactive area. Everyone present immediately suffers one hit, with one addition during each hour you remain in this area. Each vehicle or piece of equipment in the area must check for break-down (R218) after each hour, in addition to checking at the end of the day.</p>',
    },
    {
        tag: 'e071',
        title: 'Gambling',
        time: 'rest of day',
        desc: '<p>You may place one bet, of any size, using Sees (S) of cash only. Next roll 2d6 to see what you win back: any roll of doubles wins back your initial bet. A roll of 5 or 9 means you win twice your bet, 3 or 11 means you win triple your bet. Alternately, you can play the “jackpot” game where you make your bet, roll 2d6, and collecting nothing unless a “12” occurs — where you win thirty times (30x) your initial bet. You must select your game and pay your bet, then roll the dice. You can continue to play game after game of Gambling for as long as you wish, or until you run out of cash.</p><p>If you end this activity with 1,000 S or more in your pocket, roll 1d6 and consult the appropriate event:</p><p>1: E006</p><p>2: E013</p><p>3-4: E014</p><p>5-6: nothing</p>',
    },
    {
        tag: 'e072',
        title: 'Empty Mine',
        time: 'takes 1 hour',
        desc: '<p>You find an empty mine and may explore it. If you do, it takes the rest of the day, roll 1d6 for what you find:</p><p>1: absolutely nothing</p><p>2: 1d6 crystals worth 30 S each</p><p>3: cave in! roll 1d6 for each person in the party: 4-6 means they are buried, you can avoid this result with a successful Cunning roll (R202), each survivor can dig out one buried person, who will have 1d6 hits when recovered, any others are lost</p><p>4: acid drainage causes equipment corrosion, roll for breakdown (R218) of each item taken into the mine</p><p>5: attacked by 2d6 strange life forms, each with E3, M0, H6 which start in contact and fight to the death, see R304</p><p>6: workable deposits found, may extract 5 CU of ore per day for each person working in the mine. Each CU of ore may be sold at any industrial area for a base price (R229A) of 20 S. Hirelings working in a mine require double normal salary due to dangers and difficulty of the work, and will need a successful Cunning roll (R202) by you each subsequent week (can make one roll for all, or deal with them individually, as you desire). U Robots can also work it if directed by yourself or a controller (available only through events) which was reprogrammed for the job (requires repair work R219 to reprogram). Robots in the mine must roll twice after each day for break-down (R218).</p>',
    },
    {
        tag: 'e073',
        title: '“Wanted” Person Recognized',
        time: 'takes 1 hour',
        desc: '<p>Ignore this event if nobody is “wanted” in your party. Anyone (including you) in your party who is “wanted” (R228) in this system is recognized. Instantly 1d6+1 guards appear demanding surrender of all wanted persons. Each guard is E 1d6+1, M 1d6, H 1d6 with a heavy hand weapon (R216D). You can surrender the wanted person(s), who goes to jail (E023); or you can fight. If you fight, see R327 and subtract one (-1) from your dice roll there.</p>',
    },
    {
        tag: 'e074',
        title: 'Commercial Transport Available',
        time: 'takes 1 hour',
        desc: '<p>You may hire commercial transport (R215B). This may be a commercial vehicle, or an orbital shuttle if at a space station, space port, or colony on a planet without a spaceport. Every 3 CU capacity hired costs 1 S per hour, regardless of whether it is moving or waiting, and comes with fuel and driver. Entire rental time must be paid in advance, vehicle disappears after that. Travel speeds are given in R203A. If hiring a commercial vehicle, each comes in one of three sizes, either a 3 CU, 6 CU or 9 CU vehicle. You can hire more than one, but larger vehicles do not exist. Any size orbital shuttle is available.</p>',
    },
    {
        tag: 'e075',
        title: 'Open Laboratory',
        time: 'takes 1 hour',
        desc: '<p>You find an open door to a laboratory area in the scientific complex. You may enter and spend another 1d6 hours looking around. If you do, then roll a 1d6 for the results of your searches:</p><p>1: find nothing of obvious value</p><p>2: knock over a shelf of chemicals that explode, you clumsy oaf! roll 2d6, 2-7 is that many hits, 8-12 is disablement, with an additional roll for each additional person in your party — you then recover and escape</p><p>3: find valuable scientific plans, can be sold for 1,000 S base price (R229A) in any scientific area of any other star system</p><p>4: set off alarms, immediately roll for an entry encounter (R225A) complex with normal minus, one (-1) to die roll for this area</p><p>5: find a file cabinet with useful information, may take file for any one piece of equipment — information allows a starship engineer to spend a day in RRR tinkering with that item to improve it by one tech level</p><p>6: accidentally activate a quantum discombobulator, immediately roll for breakdown (R218) of each item of equipment with your party, must escape immediately and thus abandon anything you cannot carry out immediately</p>',
    },
    {
        tag: 'e076',
        title: 'Street Dealer',
        time: 'takes 1 hour',
        desc: '<p>A rather seedy looking individual approaches and says he has just the deal for you, if you will come alone with him. If you do, event takes the rest of the day, and roll 1d6 for the result:</p><p>1: you are offered four cases of stolen hand computers, each is 5 S base price and is 4 CU in size</p><p>2: you are offered pure dylaweed extract at 25 S per CU</p><p>3: you are offered one night of absolute delight for 3 S</p><p>4: you are offered a stolen collection of rare illustrated books for 10 S, they take up 2 CU of space</p><p>5: you are jumped by three men, each E6, M4, H5 with side-arms (see R210 for tech level), one will begin in contact, attacking, see R305</p><p>6: you are offered counterfeit money up to 5,000 S face value, each 100 S of fake money will cost you 10 S of your real money</p><p>For details on base price in purchase and resale, see R229A. If you buy any of the above items, you can attempt resale by spending an hour in any city area and making a successful cunning roll (R202). Base price at resale is 1d6+6 times the purchase price. However, if you fail the cunning roll when trying to resell the first item, it means they are really worthless — you’ve been ripped off for the entire value of the item.</p><p>Fake money can be used at face value as long as you make successful cunning rolls (R202). The first time you fail, though, you instantly become “wanted” in that system. Fake money cannot be given to any bank, they will instantly recognize that its fake, regardless of your cunning.</p>',
    },
    {
        tag: 'e077',
        title: 'Vehicular Trap',
        time: 'No time',
        desc: '<p>You run into a trap designed to stop your vehicle. Roll 1d6:</p><p>1-2: the vehicle suffers that many hits of damage (R217)</p><p>3-5: it suffers an immediate break-down but not hits</p><p>6: the trap malfunctions and has no effect upon your vehicle</p>',
    },
    {
        tag: 'e078',
        title: 'Proceed Through Mines',
        time: '1 hour per mine',
        desc: '<p>You start by seeing two mines that must be passed, it takes one hour of careful maneuvering to try to pass each. After each, roll 1d6:</p><p>1: back up and try again</p><p>2-4: pass by successfully, go on to next</p><p>5: a ship’s boat passing through is successful, but a starship explodes the mine and suffers 2d6 hits (reduce result by 2 if ship has activated defensive screens)</p><p>6: pass this mine successfully, but there are two more beyond, add them to the number you must pass to get out of the field</p><p>If mine damage destroys your starship, or you decide to abandon it, you can leave in the ship’s boat. If the ship is destroyed, only people on board and what they can carry get into the boat (plus whatever is already there and not thrown out to make room). If the ship isn’t yet destroyed, cargo, etc. can also be loaded into the boat as space permits.</p>',
    },
    {
        tag: 'e079',
        title: 'Attack the Drone',
        time: '1 hour/round',
        desc: '<p>The drone is a masterpiece of Nipnan technology. It is tech level 6 with ECM and defensive screens. See R230L for combat rules. You fire first, and any hit destroys the drone. If you miss, it makes an “attack run” as if firing tech 6 starship guns. If it hits, the drone itself detonates on your ship, causing 1d6+1 hits. If it misses, you can either hyperjump, try to escape via sublight drive (see E132), or fight another round.</p>',
    },
    {
        tag: 'e080',
        title: 'Arrested by Customs',
        time: '1d6 hours',
        desc: '<p>The customs officers arrest any members of your crew without papers, and arrest you for various violations or your refusal to pay duty. If you are involved and surrender, see E023, your starship can be found at the spaceport, space station, or colony (in that order, depending on the world), with the rest of your equipment and any crew whose salaries are still paid up. If you decide to resist, see R301 for the battle situation. There are two men in Contact with you, and two more men in your vehicle, all are E5, M4, H6 armed with sidearms. If you succeed in killing them, the customs post itself has a starship gun (see R210 for tech level) with gunner in a turret-area protected like a starship and is inaccessible to boarding, but also immobile.</p>',
    },
    {
        tag: 'e081',
        title: 'Attack or Escape the Battleship',
        time: '1 hour/round',
        desc: '<p>The starship battle procedure must be used, see R230L. Each round you will shoot first. Determine if you hit, and if you are trying to escape by moving away. Then, roll 1d6 to determine the battleship’s response, subtracting three if trying to escape:</p><p>1 (or less): the battleship opens fire with all guns, but if you’re moving away you then escape</p><p>2: the battleship fires with 2d6 of its guns, then engages its sublight drive and moves away from you too fast to follow, battle ends</p><p>3: the battleship fires with 1d6 guns, then engages its sublight drive and moves away from you too fast to follow, battle ends</p><p>4: battleship does not fire, but engages sublight drive and moves away, battle ends - however, you are now “wanted” (R228) in this system</p><p>5: if your shot missed, roll again, if it hit, the battleship appears heavily damaged, secondary explosions appear on board, and then it erupts in a massive explosion and is destroyed without ever firing back</p><p>6: the battleship surrenders, you board and in the rest of the day discover that there is only a skeleton crew on board, you decide to ransom the battleship back to the Imperian government for 2d6 times 10,000 S and are paid immediately</p><p>Battleship Statistics: the battleship is tech 2, mounts 12 tech 2 star-ship guns, and has 120 hit points. Note that it may not fire all its guns at once.</p>',
    },
    {
        tag: 'e082',
        title: 'Board Alien Ship',
        time: 'Concludes the game',
        desc: '<p>It is obvious that this is a very old, alien starship. As your boarding party moves about the ship, investigating mysterious devices and controls, one person accidentally triggers a panel and power suddenly comes on. The automatic collision-avoidance field energizes, propelling your own starship away so violently that it is crushed and everyone on board is killed. Your boarding party is now trapped on the alien ship. If it includes a starship engineer, you will be able to learn to operate the engines and take the ship in to harbor for instant victory due to the fame and wealth involved. If you don’t have a starship engineer with you on board, you’ll never learn how to operate the ship, and will starve to death unless you can enter a stasis unit (if you do, see R240).</p>',
    },
    {
        tag: 'e083',
        title: 'Alien Weapon',
        time: 'takes 1 hour',
        desc: '<p>Designate one person to try to operate the alien weapon, and roll 1d6:</p><p>1: item turns out to be an alien musical instrument, not a weapon, which you can sell in any scientific area for 30 S base price (R229A)</p><p>2: item turns out not to be an alien artifact, but a modern sculpture produced at a local art school</p><p>3: item turns out not to be an alien artifact, but a prop from a science fiction holo-movie (albeit a very realistic one!)</p><p>4: it explodes, destroying itself and inflicts 2d6 hits on the person who tried it</p><p>5: it is an alien weapon, a pigment disruptor, fires like a tech 6 sidearm, and any hit turns the victim’s skin color to green or purple and disables by causing blindness that can only be cured at a Medical Center (R231), but no other damage - it has no effect on vehicles, if it ever breaks down (R218) it cannot be fixed</p><p>6: the alien weapon immediately attunes itself to the brain of the person trying it; the user need merely think of a target in sight, and the weapon will hit that target automatically (one hit only), for break-down purposes consider it a tech 4 weapon (R218), if a break-down occurs roll 1d6, on a 5-6 the user becomes insane and the weapon useless, on a 1-4 it can be repaired normally and the user is unaffected.</p>',
    },
    {
        tag: 'e084',
        title: 'Building Collapses',
        time: 'takes 1 hour',
        desc: '<p>As you move through the ruins, an old building collapses on you, unless you successfully make a Cunning roll (R202) to avoid it. If you are caught in a collapse and in a vehicle, the vehicle suffers one hit and is immobilized. It will take two people the rest of today or one person through the end of tomorrow to clear it from the rubble, including repairs if anyone in the party is capable of it (R219). If caught in a collapse on foot, each person in the party suffers 1d6 hits. However, the hits are received one by one, slowly, and thus utility suits will self-seal after each (although the wearer still loses the endurance!) (R231).</p>',
    },
    {
        tag: 'e085',
        title: 'Attack by Mutants',
        time: 'takes 1 hour',
        desc: '<p>A group of 1d6+10 mutants charge out to attack your party, starting at dispersed range. See R327 and subtract one (-1) from your dice roll there. The leader has E12, M3, H4 and a tech 2 heavy hand weapon, the others are unarmed and are each E9, M0, H3.</p>',
    },
    {
        tag: 'e086',
        title: 'Unguarded Office on Military Base',
        time: 'takes 1 hour',
        desc: '<p>You can slip into an office unseen and search it. If you do so, take 1 more hour and roll 1d6:</p><p>1: you find nothing of value</p><p>2: you find two sidearms and one heavy hand weapon (see R210 for tech level, but add one when rolling to determine result on table R235)</p><p>3: you are surprised by an overwhelming force of military police who arrest you and your party unless you succeed with a Cunning roll (R202), if arrested they take all your possessions and imprison you for 20 days, after which you may attempt to leave once at the start of each 10-day week with a 1d6 result of 4-6, when you leave they will not return what was confiscated, and imprisoned hirelings will leave unless immediately paid any back-salaries due</p><p>4: you find secret defense plans for the base, which you can sell for a base price of 500 S at a military area in another star system (or a base price of 5,000 S if the other star system is at war with this one)</p><p>5: alarms go off! immediately roll for an entry encounter (R225A) for a military land area, including the standard subtracting one (-1) from the die roll on the table (R239)</p><p>6: two guards, each E8, M6, H4 with heavy hand weapons (see R210 for tech level) challenge you, see R323 unless on Imperia or Talitar, then see R319 (20 S).</p>',
    },
    {
        tag: 'e087',
        title: 'Prisoner Pleads for Escape',
        time: 'takes 1 hour',
        desc: '<p>If you are with one or more people as a party, ignore this event. If you are alone, a prisoner approaches the bars and wall to address you. He says that if you get him out and take him to any Rural, Rough, or Slum area on Byzantium or Imperia he can pay you 8,000 S. He is telling the truth on a result of 1-5 with a 1d6 roll. You can determine that now if you make a successful Cunning roll (R202), otherwise you don’t find out the truth until you deliver him. If he is lying, you’ll get nothing for your pains.</p><p>To get him out takes the rest of the day, and requires that you disable or kill a guard with E7, M 1d6, H5 with a sidearm (see R210 for tech level). See R301 for the attack. You then escape, and will leave this area and enter another as part of the activity (with an appropriate entry encounter). The former prisoner is “wanted” in this star system, and is E 1d6, M 1d6, H 1d6+1 (maximum of 6). He is a willing member of your party until you next reach Byzantium or Imperia.</p>',
    },
    {
        tag: 'e088',
        title: 'Intact Room in Ruins',
        time: 'Rest of day',
        desc: '<p>You find a building with an intact, sealed room. You may examine it if you wish. If you do, roll 1d6:</p><p>1: a foul-smelling cloud bursts out as the room is opened, all those not in utility suits are exposed to plague, see E004</p><p>2: the room contains a large antique bed of great value, it can be sold at any Palace for a base price (R229A) of 1,100 S, or any City for a base price of 200 S, it occupies 9 CU</p><p>3: you find a set of old religious texts that may be sold at any Colony on New Karma, texts occupy 1 CU, at time of sale roll 1d6 to determine base price: 1-20 S, 2-85 S, 3-175 S, 4-600 S, 5-12,000 S, 6-58,000 S</p><p>4: you have blundered into a trap, see E059</p><p>5: you are suddenly bombarded with radiation that causes 1d6 hits to each person in the room, if wearing a utility suit, secondary radiation causes double the normal number of hits received</p><p>6: you find a cache of coins worth 30 S</p>',
    },
    {
        tag: 'e089',
        title: 'Friendly Psionicist',
        time: '2 hours',
        desc: '<p>You meet an intriguing woman who is an accomplished psionicist looking for adventure. She is bored with life here, and isn’t interested in the military, since she abhors battle. She says she will join your party on her terms, and you must agree before you hear the terms. If you succeed in a Cunning roll (R202) you can guess her terms from conversation and consult the paragraph below before deciding, otherwise you must decide first, then roll 1d6 below. If you cannot meet the terms she specifies, or later welch on the deal, she will make a deadly psionic attack on you and escape, resulting in your Cunning (R202) being reduced by 1d6 (if your Cunning falls below zero, consider it zero instead). Her terms are:</p><p>1: she works for free, but will neither fire weapons nor fight hand-to-hand</p><p>2: she works for 5 S per day, but will neither fire weapons nor fight hand-to-hand</p><p>3: she works for free, but must be in a stasis unit (R212E) with paid-up insurance (R220), and will neither fire weapons nor fight hand-to-hand</p><p>4: she works for 3 S per day and will do anything you require</p><p>5: if you give her a skimmer now, she will work for up to 40 days on this planet, but will neither fire weapons nor fight hand-to-hand, if you leave the planet she will remain behind, but will remain available to work whenever you return during the 40 day period</p><p>6: she will work and do whatever you request if you give her the single most valuable item in your cargo (hidden or not)</p><p>Psionicist’s Abilities: E 1d6+2 (maximum of 7), M 1d6-3 (minimum of 0), H 1d6-1, qualified skimmer driver, psionic power of 1d6+2 (see E022 for use of the psionic power in combat). Her presence in your party will add one (+1) to the Cunning when dealing with anyone except her, and she will use her power to make psionic attacks, although she will only do so if your party is attacked first if her employment terms include no weapons use or fighting.</p>',
    },
    {
        tag: 'e090',
        title: 'Seen But Ignored',
        time: 'takes no time',
        desc: '<p>A rather dilapidated starship with Regari markings passes you, but makes no attempt at communication. You may proceed as desired (one hour to go to any planet or asteroid orbit in the system).</p>',
    },
    {
        tag: 'e091',
        title: 'Detect Broken-down Starship',
        time: 'takes no time',
        desc: '<p>You detect a Regari starship which appears to be under repair, with men working on its hull. It also seems incapable of detecting you — you may proceed as desired.</p>',
    },
    {
        tag: 'e092',
        title: 'Passed After Radio Contact',
        time: 'takes no time',
        desc: '<p>As you enter the system, cursory radio contact is made from a patrol starship. After a brief conversation, you are passed without incident, and may proceed as desired.</p>',
    },
    {
        tag: 'e093',
        title: 'No Ships & No Contact',
        time: 'takes no time',
        desc: '<p>The system might as well be deserted. You detect no nearby starships and there are no attempts to communicate with you. You may proceed.</p>',
    },
    {
        tag: 'e094',
        title: 'Minefield',
        time: 'takes no time',
        desc: '<p>You are at the edge of one of the dreaded Nipnan fields of space mines. You have four options:</p><p>Immediately hyperjump to another star system (R212A);</p><p>Shoot the mines with your starship guns to clear a path, see E098;</p><p>Try to cautiously proceed through the mines by sublight drive, see E078;</p><p>Stay in place and radio the Nipnans for help, see E024.</p>',
    },
    {
        tag: 'e095',
        title: 'Starship Attacks',
        time: 'takes 1 hour/round',
        desc: '<p>You are immediately attacked by a starship with Mynkurian markings, see R230L. Before you can do anything (not even engage ECM or defense screens) they fire. After that, you can hyperjump to another system (R212A), stand and fight, or use sublight drive to run away (results in a running battle, see R230L). The Mynkurian ship will ignore all communication, and continue to fight until you escape or destroy it. Mynkurian Ship: it is a patrol escort, consult R210 for tech level of ship (applies to all its equipment, such as starship guns, as well). It has one turret of starship guns, 10 hit points, and neither ECM nor defensive screens.</p>',
    },
    {
        tag: 'e096',
        title: 'Undetected',
        time: 'takes no time',
        desc: '<p>You are not detected by any ships in the system, and may proceed to the destination of your choice.</p>',
    },
    {
        tag: 'e097',
        title: 'Communications Signal',
        time: 'time varies',
        desc: '<p>You receive a signal to wait for escort and proceed then to a Palatek Space Station (or orbit, if no station) at the planet of your destination for an inspection. If you ignore this signal, or have an inoperative communications system, no time passes, but see E108 immediately. If you receive the signal, you can hyperjump instantly to another system (R212A). If you receive the signal and acknowledge it, you wait 1d6 hours for two Palatek patrol frigates to approach, take another 4 hrs to escort you to the space station (or orbit), and there an inspection team boards, see E021.</p>',
    },
    {
        tag: 'e098',
        title: 'Robot Wardrone',
        time: 'time varies',
        desc: '<p>A Nipnan robot wardrone is approaching very quickly! You can try to immediately hyperjump to another system (R212A), attack the drone — see E079, or try to flee from the drone — see E132.</p>',
    },
    {
        tag: 'e099',
        title: 'Ship’s Boat Approaches',
        time: 'takes 1 hour',
        desc: '<p>You are approached by a ship’s boat with strange markings. It appears unarmed, and does not respond to communication attempts. If you decide to attack it, see E161. You can leave the vicinity either by sublight drive or hyperdrive, leaving the boat behind (it is too slow to pursue). You can wait for it to approach more closely, if so see E169. If you have a psionicist on board, you may attempt psionic contact, see E177.</p>',
    },
    {
        tag: 'e100',
        title: 'Distress Call',
        time: 'takes no time',
        desc: '<p>You receive a distress call from a starship in trouble. You may ignore it, and must if your communications are inoperative — see E109. You may move toward it, spending one hour travelling by sublight drive — see E182.</p>',
    },
    {
        tag: 'e101',
        title: 'Mental Probes',
        time: 'takes no time',
        desc: '<p>You feel low-level mental probes. If you have a psionicist on board, you may have mental shields set up — see E186. Otherwise, you may either hyperjump away immediately to another system (R212A) or proceed as you first intended — see E164.</p>',
    },
    {
        tag: 'e102',
        title: 'One Ship Approaches',
        time: 'takes no time',
        desc: '<p>An all-black warship is nearby and approaching you. You can either hyperjump to another system (R212A), try to establish contact - see E173, attack it — see E189, or try to flee — see E144.</p>',
    },
    {
        tag: 'e103',
        title: 'Debris and Stasis Unit',
        time: 'takes 1 hour',
        desc: `
            <p>You see debris scattered in space and an activated stasis unit of 4 CU size. If you take the unit, when (and if) you deactivate it, roll 1d6 and refer to the appropriate event:</p>
            <p>1. E400</p>
            <p>2. E405</p>
            <p>3. E410</p>
            <p>4. E415</p>
            <p>5. E420</p>
            <p>6. E425</p>`,
    },
    {
        tag: 'e104',
        title: 'Not Detected',
        time: 'takes no time',
        desc: '<p>You are not detected upon arrival, and may travel to the asteroid belt (if present) or planet of your choice in the system.</p>',
    },
    {
        tag: 'e105',
        title: 'Merchant Ship',
        time: 'takes no time',
        desc: '<p>Nearby is a merchant ship with 12 hit points, one turret of starship guns of tech 2. You may ignore it, or attack it. If you attack, see E179.</p>',
    },
    {
        tag: 'e106',
        title: 'Distress Call',
        time: 'takes no time',
        desc: '<p>You receive a distress call from a starship in trouble. You may ignore it, and must if your communications are inoperative — see E109. You may move toward it, spending one hour in sublight drive — see E193.</p>',
    },
    {
        tag: 'e107',
        title: 'One-Man Ships Rushing Towards You',
        time: 'takes no time',
        desc: '<p>You see 1d6+1 one-man Mynkurian ships rushing in your direction. You may immediately hyperjump to another system (R212A), wait a few minutes to see what happens — see E165, or attack them — see E195. You cannot flee, since they are approaching from all sides.</p>',
    },
    {
        tag: 'e108',
        title: 'Two Ships Approach',
        time: 'takes no time',
        desc: '<p>You are approached by two ships with Palatek markings. You may either hyperjump to another system (R212A), wait a few minutes and allow them to board you — see E197, or attack them (R230L). If you attack, and later surrender, then see E197.</p><p>Palatek Frigates Ship Data: each ship has 10 hit points and one gun turret with tech 4 starship guns. Roll 1d6:</p><p>1-4 no effect</p><p>5 both ships have defensive screens</p><p>6 both ships have defensive screens and ECM</p>',
    },
    {
        tag: 'e109',
        title: 'Roundabout Approach',
        time: 'takes 1d6 hours',
        desc: '<p>You find a roundabout approach route that lets you steer clear of any other ships, patrols, etc. but it will take 1d6 extra hours. You may use it to reach the outermost planet (or asteroid belt, if there is one) by spending that much extra time (normal trip is 4 hours, this will be 1d6 hours longer). If you wish to avoid the extra time, roll again for another System Entry event.</p>',
    },
    {
        tag: 'e110',
        title: 'Battle in Progress',
        time: 'takes no time',
        desc: '<p>You see a fierce space battle in progress. You may either immediately hyperjump to another system (R212A), approach the battle — see E174, or try to sneak away — see E096.</p>',
    },
    {
        tag: 'e111',
        title: 'Mental Attack',
        time: 'takes no time',
        desc: '<p>You are suddenly under a strong mental attack, that immobilizes your arms and legs, so you cannot do anything! You have taken one hit of damage. You may speak to your crew or passengers, they are unaffected. If there are none on board, you are immobilized forever and die of starvation. If you can hail your crew or passengers, select one of the options below:</p><p>If you have a psionicist on board to put up a mental shield see E401.</p><p>If you have a gunner he can man the guns and look for a target, see E411.</p><p>If you have a pilot/navigator on board, he can take the controls while you receive another 1d6 hits. Once you are in motion you are freed and can continue normally.</p><p>Anyone on board can energize the stasis unit (R212E) around the pilot compartment, see E421. Note: if you are not at the controls when this event occurs, it will apply to the pilot/navigator at the controls instead. You may then act as the relief pilot/navigator to take over (see above).</p>',
    },
    {
        tag: 'e112',
        title: 'Fired Upon by Defense System',
        time: 'takes no time',
        desc: '<p>You are near 1d6 Nipnan gun buoys — robot controlled automatic defensive systems. Each buoy fires upon you, and if your guns are manned you can shoot back at one (R230L). You may then either hyperjump (R212A), stand and try to disable or destroy the buoys, or try to escape the buoys with sublight drive. If you try to escape, roll 1d6:</p><p>1-4 you escape and may proceed normally</p><p>5-6 one hour passes and you are in range of 1d6 new buoys that again fire first on you, then you exercise the same options as before.</p><p>Nipnan Gun Buoy: each buoy is equivalent to a tech 6 starship without drives, and each has one tech 6 starship gun. A Buoy is destroyed by 2 hits. Any critical hit will disable it without destroying it, which allows you to examine it after any battle is over. If you do examine it (utility suits are needed) see E402.</p>',
    },
    {
        tag: 'e113',
        title: 'Microasteroid Punctures Hull',
        time: 'takes 1 hour',
        desc: '<p>A high-velocity micro-asteroid punctures your hull and causes explosive decompression in a compartment. One hit of damage (R217) is recorded, and anything living there that lacks a utility suit or stasis unit protection is killed, as well as any cargo that is damaged by vacuum or lack of life support. After this accident, you spend the rest of the hour patching the hole to repressurize, but the hit itself requires normal repair procedures (R219). Roll 2d6 to see which compartment is hit:</p><p>2-3 Pilot Compartment</p><p>4-5 Engineering Compartment</p><p>6-7 Main Cargo Hold</p><p>8-9 Boat Hold (and Ship’s Boat, if present)</p><p>10-11 Crew Quarters</p><p>12 Gun Turret</p>',
    },
    {
        tag: 'e114',
        title: 'Large Starship Orders You to Stop',
        time: 'takes no time',
        desc: '<p>An impressively large Imperian warship, bristling with guns, orders you to stop, take aboard an Imperian pilot to direct your planetary approach and to receive required visas and entry permits. Your options are:</p><p>To immediately hyperjump to another system (R212A);</p><p>To attack or flee the battleship, space combat (R230L) will result, see E081 for details;</p><p>To acknowledge and let the boarding party come aboard, see E403.</p>',
    },
    {
        tag: 'e115',
        title: 'Crewman with Weapon Drawn',
        time: 'takes 1 hour',
        desc: '<p>If you have any hireling (including crew) hired in a Slum area, you find the best marksman among them (if more than one) standing behind your pilot’s seat with his best weapon. He says “slowly raise your hands, leave the controls and come with me.” If you try to fight, you will be “surprised” in the ensuing combat (R230I), including any non-slum bodyguard with you in the compartment. Range at start is contact for the one behind you, dispersed for all others. Non-slum crew members will fight for you from dispersed range (after the surprise) with any personal weapons, but only if they normally fight. You can try to energize the stasis unit in your chair, see E404. You can agree to go with him, see E412.</p>',
    },
    {
        tag: 'e116',
        title: 'Derelict Ship',
        time: 'takes no time',
        desc: '<p>You see a starship of unusual design, apparently without power. You may proceed on your way — see E104. Alternately, you may close with the ship and attempt to board it. If you do, this takes one hour, and you should specify who is going and what their equipment will be (must include a utility suit to pass through the vacuum for boarding). When you board, roll 1d6 for result:</p><p>1-2 E082</p><p>3 E408</p><p>4 E426</p><p>5-6 E430</p>',
    },
    {
        tag: 'e117',
        title: 'Communications Failure',
        time: 'takes 1 hour',
        desc: '<p>Your starship communications gear and all other radio equipment on board (including ship’s boat, PS robots, etc.) has malfunctioned, apparently due to tachyonic degradation of semiconductors. No other equipment is affected. You can proceed as desired, and repair communications gear now or later, as desired. Repair requires a starship engineer for the ship communications and ship’s boat radios, a qualified repairman can fix the rest. Each item requires one full day of RRR (R203C) and one repair unit (R211). The damage is very esoteric — none of the repair units currently on board can be used.</p>',
    },
    {
        tag: 'e118',
        title: 'Military Scout Nearby',
        time: 'takes no time',
        desc: '<p>A small military scout ship with Talitar insignia is nearby. They seem to be waiting for you to do something. You can tell the ship has one standard turret of starship guns, plus a nose cannon of unknown and unfamiliar design. You can either:</p><p>(a) hyperjump to another system (R212A);</p><p>(b) try to escape using your sublight drive — see E413;</p><p>(c) attack the scout — see E422;</p><p>(d) offer them a bribe to let you pass — write down amount and see E406;</p><p>(e) sit and patiently wait for them to do something first — see E428.</p>',
    },
    {
        tag: 'e119',
        title: 'Something on Hull',
        time: 'takes 1 hour',
        desc: '<p>You hear a loud “clunk” reverberating through your ship. A scan of the hull reveals an unusual metal object attached, about the size of a small skimmer. Roll 1d6 to see where it is attached:</p><p>1 on airlock</p><p>2 on boat hold hanger door</p><p>3 on main cargo hold hatch door</p><p>4 on top of gun turret</p><p>5 in front of the pilot’s compartment</p><p>6 in the vicinity of the hypercharge storage area</p><p>You can either:</p><p>(a) energize sublight drive and proceed on your way, ignoring it — see E418;</p><p>(b) hyperjump again (R212A) to a new system and ignore it — see E423;</p><p>(c) send a starship engineer from your crew to examine it — see E414;</p><p>(d) send a non-engineer from your crew (or yourself) to examine it — see E429;</p><p>(e) send a non-engineer from your crew (or yourself) to shoot it — see E407.</p><p>You cannot exit the ship via a hatch or door on which the object is attached, and thus must use another route. Opening the cargo hatch or boat hold hanger will expose that compartment to vacuum, but you can take 1 hour to rearrange cargo, passengers, etc., to avoid adverse effects of this.</p>',
    },
    {
        tag: 'e120',
        title: 'Debris in Space',
        time: 'takes 1 hour',
        desc: '<p>You see debris in the vicinity, apparently from a destroyed ship of some sort, and spend an hour scanning it carefully. However, you find nothing of interest or value, and may proceed normally.</p>',
    },
    {
        tag: 'e121',
        title: 'Starship Nearby Ignores You',
        time: 'takes 1 hour',
        desc: '<p>Your scanners pick up a larger starship nearby that seems motionless but currently with power. It is an unconventional design, with a non-metallic hull that emits infrared radiation. It is apparently ignoring you. You can either go on your way and end this event; or you can take one more hour to approach within boarding range and try to board. Note who is in the boarding party, equipment carried (utility suits are required), then roll 1d6 and go to the appropriate event:</p><p>1-2 E408</p><p>3 E416</p><p>4-5 E426</p><p>6 E430</p>',
    },
    {
        tag: 'e122',
        title: 'Prospective Crewman',
        time: 'takes 1 hour',
        desc: '<p>You meet an impoverished person who is anxious to leave the system. He will join your crew free if you take him permanently off planet. He will be “wanted” in this system if you ever return here. Roll 1d6:</p><p>1 Pilot/Navigator (R221A) with E7, M2, H1</p><p>2 Starship Engineer (R221B) with E4, M0, H2 and a qualified skimmer driver</p><p>3 Starship Gunner (R221C) with E6, M3, H3</p><p>4 Ship’s Steward and skimmer driver (R221E) with E8, M0, H1 who is an excellent cook and very knowledgeable about wine and spirits</p><p>5 Robot Repairman who can repair any type of robot (R219) of tech level 4 or less, and who also will act as bodyguard (R221D) although he cannot use ranged weapons, being E6, M0, H4</p><p>6 retired merchant supply officer who can drive a skimmer (R221E) and has experience in jury-rigged equipment, making deals and trades, etc. His presence in your party will add one (+1) to your Cunning, and his presence with equipment during a day reduces its tech level by one (-1) for break-down purposes only (R218).</p>',
    },
    {
        tag: 'e123',
        title: 'Guns to Talitar',
        time: 'takes rest of day',
        desc: '<p>Two men ask you to take them and a cargo of guns to the underground movement on Talitar. If you deliver the men and 50 CU of cargo (heavy hand weapons - tech 4, in 25 2-CU cases) to any area on Talitar undetected they will pay you 600 S now and another 6,000 S at the time of safe delivery. Each man is E8, M5, H3 and has his own utility suit and heavy hand weapons of Tech 4. If you take this offer, the men are “wanted” and the weapons are considered contraband on Talitar, Palatek, Byzantium, and Imperia. Anywhere else the guns are contraband only if so indicated by events. The men will fight alongside you whenever you request in the above systems, or whenever they or the cargo are threatened. However, they will not voluntarily leave the ship until you arrive at Talitar. If they are safely delivered but detected on the way, they only pay you 3,000 S instead of the original 6,000 S; for each man killed or crate of cargo lost they will deduct 500 S.</p>',
    },
    {
        tag: 'e124',
        title: 'Corrosive Fumes',
        time: 'takes 1 hour',
        desc: '<p>Vents from old mine wastes are nearby — you have entered an area of corrosive fumes and bad air. Make an immediate breakdown roll (R218) for each metallic item with you, including vehicle, robots, and weaponry. Items purchased on Cubro and utility suits are immune, as well as packed cargo. Each person in the area automatically suffers one hit instantly. In addition, any person without access to life support will receive one hit per hour (R231) for the rest of this day. At the end of the day the fumes disperse, if you haven’t yet departed from the area.</p>',
    },
    {
        tag: 'e125',
        title: 'Alien Intruder on Starship',
        time: 'takes 1 hour',
        desc: '<p>You become aware of a glowing, tentacled alien being in the crew’s quarters of your starship. It is apparently either eating your mattresses or making a nest — pieces of mattress are flying everywhere! You may either:</p><p>(a) enter the crew quarters and attack it - see E162,</p><p>(b) try to establish friendly contact by making gestures that it is welcome to the mattresses — see E171.</p><p>In either case, designate exactly who enters, and with what. If you try to be friendly, just one individual will attempt this.</p>',
    },
    {
        tag: 'e126',
        title: 'Debugging Team',
        time: 'takes rest of day',
        desc: '<p>A professional debugging team will remove all bugs and surveillance devices from your vehicles and equipment for a base price (R229A) of 300 S.</p>',
    },
    {
        tag: 'e127',
        title: 'Foreign Program Seizes Computer',
        time: 'takes no time',
        desc: '<p>A program of unknown origin has gained access to your starship’s computer, perhaps through a teleprocessing port or attached memory device. If you are on board and succeed with a Cunning roll (R202) you act instantly to shut down the computer. This will prevent hyperjump and use of starship guns until a base price (R229A) of 120 S is paid at any spaceport, space station or scientific area is paid to replace the computer software.</p><p>If you are not on board when the program takes control, your starship is lost to you, with all on board. If you are on board, but fail your Cunning roll, the starship immediately hyperjumps to Imperia, or as close as possible with the hypercharges there on board. At system entry after this jump, the program causes the starship guns to immediately open fire (R230L) at any ship(s) present, and to continue firing until all ships present or your ship is destroyed. At this point the program erases and the computer becomes useless until new software is purchased (see above).</p>',
    },
    {
        tag: 'e128',
        title: 'Social Error',
        time: 'takes 1d6 hours',
        desc: '<p>You have unwittingly offended the Uruskopians, by violating some aspect of their social code. An enraged mob suddenly flocks about you (or your vehicle), preventing any further progress. If you and your party abandon everything you have, including robots, vehicles, etc., but excluding utility suits and sidearms (which you can keep), you escape without harm. If you do not abandon items and flee, as indicated above, each member of your party is in contact and combat by 1d6 people of the mob. Each person in the mob is E5, M0, H2 and unarmed. You must fight your way out, see R230. When at least half the mob persons originally in contact are killed or disabled, the remainder flee, the battle ends. The battle will not end until this occurs, or you and your party are dead — normal escape is impossible.</p>',
    },
    {
        tag: 'e129',
        title: 'Hit by Speeder',
        time: 'takes 1 hour',
        desc: '<p>If you are in a vehicle, you have a collision with another vehicle of the same type (skimmer takes 1 hit damage, ship’s boat or starship takes 1d6 hits of damage, see R217). If you and your party are on foot, a careening skimmer runs into you, each person in the party must roll 1d6. A 5 or 6 result means that person is hit, and suffers 2d6 hits of damage. If you are “hit” you can dodge with a successful Cunning roll (R202) and avoid damage.</p>',
    },
    {
        tag: 'e130',
        title: 'Arrested as Spy',
        time: 'takes 1 hour',
        desc: '<p>You are arrested as a spy. You may go willingly — see E023, may try to bribe them with base price (R229A) of 250 S - see R321, or try to escape — see R327.</p>',
    },
    {
        tag: 'e131',
        title: 'Palace Contact',
        time: 'takes rest of day',
        desc: '<p>You make contact with a servant of the palace, and can pay for information. Roll 1d6 to determine exact sum you need to pay:</p><p>1: 25 S</p><p>2: 50 S</p><p>3: 100 S</p><p>4: 400 S</p><p>5: 1,000 S</p><p>6: 3,000 S</p><p>If you pay this amount, then roll 1d6 and add it to the first (payment level) roll and consult results below:</p><p>2-3: Servant will purchase any liquor from you at double the price you paid for it.</p><p>4: Servant will sell you palace wine at 50 S per 1-CU case, which you can resell in any Gambling area for 80 S per case.</p><p>5-6: Servant will let you steal two artworks, each 1 CU size, which can be sold in any city off this planet for a base price (R229A) of 200 S each.</p><p>7: Servant takes your money and turns you in to the palace guards! see E160.</p><p>8: Servant is a secret police agent, floods the room with sleep-gas, you wake up in jail — see E023.</p><p>9: You are conducted to the chamber of a royal princess (or prince, if you prefer) for a night of unimaginable bliss. Roll 1d6 tomorrow morning for results:</p><p>1-2: Unsatisfactory performance, the guards are called, see E160.</p><p>3-5: Pleasing performance, you are given 1,000 S gift.</p><p>6: She falls in love with you, wants to leave for a life of adventure, although she is E3, M0, H1 and penniless! Her family will pay you 50,000 S for her safe return to the palace within five weeks (50 days); otherwise, you become “wanted” (R228) in the system.</p><p>10: You may steal a collection of rare books from the palace, 18 CU in size, and worth 6,500 S base price (R229A) at any other palace.</p><p>11: You may steal the pet starfleeter of the King — a starfleeter is an alien lifeform with a psionic power of 20 that immediately attacks all persons in your party, evenly distributing its strength to each (see E022). Each following day it makes another such attack, until it is exposed to vacuum, which causes suspended animation for one week. After this, roll 1d6:</p><p>1-5: It revives.</p><p>6: It dies. A starfleeter is worth 5,000 S base price (R229A) anywhere in the New Karma system.</p><p>12: You may attempt to steal the crown jewels tonight; determine the makeup of your party, then consult E059. If you survive that, you take the jewels; they can be sold to any gem dealer for a base price (R229A) of 60,000 S and occupy 2 CU of space. Any customs agent or inspector will recognize them instantly if found, and at that point (and only then) you will become “wanted” in this system.</p>',
    },
    {
        tag: 'e132',
        title: 'Wait or Flee Wardrone',
        time: '1 hour/round',
        desc: '<p>Without hesitation, the Nipnan drone speeds towards your ship, trying to strike it. Roll as if being attacked by tech 6 starship guns (R230L). If the drone hits, it detonates and causes 1d6+1 hits of damage. If the drone misses, you can reply that round by either:</p><p>Making a hyperjump (R212A)</p><p>Opening fire — see E079</p><p>Trying to escape (R230L)</p><p>If you try to escape, in addition to firing if you wish (and have both pilot and gunner), if you fail to escape for two hours in a row, during the third hour the drone’s engine runs down, preventing it from making a further attack. It will detonate (no damage to you) on a 1d6 roll of 1-4. On a roll of 5-6, you can recover it and sell it on Mynkuria at any military area for exactly 3,000 S. You cannot repair or use the drone yourself.</p>',
    },
    {
        tag: 'e133',
        title: 'Mynkurian Death Squad',
        time: 'takes 1 hour',
        desc: '<p>You are “recognized” as a Nipnan agent by a Mynkurian death squad. They instantly launch a suicide attack against you (R327). They will fight to the death, regardless of odds or tactical situation. Mynkurian Death Squad Troops:</p><p>Two “miners,” each E3, M0, H4, rigged with high explosives — if they contact any vehicle or robot (or failing that, any person), they blow themselves up (see R230E and R230K for explosive hits)</p><p>Two “gold slayers,” E5, M0, H6, who attempt to contact any officer or leader (including yourself) and hit hand-to-hand with poison-tipped spikes that cause one wound and immediate disablement. Furthermore, unless immediately treated with first aid (R231) after each later round of combat, roll 1d6:</p><p>1-4: The victim suffers another hit from poison</p><p>5-6: The poison has no more potency, and there is no further effect</p><p>Finally, the squad has two “spitters,” each E4, M4, H2, armed with heavy hand weapons (see R210 for tech level), who fire at anyone holding a weapon (if none, any opponent).</p>',
    },
    {
        tag: 'e134',
        title: 'Talitarian Troopers',
        time: 'takes 1 hour',
        desc: '<p>You have met a patrol of troopers. If you wish to fight at once, refer to R327 and subtract one from the dice roll there. Instead, you can listen to their demand. They order you to put down all your weapons, leave your vehicle (if you have one), and show your papers. If you refuse this, refer to R327 and subtract two from your dice roll there. If you obey, any without proper papers are arrested (E023). Alternatively, although they seem a nasty bunch, you can try to bribe them for 50 S. If you do, roll 1d6:</p><p>1-3: They accept the bribe</p><p>4-6: They refuse and a battle ensues, refer to R327 and subtract two from the dice roll there</p><p>Talitarian Patrol: composed of eight (8) men, each is E6, M4, H4 armed with heavy hand weapons (see R210 for tech level).</p>',
    },
    {
        tag: 'e135',
        title: 'Hostile Life Force',
        time: 'no time',
        desc: '<p>You encounter a hostile life force — a greenish glowing cylinder of energy. Your vehicles and robots (if any) immediately break down (R219). The life force has Endurance 5, and appears to be trying to contact and engulf individuals, to destroy them. You may:</p><p>Fire weapons at it — see E163</p><p>Attack it hand-to-hand — see E170</p><p>Abandon your vehicle and flee — see E176</p><p>Feed it life support units (decide how many now) — see E194</p><p>Stand and let it engulf you — see E187</p>',
    },
    {
        tag: 'e136',
        title: 'Imperial Guards',
        time: 'no time',
        desc: '<p>You meet a troop of 1d6+4 Imperial Guardsmen, with gleaming weapons and lavish uniforms. Each is E5, M2, H2. You may wait to see what they do — see R322, or attack them instantly — see E166.</p>',
    },
    {
        tag: 'e137',
        title: 'Sabotage/Theft',
        time: 'takes 1 hour',
        desc: '<p>When you return to the vehicle you used last, you find it has been broken into, with only minor damage (no actual hits). However, every Repair Unit, Fuel Unit, and Life Support Unit is missing. There is no indication as to who did this.</p>',
    },
    {
        tag: 'e138',
        title: 'Arrested as Spy',
        time: 'no time',
        desc: '<p>You are suddenly surrounded by two Mynkurian Death Squads (a total of twelve fanatical-looking men), who announce your arrest on suspicion of being a Nipnan spy. You may go with them — see E183, or fight them — see E133 but double the number of opponents since there are two squads, referring to R327 for the actual combat situation.</p>',
    },
    {
        tag: 'e139',
        title: 'You are Bugged',
        time: 'takes 1 hour',
        desc: '<p>Your vehicle(s) and equipment have bugs and surveillance devices on them. Hereafter, you will always be detected on entry to a new area on this planet (R225). You cannot remove the bugs yourself, professionals are needed. The bugs will not function on any other planet but will resume functioning if you return to this planet.</p>',
    },
    {
        tag: 'e140',
        title: 'Attack by “Zombies”',
        time: 'takes 1 hour',
        desc: '<p>Your party is rushed by persons that seem stumbling and awkward, with a lifeless appearance in their eyes. There are 1d6 times ten (x10) of them, each E10, M0, H1. If you are in a ship’s boat or starship they cannot hurt you, but inflict one hit of damage to your vehicle. If you are in any other vehicle, they overturn and wreck it on the first rush, and begin smashing it around you. Therefore, in all other cases, the first round of combat begins (R230) in the normal fashion.</p>',
    },
    {
        tag: 'e141',
        title: 'Talitarian Troopers (see reference)',
        time: 'no time',
        desc: '<p>You meet a trooper patrol. Their sergeant isn’t too bright, if you succeed with a Cunning roll (R202), you outsmart him. Whether you do or not, refer to E134. If you outsmarted him, add two (+2) to all dice rolls made in that paragraph, if you don’t, make dice rolls normally.</p>',
    },
    {
        tag: 'e142',
        title: 'Riot in the Streets',
        time: 'time varies',
        desc: '<p>You find yourself in the midst of a street riot. There are too many people to fight. Instead, each hour, starting with this, try a Cunning roll (R202). If you succeed, you escape. If not, each person in your party, each robot, and each vehicle takes one hit of damage (R217).</p>',
    },
    {
        tag: 'e143',
        title: 'Religious Cult',
        time: 'no time',
        desc: '<p>A group of 1d6+6 men in lavender robes approach you, chanting strangely, but apparently unarmed. Their leader asks you to make a contribution in 2d6 times ten (x10) S — that is, 20 S to 120 S for their church. If you make the contribution, roll 1d6:</p><p>1-4: They continue onward</p><p>5: They follow your party for the next five days preaching and trying to convince you to give them all your wealth and forget worldly affairs by joining their church</p><p>6: They stop to talk and pass on an interesting rumor, see R328</p><p>If you don’t make the contribution, roll 1d6:</p><p>1-2: They continue onward</p><p>3: They loudly curse you and your offspring but continue on</p><p>4: They begin pelting you with dog droppings from the street, but run off when you become hostile</p><p>5-6: They become very hostile, see E184</p>',
    },
    {
        tag: 'e144',
        title: 'Try to Flee',
        time: '1 hour/round',
        desc: '<p>The black ship immediately opens fire (R230L) with its tech 1 starship guns, but will not pursue. It will continue to fire until you escape, are destroyed, or destroy it.</p>',
    },
    {
        tag: 'e145',
        title: 'Bio-Plastics',
        time: 'takes 1 hour',
        desc: '<p>You are offered the opportunity to have a bio-plastic alloy installed in your starship for 20,000 S or ship’s boat for 4,000 S, and/or to buy a bio-plastic utility suit for 500 S. Installation on ship or boat requires that tomorrow be spent in RRR doing that only. All bio-plastics have self-repair ability. The ship or boat repairs itself (R219) one hit per day (even without RRR), while the utility suit will seal any type of wound, not just single hits. If you buy the bio-plastic, make a note to roll 1d6 ten days from now, and on a “6” consult E167.</p>',
    },
    {
        tag: 'e146',
        title: 'Anti-Robot Cult',
        time: 'time varies',
        desc: '<p>You encounter a cult dedicated to the destruction of robots. If your party has no robots, they pass peacefully. If you have robots, they will immediately attack them, and anyone in the way (R230), fighting to the death to destroy the robots. There is one leader of the cultists, E7, M3, H4 with a magnetic scrambler of tech 5 that does no harm to humans, but destroys a robot beyond repair if it hits one. There are ten additional cultists, each E4, M0, H4 who will wreck a robot with their hammers if they make any successful hit in hand-to-hand combat. The battle and aftermath will consume one hour of time.</p>',
    },
    {
        tag: 'e147',
        title: 'Attack by Beggars',
        time: 'takes 1 hour',
        desc: '<p>Your party is engulfed in a crowd of beggars, irate because you are obviously better off than they! Roll 2d6 and multiply by five (x5) for how much money, in Secs (S), you must throw at them to drive them away. If you don’t pay them, 1d6 times four (x4) will attack you, see R230. Each beggar is E2, M1, H2 with the ranged weapons being stones and other hard objects, tech level 1. Their objective is to steal, and a successful hit in hand-to-hand combat means they will carry off one item from that person and disappear, rather than actually inflict any injury. If there is nothing to carry, the beggar will inflict the hit instead (due to rage).</p>',
    },
    {
        tag: 'e148',
        title: 'Mindcrawler on Ship',
        time: '1 hour if you are present',
        desc: '<p>Wherever you are, your starship has been infiltrated by a mindcrawler. It chooses one person on board at random, and attempts to take over the person’s brain. It is an E20, M0, H0 creature with limitless psionic power that it uses to make a 2-point attack each round (see E022 for procedure). You can attack it using normal combat (R230) to kill it. Each time the mindcrawler makes a successful psionic attack, roll 1d6: if the result exceeds the current endurance of the target, that person is taken over and becomes a mindcrawler also. If not, normal damage from the attack is done instead. If a person becomes a mindcrawler, it too begins to attack one of the remaining persons on board. If you become a mindcrawler, you die and lose. When all mindcrawlers are dead, or the entire ship is taken over, the encounter ends and the mindcrawlers disappear (looking for prey elsewhere).</p>',
    },
    {
        tag: 'e149',
        title: 'Odd Machine',
        time: 'takes 1 hour',
        desc: '<p>You have found a 2 CU device of unknown function, carefully hidden away. You can examine it and attempt to use it, if you do, spend another hour and roll 2d6 for the result:</p><p>2 it explodes and inflicts 1d6 hits on each per person, and one hit on each vehicle and robot present (R217)</p><p>3 emits a high tone that shatters the teeth of all present, inflicting one hit — it can be later used as a weapon against others, but will inflict the one hit on anyone who hasn’t yet suffered the result, or who had the result heal</p><p>4 automatic pudding dispenser that will produce two LSUs (R213) per day, but breaks down permanently after dispensing ten units</p><p>5 document shredder that can be sold for 10 S at any military area</p><p>6 small animal repeller that turns away any animal of Endurance 3 or less, costs 1S per day to operate, worth 35 S if sold in a rural area</p><p>7 emits loud burbling sound but has no other effect unless you tried it on Uruskop, then refer to E128</p><p>8 causes an automatic breakdown (R218) on your nearest vehicle, then melts</p><p>9 a tech 5 ECM unit for your starship, that requires a full day of RRR, see R230L for effect</p><p>10 tech 4 starship defensive screen unit, takes a full day of RRR to install, see R230L for effect</p><p>11 trap-that goes off, see E059, if you survive roll again for what the trap protected</p><p>12 personal power armor of tech 6 in a suitcase; armor when powered-up is 1 CU and similar to utility suit, except it has integral life support that lasts for 2 days before it needs a 1 S recharge at a spaceport or space station, or a free recharge at your starship; in combat any one ranged weapon hit or two hand-to-hand hits each round can be ignored, and the tech level of all ranged weapons firing on it are reduced by one; if the armor breaks down, the wearer must get out of it to move (unless carried by others), and the powerless armor now is equivalent to 2 CU in weight and bulk.</p>',
    },
    {
        tag: 'e150',
        title: 'Space Mist',
        time: 'no time',
        desc: '<p>Your party is engulfed in a cloud of “space mist.” This causes a mild itching sensation, but no damage. Unfortunately, vehicles and utility suits provide no protection, except that starships with defensive screens are safe. Each hireling in your retinue (R220) requires a 1d6 roll, and on 1 or 2 will immediately quit your service, taking all their equipment with them. If in orbit, they will find a shuttle service of some sort anyway. You cannot prevent them from leaving except by combat (R230), if they are disabled they will leave anyway (when they recover), but leave any equipment behind.</p>',
    },
    {
        tag: 'e151',
        title: 'Respiratory Disease',
        time: 'no time',
        desc: '<p>You have spent too much time on Palatek, and contracted a respiratory disease. It causes the permanent loss of one of your Endurance points. For each additional day you spend on Palatek you suffer one extra hit, but no further permanent loss, even if you leave and later return. The disease is incurable, its effects cannot be prevented or the permanent loss restored.</p>',
    },
    {
        tag: 'e152',
        title: 'Time Machine',
        time: 'takes 1 hour',
        desc: '<p>You are approached by an elderly gentleman who claims to have invented a time machine, and needs a volunteer to test it. You may ignore him and end this encounter, or go with him to test it. If you go with him, you spend the rest of the day there. He puts you in a shiny metal globe packed with equipment, wishes you luck, and starts the machine, roll 1d6:</p><p>1-2 the device fails, you emerge coughing from the acrid smoke and leave, cursing to yourself</p><p>3-5 the device works, but is out of control, you are plunged hopelessly far into the past or future, unable to return, and eventually die — you lose the game</p><p>6 the machine works and you can control it; you are able to jump forward and back at will, giving you the ability to amass limitless wealth and avoid any problems with the authorities, you instantly win the game.</p>',
    },
    {
        tag: 'e153',
        title: 'High Technology Item',
        time: 'takes 1 hour',
        desc: `
            <p>You have the opportunity to buy one high-technology item. Roll 2d6 to determine which item is available. All items are tech 6, with the base price (R229A) given in brackets [ ].</p>
            <p>1. upgraded sublight drive for your starship. Escape is automatic from any ship of tech 5 or less, normal escape ability against tech 6 ships. Upgrading takes a full day of RRR to install at a spaceport or station [10,000 S]</p>
            <p>2. ECCM electronic counter-countermeasures unit of 3 CU size that negates the effect of any ECM unit [800 S]</p>
            <p>3. Regrowth Tank that allows rapid healing for one person (R231), with 1d6 hits healed per day if the person stays in the tank the entire day. The tank requires installation in the starship and takes 4 CU. If it breaks down the day it is in use, the person suffers 1d6 extra hits instead of healing that many [2,000 S]</p>
            <p>4. Shadow Suit that can be worn by anyone not in a utility suit. It will reduce the Detection Factor (R238) by one (-1) of the wearer if entering a land area on foot and alone (or with other shadow suit wearers only). Anyone shooting at a wearer has accuracy (R230D) reduced by two. Wearing a shadow suit costs 1 S per day for consumable items (IR filters, etc.) [200 S]</p>
            <p>5. Portable Life Support Unit that when collapsed is 4 CU in size with a 1 CU power plant. When the 4-CU unit is unfolded (takes 1 hour) it expands to hold 50 CU and provides life support (R213) for a month. The 1 CU power plant only runs for that month, after which a week of recharging at a starship power plant is needed [40 S per collapsible unit, 300 S per plant]</p>
            <p>6. Starship Defensive Screens composed of two separate 2 CU devices, one installed in the engine compartment, and one in some other compartment of the starship, and controlled from the pilot’s compartment. Effects of screens are described in R230L [500 S]</p><p>ECM electronic countermeasures unit 1 CU in size. It provides added protection for a starship (see R230L) if installed in the engine compartment [500 S]</p><p>Vacuum Skimmer that performs like an ordinary skimmer, but able to function in bad air or no air, as well as good air. However, it does not provide life support unless a special version with this feature is purchased. [100 S for standard version, 200 S for version with integral life support]</p><p>High Power Sidearm that is like a normal sidearm in size and use, (R215D) except it fires like a heavy hand weapon with explosive charges (R230E) [50 S]</p><p>Power Pack fusion plant that never requires recharging or any additional cost. The fusion power pack replaces a normal fuel unit; a pack for a skimmer is 1 CU in size [80 S], a pack for a ship’s boat is 10 CU in size and provides power equivalent to 10 fuel units per hour [2,000 S]</p><p>Personal Force Field that occupies 1 CU turned off, 2 CU activated, and surrounds the wearer when activated. When activated it prevents anyone from getting into contact (R230B) with the wearer, and protects the wearer from explosive weapon effects, but not from normal hit effects. If the personal force field is activated when a hyperjump occurs, or inside a stasis field, it immediately explodes and kills the wearer. The force field when activated can surround a person in a utility suit [800 S]</p>`,
    },
    {
        tag: 'e154',
        title: 'Volcanic Vents',
        time: 'no time',
        desc: '<p>You have entered an area with active volcanic vents. Roll immediately for break-down (R218) of the equipment listed below, and each additional hour you remain roll again. A roll of “5” or “6” automatically results in break-down, regardless of equipment tech level (in addition to normal results). Equipment involved is: utility suits, skimmers, commercial transport, and ship’s boat. In addition, each person without life support (after equipment breakdown is determined) must roll 1d6 per hour spent here, a “5” or “6” means one hit is suffered (R231).</p>',
    },

    {
        tag: 'e155',
        title: 'Secret Police',
        time: 'takes 1 hour',
        desc: '<p>The always efficient Byzantine secret police stop you for questioning. If you have committed any crime on Byzantium since you have been here, including bringing in contraband materials, buying or selling any stolen or illegal goods, entered any Palace or Military area (illegal to the unauthorized, such as you), or engaged in any bribery or theft, the secret police have discovered this already and arrest you. If you haven’t, they let you proceed.</p><p>If arrested, you can go peacefully, see E023. Alternately, you can resist arrest by fighting, see R230. There are twelve officers present, each E6, M3, H5, half with heavy hand weapons, half with sidearms (see R210 for tech).</p>',
    },
    {
        tag: 'e156',
        title: 'Clone Bank',
        time: 'takes 1 hour',
        desc: '<p>You are offered the services of a clone bank. If you accept, the procedure will take the rest of the day. In a clone bank, a mental scan recording of your mind and body are made for a base price (R229A) of 1,000 S, paid in advance. Unless a message is received within 40 days, the bank will assume you have died, and will activate the clone, which has all of your memories, abilities, etc. up to this date (including location of any caches, R229C). Normally you send a “do not activate” message every month to prevent this, paying 100 S if in another star system for a special message-jump relay. You can also visit the bank in this area in the future, and for 50 S update the memories of your clone.</p><p>The advantage of a clone is that you are protected from true death, in that should you die (and thus fail to send the “hold” message) the clone is activated. The clone thinks, acts, looks, and for all practical purposes IS you, although without your possessions or papers. If the original “you” is killed, you can immediately jump forward in time to the end of the next 40-day period and continue play in the persona of the clone, effectively “erasing” all knowledge, information, and events that occurred after the date of the last memory update.</p><p>Setting up special accounts and identities for your clone is often a good idea. If for some reason your clone is activated while you still live (due to failing to send the “hold” message), you can select whichever persona you prefer at that point, and forget the other. However, after each day you must roll a 2d6, and if “12” results, you meet your double and go into permanent catatonic shock, causing you to lose the game instantly (you and the clone become vegetables).</p>',
    },
    {
        tag: 'e157',
        title: 'Transport Fighters to Nipna',
        time: 'rest of day',
        desc: '<p>You are contacted by a Mynkurian Intelligence colonel, who proposes that you smuggle his men onto Nipna (any area). Secrecy is important, so you will not be paid unless you leave his men there and return here, directly, at which time you will receive 300 S for each man transported successfully. You can carry as many as you wish, up to the maximum capacity of your ship. Each man takes 2 CU of space with his equipment, and cannot survive in vacuum (does not have utility suit). If you encounter any difficulty on Nipna, including any search, examination or boarding of your ship, the men on board will instantly flee, and you will not be paid. Naturally, the Nipnan penalty for such smuggling is death (which, if you are imprisoned by the Nipnans, will occur 1d6 days after you land in jail).</p>',
    },
    {
        tag: 'e158',
        title: 'Gravity Surge',
        time: 'no time',
        desc: '<p>Scientific testing of an anti-gravity device on this planet has had a calamitous result! The gravity of the entire planet has been increased by half (round fractions down, so a gravity 7 planet would become a gravity 10.5, rounded down to 10). This has caused terrible destruction across the planet. All city, gambling, industrial, palace, prison, scientific, slum and spaceport areas are now ruins, all mining areas are now craters. All space stations and anything else in orbit, including all caches, have plunged to the planet and are destroyed. All travel times between land areas are doubled, for any mode of travel.</p><p>Make an immediate breakdown roll (R218) for each item of equipment you have on the planet, whether you are using it or not. If it breaks down, it may never be used on this planet again, even if repaired. If it doesn’t break down, it may be used, and any future breakdowns are treated normally. Note that the increased gravity may prevent takeoff by a ship’s boat.</p>',
    },
    {
        tag: 'e159',
        title: 'Rich Man & Thugs',
        time: 'takes 1 hour',
        desc: '<p>You see a party comprised of an obviously rich individual, guarded by 1d6+6 thugs (each E8, M4, H6 armed with a sidearm, see R210 for tech level). You can ignore him, or you can attack him. If you attack, see R302. You must defeat them in five combat rounds, since after that the rich man will escape. If you disable or kill the rich man, you find he has a base value wealth of 1d6 times 100 (R229A). If you attacked the rich man, you automatically become “wanted” here.</p>',
    },
    {
        tag: 'e160',
        title: 'Royal Guards',
        time: 'takes 1 hour',
        desc: '<p>Five men dressed in uniforms of the palace guard appear. Each is E8, M3, H6 and armed with ceremonial halberds (inflict double damage if they hit in hand-to-hand combat) and sidearms (see R210 for tech level). They move to arrest you— if they do, see E023. You can chose to resist, see R327, but if you do, they have no scruples about killing you in combat. After five rounds of combat, another four royal guardsmen will appear.</p>',
    },
    {
        tag: 'e161',
        title: 'Attack the Ship’s Boat',
        time: 'takes 1 hour',
        desc: '<p>Your gunner fires on the boat — determine the effects of the shot (R230L). If you score a critical hit of any type, the boat explodes. Otherwise, three psionicists on the boat respond with a psionic attack (E022) against your gunner. Each psionicist has E10 and psionic power 12, and will make a size 4 attack each round until they or the gunner are dead. You may end the encounter by leaving the area with sublight drive or hyperdrive, they cannot pursue.</p>',
    },
    {
        tag: 'e162',
        title: 'Attack the Alien',
        time: 'takes 1 hour',
        desc: '<p>When your party enters the crew’s quarters to make the attack, any weapons of tech 4 or higher immediately detonate, inflicting 2 hits on the person carrying it. The alien then extends its tentacles and grasps one attacker (selected at random) and draws the person into its glowing mass.</p><p>If you have anyone with a weapon of tech level 3 or less, you now kill the alien, but your crewman is gone. If you do not have such a weapon, you are helpless against it and must withdraw. When you withdraw, roll 1d6, on a 5 or 6 one more person at random is seized and destroyed before you can withdraw.</p><p>After you withdraw, scanners inform you that the alien has left the ship.</p>',
    },
    {
        tag: 'e163',
        title: 'Fire Weapons at Life Force',
        time: 'no time',
        desc: '<p>Count the number of weapons fired at the life force, and add this number to its Endurance. Weapon firing only seems to make it stronger. Return to E135 and select another option.</p>',
    },
    {
        tag: 'e164',
        title: 'Ignore Mental Probes and Proceed',
        time: 'no time',
        desc: '<p>If you have entered this system directly from Nipna or Mynkuria, or if your cargo includes any weapons, ammunition, or military equipment, you are now “wanted” (R228) in the New Karma system. Otherwise, there is no effect from this encounter.</p>',
    },
    {
        tag: 'e165',
        title: 'Wait for One-Man Ships',
        time: 'takes 1 hour',
        desc: '<p>Each of the small ships collides with your starship and explodes. Each inflicts two hits of damage. ECM does not help you, but if defensive screens exist and are energized, roll 1d6 for each attacker:</p><p>1-3 it hits screens</p><p>4-6 it hits ship and penetrates screens to inflict one hit of damage</p>',
    },
    {
        tag: 'e166',
        title: 'Attack Imperial Guards',
        time: 'takes 1 hour',
        desc: '<p>Roll 1d6:</p><p>1-3 combat ensues, see R327 and add one (+1) to your dice roll there</p><p>4-6 and they cry out in terror and run away, dropping their weapons. These may be sold for base price (R229A) of 5 S at any city or colony on Palatek, Byzantium, or Talitar. The weapons are virtually useless in combat and occupy 1 CU each.</p>',
    },
    {
        tag: 'e167',
        title: 'Alloy Comes to Life',
        time: 'takes 1 hour',
        desc: '<p>The item you purchased of bio-plastic alloy has actually come to life! It begins digesting whatever is inside. If you or any others have been within a bio-plastic vehicle during the past day, suffer 1d6 hits of acid damage before you escape. If you wore a bioplastic utility suit in the past day you are completely digested and dead. Any vehicle or suit that comes to life will creep off by itself and is completely lost and unusable. Any goods inside a vehicle are lost.</p>',
    },
    {
        tag: 'e168',
        title: 'Nothing of Interest',
        time: 'takes 1 hour',
        desc: '<p>Terrain is dull and boring, you find nothing of interest.</p>',
    },
    {
        tag: 'e169',
        title: 'Wait for Boat',
        time: 'takes 1 hour',
        desc: `
            <p>You allow the boat to dock with your starship. Three persons come on board, leaving the pilot/navigator they hired on the boat, which then disengages and departs. The three who boarded are psionicists, each E10, M1, H2 with psionic power (E022) of 12.</p><p>Roll 1d6 to see what they want (below). If you refuse, each immediately launches an attack against you (or your psionicist if a mental shield is raised), continuing until you or they are dead, or you agree to cooperate. If this combat occurs, see R327.</p>
            <p>1. immediate passage to any other star system; they will pay 600 S each for passage.</p>
            <p>2. deliver them to any city or colony in this system for 100 S each.</p>
            <p>3. they want to join your crew, with a salary of 10 S per day, plus a bonus of 20 S each combat they fight; if you refuse this, they act like an unpaid crew member.</p>
            <p>4. passage to Regari, where they must arrive within two weeks; they will pay 300 S each for this, and won't leave the starship until arrival. They will fight only to defend themselves personally, and will not help you otherwise.</p>
            <p>5. they want to purchase hallucinogenic drugs or liquor from you, at a cost of 100 S per CU (up to a maximum of 9 CUs — three per person). If they obtain these, they will settle down in the crew's quarters and consume them at the rate of 1 CU per day until the supply is used up. After they have consumed them, or immediately if you have no drugs or liquor, they will ask to be landed on some planet with good air, and will pay you 50 S for each at the time of landing.</p>
            <p>6. they request that you join the Church of the Silver Mandala, and devote your efforts and starship to spreading their teachings. They will pay for all hypercharges you use, in any system, provided they can ride with you. At least one will personally accompany you at all times. Every other day on a planet must be spent in RRR helping them preach and proselytize (you cannot do anything else that day, but your crew can). They will not interfere in your other activities, but refuse to engage in any combat except personal defense if contacted hand-to-hand.</p>`,
    },
    {
        tag: 'e170',
        title: 'Attack Life Force Hand-to-Hand',
        time: 'takes 1 hour',
        desc: '<p>Each person attacking hand-to-hand is engulfed and consumed by the life force. Each one consumed adds one point to its Endurance. If you were attacking hand-to-hand, you can avoid engulfment and death with a successful Cunning roll (R202).</p><p>Return to E135 and choose another option.</p>',
    },
    {
        tag: 'e171',
        title: 'Attempt Friendly Contact',
        time: 'takes 1 hour',
        desc: '<p>The alien decides to be friendly too, and establishes a permanent mind-meld with the person who made contact. This causes an immediate and permanent reduction in Endurance of 1d6-1 (to a minimum of one). The alien will always remain near his friend, occupying 2 CU.</p><p>The alien will happily suffer concealment in a 2 CU box, provided he is freed at the end of each day. If not concealed, he will frighten anyone the person encounters, causing them to attack the alien (see E162 for results, the weapon destruction applies to everyone, including your party, except the mind-melded person).</p><p>The alien provides these advantages to his friend: (a) anyone firing on the friend with ranged weapons has three added (+3) to the “to hit” dice roll, and (b) the friend automatically has life support provided (no need for utility suit or LSUs). The alien always remains with the friend; if the friend leaves your party, so will the alien.</p>',
    },
    {
        tag: 'e172',
        title: 'Mine Guards',
        time: 'takes 1 hour',
        desc: '<p>You attract the attention of mine guards, who think you intend to jump a claim, or steal valuable minerals. See R324. There are eight (8) guards, each is E5, M3, H4 and armed with heavy hand weapons (see R210 for tech level).</p>',
    },
    {
        tag: 'e173',
        title: 'Try for Contact',
        time: 'takes 1 hour',
        desc: '<p>You make contact, and discover this is a ship of the Byzantine secret police. If you had any encounter with them before, or succeed with a Cunning roll (R202), they wish to deal with you. Otherwise, if you are “wanted” by Byzantium, they demand to board you for a search.</p><p>Dealing with the Byzantine Secret Police Ship: roll 1d6</p><p>1-2 - they wish you to smuggle a 4 CU stasis unit to the nearest planet for them, you will be paid 300 S after you land it on the planet; you can de-energize it yourself (R212E), but if you do, see E425 when it is opened, and you become “wanted” on Byzantium.</p><p>3-4 - conceal one of their men on your ship and take him to the nearest planet, you will be paid 550 S when he arrives undetected, and nothing otherwise (the man will dexterously disappear if found earlier).</p><p>5-6 - conceal one of their men and take him to the palace on Imperia, you will be paid 3,000 S when you return to Byzantium after a successful delivery, again their man must be undetected — if detected he disappears and you will not be paid anything.</p><p>Boarding for Search by Byzantine Secret Police: If you resist boarding, see E189. If you allow boarding, two men come on board, each E6, M2, H3 with tech-2 sidearms who search (R229D) the ship for items worth more than 100 S per CU. If they find any, roll 1d6:</p><p>1-2 - they make notes and ask for a 1 CU duty per CU of such goods.</p><p>3-6 - they will take 1 CU of one such item (the most valuable) and then let you pass.</p><p>If you attempt to stop them, or refuse to pay the duty, a fight breaks out on board, see R327. If you win the fight on board, you will then have to fight the Byzantine ship, see E189.</p>',
    },

    {
        tag: 'e174',
        title: 'Approach Battle',
        time: 'takes 1 hour',
        desc: '<p>You have wandered into a battle between Nipna and Mynkuria, and inadvertently get involved. Roll 1d6:</p><p>1-3 - see E098</p><p>4-6 - see E107</p>',
    },
    {
        tag: 'e175',
        title: 'Palace Sentry',
        time: 'takes 1 hour',
        desc: '<p>You are approached by a palace sentry, who informs you that this part of the palace is out-of-bounds to visitors. He begins to escort you from the palace. If you agree to leave, you must immediately travel to any connecting land area. Alternately, you can try to bribe him to pass you for 75 S base price. If you succeed with a Cunning roll (R202) you are successful. If you fail he sounds an alert and guards appear, see E160.</p>',
    },
    {
        tag: 'e176',
        title: 'Flee the Life Force',
        time: 'normal travel time',
        desc: '<p>Your party runs away, leaving behind any vehicles or robots, as well as anything they cannot personally carry. You must immediately travel to any connecting area. If you do not immediately return as your next activity, everything left behind is lost.</p><p>If you do return as your next activity, any living or organic cargo is gone, including wood, papers, artworks, fuel units, etc., but not liquor or drugs. All other cargo is intact. Any vehicles are undamaged but broken-down (R218). Roll 1d6 for each robot left behind:</p><p>1-2 - completely destroyed</p><p>3-4 - has one hit of damage (R217)</p><p>5-6 - broken-down (R218) but otherwise undamaged</p>',
    },
    {
        tag: 'e177',
        title: 'Psionic Contact',
        time: 'no time',
        desc: '<p>Your psionicist reports that the boat has three powerful and potentially dangerous psionicists on board. They offer a deal that might interest you. Details are unknown, since they have mental shields up. You may either leave by sublight or hyperdrive travel (the boat is too slow to pursue), or you can wait and let them dock — see E169.</p>',
    },
    {
        tag: 'e178',
        title: 'Lost in Rough Terrain',
        time: 'rest of day',
        desc: '<p>If you have a ship’s boat or starship, you can spend one hour to climb to orbit (R214 in boat, R212G in starship). Otherwise, follow this result: You have lost your way. At the end of the day, roll 1d6:</p><p>1-3 - You determine your location at night by starlight, no further effect.</p><p>4-6 - You are unable to locate yourself, you are lost throughout tomorrow (the day is wasted), then roll 1d6 again and use these same results again.</p>',
    },
    {
        tag: 'e179',
        title: 'Attack the Merchant',
        time: '1 hour/round',
        desc: `
            <p>The merchant ship will stand and fight, but will not pursue if you try to escape. When the merchant has suffered eleven hits (is within one of destruction) it will surrender and submit to boarding. You can board if you have someone to leave behind to man the starship guns on your ship. Otherwise you cannot board and the event ends.</p><p>If you board, you discover you can loot the merchant, but the captain and his loyal crew threaten self-destruct if you do anything else. If you loot the ship you’ll be “wanted” in this system, roll 1d6 for the result:</p>
            <p>1. ship is empty, captain is nearly bankrupt</p>
            <p>2. find 30 CU of platinum ore concentrate, worth 800 S base price (R229A) at any Industrial area</p>
            <p>3. find 64 dead slaves — their life support failed during the battle, they are now worthless, but you won’t be “wanted” due to your piracy (slavers don’t complain to authorities!)</p>
            <p>4. find six luxury skimmers, each 10 CU, you can sell one per City or Gambling area if you roll 1d6 and get 5-6 for a base price (R229A) of 400 S, each sales attempt takes 1 hour, no more than one attempt per day in an area</p>
            <p>5. find 50 CU of luxury candies worth 200 S per CU at any palace, and a 2 CU unit of Vegan pomset oil (see below)</p>
            <p>6. find 44 U-type robots (R222) that are all broken-down (R218)</p>
            <p>Vegan Pomset Oil: collected from the glands of the Vegan pomset, a highly intelligent forest-dweller under protection from exploitation. The oil is illegal in every system of this sector, with a 30,000 S fine to anyone caught with it by any authorities (plus confiscation of the oil). However, the oil may be sold at a Space Station or Scientific area for a base price of 18,000 S per CU.</p>`,
    },
    {
        tag: 'e180',
        title: 'Food Markets',
        time: 'rest of day',
        desc: '<p>You come upon extensive food markets. You may buy any number of LSUs (R213) for a base price of 1 S each — each unit is 1 CU in size. You may also buy exotic foods at 10 S per CU. Exotic foods can be sold at a City or Colony for a base price of 30 S per CU, or at a Palace or Space Station for a base price of 50 S per CU. However, if not sold within 3 days, roll 1d6, a “6” indicates food has spoiled. If not sold within 5 days, all the food spoils and becomes worthless.</p>',
    },
    {
        tag: 'e181',
        title: 'Union Roadblock',
        time: 'takes 1 hour',
        desc: '<p>If you are entering in any vehicle other than commercial vehicles, you are stopped by a force of 20 union men, each E12, M2, H6 with sidearms (see R210 for tech level). They have with them an all-terrain mover with a boat gun and gunner (E8, M5, H3). They inform you that you cannot enter the area unless you hire commercial transport (R215B), which they can call for you now. If you do, and pay the appropriate cost, you enter normally. If you refuse, you either cannot enter the area (and must go elsewhere), or you can try to shoot your way past — see R327. Once in battle, any escape from it becomes a successful “running” through the roadblock.</p>',
    },
    {
        tag: 'e182',
        title: 'Answer Distress Call',
        time: '2 hours',
        desc: '<p>You approach the starship and notice pieces of debris nearby. However, as you dock, both your airlock and main cargo hold doors are blown open, and two groups of space pirates rush into your ship. Each pirate is E8, M4, H6 in a utility suit, with a sidearm (see R210 for tech level), and carries a xen-alloy axe that cuts through interior doors and walls easily, and will disable any utility-suit wearer with a single hit. 2d6 pirates enter through the airlock (1 per turn) and cargo doors (3 per turn).</p><p>You can abandon ship via your ship’s boat, or you can fight within your starship. If you defeat the pirates on your ship, you can loot the pirate ship for 2d6 × 100 S in fittings and treasure. You must then abandon it, as its engines are rapidly approaching the critical stage.</p>',
    },
    {
        tag: 'e183',
        title: 'Tortured by Mynkurians',
        time: 'varies',
        desc: '<p>Believing you to be a Nipnan spy, the Mynkurians begin to torture and question you. You lose all your personal possessions permanently, and roll 1d6 for the result:</p><p>1 – They conclude you are not a spy and free you at the end of this day.</p><p>2–5 – They continue to question you for the day, roll again tomorrow.</p><p>6 – You suffer 1 hit of damage and continue to be questioned; roll again tomorrow.</p>',
    },
    {
        tag: 'e184',
        title: 'Cult Turns Hostile',
        time: 'takes 1 hour',
        desc: "<p>Each cult member pulls a needle-gun and opens fire on your party with surprise, see R230I. Each cultist is E6, M2, H2. If they disable your party, they steal all possessions and leave you, including vehicles (except ship’s boat or starship, which they can't operate).</p><p>Needle Guns: Tech 3 weapons. Any hit causes automatic disablement.</p>",
    },
    {
        tag: 'e185',
        title: 'Holdup Men',
        time: 'takes 1 hour',
        desc: '<p>If you have two or more companions, this result has no effect. Otherwise, you’re held up by two men demanding your money and possessions. You can give them up or fight. If you fight, see R305. Each holdup man is E7, M5, H5. One has a sidearm, the other a heavy hand weapon (see R210 for tech level).</p>',
    },
    {
        tag: 'e186',
        title: 'Mental Shields Up',
        time: 'no time',
        desc: '<p>Although the probes could not gather specific information, the psionicist for the New Karman Defense Force has learned your personal identity. You are now “wanted” (R228) in the New Karma system, regardless of any crimes or contraband.</p>',
    },
    {
        tag: 'e187',
        title: 'Let Life Force Engulf You',
        time: 'rest of day',
        desc: '<p>The life force wraps around you in painful greenish light. Roll 1d6:</p><p>1–4 – You are dead. Lose the game.</p><p>5–6 – The life force merges with you, permanently adding its current Endurance to yours. It then dissipates into a wispy green cloud.</p>',
    },
    {
        tag: 'e188',
        title: 'Anagathic Venom',
        time: 'takes 1 hour',
        desc: '<p>You hear rumors of a rare arachnid producing a venom that arrests aging. Your contact has 1d6 doses, each for a base price of 1,000 S (R229A). If genuine and fresh, it can be sold in a City or Palace for 10,000 S per dose.</p><p>You can pay 25 S per dose at a scientific area to analyze it. Otherwise, roll 1d6 at sale time:</p><p>1 – Venom was stale when bought; worthless.</p><p>2–3 – Genuine and fresh.</p><p>4–6 – Fake or has gone stale; worthless.</p><p>Add +1 to the roll for each day owned unless kept in a stasis unit.</p>',
    },
    {
        tag: 'e189',
        title: 'Attack the Black Starship',
        time: '1 hour/round',
        desc: '<p>The ship is a Byzantine secret police vessel. It has 12 hit points and tech 1 starship guns (one turret). It fights back and pursues until it has more hits than you, then it attempts escape. You cannot capture it, but you may destroy it. Doing so makes you “wanted” (R228) at Byzantium. To escape from it, see E431.</p>',
    },
    {
        tag: 'e190',
        title: 'Paid Companionship',
        time: 'takes 1 hour',
        desc: '<p>You meet several people offering to pay for intimate companionship with you and your crew. Each day spent in RRR (R203C) earns 10 S per person, but no other activities are possible that day. You may stay as long as desired. Crew will remain even without salary while this continues, but once the arrangement ends, normal pay is required again.</p>',
    },
    {
        tag: 'e191',
        title: 'Assassination Contract',
        time: 'rest of day',
        desc: '<p>An underground contact offers you 500 S now and 5,000 S upon return if you assassinate a target. Roll 1d6 to determine who and where:</p><p>1–2: “Devil of Talitar” (E9, M5, H5), in Talitar system</p><p>3–4: Grand Duke of Imperia (E3, M3, H2), in Imperia Palaces/Cities</p><p>5: Byzantine Police Inspector (E8, M4, H6), anywhere in Byzantium</p><p>6: Palatek Corp. President (E4, M0, H2), anywhere in Palatek with life support</p><p>To locate the target: roll 1d6 in an appropriate area; a “6” finds them. Or, spend a full day in the area and roll at the end of the day — 5–6 finds them.</p><p>Once found, roll 1d6 for the situation:</p><p>1–2: Alone, with a sidearm (2 tech levels above normal, max 6)</p><p>3–4: Has 2 bodyguards</p><p>5: Has 4 bodyguards</p><p>6: In armored limousine skimmer with driver and gunner</p><p>Bodyguards: E8, M5, H5, with sidearms 1 tech level above normal (max 6). Armored skimmer reduces all hits by 2. Target tries to escape once outmatched.</p>',
    },
    {
        tag: 'e192',
        title: 'Cargo Run to Palatek',
        time: 'rest of day',
        desc: '<p>You may buy hand-carved items at the Colony on Regari for 5 S/CU and sell them at Palatek City for 10 S/CU. At Palatek City, buy electronics parts for 60 S/CU and sell them at the Regari Colony for 100 S/CU.</p><p>Buying/selling, loading/unloading takes 1 hour at each location. You may repeat this trade loop as long as desired.</p>',
    },
    {
        tag: 'e193',
        title: 'Answer Distress Call',
        time: '1 hour per die roll',
        desc: '<p>You dock with a damaged starship and send over a utility-suit-equipped party. Each hour aboard, roll 1d6:</p><p>1–3: Each party member saves one person, then explosions force you to abandon ship</p><p>4: Corrosive gas kills one random party member; the rest must abandon ship</p><p>5: Save two people; continue next hour</p><p>6: Save one person, then a high-voltage arc kills one party member (random)</p><p>You earn 500 S per person saved when you land them on any planet.</p>',
    },
    {
        tag: 'e194',
        title: 'Feed It Life Support Units',
        time: 'takes 1 hour',
        desc: '<p>You may feed it any number of LSUs. It gains 1 Endurance per LSU. Roll 1d6:</p><p>If the result is less than the number of LSUs, it dissipates peacefully into mist</p><p>If the result is a 6, it engulfs one person (random); see E187 for effect</p><p>Then return to E135 and choose another option.</p>',
    },
    {
        tag: 'e195',
        title: 'Attack the Mynkurians',
        time: 'takes 1 hour',
        desc: '<p>You may fire twice before the Mynkurian ships reach you (see R230L). They have no ECM or defensive screens. Each hit destroys one ship. Ships that survive and reach you will collide, see E165.</p>',
    },
    {
        tag: 'e196',
        title: 'Minor Eruption',
        time: 'takes 1 hour',
        desc: '<p>A volcanic eruption hits the area. If in a vehicle, it takes one hit of damage (R217). If on foot, each person suffers 1d6–1 hits (roll separately). A successful Cunning roll (R202) avoids injury.</p>',
    },
    {
        tag: 'e197',
        title: 'Allow Them to Board',
        time: 'rest of day',
        desc: '<p>They escort your ship to a Palatek Space Station or orbit. Your ship is searched (R229D) for any items from Industrial or Scientific areas. If any are found, see E021.</p><p>If you previously fought Palatek ships or had encounters, you are fined 400 S per hit inflicted. If you are “wanted,” you are jailed (E023). Otherwise, you may go on your way tomorrow.</p>',
    },
    {
        tag: 'e198',
        title: 'Disgruntled Colonists',
        time: 'rest of day',
        desc: "<p>A group of 1d6 × 10 colonists want transport to a Colony on another planet with a higher Wealth Code. Each pays 30 S upon delivery. Each colonist takes up 2 CU.</p><p>If you take fewer than half, roll 1d6 — on 3+, see E142.</p><p>If you take them all, see E122 — one colonist wants to join your crew (if he does, he won't pay the 30 S).</p>",
    },
    {
        tag: 'e199',
        title: 'Palace Statuary',
        time: '1 hour per theft',
        desc: '<p>You may steal statues from palace gardens. Each statue is 3 CU, worth 300 S (base price, R229A) on New Karma only.</p><p>You may return, but each time roll 1d6 (instead of a normal Entry Encounter). If the roll is not greater than the number of previous trips, you are discovered — see E160.</p>',
    },
    {
        tag: 'e400',
        title: 'Space Amoeba',
        time: 'takes 1 hour',
        desc: '<p>Upon deactivating the stasis unit, a space amoeba is found fissioning into two 2 CU amoebas. Each rushes to engulf a character (randomly determined). In the first round, they make contact with tendrils—no wounds yet, and no suit offers protection. From round two onward, victims suffer 1 hit/round, and the amoeba gains 1 Endurance per round.</p><p>Amoebas cannot be harmed hand-to-hand. Ranged weapons damage the amoeba <i>and</i> its victim. Dyla-weed or hallucinogenic drugs disable it for 1d6 rounds, allowing placement into stasis (1 CU per 4 Endurance).</p><p>Freshly split amoebas have Endurance 5. At Endurance 10, they fission again. Amoebas in stasis may be sold at any Scientific area for 1,000 S per CU.</p>',
    },
    {
        tag: 'e401',
        title: 'Mental Shield',
        time: 'takes 1 hour',
        desc: '<p>Your mental shield protects you from the psychic attack. You engage sublight drive and escape, but your psionicist collapses, suffering 2d6 hits. No enemy ship was ever seen on scanners.</p>',
    },
    {
        tag: 'e402',
        title: 'Gun Buoy Examined',
        time: 'rest of day',
        desc: '<p>You examine a damaged gun buoy. Roll 1d6:</p><p>1–3: Scrap, nothing of value</p><p>4: Retrieve tech-6 guns (requires a Starship Engineer)</p><p>5–6: Recover a broken-down (R218) robot brain (M6, H1, 1 CU). The brain doubles the operating cost of a normal robot and must be installed by a Starship Engineer. It enables combat capability and starship gunnery, but such robots are illegal throughout the Pavonis sector.</p>',
    },
    {
        tag: 'e403',
        title: 'Boarding Party',
        time: 'takes 1 hour',
        desc: "<p>You must pay 80 S in pilot fees, 10 S visa per person, and a 25 S entry fee for the starship. Payment is mandatory due to overwhelming force.</p><p>If someone aboard is “wanted” (R228), authorities don't recognize it. If you refuse or can't pay, your ship is impounded until payment plus 10% daily interest is made—or you must hyperjump out of the system (R212A).</p>",
    },
    {
        tag: 'e404',
        title: 'Try to Energize Stasis',
        time: 'varies',
        desc: "<p>You energize the stasis unit just as a mutinous crewman fires—he’s partially caught in the field and killed instantly. The ship cannot operate with the pilot's stasis field active, so remaining crew escape in the ship’s boat with as much cargo as it holds. The rest of the ship remains intact until you recover (R240).</p><p>When stasis ends, the crewman’s shot completes—resolve its effect with R230.</p>",
    },
    {
        tag: 'e405',
        title: 'Four Armed Men',
        time: 'takes 1 hour',
        desc: '<p>You surprise four armed men (E6, M4, H1, each with a tech 5 sidearm) as the stasis unit is deactivated. You may attack first with surprise (R230I), or attempt conversation. If you talk, roll 1d6:</p><p>1–2: They put down weapons but refuse to join you. Encounter ends.</p><p>3: They offer to become bodyguards for 5 S/week each.</p><p>4–6: They open fire — see R327.</p>',
    },
    {
        tag: 'e406',
        title: 'Offer Bribe',
        time: 'no time',
        desc: '<p>You attempt a bribe. Roll 1d6:</p><p>1: They accept it and let you pass.</p><p>2: They demand triple what you offered — if paid, they let you pass.</p><p>3: They demand 1d6 × 1,000 S — if paid, they let you pass.</p><p>4–6: They refuse. If you cannot bribe them, they open fire — see E428.</p>',
    },
    {
        tag: 'e407',
        title: 'Shoot at Object on Hull',
        time: 'takes 1 hour',
        desc: '<p>You fire on the object attached to your hull. It reflects intense radiation, dealing 1d6+2 hits (R231) to each person outside the hull, including those in utility suits or a ship’s boat. The object is unaffected. Return to E119 to choose another option.</p>',
    },
    {
        tag: 'e408',
        title: 'Ship Darts Away',
        time: 'takes 1 hour',
        desc: "<p>As you contact the strange ship's hull, it suddenly withdraws, extends three projections, and darts away at incredible speed. It disappears from scanners and cannot be pursued. The encounter ends.</p>",
    },
    {
        tag: 'e409',
        title: 'Religious Fanatics',
        time: 'rest of day',
        desc: '<p>A cult on New Karma hires you to transport 9 missionaries—one to each other system in the sector. They must be delivered to rural areas or cities. For each delivered missionary, you are paid 2,500 S at the destination.</p><p>The cult demands a daily sacrifice of domestic animals (1 CU/day per missionary). If animals run out, the remaining missionaries commit suicide and no further payments occur. Unused animals deduct 100 S per CU from final payments.</p>',
    },
    {
        tag: 'e410',
        title: 'Rich Member of Royal Family',
        time: 'takes 1 hour',
        desc: '<p>You release a 2 CU-sized fat man named Johann, subprince of the Imperia royal family. He offers 100,000 S if returned to an Imperian land area immediately (shortest route). For each day beyond tomorrow, subtract 10,000 S. After 10 days, if not delivered, you become “wanted” in Imperia.</p>',
    },
    {
        tag: 'e411',
        title: 'Gunner Fires',
        time: 'no time',
        desc: '<p>Your gunner fires on a nearby torpedo-shaped vessel, damaging it but suffering a mental surge, taking 1d6 hits and falling unconscious. No further psychic activity is detected.</p><p>You may now send someone in a utility suit to explore the damaged craft — see E419.</p>',
    },
    {
        tag: 'e412',
        title: 'Go with Mutineer',
        time: 'takes 1 hour',
        desc: '<p>A mutinous crewman disarms you and escorts you to the ship’s boat, allowing you to bring any non-weapon cargo. He pilots the main ship away toward a planet.</p><p>If you follow to the same planet, you may search for your starship by spending 1 hour per area and rolling 1d6. A 5–6 means you find it stripped of guns, cargo, stasis units, RUs, FUs, and LSUs. Each area can only be checked once. If not found, it is lost forever. The mutineer is never seen again.</p>',
    },
    {
        tag: 'e413',
        title: 'Try to Escape Scout',
        time: 'takes 1 hour',
        desc: '<p>As you flee, the scout ship fires all guns. Each standard gun inflicts one hit on your starship (R217). The nose gun fires a magneto-plasma beam that penetrates the hull and kills everyone in one compartment, determined by a 1d6 roll:</p><p>1: pilot’s compartment</p><p>2: crew quarters</p><p>3: engineering</p><p>4: gun turret</p><p>5: main cargo hold</p><p>6: boat hold and ship’s boat</p><p>Your ship escapes; the scout does not pursue. Encounter ends.</p>',
    },
    {
        tag: 'e414',
        title: 'Engineer Examines Object on Hull',
        time: '2 hours',
        desc: "<p>Your engineer investigates the device. Roll 1d6:</p><p>1: Touches wrong part, suffers 2d6 hits from radiation — return to E119.</p><p>2: Explosion kills him, inflicts 2 hits on ship, and destroys items in that compartment.</p><p>3: Can’t understand it, but removes it — no further issues.</p><p>4: Removes 2 advanced servo-controllers (worth 2,200 S each in other systems), and disables the device.</p><p>5: Discovers it's a mine with 3 CU explosives (300 S each at mining area), rest is junk.</p><p>6: Reveals it's a 3 CU mini-craft with sublight drive, 1-year power and life support, no weapons, occupies 9 CU total.</p>",
    },
    {
        tag: 'e415',
        title: 'Wounded Pilot/Navigator',
        time: 'takes 1 hour',
        desc: '<p>You release a wounded starship pilot/navigator (E7, M0, H2, 1d6 wounds). He offers to serve without pay for 40 days. If you decline, he promises to replace the stasis unit you used when you next arrive at a spaceport or station.</p>',
    },
    {
        tag: 'e416',
        title: 'Ship Self-Destructs',
        time: 'instantly',
        desc: '<p>The ship explodes without warning, destroying your crew, starship, and ending the game. You lose.</p>',
    },
    {
        tag: 'e417',
        title: 'Escapee Seeks Help',
        time: 'takes 1 hour',
        desc: '<p>A desperate escapee from local prison begs for a ride off-planet before the next day ends. Roll 1d6 to determine his home planet:</p><p>1: Palatek</p><p>2: Uruskop</p><p>3: Byzantium</p><p>4: Nipna</p><p>5: Mynkuria</p><p>6: New Karma</p><p>You may ignore him, turn him in for a 10 S reward (if not “wanted” here), or take him. If you take him, refer to E427 upon delivery to a life-supporting area on his planet.</p>',
    },
    {
        tag: 'e418',
        title: 'Sublight Drive Energized',
        time: 'takes 1 hour',
        desc: '<p>When you activate the sublight drive, roll 1d6:</p><p>1–2: The object falls off and is lost in space.</p><p>3–5: The object emits radiation, killing all life in the adjacent compartment. It melts onto the hull and becomes junk.</p><p>6: The object is unaffected — return to E119 or select a new option after deactivating the drive.</p>',
    },
    {
        tag: 'e419',
        title: 'Investigate Torpedo',
        time: '1d6 hours',
        desc: "<p>You investigate the torpedo-shaped craft. Roll 1d6:</p><p>1: It's wrecked beyond recognition. Nothing of value.</p><p>2: Contains a deformed dead body worth 100 S at a Scientific area.</p><p>3–6: An unconscious person wearing a glowing gem is found. Removing the gem causes instant convulsions and death. The gem is worth 20,000 S at any Mining area. You may put it on. If so, roll 1d6:</p><p>1: Instant death in agony</p><p>2: Horribly deformed; must pay double and receive half value for all transactions</p><p>3–5: Gain 1d6+2 psionic power (see E022); removal of gem causes instant death</p><p>6: Gains overwhelming psionic power. If it’s you, you win upon returning to any planet. If another person, you lose, as they enslave you mentally.</p>",
    },
    {
        tag: 'e420',
        title: 'Starship Engineer',
        time: '1d6 hours',
        desc: '<p>A starship engineer is released from stasis, with a tech-1 utility robot. His ship was lost 84 years ago. He’ll work for you if you buy the robot for 100 S and pay 12 S/week with a stasis unit at his station. He is E8, M3, H3 and can drive a skimmer.</p>',
    },
    {
        tag: 'e421',
        title: 'Stasis Energized',
        time: 'rest of day',
        desc: '<p>You activate the stasis to avoid a mental attack. Your crew calls for help. Another ship arrives and tows you to the nearest space station or planetary orbit. They replace minor systems and destroy the stasis unit (R212E) in the process. You are charged 450 S. If unpaid, your ship is impounded until paid.</p>',
    },
    {
        tag: 'e422',
        title: 'Attack the Scout',
        time: '1 hour per round',
        desc: '<p>You engage in battle with a scout ship. You fire first, then it retaliates. Battle continues (R230L) until one ship is destroyed or escapes. If you try to flee, the scout pursues. Scout has 2 hit points, a tech 6 turret gun, and a magneto-plasma nose gun (fires once first turn, then recharges on 5-6). The plasma gun kills all in one compartment per hit (roll 1d6):</p><p>1: pilot’s compartment</p><p>2: crew quarters</p><p>3: engineering</p><p>4: gun turret</p><p>5: main cargo hold</p><p>6: boat hold and ship’s boat</p>',
    },
    {
        tag: 'e423',
        title: 'Attempt to Hyperjump',
        time: 'instantly',
        desc: "<p>If the object is near the hypercharge storage area, it explodes and destroys your ship. Any auto-energized stasis units remain in this system. If located elsewhere, roll 1d6: on a 1, you are destroyed. Otherwise, the object vanishes after hyperjump — and you're unaware it ever existed.</p>",
    },
    {
        tag: 'e424',
        title: 'Space Gypsies',
        time: 'rest of day',
        desc: '<p>The leader of a space gypsy clan offers a ruby worth 480 S as a gift and promises one more for each of his 110 clan members if you transport them all together to New Karma. If you refuse, you keep the initial ruby. If you agree and deliver them, see E020. You must have enough CU for all of them.</p>',
    },
    {
        tag: 'e425',
        title: 'Pure Dyla-Weed',
        time: 'no time',
        desc: '<p>The stasis unit holds 4 CU of illegal dyla-weed, worth 16,000 S per CU base price (R229A) in any Slum area. Only 1 CU can be sold per Slum area.</p>',
    },
    {
        tag: 'e426',
        title: 'Enter Strange Ship',
        time: 'takes 1 hour',
        desc: "<p>You discover the ship is made of bio-plastic alloys, with no crewmen alive. Further investigation reveals the ship is alive! The walls close in on you. Roll 1d6:</p><p>1-2: You escape to your own ship; the living ship darts away and is quickly lost on scanners.</p><p>3-4: You are digested by the ship, becoming fuel.</p><p>5-6: You are incorporated into the ship's nervous system. You retain your mind but your body is destroyed. You can't leave, but consider it a victory — crack open your old starship and have your first meal!</p>",
    },
    {
        tag: 'e427',
        title: 'Escapee Delivered to Home World',
        time: 'takes 1 hour',
        desc: "<p>You discover whether the escapee fulfilled his promise. Roll 1d6:</p><p>1-2: He slips away in a crowd and you never see him again.</p><p>3: He has no wealth but offers 40 S, all he has.</p><p>4: He has no money but offers valuable underworld connections, providing false papers for you and your crew.</p><p>5: He thanks you and pays you 1,500 S.</p><p>6: He’s from a wealthy family and pays you 4,000 S now, with 4,000 S each week for the rest of your life. Payments are to a local bank account, continuing until you're proven dead to the bank.</p>",
    },
    {
        tag: 'e428',
        title: 'Scout Acts First',
        time: '2 hours',
        desc: '<p>After an hour, the scout acts. Roll 1d6:</p><p>1-2: He gives a friendly warning and disappears rapidly.</p><p>3-6: He opens fire. You can either return fire or instantly escape (if still able). For the effect of his fire, and resolving any space battles, see E422.</p>',
    },
    {
        tag: 'e429',
        title: 'Try to Open without an Engineer',
        time: '1d6 hours',
        desc: '<p>Refer to E414 but subtract one from the die roll (-1). A result of “0” is considered a “1” instead.</p>',
    },
    {
        tag: 'e430',
        title: 'Board the Ship',
        time: '3 hours',
        desc: "<p>You board the ship, realizing it's an Antelope-class trader like yours, but camouflaged. It’s in perfect order but empty of cargo, unarmed, and has a dead pilot. There are no hyperdrive charges, and the engines require repair (R219). A starship engineer (R221B) is needed for repairs. If you tow the ship to a space station or spaceport (at half speed), you can salvage it for 12,000 S unrepaired or 30,000 S if repaired. Selling the ship will take a full day. If you leave it behind, someone else will find it before you return.</p>",
    },
    {
        tag: 'e431',
        title: 'Black Ship Astern',
        time: 'takes 1 hour',
        desc: '<p>The black ship fires one last shot and lets you go without pursuit.</p>',
    },
]

export default eventData
