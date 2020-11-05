import { Building } from 'typings/Building';

const moduleRootFiles = require.context('../', true, MODULE_ROOT_I18N_FILES);
const furtherFiles = require.context('./en_US/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Lagre',
        reset: 'Tilbakestill',
        noMapkit:
            'Denne utvidelsen fungerer ikke med karttypen "MapKit" grunnet begrensninger på MapKit!',
        dev:
            'Denne utvidelsen er fortsatt under utvikling, aktivering kan medføre feil.',
        closeWarning: {
            title: 'Ulagrede endringer',
            text:
                'Du har gjort endringer som ikke har blitt lagret.',
            close: 'Lukk vindu',
        },
    },
    settings: {
        name: 'Innstillinger',
        save: 'Lagre',
        discard: 'Forkast endringer',
        reset: 'Resett',
        export: 'Eksporter',
        import: 'Importer',
        resetWarning: {
            title: 'Tilbakestill endringer',
            text:
                'Vil du virkelig tilbakestille alle innstillinger til standard?',
            close: 'Avbryt',
            total: 'Alle innstillinger',
            module: 'Kun for denne modulen',
        },
        closeWarning: {
            title: 'Ulagrede endringer',
            text:
                'Du har gjort endringer i innstillingene som ikke er lagret. Tilbakestill, fjern dem eller lagre dem for å lukke innstillinger.',
            close: 'Lukk vindu',
        },
        changeList: {
            true: 'På',
            false: 'Av',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };
moduleRootFiles
    .keys()
    .forEach(key => (modules[key.split('/')[2]] = moduleRootFiles(key)));

const t = {} as { [key: string]: unknown };

furtherFiles
    .keys()
    .forEach(
        key => (t[key.split('/')[1].replace(/\..*$/, '')] = furtherFiles(key))
    );

export default {
    modules,
    ...t,
    error: {
        title: 'LSS Manager: Error',
        msg:
            'Om denne feilen skjer ofte, vennligst rapporter det til LSSM teamet!',
    },
    warnings: {
        version: {
            title: 'Feil LSS Manager versjon',
            text:
                'Kjære bruker, vi ser at du ikke bruker siste versjon av LSS Manager. Den siste vesjonen er {version}, men du har {curver}. Last inn spillet på nytt med (Ctrl + F5, på Apple enheter Command + F5), dette bør fikse feilen. Om feilen fortsetter vennligst rapporter det til LSSM teamet.',
            close: 'Lukk vindu og omlast spillet (anbefalt).',
            abort: 'Likk vindu uten å omlaste spillet',
        },
    },
    globalSettings: {
        name: 'Innstillinger',
        labelInMenu: {
            title: 'Etikett istedenfor ikon i navigasjonslinjen',
            description:
                'Viser en enkel etikett i navigasjonslinjen i stedet for LSSM-logoen.',
        },
    },
    vehicles: {
        0: {
            caption: 'Mannskapsbil',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
        },
        1: {
            caption: 'Lett mannskapsbil',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
        },
        2: {
            caption: 'Stigebil',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Nødvendig etter at du har bygd 3 brannstasjoner.',
        },
        3: {
            caption: 'Innsatslederbil brann',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Nødvendig etter at du har bygd 6 brannstasjoner.',
        },
        4: {
            caption: 'Tungredningsbil',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            wtank: 0,
            special: 'Nødvendig etter at du har bygd 4 brannstasjoner.',
        },
        5: {
            caption: 'Ambulanse',
            color: '#9c1c1c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
        },
        6: {
            caption: 'Tankbil',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 3_000,
            special: 'Nødvendig etter at du har bygd 7 brannstasjoner.',
        },
        7: {
            caption: 'CBRNe enhet',
            color: '#770000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            special: 'Nødvendig etter at du har bygd 11 brannstasjoner.',
            schooling: 'Krever spesialistutdanning (CBRNe-enhet)',
            shownSchooling: 'CBRNe-enhet',
        },
        8: {
            caption: 'Patruljebil',
            color: '#8b1818',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
        },
        9: {
            caption: 'Luftambulanse',
            color: '#e61919',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
        },
        10: {
            caption: 'Snorkelbil',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            special:
                'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. <br>Quint acts as a Platform Truck and a Fire Truck.',
        },
        11: {
            caption: 'Politihelikopter',
            color: '#ca1616',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
            schooling: 'Police - Police Aviation',
            shownSchooling: 'Police Aviation',
        },
        12: {
            caption: 'Pansret kjøretøy',
            color: '#a51212',
            coins: 25,
            credits: 17_300,
            minPersonnel: 6,
            maxPersonnel: 6,
            wtank: 0,
            schooling: 'Police - Våpentrening',
            shownSchooling: 'SWAT',
            special: 'Nødvendig etter at du har bygt 8 politistasjoner.',
        },
        13: {
            caption: 'Hundepatrulje',
            color: '#aa2222',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
            schooling: 'Politi - Hundepatrulje',
            shownSchooling: 'Hundepatrulje',
            special: 'Nødvendig etter at du har bygt 6 politistasjoner.',
        },
        14: {
            caption: 'Politimotorsykkel',
            color: '#662222',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Politi - Politimotorsykkel',
            shownSchooling: 'Politimotorsykkel',
        },
        15: {
            caption: 'Delta kjøretøy',
            color: '#332222',
            coins: 23,
            credits: 7_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 0,
            special: 'Required once you have built 8 police stations',
            schooling: 'Police - SWAT',
            shownSchooling: 'SWAT',
        16: {
            caption: 'Røykdykkerbil',
            color: '#aa0000',
            coins: 25,
            credits: 11_860,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Nødvendig etter at du har bygd 5 brannstasjoner.',
        },
        17: {
            caption: 'Innsatsstøttebil',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            schooling: 'Krever spesialistutdanning (Skadestedsledelse) ',
            shownSchooling: 'Innsatsstøttebil',
            special: 'Nødvendig etter at du har bygd 13 brannstasjoner.',
        },
        18: {
            caption: 'Redningsbil',
            color: '#880000',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            wtank: 0,
            special: 'Nødvendig etter at du har bygd 4 brannstasjoner.',
        },
        19: {
            caption: 'Dykkerbil',
            color: '#772222',
            coins: 25,
            credits: 10_000,
            minPersonnel: 4,
            maxPersonnel: 5,
            wtank: 0,
            special: 'Krever spesialistutdanning (Redningsdykker kurs)'
        },
        20: {
            caption: 'Lett redningsbåt',
            color: '#772222',
            coins: 12,
            credits: 6_000,
            maxPersonnel: 0,
            wtank: 0,
            special: 'Et egnet kjøretøy trengs for å trekke tilhengeren / båthenger. (Dykkerbil, Mannskapsbil, Lett mannskapsbil)'
        },
        21: {
            caption: 'Branntankbil',
            color: '#570f0f',
            coins: 19,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 1500,
        },
        22: {
            caption: 'Utrykningspolitibil',
            color: '#ad0e0e',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Politi - Utrykningspoliti',
            shownSchooling: 'Utrykningspoliti',
        },
        23: {
            caption: 'Utrykningsenhetbil',
            color: '#ad0e0e',
            coins: 15,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Politi - Våpentrening',
            shownSchooling: 'Våpentrening',
        },
    },
    buildings: {
        7: {
            caption: 'Nødetatssenter',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'All 25 buildings one control center',
            maxLevel: 0,
            special: 'The control center is the administrative center.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        0: {
            caption: 'Brannstasjon',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Ambulanseutvidelse',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
                {
                    caption: 'Flyplassutvidelse',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
                {
                    caption: 'Vannredningsutvidelse',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '4.000 together with small fire stations',
            maxLevel: 39,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Type 1 fire engine', 'Type 2 fire engine'],
            maxBuildingsFunction: (): number => 4_000,
        },
        18: {
            caption: 'Brannstasjon (liten)',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: '4.000 together with fire stations',
            maxLevel: 5,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Type 1 fire engine', 'Type 2 fire engine'],
            maxBuildingsFunction: (): number => 4_000,
        },
        1: {
            caption: 'Brannskole',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Flere klasserom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) fire department schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire- brigade schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Ambulansestasjon',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 39,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulanse'],
        },
        20: {
            caption: 'Ambulansestasjon (liten)',
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
            startVehicles: ['ALS Ambulance'],
        },
        4: {
            caption: 'Sykehus',
            color: '#bbe944',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Generell medisin',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Generell kirurgi',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Gynekologisk',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Urologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Traume',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Nevrologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Nevrokirurgi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Kardiologi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Karkirurgi',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
            maxBuildings: 'No limit',
            maxLevel: 20,
            special:
                'Finance ministers and admins can (expand) association hospitals with the help of credits from the association treasury.',
            startPersonnel: 0,
            startVehicles: [],
        },
        6: {
            caption: 'Politistasjon',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                ...new Array(10).fill({
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '1.500 together with small police stations',
            maxLevel: 39,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Patruljebil'],
            maxBuildingsFunction: (): number => 1_500,
        },
        19: {
            caption: 'Politistasjon (liten)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: '1.500 mit Polizeiwachen zusammen',
            maxLevel: 4,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Patrol Car'],
            maxBuildingsFunction: (): number => 1_500,
        },
        13: {
            caption: 'Politiheliport',
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
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        8: {
            caption: 'Politiskole',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) association police schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association police schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        14: {
            caption: 'Oppstillingsplass',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 4,
            maxLevel: 0,
            special:
                'You can station as many of your own vehicles as you like at a staging area, members of the association can use the room. A staging area remains for 24 hours, but you can reset it to 24 hours at any time.With Premium Account you can have 8 stating areas at the same time',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 4,
        },
        5: {
            caption: 'Helikopterstasjon',
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
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        16: {
            caption: 'Fengsel',
            coins: 'x',
            credits: 100_000,
            extensions: new Array(10).fill({
                caption: 'Prison Cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
            startPersonnel: 0,
            startVehicles: [],
        },
    },
    buildingCategories: {
        'Brann': {
            buildings: [1, 2, 3],
            color: '#ff2d2d',
        },
        'Helse': {
            buildings: [4, 5, 6, 11],
            color: '#ffa500',
        },
        'Politi': {
            buildings: [7, 8, 10, 13, 9],
            color: '#00ac00',
        },
        'Annet': {
            buildings: [0, 12],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire trucks': [0, 1, 10, 18, 20],
                'WaterTanker': [6, 20],
                'Special vehicles': [2, 3, 4, 6, 7, 10, 16, 17],
                'Boats': [19],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5],
                'HEMS': [9],
                'First Responder': [0, 1],
                'Rescue Boat': [19],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Patruljebil': [8],
                'SWAT': [15, 12, 22],
                'Police Motorcycle': [14],
                'Police helicopter': [11],
                'K-9 Unit': [13],
                'Sheriff': [21],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 13,
        3: 16,
        5: 15,
    },
    vehicleBuildings: [0, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18],
    cellBuildings: [5],
    cellExtensions: [
        '5_0',
        '5_1',
        '5_2',
        '5_3',
        '5_4',
        '5_5',
        '5_6',
        '5_7',
        '5_8',
        '5_9',
    ],
    bedBuildings: [2, 14],
    schoolBuildings: [4, 7],
    dispatchCenterBuildings: [0],
    schoolings: {
        'Brannvesenet': [
            {
                caption: 'CBRNe',
                duration: '3 dager',
            },
            {
                caption: 'Skadestedsledelse',
                duration: '5 dager',
            },
            {
                caption: 'ARFF-Training',
                duration: '3 dager',
            },
            {
                caption: 'Redningsdykker kurs',
                duration: '4 dager',
            },
            {
                caption: 'Sjønavigering',
                duration: '5 dager',
            },
        ],
        'Politi': [
            {
                caption: 'Politihelikopterflyvning',
                duration: '7 dager',
            },
            {
                caption: 'Våpentrening',
                duration: '5 dager',
            },
            {
                caption: 'Hundepatrulje',
                duration: '5 dager',
            },
            {
                caption: 'Politimotorsykkel',
                duration: '3 dager',
            },
            {
                caption: 'Utrykningspoliti',
                duration: '3 dager',
            },
        ],
    },
    amount: 'Antall',
    search: 'Søk',
    alliance: 'Allianse',
    premiumNotice:
        'Denne utvidelsen utvider en premium funksjon av spillet, og er derfor kun tilgjengelig for premium brukere av Nødsentralspillet.',
    credits: 'Kreditter',
    close: 'Lukk',
    fullscreen: {
        expand: 'Aktiver fullskjerm',
        compress: 'Deaktiver fullskjerm',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Biler | Bil | Biler',
    building: 'Bygninger',
    station: 'Stasjoner | Stasjon | Stasjoner',
    distance: 'Distanse | Distanser',
    vehicleType: 'Kjøretøytype',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    buildingIcons: [
        'fire',
        'rss',
        'hospital',
        'clinic-medical',
        'graduation-cap',
        'shield-alt',
        'helicopter',
        'graduation-cap',
        'helicopter',
        'building',
        '',
        'ship',
        'ship',
        'fire',
        'stethoscope',
        'shield-alt',
        'clinic-medical',
        'plane',
        'shield-alt',
    ],
    pois: [
        'Park',
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Gas station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Discotheque',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Plant',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Propane depot',
        'Large Ferry Dock',
        'Forest Cabin',
        'Campsite',
        'Bus Terminal',
        'Pier',
        'Fault line',
        'Carpentry Workshop',
        'Playground',
    ],
    only_alliance_missions: [41, 61, 62, 112],
    transfer_missions: [246],
};
