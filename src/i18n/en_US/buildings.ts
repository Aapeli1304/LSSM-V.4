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
                caption: 'Ambulance Extension',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [
                    5, 15, 20, 28, 27, 29, 48, 49, 50, 57, 58, 59, 60, 61,
                ],
            },
            {
                caption: 'Airport Extension',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [17],
            },
            {
                caption: 'Forestry Expansion',
                credits: 50_000,
                coins: 13,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [30, 31, 32, 38, 39, 40],
            },
            {
                caption: 'Fire Investigation Extension',
                credits: 150_000,
                coins: 15,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [62, 63],
            },
            {
                caption: 'Foam Extension',
                credits: 100_000,
                coins: 15,
                duration: '5 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [64, 65],
            },
            {
                caption: 'Water Rescue Expansion',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [21, 22],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
        maxBuildings: '6.000 together with small fire stations',
        maxLevel: 39,
        special:
            'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!',
        startPersonnel: 10,
        startVehicles: ['Type 1 fire engine', 'Type 2 fire engine'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
    },
    1: {
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
    2: {
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
            },
            {
                caption: 'Gynecology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Urology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Traumatology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Neurology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Neurosurgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Cardiology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Cardiac Surgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
        ],
        levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
        maxBuildings: 'No limit',
        maxLevel: 20,
        special:
            'Finance ministers and admins can (expand) association hospitals with the help of credits from the association treasury.',
        startBeds: 10,
    },
    3: {
        caption: 'Ambulance station',
        color: '#ffa500',
        coins: 35,
        credits: 200_000,
        extensions: [
            {
                caption: 'Mass Casualty Trailer Extension',
                credits: 200_000,
                coins: 25,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                unlocksVehicleTypes: [41, 57, 58],
                parkingLotReservations: [
                    [57, 58],
                    [57, 58],
                ],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
        maxBuildings: 'No limit',
        maxLevel: 39,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['ALS Ambulance'],
        schoolingTypes: ['Rescue'],
    },
    4: {
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
        special:
            "Finance ministers and admins can (expand) fire department schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire- brigade schools.",
        startClassrooms: 1,
    },
    5: {
        caption: 'Police station',
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
                caption: 'Game Warden Office',
                credits: 20_000,
                coins: 20,
                duration: '3 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [56],
            },
            {
                caption: 'Water Police Expansion',
                credits: 200_000,
                coins: 35,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                unlocksVehicleTypes: [55],
                parkingLotReservations: [[55], [55]],
            },
            {
                caption: 'Additional Patrol Boat Parking Spaces',
                credits: 100_000,
                coins: 25,
                duration: '5 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                requiredExtensions: [10],
                parkingLotReservations: [[55], [55]],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
        maxBuildings: '1.700 together with small police stations',
        maxLevel: 39,
        special:
            'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Patrol car'],
        schoolingTypes: ['Police'],
        startParkingLots: 1,
        startCells: 0,
        maxBuildingsFunction: (): number => 1700,
    },
    6: {
        caption: 'Helicopter station',
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
    7: {
        caption: 'Police academy',
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
    8: {
        caption: 'Police Aviation',
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
        schoolingTypes: ['Police'],
        startParkingLots: 1,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    9: {
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
    10: {
        caption: 'Prison Cells',
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
    11: {
        caption: 'Fire Boat Dock',
        color: '#663300',
        coins: 35,
        credits: 500_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: 'No limit',
        maxLevel: 16,
        special: '',
        startPersonnel: 2,
        startParkingLots: 1,
        startVehicles: [''],
        schoolingTypes: ['Fire Station'],
    },
    12: {
        caption: 'Rescue Boat Dock',
        color: '#d3d62a',
        coins: 35,
        credits: 500_000,
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: 'No limit',
        maxLevel: 16,
        special: '',
        startPersonnel: 2,
        startVehicles: [''],
        startParkingLots: 1,
        schoolingTypes: ['Fire Station'],
    },
    13: {
        caption: 'Fire station (Small station) ',
        color: '#aa1111',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Ambulance Extension',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [
                    5, 15, 20, 27, 28, 29, 48, 49, 50, 57, 58, 59, 60, 61,
                ],
            },
            {
                caption: 'Airport Extension',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [17],
            },
            {
                caption: 'Forestry Expansion',
                credits: 50_000,
                coins: 13,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [30, 31, 32, 38, 39, 40],
            },
            {
                caption: 'Fire Investigation Extension',
                credits: 150_000,
                coins: 15,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [62, 63],
            },
            {
                caption: 'Foam Extension',
                credits: 100_000,
                coins: 15,
                duration: '5 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [64, 65],
            },
            {
                caption: 'Water Rescue Expansion',
                credits: 100_000,
                coins: 20,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [21, 22],
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
        startVehicles: ['Type 1 fire engine', 'Type 2 fire engine'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 6000,
    },
    14: {
        caption: 'Clinic',
        color: '#e2e53b',
        coins: 25,
        credits: 100_000,
        extensions: [
            {
                caption: 'General Internal',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'No limit',
        maxLevel: 5,
        special: '',
        startPersonnel: 0,
        startParkingLots: 2,
        startBeds: 5,
        parkingLotsPerLevel: 0,
        startVehicles: ['None. You can buy a max. 2 Vehicles'],
        schoolingTypes: ['Rescue'],
    },
    15: {
        caption: 'Police station (Small station)',
        color: '#116611',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Game Warden Office',
                credits: 20_000,
                coins: 20,
                duration: '3 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [56],
            },
            {
                caption: 'Water Police Expansion',
                credits: 200_000,
                coins: 35,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                unlocksVehicleTypes: [55],
                parkingLotReservations: [[55], [55]],
            },
            {
                caption: 'Additional Patrol Boat Parking Spaces',
                credits: 100_000,
                coins: 25,
                duration: '5 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                requiredExtensions: [10],
                parkingLotReservations: [[55], [55]],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-4. 100.000',
            'Conversion to normal guard: difference price to normal guard',
        ],
        maxBuildings: '1.700 together with small police stations',
        maxLevel: 4,
        special:
            'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(50.000+100.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Patrol Car'],
        schoolingTypes: ['Police'],
        startCells: 0,
        startParkingLots: 1,
        maxBuildingsFunction: (): number => 1700,
    },
    16: {
        caption: 'Ambulance station (Small station)',
        color: '#eeb611',
        coins: 25,
        credits: 100_000,
        extensions: [
            {
                caption: 'Mass Casualty Trailer Extension',
                credits: 200_000,
                coins: 25,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 2,
                unlocksVehicleTypes: [41, 57, 58],
                parkingLotReservations: [
                    [57, 58],
                    [57, 58],
                ],
            },
        ],
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
        startParkingLots: 1,
        startVehicles: ['ALS Ambulance'],
        schoolingTypes: ['Rescue'],
    },
    17: {
        caption: 'Firefighting plane station',
        color: '#db7918',
        coins: 65,
        credits: 1_500_000,
        extensions: [],
        levelcost: ['1. 1.500.000'],
        maxBuildings: 'No limit',
        maxLevel: 2,
        special: '',
        startPersonnel: 2,
        startParkingLots: 1,
        startVehicles: ['Water drop helicopter'],
        schoolingTypes: ['Fire Station'],
    },
    18: {
        caption: 'Federal Police Station',
        color: '#264289',
        coins: 50,
        credits: 500_000,
        extensions: [
            {
                caption: 'DEA Expansion',
                credits: 200_000,
                coins: 35,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [51, 52],
            },
            {
                caption: 'ATF Expansion',
                credits: 200_000,
                coins: 35,
                duration: '7 Days',
                isVehicleExtension: true,
                givesParkingLots: 0,
                unlocksVehicleTypes: [53, 54],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-20. 100.000'],
        maxBuildings: 'No limit',
        maxLevel: 20,
        special: '',
        startPersonnel: 10,
        startParkingLots: 1,
        startVehicles: ['FBI Unit'],
        schoolingTypes: ['Police'],
    },
    19: {
        caption: 'Rescue (EMS) academy',
        color: '#caa318',
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
    20: {
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
    21: {
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
    22: {
        caption: "Fire Marshal's Office",
        color: '#db7918',
        coins: 30,
        credits: 250_000,
        extensions: [],
        levelcost: ['1.- 5. 150.000'],
        maxBuildings: 'No limit',
        maxLevel: 5,
        special: '',
        startPersonnel: 2,
        startVehicles: ['Fire Prevention Unit'],
        schoolingTypes: ['Fire Station'],
        startParkingLots: 1,
    },
} as Record<number, InternalBuilding>;
