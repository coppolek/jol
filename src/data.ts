import { Site } from './types';

export const initialRequests: any[] = [];
export const initialAbsences: any[] = [];
export const initialJollyOperators: any[] = [
  { id: 'op1', name: 'Mario Rossi', availableDays: ['2023-11-01', '2023-11-02'] },
  { id: 'op2', name: 'Luigi Bianchi', availableDays: ['2023-11-03'] }
];
export const initialOperators: any[] = [
  { id: 'op1', name: 'Mario Rossi', type: 'Jolly' },
  { id: 'op2', name: 'Luigi Bianchi', type: 'Jolly' },
  { id: 'op3', name: 'Giuseppe Verdi', type: 'Standard' }
];

export const initialSites: Site[] = [
  {
    "id": "s1",
    "name": "1 MAG - SAN MAURO PASCOLI",
    "address": "VIA FEDERICO FELLINI, 75",
    "city": "SAN MAURO PASCOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s2",
    "name": "101 - RIMINI VIA FLAMINIA",
    "address": "VIA FLAMINIA, 403",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s3",
    "name": "101 - RIMINI VIA ITALIA",
    "address": "VIA ITALIA, 33",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s4",
    "name": "101 - SAN GIOVANNI IN MARIGNANO",
    "address": "VIA DEGLI IPPOCASTANI,, 5",
    "city": "SAN GIOVANNI IN MARIGNANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s5",
    "name": "3C - RIMINI",
    "address": "CIRCONVALLAZIONE NUOVA, 27",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s6",
    "name": "ACER CONDOMINIO VIA PASCOLI - RIMINI",
    "address": "PASCOLI, SNC",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s7",
    "name": "ACER VIA NOVELLI 13 - RIMINI",
    "address": "NOVELLI , 13",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s8",
    "name": "ACR DI REGGIANI - RIMINI",
    "address": "RAIBANO, 32",
    "city": "CORIANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s9",
    "name": "ACROBATIC - RICCIONE",
    "address": "MARTINELLI, 21",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s10",
    "name": "ADRIA ASPIRAZIONI - TAVULLIA",
    "address": "VIA PIRANO, 10",
    "city": "TAVULLIA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s11",
    "name": "ADRIA CONGREX CSR - RIMINI",
    "address": "VIA SASSONIA, 30",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s12",
    "name": "ADRIACOOP - RIMINI - SOSTITUZIONI",
    "address": "DINA SASSOLI, 24",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s13",
    "name": "AIRIMINUM - RIMINI AEROPORTO FELLINI",
    "address": "VIA FLAMINIA, 409",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s14",
    "name": "AIRIMINUM - RIMINI CASERMA VIGILI DEL FUOCO",
    "address": "VIA BERNARDINO VARISCO, 1/A",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s15",
    "name": "AKRON - CORIANO",
    "address": "RAIBANO, 32",
    "city": "CORIANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s16",
    "name": "ALBATROS DARSENA - RIMINI",
    "address": "VIA ORTIGARA, 63",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s17",
    "name": "ALEA FASHION INDUSTRIES - SAVIGNANO",
    "address": "VIA EMILIA OVEST, 83",
    "city": "SAVIGNANO SUL RUBICONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s18",
    "name": "ALIMENTA - RICCIONE VIA DEL PROGRESSO, 4/6",
    "address": "VIA DEL PROGRESSO, 4/6",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s19",
    "name": "ALIMENTA - RICCIONE VIA DELL'INDUSTRIA, 11",
    "address": "VIA DELL'INDUSTRIA, SNC",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s20",
    "name": "ALIMENTA - SALUDECIO VIA DEL LAVORO, 60",
    "address": "VIA DEL LAVORO, 60",
    "city": "SALUDECIO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s21",
    "name": "ALKA SERVIZI - RIMINI",
    "address": "VIA BIDENTE, 1/B",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s22",
    "name": "ALMA CARIM - PALESTRE - RIMINI",
    "address": "CUNEO, SNC",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s23",
    "name": "ALMA CASA DEL VOLLEY - PALESTRE - RIMINI",
    "address": "BIDENTE, 41",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s24",
    "name": "ALMA EUTERPE- PALESTRE - RIMINI",
    "address": "EUTERPE, 5",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s25",
    "name": "ALMA MATER - AULE MONTASPRO FORLI - PRESIDIO",
    "address": "luciano montaspro, 97",
    "city": "FORLI'",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s26",
    "name": "ALMA MATER - LABIC FORLI - PRESIDIO",
    "address": "giacomo della torre, 1",
    "city": "FORLI'",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s27",
    "name": "ALMA MATER - TEACHING HUB FORLI - PRESIDIO",
    "address": "francesco corridoni, 20",
    "city": "FORLI'",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s28",
    "name": "ALMA MATER STUDIORUM - FAENZA VIA DELLE CERAMICHE",
    "address": "DELLE CERAMICHE, 21",
    "city": "FAENZA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s29",
    "name": "ALTUS - GUESS RICCIONE",
    "address": "CECCARINI, 91",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s30",
    "name": "ALUMINOX - VILLAMARINA",
    "address": "VIA SAN TOMMASO, 12",
    "city": "CESENATICO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s31",
    "name": "AMIR - RIMINI",
    "address": "VIA DARIO CAMPANA, 63",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s32",
    "name": "ANAUNIA - SANTARCANGELO",
    "address": "DEL GRANO, 235",
    "city": "SANTARCANGELO DI ROMAGNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s33",
    "name": "ANTHEA - RIMINI",
    "address": "PIAZZALE KENNEDY, SNC",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s34",
    "name": "ANTICA CUCINA BIO - RIMINI",
    "address": "PIETRARUBBIA, 25M",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s35",
    "name": "ANTINCENDIO RIMINESE - RIMINI - PULIZIE CONTINUATIVE",
    "address": "VIA TOSCA , 59",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s36",
    "name": "APIUSTUDIO - RIMINI",
    "address": "PORTO PALOS, 17",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s37",
    "name": "ARCHIVIO DI STATO - FANO",
    "address": "CASTRACANE, 1",
    "city": "FANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s38",
    "name": "ARCHIVIO DI STATO - PESARO",
    "address": "DELLA NEVIERA, 44",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s39",
    "name": "ARCHIVIO DI STATO - URBINO",
    "address": "PIANO S. LUCIA, 40",
    "city": "URBINO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s40",
    "name": "AREA GIOCHI - PUNTADIFERRO FORLI' - PULIZIE CONTINUATIVE",
    "address": "PIAZZALE DELLA COOPERAZIONE , 2",
    "city": "FORLI'",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s41",
    "name": "ASSOCIAZIONE ARCOBALENO - RICCIONE",
    "address": "VIA GIACINTO MARTINELLI, 21",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s42",
    "name": "AUDIO TRE - RIMINI",
    "address": "EDELWEISS RODRIGUEZ SENIOR, 3",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s43",
    "name": "AUTOMOBILE CLUB ITALIA - RIMINI",
    "address": "VIA ITALIA, 31",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s44",
    "name": "AUTOTRASPORTI GIANNETTI - MISANO",
    "address": "VIA TAVOLETO, 43",
    "city": "MISANO ADRIATICO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s45",
    "name": "BANCA MALATESTIANA  - LONGIANO",
    "address": "DELLA SOLIDARIETA', 8",
    "city": "LONGIANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s46",
    "name": "BANCA MALATESTIANA - ALBA RICCIONE",
    "address": "EMILIA, 62",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s47",
    "name": "BANCA MALATESTIANA - CATTOLICA",
    "address": "DEL PORTO, SNC",
    "city": "CATTOLICA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s48",
    "name": "BANCA MALATESTIANA - CELLE",
    "address": "XXIII SETTEMBRE, 125",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s49",
    "name": "BANCA MALATESTIANA - FONTANELLE",
    "address": "SICILIA, 51",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s50",
    "name": "BANCA MALATESTIANA - GROTTA ROSSA",
    "address": "DELLA GAZZELLA, 23",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s51",
    "name": "BANCA MALATESTIANA - ITTICO",
    "address": "VIA SINISTRA DEL PORTO, 82A",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s52",
    "name": "BANCA MALATESTIANA - MARECCHIESE",
    "address": "MARECCHIESE, 131",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s53",
    "name": "BANCA MALATESTIANA - MISANO ADRIATICO",
    "address": "TAVOLETO, 3A",
    "city": "MISANO ADRIATICO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s54",
    "name": "BANCA MALATESTIANA - MORCIANO",
    "address": "ROMA, 59",
    "city": "MORCIANO DI ROMAGNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s55",
    "name": "BANCA MALATESTIANA - NOVAFELTRIA",
    "address": "XXIV MAGGIO , 81",
    "city": "NOVAFELTRIA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s56",
    "name": "BANCA MALATESTIANA - PALAZZO GHETTI - PIANI SUPERIORI",
    "address": "XX SETTEMBRE, 63",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s57",
    "name": "BANCA MALATESTIANA - PESARO",
    "address": "FIUME, 24",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s58",
    "name": "BANCA MALATESTIANA - POGGIO TORRIANA",
    "address": "SANTARCANGIOLESE, 3102",
    "city": "POGGIO TORRIANA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s59",
    "name": "BANCA MALATESTIANA - POLO ADRIATICO",
    "address": "DEL COMMERCIO , 2",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s60",
    "name": "BANCA MALATESTIANA - RIO SALSO",
    "address": "TRONTO, 6",
    "city": "TAVULLIA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s61",
    "name": "BANCA MALATESTIANA - RIVABELLA",
    "address": "COLETTI, 143",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s62",
    "name": "BANCA MALATESTIANA - RIVAZZURA",
    "address": "DEI MARTIRI, 58",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s63",
    "name": "BANCA MALATESTIANA - S. GIOVANNI IN MARIGNANO",
    "address": "VITTORIO VENETO, 15M",
    "city": "SAN GIOVANNI IN MARIGNANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s64",
    "name": "BANCA MALATESTIANA - SALUDECIO",
    "address": "SANTA MARIA DEL MONTE, 638C",
    "city": "SALUDECIO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s65",
    "name": "BANCA MALATESTIANA - SAN VITO",
    "address": "PARETO, 1",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s66",
    "name": "BANCA MALATESTIANA - SANTA GIUSTINA",
    "address": "EMILIA, 379",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s67",
    "name": "BANCA MALATESTIANA - SANTARCANGELO",
    "address": "PASCOLI, 19",
    "city": "SANTARCANGELO DI ROMAGNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s68",
    "name": "BANCA MALATESTIANA - TORRE PEDRERA",
    "address": "SAN SALVADOR, 51",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s69",
    "name": "BANCA MALATESTIANA - VISERBA",
    "address": "JOHN LENNON, 3",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s70",
    "name": "BANCA MALATESTIANA CSR - CORIANO",
    "address": "GARIBALDI, 119",
    "city": "CORIANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s71",
    "name": "BANCA MALATESTIANA CSR - FLAMINIA",
    "address": "FLAMINIA CONCA, 80",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s72",
    "name": "BANCA MALATESTIANA CSR - IV NOVEMBRE",
    "address": "IV NOVEMBRE, 37",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s73",
    "name": "BANCA MALATESTIANA CSR - OSPEDALETTO",
    "address": "PIAZZA GRAMSCI, 1",
    "city": "CORIANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s74",
    "name": "BANCA MALATESTIANA CSR - PALAZZO GHETTI FILIALE - CORTILE INTERNO",
    "address": "XX SETTEMBRE, 63",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s75",
    "name": "BANCA MALATESTIANA CSR - PALAZZO GHETTI SEDE - PIANO TERRA E SUPERIORI",
    "address": "XX SETTEMBRE , 63",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s76",
    "name": "BANCA MALATESTIANA CSR - VILLA VERUCCHIO",
    "address": "TENUTA AMALIA, 1",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s77",
    "name": "BANDINI - FORLI",
    "address": "VIA GRADAMORA, 19",
    "city": "FORLI'",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s78",
    "name": "BANDINI - IMOLA",
    "address": "VIALE GIUSEPPE DI VITTORIO, 70",
    "city": "IMOLA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s79",
    "name": "BANDINI - MORDANO",
    "address": "VIA PAGNINA, 16",
    "city": "MORDANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s80",
    "name": "BARTORELLI GIOIELLERIA CSR - RICCIONE",
    "address": "DANTE, 53",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s81",
    "name": "BEAUTY LUXURY - RIMINI",
    "address": "FLAMINIA, 300",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s82",
    "name": "BEFANE - RIMINI ",
    "address": "CADUTI DI NASSIRYA, 20",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s83",
    "name": "BENNET - ACQUI TERME",
    "address": "SAVONA, 90/92",
    "city": "ACQUI TERME",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s84",
    "name": "BENNET - ALESSANDRIA LOC. ASTUTI",
    "address": "VIA TORINO, 26",
    "city": "ALESSANDRIA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s85",
    "name": "BENNET - BELFORTE MONFERRATO",
    "address": "VIA MOLINO, 1",
    "city": "BELFORTE MONFERRATO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s86",
    "name": "BENNET - CASTELVETRO PIACENTINO",
    "address": "VIA BELLINA, 4",
    "city": "CASTELVETRO PIACENTINO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s87",
    "name": "BENNET - CENTO",
    "address": "VIA MATTEO LOVES, 2",
    "city": "CENTO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s88",
    "name": "BENNET - COLLE UMBERTO",
    "address": "VIA CALATE, 13",
    "city": "COLLE UMBERTO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s89",
    "name": "BENNET - COMACCHIO",
    "address": "VIA VALLE DELL'ISOLA, 9",
    "city": "COMACCHIO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s90",
    "name": "BENNET - FORLIMPOPOLI",
    "address": "VIA XXV OTTOBRE, 4",
    "city": "FORLIMPOPOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s91",
    "name": "BENNET - PIEVE DI SOLIGO",
    "address": "VIA DEGLI ARTIGIANI, 426",
    "city": "PIEVE DI SOLIGO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s92",
    "name": "BENNET - PRADAMANO",
    "address": "VIA NAZIONALE, 108",
    "city": "PRADAMANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s93",
    "name": "BENNET - SACILE",
    "address": "VIALE EUROPA, 1",
    "city": "SACILE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s94",
    "name": "BIBLIOTECA D'ARTE DEI MUSEI CIVICI - PESARO",
    "address": "VIA ROSSINI, 37",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s95",
    "name": "BIBLIOTECA E ARCHIVIO VITTORIO BOBBATO - PESARO",
    "address": "GALLERIA DEI FONDITORI, 64",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s96",
    "name": "BIBLIOTECA LOUIS BRAILLE - PESARO",
    "address": "PIAZZALE EUROPA, 16",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s97",
    "name": "BIBLIOTECA PEPPINO IMPASTATO - PESARO",
    "address": "VIA DELLA CONCORDIA, S.N.",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s98",
    "name": "BIBLIOTECA RODARI - PESARO - PORITERATO",
    "address": "DELL'INDIPENDENZA, S.N.",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s99",
    "name": "BIBLIOTECA SAN GIOVANNI - PESARO",
    "address": "VIA G. PASSERI, 102",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s100",
    "name": "BIBLIOTECA UMBERTO SPADONI - PESARO",
    "address": "LARGO VOLONTARI DEL SANGUE, 9",
    "city": "PESARO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s101",
    "name": "BIOCLEAN - TANGIBLE - SANTARCANGELO",
    "address": "EMILIA, 3009",
    "city": "SANTARCANGELO DI ROMAGNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s102",
    "name": "BOFROST - RIMINI - PULIZIE CONTINUATIVE",
    "address": "VECCHIA EMILIA, 75",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s103",
    "name": "BONZAI - MONTALETTO CERVIA",
    "address": "DELL'INDUSTRIA, 6",
    "city": "CERVIA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s104",
    "name": "BRN VILLAGE - FORLIMPOPOLI",
    "address": "GIORGIO AMENDOLA, 22",
    "city": "FORLIMPOPOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s105",
    "name": "BULL BIKES - DUCATI - MISANO",
    "address": "ADRIATICA, 169",
    "city": "MISANO ADRIATICO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s106",
    "name": "CA' PELLETTI - BOLOGNA",
    "address": "ALTABELLA, 15C",
    "city": "BOLOGNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s107",
    "name": "CAAR - RIMINI",
    "address": "VECCHIA EMILIA, 75",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s108",
    "name": "CAEM SVILUPPO - MISANO ADRIATICO",
    "address": "CELLA RAIBANO, 33A",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s109",
    "name": "CAEM SVILUPPO - RIMINI",
    "address": "DELLA MARTORA, 2",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s110",
    "name": "CAEM SVILUPPO - SANTARCANGELO",
    "address": "MORIGI, 65",
    "city": "SANTARCANGELO DI ROMAGNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s111",
    "name": "CAEM SVILUPPO - TALAMELLO",
    "address": "FIUME, 10/A",
    "city": "TALAMELLO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s112",
    "name": "CALZATURIFICIO CASADEI - GIUNTERIA - SAN MAURO",
    "address": "RIO SALTO, 11",
    "city": "SAN MAURO PASCOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s113",
    "name": "CALZATURIFICIO CASADEI - SEDE - SAN MAURO ",
    "address": "XX SETTEMBRE , 87",
    "city": "SAN MAURO PASCOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s114",
    "name": "CALZATURIFICIO CASADEI - SPEDIZIONI - SAN MAURO",
    "address": "RUFFILLI, 11",
    "city": "SAN MAURO PASCOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s115",
    "name": "CALZATURIFICIO CATIA - SAN MAURO",
    "address": "PIAZZA UMBERTO NOBILE, 3",
    "city": "SAN MAURO PASCOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s116",
    "name": "CAMPUS RAVENNA - CASA TRAVERSARI VIA S.VITALE",
    "address": "SAN VITALE, 28",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s117",
    "name": "CAMPUS RAVENNA - COORDINAMENTO ALTRI CAMPUS",
    "address": "DINA SASSOLI, 24",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s118",
    "name": "CAMPUS RAVENNA - EX ASILO INFANTILE VIA TOMBESI",
    "address": "TOMBESI DALL'OVA, 55",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s119",
    "name": "CAMPUS RAVENNA - FAENZA VIA GRANAROLO",
    "address": "GRANAROLO, 62",
    "city": "FAENZA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s120",
    "name": "CAMPUS RAVENNA - LAUREE CASA MATHA",
    "address": "piazza andrea costa, 3",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s121",
    "name": "CAMPUS RAVENNA - OSPEDALE SANTA MARIA DELLE CROCI",
    "address": "Viale Vincenzo Randi, , 5",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s122",
    "name": "CAMPUS RAVENNA - PALAZZO CONGRESSI",
    "address": "LARGO FIRENZE, 1",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s123",
    "name": "CAMPUS RAVENNA - PALAZZO CORRADINI",
    "address": "MARIANI, 5",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s124",
    "name": "CAMPUS RAVENNA - PALAZZO SANTACROCE VIA GUACCIMANNI",
    "address": "GUACCIMANNI, 42",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s125",
    "name": "CAMPUS RAVENNA - PALAZZO STROCCHI VIA DEGLI ARIANI",
    "address": "ARIANI, 1",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s126",
    "name": "CAMPUS RAVENNA - PALAZZO VERDI VIA PASOLINI",
    "address": "PASOLINI, 23",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s127",
    "name": "CAMPUS RAVENNA - SEMINARIO ARCIVESCOVILE VIA OBERDAN",
    "address": "OBERDAN, 1",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s128",
    "name": "CAMPUS RAVENNA - VIA S.ALBERTO",
    "address": "SAN ALBERTO, 163",
    "city": "RAVENNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s129",
    "name": "CAMST CSR - SCUOLA ELEMENTARE CAMERANO POGGIO TORRIANA",
    "address": "MACELLO DI CAMERANO, 581",
    "city": "POGGIO TORRIANA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s130",
    "name": "CAMST CSR - SCUOLA ELEMENTARE MARINO MORETTI SANTO MARINO",
    "address": "SANTARCANGIOLESE, 5470",
    "city": "POGGIO TORRIANA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s131",
    "name": "CARROZZERIA ROMA - RIMINI",
    "address": "CLERICI, 9",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s132",
    "name": "CASCATA DELLE MARMORE",
    "address": "CONTE MENOTTI, 15",
    "city": "",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s133",
    "name": "CEMI SCUOLA SUZUKI - RIMINI",
    "address": "DARIO CAMPANA, 65",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s134",
    "name": "CENTRO DI RACCOLTA CSR - RICCIONE VIA LOMBARDIA",
    "address": "LOMBARDIA, SNC",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s135",
    "name": "CENTRO DI RACCOLTA CSR - RIMINI VIA MACANNO",
    "address": "MACANNO, 3",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s136",
    "name": "CERAMICA DEL CONCA CSR - SAN CLEMENTE",
    "address": "VIA CROCE, 8",
    "city": "SAN CLEMENTE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s137",
    "name": "CHE FINESTRE - CATTOLICA",
    "address": "EMILIA ROMAGNA, 164",
    "city": "CATTOLICA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s138",
    "name": "CHE FINESTRE - POGGIO TORRIANA",
    "address": "SANTARCANGIOLESE, 3034",
    "city": "POGGIO TORRIANA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s139",
    "name": "CHIESA SAN GASPARE - RIMINI",
    "address": "SANTA CHIARA , 23",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s140",
    "name": "CIACCI BARBARA - RIMINI",
    "address": "CAIROLI, 23",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s141",
    "name": "CIBA BROKERS - RIMINI - PULIZIE CONTINUATIVE",
    "address": "CADUTI DI MARZABOTTO, 38",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s142",
    "name": "CILS - EMMEFOOD - SAN MAURO PASCOLI",
    "address": "VENA, 30",
    "city": "SAN MAURO PASCOLI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s143",
    "name": "CIRCOLO VELICO - RIMINI",
    "address": "DESTRA DEL PORTO, 147B",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s144",
    "name": "CIT SERVICE - RIMINI",
    "address": "ROMANIA, 7",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s145",
    "name": "CMA 2000 - CORIANO",
    "address": "CESARE PAVESE, 22",
    "city": "CORIANO",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s146",
    "name": "CNA - BELLARIA",
    "address": "ORAZIO, 128",
    "city": "BELLARIA-IGEA MARINA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s147",
    "name": "CNA - NOVAFELTRIA",
    "address": "25 APRILE, 1/B",
    "city": "NOVAFELTRIA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s148",
    "name": "CNA - RICCIONE",
    "address": "CECCARINI, 163",
    "city": "RICCIONE",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s149",
    "name": "CNA - RIMINI",
    "address": "PIAZZALE TOSI, 4",
    "city": "RIMINI",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s150",
    "name": "CNA - SANTARCANGELO",
    "address": "TOGLIATTI, 17",
    "city": "SANTARCANGELO DI ROMAGNA",
    "schedules": [],
    "assignedOperatorId": null
  },
  {
    "id": "s151",
    "name": "CNA - SANTARCANGELO CENTRO TEOREMA",
    "address": "VIA TOSI, 318",
    "city": "SANTARCANGELO DI ROMAGNA",
    "schedules": [],
    "assignedOperatorId": null
  }
,
  {
  "id": "s20082",
  "name": "BEFANE - RIMINI",
  "address": "CADUTI DI NASSIRYA, 20",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200113",
  "name": "CALZATURIFICIO CASADEI - SEDE - SAN MAURO",
  "address": "XX SETTEMBRE , 87",
  "city": "SAN MAURO PASCOLI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200152",
  "name": "CNS - ARIA - CORSO ITALIA 52 MILANO",
  "address": "CORSO ITALIA, 52",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200153",
  "name": "CNS - ARIA - VIA CONCA DEL NAVIGLIO 45 MILANO",
  "address": "CONCA DEL NAVIGLIO, 45",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200154",
  "name": "CNS - ARIA - VIA JUVARA 22 MILANO",
  "address": "JUVARA, 22",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200155",
  "name": "CNS - ARIA - VIA STATUTO 5 MILANO",
  "address": "STATUTO, 5",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200156",
  "name": "CNS - COMUNE MILANO - ALZAIA NAVIGLIO PAVESE 16",
  "address": "ALZAIA NAVIGLIO PAVESE, 16",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200157",
  "name": "CNS - COMUNE MILANO - CORSO XXII MARZO 12",
  "address": "CORSO XXII MARZO, 12",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200158",
  "name": "CNS - COMUNE MILANO - IST.COM. VIA GIACOSA 46",
  "address": "GIACOSA, 46",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200159",
  "name": "CNS - COMUNE MILANO - IST.COM. VIA PADOVA 69",
  "address": "PADOVA, 69",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200160",
  "name": "CNS - COMUNE MILANO - PALAZZO MARINO P. SCALA 2",
  "address": "PIAZZA DELLA SCALA, 2",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200161",
  "name": "CNS - COMUNE MILANO - POLO VIA DELEDDA 11",
  "address": "GRAZIA DELEDDA, 11",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200162",
  "name": "CNS - COMUNE MILANO - TEMPIO S.SEBASTIANO V.TORINO",
  "address": "TORINO, 28",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200163",
  "name": "CNS - COMUNE MILANO - UFFICI VIA DURANDO 38A",
  "address": "DURANDO , 38A",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200164",
  "name": "CNS - COMUNE MILANO - UFFICI VIA LARGA 12",
  "address": "LARGA, 12",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200165",
  "name": "CNS - COMUNE MILANO - UFFICI VIA SILE 8",
  "address": "SILE, 8",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200166",
  "name": "CNS - COMUNE MILANO - VIA ALEX VISCONTI 18",
  "address": "ALEX VISCONTI, 18",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200167",
  "name": "CNS - COMUNE MILANO - VIA BERNARDINO VERRO 87",
  "address": "BERNARDINO VERRO, 87",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200168",
  "name": "CNS - COMUNE MILANO - VIA BEROLDO 9",
  "address": "BEROLDO, 9",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200169",
  "name": "CNS - COMUNE MILANO - VIA DOGANA 2",
  "address": "DOGANA, 2",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200170",
  "name": "CNS - COMUNE MILANO - VIA FRIULI 30",
  "address": "FRIULI, 30",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200171",
  "name": "CNS - COMUNE MILANO - VIA G.B. VICO 18 - PORTIERATO",
  "address": "G.B. VICO , 18",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200172",
  "name": "CNS - COMUNE MILANO - VIA GIUSTI 42",
  "address": "GIUSTI , 42",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200173",
  "name": "CNS - COMUNE MILANO - VIA MURILLO 17",
  "address": "MURILLO, 17",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200174",
  "name": "CNS - COMUNE MILANO - VIA PALMIERI 20",
  "address": "PALMIERI, 20",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200175",
  "name": "CNS - COMUNE MILANO - VIA PAREA 26",
  "address": "PAREA, 26",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200176",
  "name": "CNS - COMUNE MILANO - VIA PEPE 40",
  "address": "PEPE, 40",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200177",
  "name": "CNS - COMUNE MILANO - VIA SAVONA 66",
  "address": "SAVONA, 66",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200178",
  "name": "CNS - COMUNE MILANO - VILLA SCHEIBLER VIA ORSINI",
  "address": "FELICE ORSINI, 21",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200179",
  "name": "CNS - UNIVERSITA' MILANO - FONDAZIONE UNIMI",
  "address": "ORTLES, 22/4",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200180",
  "name": "CNS - UNIVERSITA' MILANO - PIAZZA S. ALESSANDRO 1",
  "address": "PIAZZA S. ALESSANDRO, 1",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200181",
  "name": "CNS - UNIVERSITA' MILANO - VIA BRERA 28",
  "address": "BRERA, 28",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200182",
  "name": "CNS - UNIVERSITA' MILANO - VIA DELLA COMMENDA 19",
  "address": "DELLA COMMENDA , 19",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200183",
  "name": "CNS - UNIVERSITA' MILANO - VIA FESTA DEL PERDONO 7",
  "address": "FESTA DEL PERDONO, 7",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200184",
  "name": "CNS - UNIVERSITA' MILANO - VIA MERCALLI 23",
  "address": "MERCALLI, 23",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200185",
  "name": "CNS - UNIVERSITA' MILANO - VIA PACE 10",
  "address": "PACE, 10",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200186",
  "name": "CNS - UNIVERSITA' MILANO - VIA S. ANTONIO 12",
  "address": "S. ANTONIO, 12",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200187",
  "name": "COCCI LUCIANO - CORIANO",
  "address": "MARENELLO, 1",
  "city": "CORIANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200188",
  "name": "COCCO & GIGANTE - RIMINI - PULIZIE CONTINUATIVE",
  "address": "RODRIGUEZ, 13",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200189",
  "name": "COLORIFICIO MP - RIMINI VIA GRANDI",
  "address": "GRANDI, SNC",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200190",
  "name": "COLORIFICIO MP - RIMINI VIA PASTORE",
  "address": "GIULIO PASTORE, 2",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200191",
  "name": "COMUNE - OFFIDA - PULIZIE CONTINUATIVE",
  "address": "CORSO SERPENTE AUREO, 66",
  "city": "OFFIDA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200192",
  "name": "COMUNE DI BELLARIA CSR - BELLARIA",
  "address": "PIAZZA DEL POPOLO, 1",
  "city": "BELLARIA-IGEA MARINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200193",
  "name": "CONDOMINIO 696 - VIA ROSMINI BELLARIA",
  "address": "ROSMINI, 5",
  "city": "BELLARIA-IGEA MARINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200194",
  "name": "CONDOMINIO CASTORE - RIMINI",
  "address": "CASTORE, 19",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200195",
  "name": "CONDOMINIO DIAMANTE - VIA BELTRAMI VISERBA",
  "address": "BELTRAMI, 18",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200196",
  "name": "CONDOMINIO DON MILANI - SAVIGNANO - PULIZIE CONTINUATIVE",
  "address": "DON MILANI, 31",
  "city": "SAVIGNANO SUL RUBICONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200197",
  "name": "CONDOMINIO GAROFANO - RIMINI",
  "address": "VIA DEL GAROFANO, 3",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200198",
  "name": "CONDOMINIO IMAGINE - VIA SARTI RIMINI",
  "address": "SARTI, 9",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200199",
  "name": "CONDOMINIO PALACONGRESSI - RICCIONE",
  "address": "VIRGILIO, 17",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200200",
  "name": "CONDOMINIO RICASOLI - RIMINI",
  "address": "TRIPOLI, 129",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200201",
  "name": "CONDOMINIO SMERALDO - SANTARCANGELO - PULIZIE CONTINUATIVE",
  "address": "GIUSEPPE DI VITTORIO, 32",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200202",
  "name": "CONDOMINIO TERMINUS - RIMINI",
  "address": "PORTO PALOS, 3",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200203",
  "name": "CONDOMINIO TONIOLO - SAN VITO - PULIZIE CONTINUATIVE",
  "address": "TONIOLO, 34",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200204",
  "name": "CONDOMINIO VIA TERRACINI - VILLA VERUCCHIO",
  "address": "TERRACINI, 11",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200205",
  "name": "CONDOMINIO VILLA MARIA VARLA - VIA MASSAUA RIMINI",
  "address": "MASSAUA, 1",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200206",
  "name": "CONDOMINIO ZANGHERI 79 - SAVIGNANO - PULIZIE CONTINUATIVE",
  "address": "ZANGHERI, 79",
  "city": "SAVIGNANO SUL RUBICONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200207",
  "name": "CONDOMINIO ZANGHERI 89 - SAVIGNANO - PULIZIE CONTINUATIVE",
  "address": "ZANGHERI, 89",
  "city": "SAVIGNANO SUL RUBICONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200208",
  "name": "CONSORZIO GROUP SERVICE - FIERE",
  "address": "DINA SASSOLI, 24",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200209",
  "name": "CONSORZIO GROUP SERVICE - RIMINI",
  "address": "ORSOLETO , 236",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200210",
  "name": "CONSORZIO LOGICA - RIMINI",
  "address": "VIA UNGHERIA, 3",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200211",
  "name": "CONSORZIO PUNTADIFERRO - FORLI'",
  "address": "PIAZZALE DELLA COOPERAZIONE, 4",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200212",
  "name": "CONSULENZA PER L'IMPRESA - RIMINI",
  "address": "SOLERI BRANCALEONI, 6",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200213",
  "name": "COOPERATIVA LAVORATORI DEL MARE - RICCIONE",
  "address": "CARDUCCI, 18",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200214",
  "name": "COOPERATIVA LAVORATORI DEL MARE - RIMINI",
  "address": "FRATELLI LEURINI, 1",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200215",
  "name": "CTA - RIMINI",
  "address": "RODRIGUEZ, 3",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200216",
  "name": "D21.4 - SANTARCANGELO",
  "address": "PIAZZA MARINI, 32",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200217",
  "name": "DACHSER & FERCAM - CATTOLICA",
  "address": "MERCADANTE, 93",
  "city": "CATTOLICA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200218",
  "name": "DARSENA RIMINI",
  "address": "ORTIGARA, 80",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200219",
  "name": "DEBAR - SAN GIOVANNI IN MARIGNANO - RIMINI",
  "address": "DEI CASTAGNI, 200",
  "city": "SAN GIOVANNI IN MARIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200220",
  "name": "DELLAROSA LUBRIFICANTI - RIMINI",
  "address": "ACHILLE GRANDI, 36",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200221",
  "name": "DIGITAL PROMOTER - RIMINI",
  "address": "FLAMINIA CONCA, 85",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200222",
  "name": "DOTT. STEFANO ROSSI - RIMINI",
  "address": "C.SO D'AUGUSTO , 81",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200223",
  "name": "DRENATER - RIMINI",
  "address": "VIA CASALECCHIO, 27",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200224",
  "name": "EBER - RIMINI",
  "address": "VALTURIO, 38",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200225",
  "name": "ECO DEMOLIZIONI - RIMINI",
  "address": "EMILIA , 177",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200226",
  "name": "ECO DEMOLIZIONI - SANTARCANGELO",
  "address": "DEL CARPINO, 4",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200227",
  "name": "EDIFICO - RIMINI",
  "address": "S.S. 72 CONSOLARE RIMINI-RSM, 15",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200228",
  "name": "EDILGRID - POGGIO TORRIANA",
  "address": "FAMIGNANO, 4",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200229",
  "name": "EGRAM - SANTARCANGELO VIA A. COSTA",
  "address": "ANDREA COSTA, 111/G",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200230",
  "name": "EGRAM - SANTARCANGELO VIA BERTOZZI",
  "address": "BERTOZZI, 102",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200231",
  "name": "EMCTEST - RIMINI",
  "address": "MARECCHIESE, 273",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200232",
  "name": "ENERGY BROKER - RIMINI",
  "address": "COVIGNANO, 75",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200233",
  "name": "F.LLI ROSSI - POGGIO TORRIANA",
  "address": "SANTARCANGIOLESE, 29",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200234",
  "name": "FA AEROPORTO LUIGI RIDOLFI - FORLI - PULIZIE CONTINUATIVE",
  "address": "CARLO SEGANTI, 103",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200235",
  "name": "FCF - ENGEL & VOELKERS - RICCIONE",
  "address": "DANTE, 88",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200236",
  "name": "FCF - ENGEL & VOELKERS - RIMINI",
  "address": "GAMBALUNGA, 10",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200237",
  "name": "FERRAMENTA CITA - RIMINI",
  "address": "CIRCONVALLAZIONE OCCIDENTALE, 138",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200238",
  "name": "FIERA DI RIMINI - RIMINI",
  "address": "VIA EMILIA, 155",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200239",
  "name": "FIERA VICENZA",
  "address": "DELL'OREFICERIA, 16",
  "city": "VICENZA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200240",
  "name": "FIMAR CSR - VILLA VERUCCHIO",
  "address": "SANDRO PERTINI, 29",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200241",
  "name": "FIN PROJECT - RIMINI",
  "address": "FLAMINIA CONCA, 85",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200242",
  "name": "FINANZIARIA VALENTINI - RIMINI",
  "address": "DON ORESTE BENZI, 1",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200243",
  "name": "FONTEMAGGI - RIMINI",
  "address": "CASALECCHIO, 39Z",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200244",
  "name": "FORMUL AUSL - DH RICCIONE",
  "address": "VIALE VENETO, 43",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200245",
  "name": "FORMULA AUSL - CATTOLICA PIAZZA REPUBBLICA",
  "address": "PIAZZA DELLA REPUBBLICA, SNC",
  "city": "CATTOLICA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200246",
  "name": "FORMULA AUSL - CATTOLICA VIA BEETHOVEN",
  "address": "BEETHOVEN, SNC",
  "city": "CATTOLICA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200247",
  "name": "FORMULA AUSL - CONSULTORIO VILLA VERUCCHIO",
  "address": "Piazza Sandra Borsalino, 17",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200248",
  "name": "FORMULA AUSL - GUARDIA MEDICA ALFERO",
  "address": "GIACOMO LEOPARDI, 14",
  "city": "VERGHERETO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200249",
  "name": "FORMULA AUSL - OSPEDALE ANGIOLONI SAN PIERO",
  "address": "VIA GUGLIELMO MARCONI, 36",
  "city": "BAGNO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200250",
  "name": "FORMULA AUSL - OSPEDALE VERUCCHIO",
  "address": "MONTE UGONE, 5",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200251",
  "name": "FORMULA AUSL - POLIAMBULATORI SARSINA",
  "address": "MARTIRI DUNGHERIA, 2",
  "city": "SARSINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200252",
  "name": "FORMULA AUSL - SERVIZIO VETERINARIO SAN PIERO",
  "address": "MONTEGRANELLI, 68",
  "city": "BAGNO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200253",
  "name": "FORMULA AUSL - VIA PAGANINI POGGIO TORRIANA",
  "address": "PAGANINI, 1",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200254",
  "name": "FORMULA AUSL - VIA SANTARCANGIOLESE POGGIO TORRIANA",
  "address": "SANTARCANGIOLESE, 5470",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200255",
  "name": "FORMULA HERA CA BALDACCI - RIMINI",
  "address": "SAN MARTINO IN XX, 19",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200256",
  "name": "FORMULA ROMAGNA ACQUE - RIMINI",
  "address": "DARIO CAMPANA, 61",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200257",
  "name": "FORMULA ROMAGNA ACQUE - S. IN MARIGNANO",
  "address": "FRASINETO, 585",
  "city": "SAN GIOVANNI IN MARIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200258",
  "name": "FULCROS - RIMINI",
  "address": "MACANNO, 38B",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200259",
  "name": "GCS - SANTARCANGELO",
  "address": "DELL'ARTIGIANATO, 6",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200260",
  "name": "GEA SERVICE - CA BALDACCI - RIMINI",
  "address": "SAN MARTINO IN XX, 19",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200261",
  "name": "GIFIZE FILICORI - RIMINI",
  "address": "FLAMINIA, 126",
  "city": "",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200262",
  "name": "GILMAR CSR - SAN GIOVANNI IN MARIGNANO",
  "address": "MALPASSO, 723/725",
  "city": "SAN GIOVANNI IN MARIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200263",
  "name": "GLOBAL SERVICE - ATELIER EME RIMINI",
  "address": "MENTANA, 19A",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200264",
  "name": "GLOBAL SERVICE - DIVEL CENTO",
  "address": "FERRARESE, 1",
  "city": "CENTO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200265",
  "name": "GLOBAL SERVICE - FALCONERI - RIMINI",
  "address": "CORSO D'AUGUSTO, 138",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200266",
  "name": "GLOBALFORNITURE - RIMINI - PULIZIE CONTINUATIVE",
  "address": "MARECCHIESE, 479",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200267",
  "name": "GOLFERA - LAVEZZOLA",
  "address": "DELL'INDUSTRIA, 6/8",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200268",
  "name": "GOLFERA - SAN MAURO PASCOLI",
  "address": "CAVINA, 32",
  "city": "SAN MAURO PASCOLI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200269",
  "name": "GORINI COSTRUZIONI - RIMINI",
  "address": "PADRE TOSI, 17",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200270",
  "name": "GSA CAMPUS RIMINI SOSTITUZIONI",
  "address": "ANGERA', 22",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200271",
  "name": "HARMONT & BLAINE - RIMINI - PULIZIE CONTINUATIVE",
  "address": "CADUTI DI NASSIRIYA, 20",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200272",
  "name": "HENOTO - ARSENALE VENEZIA",
  "address": "SESTIERE CASTELLO, 2732/F",
  "city": "VENEZIA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200273",
  "name": "HENOTO - FIERA BOLOGNA",
  "address": "FIERA STREET, 20",
  "city": "BOLOGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200274",
  "name": "HENOTO - FIERA VERONA",
  "address": "VIALE DEL LAVORO, 8",
  "city": "VERONA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200275",
  "name": "HENOTO - GENOVA",
  "address": "ASSAROTTI , 13",
  "city": "GENOVA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200276",
  "name": "HERA - PIATTAFORMA - BELLARIA",
  "address": "FORNACE, 14",
  "city": "BELLARIA-IGEA MARINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200277",
  "name": "HERA CSR - RIMINI",
  "address": "DINA SASSOLI, 24",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200278",
  "name": "HI-NET - RIMINI",
  "address": "FLAMINIA CONCA, 85",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200279",
  "name": "HUB - CESENATICO",
  "address": "VIA L. DA VINCI, 32",
  "city": "CESENATICO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200280",
  "name": "I SERRAMI - OKNOPLAST CESENA",
  "address": "CERVESE, 2636",
  "city": "CESENA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200281",
  "name": "I SERRAMI - OKNOPLAST RIMINI",
  "address": "COVIGNANO, 107",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200282",
  "name": "I SERRAMI - OKNOPLAST SANTARCANGELO",
  "address": "ANDREA COSTA, 78",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200283",
  "name": "ICO - ALANNO",
  "address": "E. FERMI, 5",
  "city": "ALANNO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200284",
  "name": "ICO - PIANELLA",
  "address": "M. BELLISARIO, 460",
  "city": "PIANELLA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200285",
  "name": "ICO - SAN GIOVANNI TEATINO",
  "address": "G. AMENDOLA, 168",
  "city": "SAN GIOVANNI TEATINO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200286",
  "name": "IDROSANITARIA - RIMINI",
  "address": "FLAMINIA , 134",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200287",
  "name": "IEG CSR - FIERA MILANO - SALES BACK OFFICE SPECIALIST",
  "address": "Strada Statale Sempione, 28, 28",
  "city": "MILANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200288",
  "name": "IEG CSR - PALA RIMINI - SUPPORTO UFFICIO TECNICO PALAS",
  "address": "DELLA FIERA , 23",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200289",
  "name": "IL MAGLIFICIO  PULIZIE - PIOBBICO - PULIZIE CONTINUATIVE",
  "address": "ARCIPRETI LONDEI, SNC",
  "city": "PIOBBICO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200290",
  "name": "IL MAGLIFICIO CUCINA - PIOBBICO - PREPARAZIONE PASTI",
  "address": "ARCIPRETI LONDEI, SNC",
  "city": "PIOBBICO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200291",
  "name": "IMAB - FALASCONI",
  "address": "VIA FALASCONI, 92",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200292",
  "name": "IMAB  UP01 - METAURO 7",
  "address": "VIA METAURO, 7",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200293",
  "name": "IMAB UP016 - METAURO 17",
  "address": "METAURO, 17",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200294",
  "name": "IMAB UP017 - METAURO 13",
  "address": "METAURO , 13",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200295",
  "name": "IMAB UP02 - VOLTA",
  "address": "VIA VOLTA, 2",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200296",
  "name": "IMAB UP03 - MEUCCI",
  "address": "VIA MEUCCI, SNC",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200297",
  "name": "IMAB UP07 - PISACANE",
  "address": "VIA PISACANE, SNC",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200298",
  "name": "IMAB UP08 ASILO - FERMIGNANO",
  "address": "ENRICO FERMI, SNC",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200299",
  "name": "IMAB UP11 - CANAVACCIO",
  "address": "VIA DELL'INDUSTRIA, 19",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200300",
  "name": "IMAB UP24 - FERMIGNANO",
  "address": "VIA BENJAMIN FRANKLIN, 9",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200301",
  "name": "INCOS - CASTELLO D'ARGILE",
  "address": "VIA EINAUDI, 8",
  "city": "CASTELLO D'ARGILE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200302",
  "name": "INDUSTRIE VALENTINI - VIA RIGOLETTO RIMINI",
  "address": "RIGOLETTO, 27",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200303",
  "name": "INTERNATIONAL DESIGN - SANTARCANGELO",
  "address": "DEL PINO, 21",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200304",
  "name": "INTESA GREEN - RIMINI",
  "address": "GALLA PLACIDIA, 27",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200305",
  "name": "ITALMEC - SAVIGNANO",
  "address": "PIETA', 96",
  "city": "SAVIGNANO SUL RUBICONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200306",
  "name": "ITALY GREEN POWER - RIMINI",
  "address": "COVIGNANO, 201",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200307",
  "name": "ITTICA RIMINESE - RIMINI",
  "address": "VECCHIA EMILIA, 75",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200308",
  "name": "IZEOS - VIA CIRCONVALLAZIONE RIMINI",
  "address": "CIRCONVALLAZIONE, 67",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200309",
  "name": "IZEOS - VIA DELLA FIERA RIMINI",
  "address": "DELLA FIERA, 23F",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200310",
  "name": "JUNECO - RIMINI - PULIZIA CONTINUATIVA",
  "address": "CADUTI DI NASSIRIYA, 20",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200311",
  "name": "LA LEGNAMI - SAVIGNANO",
  "address": "PIETA' , 106",
  "city": "SAVIGNANO SUL RUBICONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200312",
  "name": "LAB TRAVEL - EUPHEMIA RIMINI",
  "address": "FLAMINIA, 175E",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200313",
  "name": "L'ALTRA ROMAGNA - SARSINA - PULIZIE CONTINUATIVE",
  "address": "ROMA, 24",
  "city": "SARSINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200314",
  "name": "LASERSOFT - RIMINI",
  "address": "DON ORESTE BENZI, 1",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200315",
  "name": "LESEPIDADO - CASTEL SAN PIETRO TERME",
  "address": "LIGURIA, 8",
  "city": "CASTEL SAN PIETRO TERME",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200316",
  "name": "LIU JO - RIMINI - PULIZIA CONTINUATIVA",
  "address": "CADUTI DI NASSIRIYA, 20",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200317",
  "name": "LUVI - PECCATI DI GOLA - RIMINI",
  "address": "LAGOMAGGIO, 80",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200318",
  "name": "MAICOL COSMI - RIMINI",
  "address": "RENATA TEBALDI, 29",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200319",
  "name": "MANALY - VICENZA",
  "address": "CORDELLINA, 100",
  "city": "SOVIZZO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200320",
  "name": "MANCINI LOGISTIC - SANTARCANGELO",
  "address": "BUSCA, 110",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200321",
  "name": "MANNY SERVICE - RIMINI",
  "address": "CORIANO, 58",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200322",
  "name": "MARR CSR - SANTARCANGELO",
  "address": "DELL'ACERO, 2/4",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200323",
  "name": "MARR CSR - VIA SPAGNA RIMINI",
  "address": "SPAGNA, 20",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200324",
  "name": "MARR SI FRUTTA VIA CINA - RIMINI",
  "address": "CINA, 4",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200325",
  "name": "MATERNA GABBIANO - RIMINI - AUSILIARIATO",
  "address": "RINALDO ORSINI, 26",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200326",
  "name": "MATERNA GLICINE - RIMINI - AUSILIARIATO",
  "address": "VIA ADELIO PAGLIARANI, 2",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200327",
  "name": "MATERNA QUADRIFOGLIO - RIMINI - AUSILIARIATO",
  "address": "MIRANDOLA, 6",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200328",
  "name": "MEC EUROPE - RIMINI",
  "address": "PASTORE, 32",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200329",
  "name": "MEDIA & MEDIA - RIMINI",
  "address": "PRINCIE AMEDEO, 7",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200330",
  "name": "MERCATO COPERTO - RIMINI",
  "address": "CASTELFIDARDO, 15",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200331",
  "name": "METALTECNICA - BELLARIA",
  "address": "VIVALDI, 13",
  "city": "BELLARIA-IGEA MARINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200332",
  "name": "METALTECNICA - BELLARIA VIA ROSSINI",
  "address": "G. ROSSINI, 26",
  "city": "BELLARIA-IGEA MARINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200333",
  "name": "MIJIC ARCHITECTS - RIMINI - PULIZIE",
  "address": "CORSO D'AUGUSTO, 76",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200334",
  "name": "MONDILLA - RIMINI",
  "address": "EDELWEISS RODRIGUEZ, 13",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200335",
  "name": "MONTEVECCHI - RIMINI",
  "address": "VALENTINI, 11",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200336",
  "name": "MORATO PANE - CERASOLO",
  "address": "PASCOLI, 20A",
  "city": "CORIANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200337",
  "name": "MOTORIZZAZIONE - RIMINI",
  "address": "LEA GIACCAGLIA, 2",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200338",
  "name": "MUSEO GIOIELLO - VICENZA",
  "address": "Piazza dei Signori, 44",
  "city": "VICENZA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200339",
  "name": "MYO - MONDOLFO",
  "address": "LAGO COSTANZA, 11",
  "city": "MONDOLFO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200340",
  "name": "MYO - POGGIO TORRIANA",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200341",
  "name": "MYO - POGGIO TORRIANA - CLEANING - PULIZIE",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200342",
  "name": "MYO - POGGIO TORRIANA - PICKING CARTA - LOGISTICA",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200343",
  "name": "MYO - POGGIO TORRIANA - PICKING GUIDATO - LOGISTICA",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200344",
  "name": "MYO - POGGIO TORRIANA - PICKING TRADIZIONALE - LOGISTICA",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200345",
  "name": "MYO - POGGIO TORRIANA - REFILING - LOGISTICA",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200346",
  "name": "MYO - POGGIO TORRIANA - SCARICO MERCI - LOGISTICA",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200347",
  "name": "MYO - POGGIO TORRIANA - UFFICIO",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200348",
  "name": "MYO - POGGIO TORRIANA - USCITA MERCI - LOGISTICA",
  "address": "SANTARCANGIOLESE, 6",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200349",
  "name": "NEURALITY - RIMINI",
  "address": "RODRIGUEZ, 3",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200350",
  "name": "NGRT - RIMINI VIA EDELWEISS RODRIGUEZ 13",
  "address": "EDELWEISS RODRIGUEZ, 13",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200351",
  "name": "NGRT - RIMINI VIA MACANNO",
  "address": "MACANNO, 38A",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200352",
  "name": "NIDO GABBIANO - RIMINI - AUSILIARIATO",
  "address": "RINALDO ORSINI , 26",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200353",
  "name": "NIDO GIROTONDO - RIMINI- AUSILIARIATO",
  "address": "CIRCONVALLAZIONE OCCIDENTALE, 55",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200354",
  "name": "NIDO GRILLO PARLANTE - RIMINI - AUSILIARIATO",
  "address": "MIRANDOLA , 2",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200355",
  "name": "NIDO PETER PAN - RIMINI",
  "address": "BRAVA, 8A",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200356",
  "name": "NIDO SCARABOCCHIO - RIMINI - AUSILIARIATO",
  "address": "MACANNO, 10",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200357",
  "name": "NIMAIA - RIMINI",
  "address": "DI MEZZO, 39",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200358",
  "name": "NIVOLA STYLE - RIMINI",
  "address": "CIRCONVALLAZIONE, 27",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200359",
  "name": "NUOVA FAOS CSR - S. GIOVANNI IN MARIGNANO",
  "address": "CASE NUOVE, 245/A",
  "city": "SAN GIOVANNI IN MARIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200360",
  "name": "NUOVA PLASTICA ADRIATICA - POGGIO TORRIANA",
  "address": "DELLE INDUSTRIE, 4",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200361",
  "name": "NUOVA RICERCA - RIMINI",
  "address": "SETTEMBRINI, 17H",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200362",
  "name": "NUOVA RICERCA - RIMINI CELLE",
  "address": "VINCINI, 4",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200363",
  "name": "NUOVA RICERCA - SANTARCANGELO",
  "address": "SAN MARINO, 176",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200364",
  "name": "NUOVA RICERCA - SANTARCANGELO VIA EMILIA",
  "address": "EMILIA, 1939",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200365",
  "name": "NUOVA RICERCA - VILLA VERUCCHIO",
  "address": "EUROPA, 36",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200366",
  "name": "OFFICINA TURBO CAR - CATTOLICA",
  "address": "BIZET, 20",
  "city": "CATTOLICA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200367",
  "name": "OFFICINA TURBO CAR - SAN LEO",
  "address": "TORELLO , 27",
  "city": "SAN LEO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200368",
  "name": "OPPORTUNITY - SANTARCANGELO",
  "address": "DEL PROGRESSO, 21",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200369",
  "name": "OPPORTUNITY 89 - RIMINI",
  "address": "RODRIGUEZ SENIOR, 13",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200370",
  "name": "OSPEDALE ANGIOLONI - SAN PIERO",
  "address": "GUGLIELMO MARCONI, 36",
  "city": "BAGNO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200371",
  "name": "OTTIMA SERVIZI - RIMINI",
  "address": "VARIANO, 81/85",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200372",
  "name": "OUTDOOR 19 - RIMINI",
  "address": "MARECCHIESE, 166",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200373",
  "name": "OUTLET GILMAR CSR - SAN GIOVANNI IN MARIGNANO",
  "address": "DEGLI OLMI, 267",
  "city": "SAN GIOVANNI IN MARIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200374",
  "name": "PAESANI CSR - SANTARCANGELO",
  "address": "DEL GRANO, 260",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200375",
  "name": "PALACONGRESSI - RIMINI",
  "address": "VIA DELLA FIERA, 23",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200376",
  "name": "PALAZZO CONGRESSI - FIUGGI",
  "address": "IV GIUGNO, 19",
  "city": "FIUGGI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200377",
  "name": "PARI IMMOBILIARE- RIMINI",
  "address": "FLAMINIA, 86",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200378",
  "name": "PARROCCHIA SAN GIROLAMO - RIMINI",
  "address": "VIALE PRINCIPE AMEDEO, 65",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200379",
  "name": "PASINI - CERASOLO VIA AUSA 59",
  "address": "AUSA, 59",
  "city": "CORIANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200380",
  "name": "PASINI - RIMINI VIA EMILIA MARIANI 6",
  "address": "EMILIA MARIANI, 6",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200381",
  "name": "PENSARECASA - PESARO",
  "address": "DEGLI ARTIGIANI, 5",
  "city": "PESARO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200382",
  "name": "PESARESI GIUSEPPE - RIMINI",
  "address": "EMILIA , 190",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200383",
  "name": "PITTARELLO - RIMINI",
  "address": "CADUTI DI NASSIRIYA, 20",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200384",
  "name": "PNEUS - RIMINI",
  "address": "XXIII SETTEMBRE, 117",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200385",
  "name": "PNEUS - SANTARCANGELO",
  "address": "DELL'INDUSTRIA, 22",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200386",
  "name": "PRIME - RIMINI",
  "address": "DINA SASSOLI, 24",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200387",
  "name": "PRO MAN - RIMINI",
  "address": "EMILIA, 129",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200388",
  "name": "PRODUCO - RIMINI",
  "address": "MARECCHIESE, 156-159",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200389",
  "name": "PROMOZIONE ALBERGHIERA - VIA SASSONIA 32 RIMINI",
  "address": "SASSONIA, 32",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200390",
  "name": "PROSTAND - FIERA RIMINI",
  "address": "EMILIA, 155",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200391",
  "name": "PROSTAND - VIA SANTARCANGIOLESE 18 POGGIO TORRIANA",
  "address": "SANTARCANGIOLESE, 18",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200392",
  "name": "PROSTAND - VIA SANTARCANGIOLESE 52 POGGIO TORRIANA",
  "address": "SANTARCANGIOLESE, 52",
  "city": "POGGIO TORRIANA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200393",
  "name": "R&A CONSULTING – RIMINI",
  "address": "ARIETE, 18",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200394",
  "name": "R&R SERVIZI GRAFICI - RIMINI",
  "address": "PIETRARUBBIA, 32",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200395",
  "name": "RAG. ELIO LAGHI - CORPOLO'",
  "address": "ANACLETO RICCI, 16",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200396",
  "name": "RAG. ELIO LAGHI - SANTARCANGELO",
  "address": "VIA SANTARCANGIOLESE, 1395",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200397",
  "name": "RE MAGO - RIMINI",
  "address": "PEPPINO IMPASTATO, 6",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200398",
  "name": "RICCARDO ZANNI - CONDOMINIO RIMINI SERPIERI",
  "address": "ALESSANDRO SERPIERI, 23",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200399",
  "name": "RICCI SABBIATURA - RIMINI",
  "address": "MAVONCELLO, 2R",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200400",
  "name": "RIVIERA FINDOMESTIC - RIMINI",
  "address": "FLAMINIA, 159A",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200401",
  "name": "SAMIR - RIMINI VIA LUCIANO LAMA 8",
  "address": "LUCIANO LAMA , 8",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200402",
  "name": "SAMIR - RIMINI VIA TANARO 3/O",
  "address": "TANARO, 3/O",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200403",
  "name": "SAMPAOLESI - RIMINI",
  "address": "flaminia, 136a",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200404",
  "name": "SAN GAUDENZO - RIMINI",
  "address": "CASTI, 17",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200405",
  "name": "SAN PATRIGNANO - CORIANO",
  "address": "SAN PATRIGNANO, 53",
  "city": "CORIANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200406",
  "name": "SAN VALENTINO - RIMINI",
  "address": "TOMASETTA, 13",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200407",
  "name": "SANTA CATERINA PEGASO - RICCIONE",
  "address": "ANGELONI, 8",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200408",
  "name": "SARR - RIMINI",
  "address": "CRIMEA, 18",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200409",
  "name": "SCHINDLER - RIMINI",
  "address": "VIA PLACIDIA , 29",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200410",
  "name": "SCM - CSR",
  "address": "EMILIA, 77",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200411",
  "name": "SCM - FONDERIA VILLA VERUCCHIO",
  "address": "DEL TESORO, 141",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200412",
  "name": "SCM EX SERGIANI - CERASOLO",
  "address": "GIOVANNI PASCOLI, 42",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200413",
  "name": "SCM HITECO - VILLA VERUCCHIO",
  "address": "MARECCHIESE , 720",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200414",
  "name": "SCM PREMIUM 51 - VILLA VERUCCHIO",
  "address": "SS258 MARECCHIA, 51",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200415",
  "name": "SCM RICAMBI - RIMINI",
  "address": "EMILIA, 59",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200416",
  "name": "SCM STEELMEC - VILLA VERUCCHIO",
  "address": "SS 258 MARECCHIA , 34",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200417",
  "name": "SCM VIA EMILIA 59 61 MARCONI - EX FONDERIA RIMINI",
  "address": "EMILIA, 59",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200418",
  "name": "SCM VIA EMILIA 61 PREGNOLATO - RIMINI",
  "address": "EMILIA, 61",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200419",
  "name": "SCM VIA EMILIA 71 MARCONI - RIMINI",
  "address": "EMILIA, 71",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200420",
  "name": "SCM VIA EMILIA 77 ASTOLFI - RIMINI",
  "address": "EMILIA, 77",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200421",
  "name": "SCM VILLA MARE - VILLA VERUCCHIO",
  "address": "CASALE, 450",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200422",
  "name": "SCM VILLA MONTE 57 - VILLA VERUCCHIO",
  "address": "SS258 MARECCHIA, 57",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200423",
  "name": "SCRIGNO - SAVIGNANO - PULIZIE CONTINUATIVE",
  "address": "BEVILACQUA, 10",
  "city": "SAVIGNANO SUL RUBICONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200424",
  "name": "SCUOLA BENIAMINA FOSCHI - CSR - SARSINA",
  "address": "LARGO ALCIDE DE GASPERI, 8",
  "city": "SARSINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200425",
  "name": "SCUOLA ELEMENTARE F.LLI CERVI - CSR - SANT'ERMETE",
  "address": "CASALE DI SANT'ERMETE , 1288",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200426",
  "name": "SCUOLA ELEMENTARE PASCUCCI - CSR - SANTARCANGELO",
  "address": "GANGANELLI , 25",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200427",
  "name": "SCUOLA INFANZIA BIANCANEVE - CSR - SANT'ERMETE",
  "address": "CASALE DI SANT'ERMETE , 650",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200428",
  "name": "SCUOLA INFANZIA CANONICA - CSR - SANTARCANGELO",
  "address": "VIA SANTARCANGIOLESE, 3740",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200429",
  "name": "SCUOLA INFANZIA FLORA - CSR - SANTARCANGELO",
  "address": "PATRIGNANI, 259",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200430",
  "name": "SCUOLA INFANZIA GIARDINO INCANTATO - CSR - SAN VITO",
  "address": "SAN VITO, 1729",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200431",
  "name": "SCUOLA INFANZIA IL DRAGO - CSR - SANTARCANGELO",
  "address": "DANIELE FELICI, 45",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200432",
  "name": "SCUOLA INFANZIA MARGHERITA - CSR - SANTARCANGELO",
  "address": "PALMIRO TOGLIATTI, 30",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200433",
  "name": "SCUOLA INFANZIA POLLICINO - CSR - SAN MARTINO",
  "address": "IX NOVEMBRE, 8",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200434",
  "name": "SCUOLA NIDO AQUILOTTO - RIMINI",
  "address": "MONTECHIARO, 20",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200435",
  "name": "SCUOLA NIDO DELFINO - RIMINI",
  "address": "NICCOLò TOMMASEO, 5",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200436",
  "name": "SCUOLA PAPA GIOVANNI XXIII - CSR - RANCHIO",
  "address": "RANCHIO VICOLO DEI GIARDINI , 2",
  "city": "SARSINA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200437",
  "name": "SEMPRINI CESARI GIOELE DOTT - RIMINI",
  "address": "DELLA REPUBBLICA, 104",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200438",
  "name": "SERGIO ROSSI - SAN MAURO PASCOLI",
  "address": "VIA STRADONE, 600/602",
  "city": "SAN MAURO PASCOLI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200439",
  "name": "SID ROMAGNA - FORLI'",
  "address": "BERTINI, 128",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200440",
  "name": "SIEL ANTIFURTO - RIMINI",
  "address": "DEL CICLAMINO, 36",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200441",
  "name": "SIGNOR PRESTITO - RIMINI",
  "address": "FLAMINIA, 134",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200442",
  "name": "SIMPLENETWORKS - SANTA GIUSTINA",
  "address": "EMILIA, 383",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200443",
  "name": "SIMPLENETWORKS - SANTARCANGELO",
  "address": "DELL'INDUSTRIA, 44",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200444",
  "name": "SM LOGISTICA - RIMINI",
  "address": "CORIANO, 58",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200445",
  "name": "SM LOGISTICA - SANT'IPPOLITO - PESARO",
  "address": "DELLE INDUSTRIE, SN",
  "city": "SANT'IPPOLITO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200446",
  "name": "SOC. COOP. BRACCIANTI RIMINESE - RIMINI",
  "address": "FLAMINIA CONCA, 85",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200447",
  "name": "SODIFER - IMOLA",
  "address": "PROVINCIALE SELICE, 47",
  "city": "IMOLA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200448",
  "name": "SODIFER - SANTARCANGELO DI ROMAGNA",
  "address": "VIA DEL GRANO, 245",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200449",
  "name": "START - NOVAFELTRIA",
  "address": "A. BATTELLI , 27",
  "city": "NOVAFELTRIA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200450",
  "name": "START - P.LE CURIEL RICCIONE",
  "address": "PIAZZALE CURIEL, SNC",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200451",
  "name": "START - P.LE ILARIO BANDINI FORLI",
  "address": "piazzale ilario bandini, snc",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200452",
  "name": "START - P.LE MARINAI RICCIONE",
  "address": "PIAZZALE MARINAI D'ITALIA, SNC",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200453",
  "name": "START - P.ZZ MARTIRI D'UNGHERIA FORLI",
  "address": "PIAZZA MARTIRI D'UNGHERIA, STAZIONE",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200454",
  "name": "START - PALAZZO SME FORLI",
  "address": "PUNTA DI FERRO, 2",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200455",
  "name": "START - SAN PIERO IN BAGNO FORLI",
  "address": "LEONARDO DA VINCI, 66",
  "city": "BAGNO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200456",
  "name": "START - SANTA SOFIA FORLI",
  "address": "G. DI VITTORIO, 14",
  "city": "SANTA SOFIA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200457",
  "name": "START - SUBAPPALTO CESA - C.A. DELLA CHIESA 38 RN",
  "address": "CARLO DELLA CHIESA, 38",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200458",
  "name": "START - SUBAPPALTO CESA - C.A. DELLA CHIESA 40 PORTINERIA RN",
  "address": "CARLO DELLA CHIESA, 40",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200459",
  "name": "START - SUBAPPALTO CESA - C.BATTISTI STAZIONE BIGLIETTERIA",
  "address": "CESARE BATTISTI, 12",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200460",
  "name": "START - SUBAPPALTO CESA - C.BATTISTI STAZIONE CENTRALE OPER",
  "address": "CESARE BATTISTI, 12",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200461",
  "name": "START - SUBAPPALTO CESA - C.BATTISTI STAZIONE SALA RISTORO",
  "address": "CESARE BATTISTI, 12",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200462",
  "name": "START - SUBAPPALTO CESA - LARGO MARTIRI UNGHERIA RN",
  "address": "LARGO MARTIRI D'UNGHERIA, 1",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200463",
  "name": "START - SUBAPPALTO CILS - GALLERIA CAVOUR 55 BIGLIETTERIA",
  "address": "GALLERIA CAVOUR, 55",
  "city": "CESENA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200464",
  "name": "START - SUBAPPALTO CILS - MONTEFIORE CAPOLINEA 6",
  "address": "CORRADINO FABBRI, SN",
  "city": "CESENA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200465",
  "name": "START - SUBAPPALTO CILS - PIAZZALE K. MARX 135 CESENA",
  "address": "KARL MARX, 135",
  "city": "CESENA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200466",
  "name": "START - SUBAPPALTO CILS - V. EUROPA STAZIONE CESENA",
  "address": "EUROPA, SN",
  "city": "CESENA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200467",
  "name": "START - SUBAPPALTO CILS - V.SPINELLI 140 CESENA",
  "address": "SPINELLI, 140",
  "city": "CESENA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200468",
  "name": "START - SUBAPPALTO COLAS - MOLO SANFILIPPO 44D PORTO CORSINI",
  "address": "MOLO SANFILIPPO, 44D",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200469",
  "name": "START - SUBAPPALTO COLAS - PIAZZALE FARINI 9 RAVENNA",
  "address": "PIAZZALE FARINI, 9",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200470",
  "name": "START - SUBAPPALTO COLAS - VIA DELL'ARTIGIANATO 16 ALFONSINE",
  "address": "DELL'ARTIGIANATO, 16",
  "city": "ALFONSINE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200471",
  "name": "START - SUBAPPALTO COLAS - VIA DELLE INDUSTRIE 120 RAVENNA",
  "address": "DELLE INDUSTRIE, 120",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200472",
  "name": "START - SUBAPPALTO COLAS - VIA EMILIA PONENTE 21 FAENZA RA",
  "address": "EMILIA PONENTE, 21",
  "city": "FAENZA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200473",
  "name": "START - SUBAPPALTO COLAS - VIA MARONCELLI 1 RAVENNA",
  "address": "MARONCELLI, 1",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200474",
  "name": "START - SUBAPPALTO COLAS - VIA TEODORICO 7 RAVENNA",
  "address": "TEODORICO, 7",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200475",
  "name": "START - SUBAPPALTO COLAS - VIA VECCHI 2 MARINA DI RAVENNA",
  "address": "AGAMENNONE VECCHI, 2",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200476",
  "name": "START - VIA LOMBARDIA RICCIONE",
  "address": "LOMBARDIA, 17",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200477",
  "name": "START - VIA PANDOLFA FORLI",
  "address": "PANDOLFA, 50",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200478",
  "name": "START - VIA VOLTA 13 FORLI",
  "address": "VOLTA, 13",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200479",
  "name": "START - VIA VOLTA 9/11 FORLI",
  "address": "VOLTA, 9",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200480",
  "name": "START - VILLA VERUCCHIO",
  "address": "SS MARECCHIA, 38",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200481",
  "name": "STCC - RIMINI - PULIZIE CONTINUATIVE",
  "address": "C.SO D'AUGUSTO, 115",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200482",
  "name": "STUDI ASSOCIATI RAGIONIERI - RIMINI",
  "address": "SAFFI, 9",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200483",
  "name": "STUDIO GARE THESIS - RICCIONE",
  "address": "LODI, 4",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200484",
  "name": "STUDIO I-SERVICE - SAN MAURO PASCOLI",
  "address": "DEL PROGRESSO, 113",
  "city": "SAN MAURO PASCOLI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200485",
  "name": "STUDIO MEDICO - VILLA VERUCCHIO",
  "address": "PIAZZA EUROPA, 36",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200486",
  "name": "SUMMERTRADE - AUTODROMO MISANO",
  "address": "DAIJIRO KATO, 11",
  "city": "MISANO ADRIATICO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200487",
  "name": "SUMMERTRADE - OFFICINA DEL GUSTO MISANO",
  "address": "DELLA REPUBBLICA, 22",
  "city": "MISANO ADRIATICO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200488",
  "name": "SUMMERTRADE - VIA EMILIA 129 RIMINI",
  "address": "EMILIA, 129",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200489",
  "name": "SURGITAL - LAVEZZOLA",
  "address": "BASTIA, 16/1",
  "city": "RAVENNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200490",
  "name": "TAFFO FUNERAL - RIMINI",
  "address": "PIAZZA MAZZINI, 6",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200491",
  "name": "TECNO RIMINI - RIMINI",
  "address": "NUOVA CIRCONVALLAZIONE, 57/B",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200492",
  "name": "TECNODATA - STADIUM 105 RIMINI",
  "address": "PIAZZALE PASOLINI, 1/C",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200493",
  "name": "TECNOMECCANICA - CARPENTERIA - VILLA VERUCCHIO",
  "address": "DEL TESORO , 533",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200494",
  "name": "TECNOMECCANICA - SEDE - VILLA VERUCCHIO",
  "address": "DEL TESORO , 400",
  "city": "VERUCCHIO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200495",
  "name": "TERMOVALORIZZATORE E SELEZIONE E RECUPERO - CORIANO",
  "address": "RAIBANO, 32",
  "city": "CORIANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200496",
  "name": "TERRE CEVICO - FORLI'",
  "address": "VASSURA, 19",
  "city": "FORLI'",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200497",
  "name": "TRANSBELT - SANTARCANGELO",
  "address": "DELL'ORZO, 2",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200498",
  "name": "TRASCONTI - RIMINI",
  "address": "TOLEMAIDE, 132",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200499",
  "name": "TREVI - TREVIDEA - RIMINI",
  "address": "STRADA CONSOLARE RIMINI-SAN MARINO, 62",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200500",
  "name": "TVS - FERMIGNANO",
  "address": "GALILEO GALILEI, 2",
  "city": "FERMIGNANO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200501",
  "name": "UBISERVICE - UBISOL - RIMINI",
  "address": "DELLO STAMBECCO, 6F",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200502",
  "name": "UMANA - RIMINI",
  "address": "FLAMINIA , 82EF",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200503",
  "name": "UNIFLOTTE - RIMINI",
  "address": "DINA SASSOLI, 24",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200504",
  "name": "UNIPOL - MORCIANO",
  "address": "FORLANI DIOMEDE, 101",
  "city": "MORCIANO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200505",
  "name": "UNIPOL - RICCIONE VIA ADRIATICA 10",
  "address": "ADRIATICA, 10",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200506",
  "name": "UNIPOL - RICCIONE VIA VITTORIO EMANUELE II",
  "address": "VITTORIO EMANUELE II, 8",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200507",
  "name": "UNIPOL - RIMINI",
  "address": "ROMA, 102",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200508",
  "name": "UNIPOL - SANTARCANGELO",
  "address": "LUDOVICO MARINI, 36",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200509",
  "name": "UNIRETAIL COLOMBINI - RIMINI",
  "address": "S.S. CONSOLARE RIMINI - SAN MARINO KM 8,2, SN",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200510",
  "name": "UNITEC - LUGO",
  "address": "VIA PROVINCIALE COTIGNOLA, 20/9",
  "city": "LUGO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200511",
  "name": "VALENTINI STUDIO COMMERCIALE - RIMINI",
  "address": "CIRCONVALLAZIONE MERIDIONALE, 5/B",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200512",
  "name": "VOLUX - SANTARCANGELO",
  "address": "TOSI , 308",
  "city": "SANTARCANGELO DI ROMAGNA",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200513",
  "name": "WORLD TRADE DISPLAY - RIMINI",
  "address": "DELLA LONTRA, 43",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200514",
  "name": "YACHT CLUB - DARSENA RIMINI",
  "address": "ORTIGARA , 45/D",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200515",
  "name": "ZEITGROUP - RIMINI",
  "address": "DELLA REPUBBLICA, 100",
  "city": "RIMINI",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200516",
  "name": "ZUCCHETTI - MISANO",
  "address": "NAZIONALE ADRIATICA, 42",
  "city": "MISANO ADRIATICO",
  "schedules": [],
  "assignedOperatorId": null
},
  {
  "id": "s200517",
  "name": "ZUCCHETTI - RICCIONE",
  "address": "CECCARINI, 190",
  "city": "RICCIONE",
  "schedules": [],
  "assignedOperatorId": null
}
];
