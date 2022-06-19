import type { InternalBuilding } from '../../../typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (
    extension: Extension | ((index: number) => Extension),
    amount: number
): Extension[] =>
    typeof extension === 'function'
        ? new Array(amount).fill('0').map((_, index) => extension(index))
        : new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Fire station',
        color: '#bb0000',
        coins: 30,
        credits: 100_000,
        extensions: [
            {
                caption: 'Ambulance extensionunlocksVehicleTypes:',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [5, 23, 24, 25, 26, 27]


            },
            {
                caption: 'Bushfire Expansion',
                credits: 50_000,
                coins: 15,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [28, 29]

            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: '6.000 together with small fire stations',
        maxLevel: 16,
        special:
            'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!',
        startPersonnel: 10,
        startVehicles: ['Pumper', 'Medium Tanker', ' Heavy Tanker'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
    },
    1: {
        caption: 'Fire academy',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        startClassrooms: 1,
        special:
            "Finance ministers and admins can (expand) fire department schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire-brigade schools.",
    },
    2: {
        caption: 'Ambulance station',
        color: '#ffa500',
        coins: 35,
        credits: 200_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: 'No limit',
        maxLevel: 16,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['Ambulance'],
        schoolingTypes: ['Rescue'],
    },
    3: {
        caption: 'Paramedic Training Centre',
        color: '#ffa501',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        startClassrooms: 1,
        special:
            "Finance ministers and admins can (expand) Paramedic Training Centre with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire-brigade schools.",
    },
    4: {
        caption: 'Hospital',
        color: '#bbe944',
        coins: 25,
        credits: 200_000,
        extensions: [
            {
                caption: 'General Internal',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
            {
                caption: 'General Surgeon',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Gynecology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Urology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Traumatology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Neurology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [0],
            },
            {
                caption: 'Neurosurgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [1],
            },
            {
                caption: 'Cardiology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [0],
            },
            {
                caption: 'Cardiac Surgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                cannotDisable: true,
                requiredExtensions: [1],
            },
        ],
        levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
        maxBuildings: 'No limit',
        maxLevel: 20,
        startBeds: 10,
        special:
            'Finance ministers and admins can (expand) association hospitals with the help of credits from the association treasury.',
    },
    5: {
        caption: 'Air Ambulance Station',
        color: '#e7ad2f',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: [],
        maxBuildings: 'see specials',
        maxLevel: 0,
        special:
            'Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
        startPersonnel: 0,
        startVehicles: [],
        schoolingTypes: ['Rescue'],
        startParkingLots: 1,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    6: {
        caption: 'Police Station',
        color: '#007700',
        coins: 35,
        credits: 100_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
            {
                caption: 'Riot Police Extension',
                credits: 100_000,
                coins: 15,
                duration: '5 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [34, 36, 37]
            },
            {
                caption: "Senior Sergeant's Office",
                credits: 200_000,
                coins: 25,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                unlocksVehicleTypes: [38],
                parkingLotReservations [[38], [38],
            },
            { 
                caption: "Additional Senior Sergeant's Offices",
                credits: 150_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                parkingLotReservations: [[38], [38],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: '1.700 together with small police stations',
        maxLevel: 16,
        special:
            'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Police Car'],
        schoolingTypes: ['Police'],
        startParkingLots: 1,
        startCells: 0,
        maxBuildingsFunction: (): number => 1700,
    },
    7: {
        caption: 'Dispatch Center',
        color: '#24c3ae',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 'All 25 buildings one control center',
        maxLevel: 0,
        special: 'The control center is the administrative center.',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
    },
    8: {
        caption: 'Police Academy',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            "Finance ministers and admins can (expand) association police schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association police schools.",
        startClassrooms: 1,
    },
    13: {
        caption: 'Police Air Wing',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1. 1.000.000 Credits / 50 Coins'],
        maxBuildings: 'see specials',
        maxLevel: 1,
        special:
            'Up to 2 landing sites can be built per station (expansion stages). Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
        startPersonnel: 3,
        startVehicles: [],
        startParkingLots: 1,
        schoolingTypes: ['Police'],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    14: {
        caption: 'Staging area',
        color: '#c259b5',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 4,
        maxLevel: 0,
        special:
            'You can station as many of your own vehicles as you like at a staging area, members of the association can use the room. A staging area remains for 24 hours, but you can reset it to 24 hours at any time.With Premium Account you can have 8 staging areas at the same time',
        isStagingArea: true,
        maxBuildingsFunction: (): number => 4,
    },
    15: {
        caption: 'SES Unit',
        color: '#7fffd4',
        coins: 50,
        credits: 500_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'No Limit',
        maxLevel: 5,
        special: 'You will get 10 people and an SES vehicle for free.',
        startPersonnel: 10,
        startVehicles: ['SES Vehicle'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
    },
    16: {
        caption: 'Police Lockup',
        color: '#00ff00',
        coins: -1,
        credits: 100_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
        ],
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
        startCells: 1,
    },
    18: {
        caption: 'Fire Station (Small) ',
        color: '#aa1111',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Bushfire Expansion',
                credits: 50_000,
                coins: 15,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [28, 29]
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Conversion to normal guard: difference price to normal guard',
        ],
        maxBuildings: '6.000 together with fire stations',
        maxLevel: 5,
        special:
            'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>(50.000+100.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
        startPersonnel: 10,
        startVehicles: ['Pumper', 'Medium Tanker', ' Heavy Tanker'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
    },
    19: {
        caption: 'Police Station (Small station)',
        color: '#116611',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Prison cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Additional cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Riot Police Extension',
                credits: 100_000,
                coins: 15,
                duration: '5 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [34, 36, 37]
            },
            {
                caption: "Senior Sergeant's Office",
                credits: 200_000,
                coins: 25,
                duration: '7 Days',
                givesParkingLots: 2,
                unlocksVehicleTypes: [38],
                parkingLotReservations [[38], [38],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-4. 100.000',
            'Conversion to normal guard: difference price to normal guard',
        ],
        maxBuildings: '1.700 mit Polizeiwachen zusammen',
        maxLevel: 4,
        special:
            'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(50.000+100.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Police Car'],
        schoolingTypes: ['Police'],
        startParkingLots: 1,
        startCells: 0,
        maxBuildingsFunction: (): number => 1700,
    },
    20: {
        caption: 'Ambulance Station (Small station)',
        color: '#eeb611',
        coins: 25,
        credits: 100_000,
        extensions: [],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Conversion to normal guard: difference price to normal guard',
        ],
        maxBuildings: 'No limit',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startVehicles: ['Ambulance'],
        schoolingTypes: ['Rescue'],
        startParkingLots: 1,
    },
    21: {
        caption: 'Large complex',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Too Expensive'],
        maxBuildings: 'No Limit',
        maxLevel: 5,
        special: "TOO EXPENSIVE, DON'T BUY IT, DON'T EXPAND IT",
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
    },
    22: {
        caption: 'Small complex',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['Too Expensive'],
        maxBuildings: 'No Limit',
        maxLevel: 5,
        special: "TOO EXPENSIVE, DON'T BUY IT, DON'T EXPAND IT",
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
    },
    23: {
        caption: 'Fire Airbase',
        color: '#e7ad2f',
        coins: 50,
        credits: 1_500_000,
        extensions: [],
        levelcost: ['1.-5. 1.000.000'],
        maxBuildings: 'see specials',
        maxLevel: 0,
        special:
            'Up to the 125th building (of all types) a total of max. 3 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
        startPersonnel: 2,
        startVehicles: ['Fire Helicopter'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 0,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 3
                : Math.floor(buildingsAmountTotal / 25),
    },
} as Record<number, InternalBuilding>;
