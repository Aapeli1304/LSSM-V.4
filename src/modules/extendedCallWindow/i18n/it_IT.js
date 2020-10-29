module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'Contatore AAR',
            highlight: 'Schema AAR',
            selection: 'Selezione veicoli',
            counter_highlight: 'Contatore / schema AAR',
            counter_selection: 'Contatore AAR e selezione del veicolo',
            highlight_selection: 'Schema AAR e selezione del veicolo',
            counter_highlight_selection:
                'Contatore AAR / bordo e selezione del veicolo',
        },
        reset: '{text} reset',
    },
    arrHover: {
        reset: 'La selezione del veicolo viene ripristinata prima!',
        titles: {
            set:
                "Spesso questa combinazione viene selezionata quando si preme l'AAR",
            attribute: 'La combinazione descritta in questa riga',
            free: 'Così spesso questa combinazione è disponibile',
            max:
                'Puoi selezionare questo AAR fino a quando questa combinazione non sarà più disponibile',
        },
        // TODO: find out italian values
        arrSpecs: {
            fire: 'Camion VVF',
            wasser_amount: "Litri d'acqua",
            elw: 'Funzionario',
            elw2: 'UCL',
            dlk: 'Autoscala',
            rtw: 'Ambulanza MSA',
            ktw: 'Ambulanza BLS',
            rw: 'Veicolo di soccorso pesante',
            fly_car: 'Automedica',
            rescueboat: 'Grande barca di salvataggio',
            fireboat: 'Grande Fireboat',
            gwa: 'Carro Aria',
            gwl2wasser: 'Botte',
            gwgefahrgut: 'N.B.C.R',
            arff: 'ARFF',
            hems: 'HEMS',
            kdow_orgl: 'Capo EMS',
            grtw: 'Unità vittime di massa',
            fustw: 'Volante',
            police_motorcycle: 'Moto polizia',
            fustw_or_police_motorcycle: 'Volante o Moto polizia',
            polizeihubschrauber: 'Elicottero polizia',
            swat: 'SWAT',
            swat_armored_vehicle: 'SWAT Armoured Vehicle',
            swat_suv: 'SWAT SUV',
            k9: 'Cinofili',
            gkw: 'Utility Truck',
            boot: 'Nave (Generale)',
            brush_vehicle: 'Wildland fire vehicle',
            brush_truck: 'Wildland fire engine',
            brush_truck_1: 'Type 3 engine',
            brush_truck_2: 'Type 5 engine',
            brush_truck_3: 'Type 7 engine',
            brush_truck_4: 'Type 4 engine',
            brush_truck_5: 'Type 6 engine',
            dozer_trailer: 'Dozer Trailer',
            fire_aviation: 'Fire aviation',
            water_drop_helicopter: 'Water drop helicopter',
            air_tanker: 'Air tanker',
            heavy_aur_tanker: 'Heavy air tanker',
            crew_carrier: 'Crew Carrier',
            fbi_unit: 'FBI Unit',
            fbi_investigation_unit: 'FBI Investigation Unit',
            fbi_mobile_command: 'FBI Mobile Command',
            fbi_bomb_tech: 'FBI Bomb Tech',
            fbi_drone: 'FBI Surveillance Drone',
            sheriff_unit: 'Sheriff Unit',
        },
    },
    generationDate: {
        inputFormat: 'DD. MMMM, HH:mm',
    },
    enhancedMissingVehicles: {
        vehicle: 'Tipo di veicolo',
        missing: 'Manca sulla missione',
        driving: 'In avvicinamento',
        total: 'Ancora necessario',
        selected: 'Selezionato',
        vehiclesByRequirement: {},
    },
    tailoredTabs: {
        defaultTabs: [
            {
                name: 'Camion VVF',
                vehicleTypes: [0, 1, 13, 18, 33],
            },
            {
                name: 'Altri apparati VVF',
                vehicleTypes: [
                    2,
                    3,
                    4,
                    6,
                    7,
                    8,
                    9,
                    12,
                    17,
                    21,
                    22,
                    24,
                    30,
                    31,
                    32,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                ],
            },
            {
                name: 'Ambulanze',
                vehicleTypes: [5, 11, 15, 20, 25, 27, 28, 29],
            },
            {
                name: 'Polizia',
                vehicleTypes: [10, 14, 16, 19, 23, 26, 47],
            },
            {
                name: 'Acqua',
                vehicleTypes: [21, 22, 24, 25],
            },
            {
                name: 'FBI',
                vehicleTypes: [42, 43, 44, 45, 46],
            },
        ],
        allTab: 'Tutti',
        occupiedTab: 'Azione supplementare',
    },
    hideVehicleList: {
        show: 'Mostra lista veicoli',
        hide: 'Nascondi lista veicoli',
    },
};
