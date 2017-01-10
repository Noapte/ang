import * as _ from 'lodash';
const apiUrl = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/';
const airportsInfo = [{
    "iataCode": "AAR",
    "name": "Aarhus",
    "base": false,
    "latitude": 56.3,
    "longitude": 10.619,
    "country": {
        "code": "dk",
        "name": "Denmark",
        "seoName": "denmark",
        "englishSeoName": "denmark",
        "currency": "DKK",
        "url": "denmark"
    }
},
    {
        "iataCode": "AGA",
        "name": "Agadir",
        "base": false,
        "latitude": 30.325,
        "longitude": -9.41307,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "AHO",
        "name": "Alghero",
        "base": true,
        "latitude": 40.6321,
        "longitude": 8.29077,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "ALC",
        "name": "Alicante",
        "base": true,
        "latitude": 38.2822,
        "longitude": -0.558156,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "LEI",
        "name": "Almeria",
        "base": false,
        "latitude": 36.8439,
        "longitude": -2.3701,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "AMS",
        "name": "Amsterdam",
        "base": false,
        "latitude": 52.3105,
        "longitude": 4.76827,
        "country": {
            "code": "nl",
            "name": "Netherlands",
            "seoName": "netherlands",
            "englishSeoName": "netherlands",
            "currency": "EUR",
            "url": "netherlands"
        }
    },
    {
        "iataCode": "AOI",
        "name": "Ancona",
        "base": false,
        "latitude": 43.6163,
        "longitude": 13.3623,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "ATH",
        "name": "Athens",
        "base": true,
        "latitude": 37.9364,
        "longitude": 23.9445,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "FKB",
        "name": "Baden-Baden",
        "base": true,
        "latitude": 48.7794,
        "longitude": 8.0805,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "BCN",
        "name": "Barcelona El Prat",
        "base": true,
        "latitude": 41.2971,
        "longitude": 2.07846,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "BRI",
        "name": "Bari",
        "base": true,
        "latitude": 41.1389,
        "longitude": 16.7606,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "BSL",
        "name": "Basel",
        "base": false,
        "latitude": 47.5896,
        "longitude": 7.52991,
        "country": {
            "code": "ch",
            "name": "Switzerland",
            "seoName": "switzerland",
            "englishSeoName": "switzerland",
            "currency": "EUR",
            "url": "switzerland"
        }
    },
    {
        "iataCode": "BFS",
        "name": "Belfast International Airport",
        "base": false,
        "latitude": 54.6575,
        "longitude": -6.2158,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "EGC",
        "name": "Bergerac",
        "base": false,
        "latitude": 44.8253,
        "longitude": 0.518611,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "SXF",
        "name": "Berlin Schonefeld",
        "base": false,
        "latitude": 52.38,
        "longitude": 13.5225,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "BZR",
        "name": "Beziers",
        "base": false,
        "latitude": 43.3235,
        "longitude": 3.3539,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "BIQ",
        "name": "Biarritz",
        "base": false,
        "latitude": 43.4684,
        "longitude": -1.52332,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "BLL",
        "name": "Billund",
        "base": true,
        "latitude": 55.7403,
        "longitude": 9.15178,
        "country": {
            "code": "dk",
            "name": "Denmark",
            "seoName": "denmark",
            "englishSeoName": "denmark",
            "currency": "DKK",
            "url": "denmark"
        }
    },
    {
        "iataCode": "BHX",
        "name": "Birmingham",
        "base": true,
        "latitude": 52.4539,
        "longitude": -1.74803,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "BLQ",
        "name": "Bologna",
        "base": true,
        "latitude": 44.5354,
        "longitude": 11.2887,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "BOD",
        "name": "Bordeaux",
        "base": false,
        "latitude": 44.8283,
        "longitude": -0.715556,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "BOH",
        "name": "Bournemouth",
        "base": true,
        "latitude": 50.78,
        "longitude": -1.8425,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "BTS",
        "name": "Bratislava",
        "base": true,
        "latitude": 48.1702,
        "longitude": 17.2127,
        "country": {
            "code": "sk",
            "name": "Slovakia",
            "seoName": "slovakia",
            "englishSeoName": "slovakia",
            "currency": "EUR",
            "url": "slovakia"
        }
    },
    {
        "iataCode": "BRE",
        "name": "Bremen",
        "base": true,
        "latitude": 53.0475,
        "longitude": 8.78667,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "BES",
        "name": "Brest",
        "base": false,
        "latitude": 48.4479,
        "longitude": -4.41854,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "BDS",
        "name": "Brindisi",
        "base": true,
        "latitude": 40.6576,
        "longitude": 17.947,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "BRS",
        "name": "Bristol",
        "base": true,
        "latitude": 51.3827,
        "longitude": -2.71909,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "BVE",
        "name": "Brive",
        "base": false,
        "latitude": 45.1508,
        "longitude": 1.46917,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "BRQ",
        "name": "Brno",
        "base": false,
        "latitude": 49.1513,
        "longitude": 16.6944,
        "country": {
            "code": "cz",
            "name": "Czech Republic",
            "seoName": "czech-republic",
            "englishSeoName": "czech-republic",
            "currency": "CZK",
            "url": "czech-republic"
        }
    },
    {
        "iataCode": "CRL",
        "name": "Brussels Charleroi",
        "base": true,
        "latitude": 50.4592,
        "longitude": 4.45382,
        "country": {
            "code": "be",
            "name": "Belgium",
            "seoName": "belgium",
            "englishSeoName": "belgium",
            "currency": "EUR",
            "url": "belgium"
        }
    },
    {
        "iataCode": "BRU",
        "name": "Brussels Zaventem",
        "base": true,
        "latitude": 50.9014,
        "longitude": 4.48444,
        "country": {
            "code": "be",
            "name": "Belgium",
            "seoName": "belgium",
            "englishSeoName": "belgium",
            "currency": "EUR",
            "url": "belgium"
        }
    },
    {
        "iataCode": "OTP",
        "name": "Bucharest (Otopeni)",
        "base": false,
        "latitude": 44.5722,
        "longitude": 26.1022,
        "country": {
            "code": "ro",
            "name": "Romania",
            "seoName": "romania",
            "englishSeoName": "romania",
            "currency": "EUR",
            "url": "romania"
        }
    },
    {
        "iataCode": "BUD",
        "name": "Budapest",
        "base": true,
        "latitude": 47.4369,
        "longitude": 19.2556,
        "country": {
            "code": "hu",
            "name": "Hungary",
            "seoName": "hungary",
            "englishSeoName": "hungary",
            "currency": "HUF",
            "url": "hungary"
        }
    },
    {
        "iataCode": "BZG",
        "name": "Bydgoszcz",
        "base": false,
        "latitude": 53.0968,
        "longitude": 17.9777,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "CAG",
        "name": "Cagliari",
        "base": true,
        "latitude": 39.2515,
        "longitude": 9.05428,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "CCF",
        "name": "Carcassonne",
        "base": false,
        "latitude": 43.216,
        "longitude": 2.30632,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "CWL",
        "name": "Cardiff",
        "base": false,
        "latitude": 51.3967,
        "longitude": -3.34333,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "CDT",
        "name": "Castellon",
        "base": false,
        "latitude": 39.999,
        "longitude": 0.026,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "CTA",
        "name": "Catania",
        "base": true,
        "latitude": 37.4668,
        "longitude": 15.0664,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "CHQ",
        "name": "Chania",
        "base": true,
        "latitude": 35.5317,
        "longitude": 24.1497,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "CFE",
        "name": "Clermont Ferrand",
        "base": false,
        "latitude": 45.7867,
        "longitude": 3.16917,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "CGN",
        "name": "Cologne",
        "base": true,
        "latitude": 50.8659,
        "longitude": 7.14274,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "CIY",
        "name": "Comiso",
        "base": false,
        "latitude": 36.9946,
        "longitude": 14.6072,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "CPH",
        "name": "Copenhagen",
        "base": false,
        "latitude": 55.6181,
        "longitude": 12.6561,
        "country": {
            "code": "dk",
            "name": "Denmark",
            "seoName": "denmark",
            "englishSeoName": "denmark",
            "currency": "DKK",
            "url": "denmark"
        }
    },
    {
        "iataCode": "CFU",
        "name": "Corfu",
        "base": false,
        "latitude": 39.6019,
        "longitude": 19.9117,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "ORK",
        "name": "Cork",
        "base": true,
        "latitude": 51.8413,
        "longitude": -8.49111,
        "country": {
            "code": "ie",
            "name": "Ireland",
            "seoName": "ireland",
            "englishSeoName": "ireland",
            "currency": "EUR",
            "url": "ireland"
        }
    },
    {
        "iataCode": "CRA",
        "name": "Craiova",
        "base": false,
        "latitude": 44.3181,
        "longitude": 23.8886,
        "country": {
            "code": "ro",
            "name": "Romania",
            "seoName": "romania",
            "englishSeoName": "romania",
            "currency": "EUR",
            "url": "romania"
        }
    },
    {
        "iataCode": "CRV",
        "name": "Crotone",
        "base": false,
        "latitude": 38.99722,
        "longitude": 17.08028,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "CUF",
        "name": "Cuneo",
        "base": false,
        "latitude": 44.547,
        "longitude": 7.62322,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "DOL",
        "name": "Deauville-Normandy",
        "base": false,
        "latitude": 49.3653,
        "longitude": 0.154306,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "LDY",
        "name": "Derry",
        "base": false,
        "latitude": 55.0428,
        "longitude": -7.16111,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "DNR",
        "name": "Dinard",
        "base": false,
        "latitude": 48.5877,
        "longitude": -2.07996,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "DLE",
        "name": "Dole",
        "base": false,
        "latitude": 47.039,
        "longitude": 5.42725,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "DTM",
        "name": "Dortmund",
        "base": false,
        "latitude": 51.5183,
        "longitude": 7.61224,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "DUB",
        "name": "Dublin",
        "base": true,
        "latitude": 53.4213,
        "longitude": -6.27007,
        "country": {
            "code": "ie",
            "name": "Ireland",
            "seoName": "ireland",
            "englishSeoName": "ireland",
            "currency": "EUR",
            "url": "ireland"
        }
    },
    {
        "iataCode": "NRN",
        "name": "Dusseldorf Weeze",
        "base": true,
        "latitude": 51.6024,
        "longitude": 6.14217,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "EMA",
        "name": "East Midlands",
        "base": true,
        "latitude": 52.8311,
        "longitude": -1.32806,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "EDI",
        "name": "Edinburgh",
        "base": true,
        "latitude": 55.95,
        "longitude": -3.3725,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "VDA",
        "name": "Eilat (Ovda)",
        "base": false,
        "latitude": 29.9402,
        "longitude": 34.9358,
        "country": {
            "code": "il",
            "name": "Israel",
            "seoName": "israel",
            "englishSeoName": "israel",
            "currency": "EUR",
            "url": "israel"
        }
    },
    {
        "iataCode": "EIN",
        "name": "Eindhoven",
        "base": true,
        "latitude": 51.4501,
        "longitude": 5.37453,
        "country": {
            "code": "nl",
            "name": "Netherlands",
            "seoName": "netherlands",
            "englishSeoName": "netherlands",
            "currency": "EUR",
            "url": "netherlands"
        }
    },
    {
        "iataCode": "ESU",
        "name": "Essaouira",
        "base": false,
        "latitude": 31.3918,
        "longitude": -9.6757,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "FAO",
        "name": "Faro",
        "base": true,
        "latitude": 37.0144,
        "longitude": -7.96591,
        "country": {
            "code": "pt",
            "name": "Portugal",
            "seoName": "portugal",
            "englishSeoName": "portugal",
            "currency": "EUR",
            "url": "portugal"
        }
    },
    {
        "iataCode": "FEZ",
        "name": "Fez",
        "base": true,
        "latitude": 33.9273,
        "longitude": -4.97796,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "FSC",
        "name": "Figari",
        "base": false,
        "latitude": 41.5006,
        "longitude": 9.09778,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "HHN",
        "name": "Frankfurt Hahn",
        "base": true,
        "latitude": 49.9487,
        "longitude": 7.26389,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "FUE",
        "name": "Fuerteventura",
        "base": false,
        "latitude": 28.4527,
        "longitude": -13.8638,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "GDN",
        "name": "Gdansk",
        "base": true,
        "latitude": 54.3776,
        "longitude": 18.4662,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "GOA",
        "name": "Genoa",
        "base": false,
        "latitude": 44.4133,
        "longitude": 8.8375,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "GRO",
        "name": "Girona Barcelona",
        "base": true,
        "latitude": 41.901,
        "longitude": 2.76055,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "GLA",
        "name": "Glasgow International",
        "base": true,
        "latitude": 55.67194,
        "longitude": -4.43306,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "PIK",
        "name": "Glasgow Prestwick",
        "base": true,
        "latitude": 55.5094,
        "longitude": -4.58667,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "GOT",
        "name": "Gothenburg Landvetter",
        "base": false,
        "latitude": 57.6741,
        "longitude": 12.2925,
        "country": {
            "code": "se",
            "name": "Sweden",
            "seoName": "sweden",
            "englishSeoName": "sweden",
            "currency": "SEK",
            "url": "sweden"
        }
    },
    {
        "iataCode": "LPA",
        "name": "Gran Canaria",
        "base": true,
        "latitude": 27.9319,
        "longitude": -15.3866,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "GNB",
        "name": "Grenoble",
        "base": false,
        "latitude": 45.3629,
        "longitude": 5.32937,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "HAM",
        "name": "Hamburg",
        "base": false,
        "latitude": 53.63028,
        "longitude": 9.99111,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "HAU",
        "name": "Haugesund",
        "base": false,
        "latitude": 59.3453,
        "longitude": 5.20836,
        "country": {
            "code": "no",
            "name": "Norway",
            "seoName": "norway",
            "englishSeoName": "norway",
            "currency": "NOK",
            "url": "norway"
        }
    },
    {
        "iataCode": "IBZ",
        "name": "Ibiza",
        "base": false,
        "latitude": 38.8729,
        "longitude": 1.37312,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "XRY",
        "name": "Jerez",
        "base": false,
        "latitude": 36.7446,
        "longitude": -6.06011,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "KLX",
        "name": "Kalamata",
        "base": false,
        "latitude": 37.0683,
        "longitude": 22.0255,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "KTW",
        "name": "Katowice",
        "base": false,
        "latitude": 50.4743,
        "longitude": 19.08,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "KUN",
        "name": "Kaunas",
        "base": true,
        "latitude": 54.9639,
        "longitude": 24.0848,
        "country": {
            "code": "lt",
            "name": "Lithuania",
            "seoName": "lithuania",
            "englishSeoName": "lithuania",
            "currency": "EUR",
            "url": "lithuania"
        }
    },
    {
        "iataCode": "EFL",
        "name": "Kefalonia",
        "base": false,
        "latitude": 38.1201,
        "longitude": 20.5005,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "KIR",
        "name": "Kerry",
        "base": false,
        "latitude": 52.1809,
        "longitude": -9.52378,
        "country": {
            "code": "ie",
            "name": "Ireland",
            "seoName": "ireland",
            "englishSeoName": "ireland",
            "currency": "EUR",
            "url": "ireland"
        }
    },
    {
        "iataCode": "NOC",
        "name": "Knock Ireland West",
        "base": false,
        "latitude": 53.9103,
        "longitude": -8.81849,
        "country": {
            "code": "ie",
            "name": "Ireland",
            "seoName": "ireland",
            "englishSeoName": "ireland",
            "currency": "EUR",
            "url": "ireland"
        }
    },
    {
        "iataCode": "KGS",
        "name": "Kos",
        "base": false,
        "latitude": 36.7933,
        "longitude": 27.0917,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "KRK",
        "name": "Krakow",
        "base": true,
        "latitude": 50.0777,
        "longitude": 19.7848,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "SUF",
        "name": "Lamezia",
        "base": true,
        "latitude": 38.9054,
        "longitude": 16.2423,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "ACE",
        "name": "Lanzarote",
        "base": true,
        "latitude": 28.9455,
        "longitude": -13.6052,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "LPP",
        "name": "Lappeenranta",
        "base": false,
        "latitude": 61.0446,
        "longitude": 28.1444,
        "country": {
            "code": "fi",
            "name": "Finland",
            "seoName": "finland",
            "englishSeoName": "finland",
            "currency": "EUR",
            "url": "finland"
        }
    },
    {
        "iataCode": "LCA",
        "name": "Larnaca",
        "base": false,
        "latitude": 34.8751,
        "longitude": 33.6249,
        "country": {
            "code": "cy",
            "name": "Cyprus",
            "seoName": "cyprus",
            "englishSeoName": "cyprus",
            "currency": "EUR",
            "url": "cyprus"
        }
    },
    {
        "iataCode": "LRH",
        "name": "La Rochelle",
        "base": false,
        "latitude": 46.1792,
        "longitude": -1.19528,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "LBA",
        "name": "Leeds Bradford",
        "base": true,
        "latitude": 53.8659,
        "longitude": -1.66057,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "LEJ",
        "name": "Leipzig",
        "base": false,
        "latitude": 51.4324,
        "longitude": 12.2416,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "LIL",
        "name": "Lille",
        "base": false,
        "latitude": 50.5619,
        "longitude": 3.08944,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "LIG",
        "name": "Limoges",
        "base": false,
        "latitude": 45.8628,
        "longitude": 1.17944,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "LNZ",
        "name": "Linz",
        "base": false,
        "latitude": 48.2332,
        "longitude": 14.1875,
        "country": {
            "code": "at",
            "name": "Austria",
            "seoName": "austria",
            "englishSeoName": "austria",
            "currency": "EUR",
            "url": "austria"
        }
    },
    {
        "iataCode": "LIS",
        "name": "Lisbon",
        "base": true,
        "latitude": 38.7813,
        "longitude": -9.13592,
        "country": {
            "code": "pt",
            "name": "Portugal",
            "seoName": "portugal",
            "englishSeoName": "portugal",
            "currency": "EUR",
            "url": "portugal"
        }
    },
    {
        "iataCode": "LPL",
        "name": "Liverpool",
        "base": true,
        "latitude": 53.3336,
        "longitude": -2.84972,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "LCJ",
        "name": "Lodz",
        "base": false,
        "latitude": 51.7219,
        "longitude": 19.3981,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "LGW",
        "name": "London Gatwick",
        "base": false,
        "latitude": 51.1481,
        "longitude": -0.190278,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "LTN",
        "name": "London Luton",
        "base": true,
        "latitude": 51.8747,
        "longitude": -0.368333,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "STN",
        "name": "London Stansted",
        "base": true,
        "latitude": 51.885,
        "longitude": 0.235,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "LRT",
        "name": "Lorient",
        "base": false,
        "latitude": 47.7588,
        "longitude": -3.4378,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "LDE",
        "name": "Lourdes",
        "base": false,
        "latitude": 43.1787,
        "longitude": -0.006439,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "LUZ",
        "name": "Lublin",
        "base": false,
        "latitude": 51.2319,
        "longitude": 22.6903,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "MST",
        "name": "Maastricht",
        "base": false,
        "latitude": 50.9117,
        "longitude": 5.77014,
        "country": {
            "code": "nl",
            "name": "Netherlands",
            "seoName": "netherlands",
            "englishSeoName": "netherlands",
            "currency": "EUR",
            "url": "netherlands"
        }
    },
    {
        "iataCode": "MAD",
        "name": "Madrid",
        "base": true,
        "latitude": 40.4936,
        "longitude": -3.56676,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "AGP",
        "name": "Malaga",
        "base": true,
        "latitude": 36.6749,
        "longitude": -4.49911,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "MLA",
        "name": "Malta",
        "base": true,
        "latitude": 35.8575,
        "longitude": 14.4775,
        "country": {
            "code": "mt",
            "name": "Malta",
            "seoName": "malta",
            "englishSeoName": "malta",
            "currency": "EUR",
            "url": "malta"
        }
    },
    {
        "iataCode": "MAN",
        "name": "Manchester",
        "base": true,
        "latitude": 53.3537,
        "longitude": -2.27495,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "RAK",
        "name": "Marrakesh",
        "base": true,
        "latitude": 31.6069,
        "longitude": -8.0363,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "MRS",
        "name": "Marseille Provence",
        "base": false,
        "latitude": 43.4393,
        "longitude": 5.22142,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "FMM",
        "name": "Memmingen (Munich West)",
        "base": false,
        "latitude": 47.9888,
        "longitude": 10.2395,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "MAH",
        "name": "Menorca",
        "base": false,
        "latitude": 39.8626,
        "longitude": 4.21865,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "BGY",
        "name": "Milan Bergamo",
        "base": true,
        "latitude": 45.6739,
        "longitude": 9.70417,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "MXP",
        "name": "Milan Malpensa",
        "base": true,
        "latitude": 45.63,
        "longitude": 8.7231,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "MPL",
        "name": "Montpellier",
        "base": false,
        "latitude": 43.5762,
        "longitude": 3.96301,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "FMO",
        "name": "Münster",
        "base": false,
        "latitude": 52.1346,
        "longitude": 7.68483,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "MJV",
        "name": "Murcia",
        "base": false,
        "latitude": 37.775,
        "longitude": -0.812389,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "JMK",
        "name": "Mykonos",
        "base": false,
        "latitude": 37.4351,
        "longitude": 25.3481,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "NDR",
        "name": "Nador",
        "base": false,
        "latitude": 34.9888,
        "longitude": -3.02821,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "NTE",
        "name": "Nantes",
        "base": false,
        "latitude": 47.1532,
        "longitude": -1.61073,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "NCL",
        "name": "Newcastle",
        "base": false,
        "latitude": 55.0375,
        "longitude": -1.69167,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "NQY",
        "name": "Newquay",
        "base": false,
        "latitude": 50.4406,
        "longitude": -4.99541,
        "country": {
            "code": "gb",
            "name": "United Kingdom",
            "seoName": "united-kingdom",
            "englishSeoName": "united-kingdom",
            "currency": "GBP",
            "url": "united-kingdom"
        }
    },
    {
        "iataCode": "NCE",
        "name": "Nice",
        "base": false,
        "latitude": 43.6584,
        "longitude": 7.21587,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "FNI",
        "name": "Nimes",
        "base": false,
        "latitude": 43.7574,
        "longitude": 4.41635,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "INI",
        "name": "Nis",
        "base": false,
        "latitude": 43.3372,
        "longitude": 21.8536,
        "country": {
            "code": "rs",
            "name": "Serbia",
            "seoName": "serbia",
            "englishSeoName": "serbia",
            "currency": "EUR",
            "url": "serbia"
        }
    },
    {
        "iataCode": "NUE",
        "name": "Nuremberg",
        "base": false,
        "latitude": 49.4987,
        "longitude": 11.0669,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "OLB",
        "name": "Olbia",
        "base": true,
        "latitude": 40.8987,
        "longitude": 9.51763,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "OSI",
        "name": "Osijek",
        "base": false,
        "latitude": 45.4627,
        "longitude": 18.8102,
        "country": {
            "code": "hr",
            "name": "Croatia",
            "seoName": "croatia",
            "englishSeoName": "croatia",
            "currency": "EUR",
            "url": "croatia"
        }
    },
    {
        "iataCode": "RYG",
        "name": "Oslo Rygge",
        "base": true,
        "latitude": 59.3789,
        "longitude": 10.7856,
        "country": {
            "code": "no",
            "name": "Norway",
            "seoName": "norway",
            "englishSeoName": "norway",
            "currency": "NOK",
            "url": "norway"
        }
    },
    {
        "iataCode": "TRF",
        "name": "Oslo Torp",
        "base": false,
        "latitude": 59.1867,
        "longitude": 10.2586,
        "country": {
            "code": "no",
            "name": "Norway",
            "seoName": "norway",
            "englishSeoName": "norway",
            "currency": "NOK",
            "url": "norway"
        }
    },
    {
        "iataCode": "OSR",
        "name": "Ostrava",
        "base": false,
        "latitude": 49.6963,
        "longitude": 18.1111,
        "country": {
            "code": "cz",
            "name": "Czech Republic",
            "seoName": "czech-republic",
            "englishSeoName": "czech-republic",
            "currency": "CZK",
            "url": "czech-republic"
        }
    },
    {
        "iataCode": "OUD",
        "name": "Oujda",
        "base": false,
        "latitude": 34.7872,
        "longitude": -1.92399,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "PLQ",
        "name": "Palanga",
        "base": false,
        "latitude": 55.9733,
        "longitude": 21.0939,
        "country": {
            "code": "lt",
            "name": "Lithuania",
            "seoName": "lithuania",
            "englishSeoName": "lithuania",
            "currency": "EUR",
            "url": "lithuania"
        }
    },
    {
        "iataCode": "PMO",
        "name": "Palermo",
        "base": true,
        "latitude": 38.176,
        "longitude": 13.091,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "PMI",
        "name": "Palma",
        "base": true,
        "latitude": 39.5517,
        "longitude": 2.73881,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "PFO",
        "name": "Paphos",
        "base": true,
        "latitude": 34.718,
        "longitude": 32.4857,
        "country": {
            "code": "cy",
            "name": "Cyprus",
            "seoName": "cyprus",
            "englishSeoName": "cyprus",
            "currency": "EUR",
            "url": "cyprus"
        }
    },
    {
        "iataCode": "BVA",
        "name": "Paris Beauvais",
        "base": false,
        "latitude": 49.4544,
        "longitude": 2.11278,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "XCR",
        "name": "Paris Vatry",
        "base": false,
        "latitude": 48.7761,
        "longitude": 4.18449,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "PMF",
        "name": "Parma",
        "base": false,
        "latitude": 44.8245,
        "longitude": 10.2964,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "GPA",
        "name": "Patras (Araxos)",
        "base": false,
        "latitude": 38.1511,
        "longitude": 21.4256,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "PGF",
        "name": "Perpignan",
        "base": false,
        "latitude": 42.7404,
        "longitude": 2.87067,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "PEG",
        "name": "Perugia",
        "base": false,
        "latitude": 43.0959,
        "longitude": 12.5132,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "PSR",
        "name": "Pescara",
        "base": true,
        "latitude": 42.4317,
        "longitude": 14.1811,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "PSA",
        "name": "Pisa",
        "base": true,
        "latitude": 43.6839,
        "longitude": 10.3927,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "PDV",
        "name": "Plovdiv",
        "base": false,
        "latitude": 42.0678,
        "longitude": 24.8508,
        "country": {
            "code": "bg",
            "name": "Bulgaria",
            "seoName": "bulgaria",
            "englishSeoName": "bulgaria",
            "currency": "EUR",
            "url": "bulgaria"
        }
    },
    {
        "iataCode": "TGD",
        "name": "Podgorica",
        "base": false,
        "latitude": 42.3594,
        "longitude": 19.2519,
        "country": {
            "code": "me",
            "name": "Montenegro",
            "seoName": "montenegro",
            "englishSeoName": "montenegro",
            "currency": "EUR",
            "url": "montenegro"
        }
    },
    {
        "iataCode": "PIS",
        "name": "Poitiers",
        "base": false,
        "latitude": 46.5877,
        "longitude": 0.306666,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "PDL",
        "name": "Ponta Delgada",
        "base": false,
        "latitude": 37.74194,
        "longitude": -25.69778,
        "country": {
            "code": "pt",
            "name": "Portugal",
            "seoName": "portugal",
            "englishSeoName": "portugal",
            "currency": "EUR",
            "url": "portugal"
        }
    },
    {
        "iataCode": "OPO",
        "name": "Porto",
        "base": true,
        "latitude": 41.2481,
        "longitude": -8.68139,
        "country": {
            "code": "pt",
            "name": "Portugal",
            "seoName": "portugal",
            "englishSeoName": "portugal",
            "currency": "EUR",
            "url": "portugal"
        }
    },
    {
        "iataCode": "POZ",
        "name": "Poznan",
        "base": false,
        "latitude": 52.421,
        "longitude": 16.8263,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "PRG",
        "name": "Prague",
        "base": false,
        "latitude": 50.1008,
        "longitude": 14.26,
        "country": {
            "code": "cz",
            "name": "Czech Republic",
            "seoName": "czech-republic",
            "englishSeoName": "czech-republic",
            "currency": "CZK",
            "url": "czech-republic"
        }
    },
    {
        "iataCode": "PUY",
        "name": "Pula",
        "base": false,
        "latitude": 44.8935,
        "longitude": 13.9222,
        "country": {
            "code": "hr",
            "name": "Croatia",
            "seoName": "croatia",
            "englishSeoName": "croatia",
            "currency": "EUR",
            "url": "croatia"
        }
    },
    {
        "iataCode": "RBA",
        "name": "Rabat",
        "base": false,
        "latitude": 34.0515,
        "longitude": -6.75152,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "REU",
        "name": "Reus Barcelona",
        "base": false,
        "latitude": 41.1474,
        "longitude": 1.16717,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "RHO",
        "name": "Rhodes",
        "base": false,
        "latitude": 36.4054,
        "longitude": 28.0862,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "RIX",
        "name": "Riga",
        "base": false,
        "latitude": 56.9236,
        "longitude": 23.9711,
        "country": {
            "code": "lv",
            "name": "Latvia",
            "seoName": "latvia",
            "englishSeoName": "latvia",
            "currency": "EUR",
            "url": "latvia"
        }
    },
    {
        "iataCode": "RJK",
        "name": "Rijeka",
        "base": false,
        "latitude": 45.2169,
        "longitude": 14.5703,
        "country": {
            "code": "hr",
            "name": "Croatia",
            "seoName": "croatia",
            "englishSeoName": "croatia",
            "currency": "EUR",
            "url": "croatia"
        }
    },
    {
        "iataCode": "RDZ",
        "name": "Rodez",
        "base": false,
        "latitude": 44.4079,
        "longitude": 2.48267,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "CIA",
        "name": "Rome Ciampino",
        "base": true,
        "latitude": 41.7994,
        "longitude": 12.5949,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "FCO",
        "name": "Rome Fiumicino",
        "base": true,
        "latitude": 41.8045,
        "longitude": 12.2508,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "RZE",
        "name": "Rzeszow",
        "base": false,
        "latitude": 50.11,
        "longitude": 22.019,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "SZG",
        "name": "Salzburg",
        "base": false,
        "latitude": 47.7933,
        "longitude": 13.0043,
        "country": {
            "code": "at",
            "name": "Austria",
            "seoName": "austria",
            "englishSeoName": "austria",
            "currency": "EUR",
            "url": "austria"
        }
    },
    {
        "iataCode": "SDR",
        "name": "Santander",
        "base": false,
        "latitude": 43.4271,
        "longitude": -3.82001,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "SCQ",
        "name": "Santiago",
        "base": true,
        "latitude": 42.8963,
        "longitude": -8.41514,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "JTR",
        "name": "Santorini National",
        "base": false,
        "latitude": 36.3992,
        "longitude": 25.4793,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "SVQ",
        "name": "Seville",
        "base": true,
        "latitude": 37.418,
        "longitude": -5.89311,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "SNN",
        "name": "Shannon",
        "base": true,
        "latitude": 52.702,
        "longitude": -8.92482,
        "country": {
            "code": "ie",
            "name": "Ireland",
            "seoName": "ireland",
            "englishSeoName": "ireland",
            "currency": "EUR",
            "url": "ireland"
        }
    },
    {
        "iataCode": "SFT",
        "name": "Skelleftea",
        "base": false,
        "latitude": 64.6248,
        "longitude": 21.0769,
        "country": {
            "code": "se",
            "name": "Sweden",
            "seoName": "sweden",
            "englishSeoName": "sweden",
            "currency": "SEK",
            "url": "sweden"
        }
    },
    {
        "iataCode": "SOF",
        "name": "Sofia",
        "base": false,
        "latitude": 42.67,
        "longitude": 23.35,
        "country": {
            "code": "bg",
            "name": "Bulgaria",
            "seoName": "bulgaria",
            "englishSeoName": "bulgaria",
            "currency": "EUR",
            "url": "bulgaria"
        }
    },
    {
        "iataCode": "EBU",
        "name": "St Etienne",
        "base": false,
        "latitude": 45.5406,
        "longitude": 4.29639,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "NYO",
        "name": "Stockholm Skavsta",
        "base": true,
        "latitude": 58.7886,
        "longitude": 16.9122,
        "country": {
            "code": "se",
            "name": "Sweden",
            "seoName": "sweden",
            "englishSeoName": "sweden",
            "currency": "SEK",
            "url": "sweden"
        }
    },
    {
        "iataCode": "VST",
        "name": "Stockholm Vasteras",
        "base": false,
        "latitude": 59.5894,
        "longitude": 16.6336,
        "country": {
            "code": "se",
            "name": "Sweden",
            "seoName": "sweden",
            "englishSeoName": "sweden",
            "currency": "SEK",
            "url": "sweden"
        }
    },
    {
        "iataCode": "SXB",
        "name": "Strasbourg",
        "base": false,
        "latitude": 48.5383,
        "longitude": 7.62823,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "STR",
        "name": "Stuttgart",
        "base": false,
        "latitude": 48.69,
        "longitude": 9.2219,
        "country": {
            "code": "de",
            "name": "Germany",
            "seoName": "germany",
            "englishSeoName": "germany",
            "currency": "EUR",
            "url": "germany"
        }
    },
    {
        "iataCode": "SZZ",
        "name": "Szczecin",
        "base": false,
        "latitude": 53.5847,
        "longitude": 14.9022,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "TLL",
        "name": "Tallinn",
        "base": false,
        "latitude": 59.4133,
        "longitude": 24.8328,
        "country": {
            "code": "ee",
            "name": "Estonia",
            "seoName": "estonia",
            "englishSeoName": "estonia",
            "currency": "EUR",
            "url": "estonia"
        }
    },
    {
        "iataCode": "TMP",
        "name": "Tampere",
        "base": false,
        "latitude": 61.4141,
        "longitude": 23.6044,
        "country": {
            "code": "fi",
            "name": "Finland",
            "seoName": "finland",
            "englishSeoName": "finland",
            "currency": "EUR",
            "url": "finland"
        }
    },
    {
        "iataCode": "TNG",
        "name": "Tangier",
        "base": false,
        "latitude": 35.7269,
        "longitude": -5.91689,
        "country": {
            "code": "ma",
            "name": "Morocco",
            "seoName": "morocco",
            "englishSeoName": "morocco",
            "currency": "MAD",
            "url": "morocco"
        }
    },
    {
        "iataCode": "TFN",
        "name": "Tenerife North",
        "base": false,
        "latitude": 28.4827,
        "longitude": -16.3415,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "TFS",
        "name": "Tenerife Sth",
        "base": true,
        "latitude": 28.0445,
        "longitude": -16.5725,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "SKG",
        "name": "Thessaloniki",
        "base": true,
        "latitude": 40.5197,
        "longitude": 22.9709,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "TSR",
        "name": "Timisoara",
        "base": false,
        "latitude": 45.81,
        "longitude": 21.3381,
        "country": {
            "code": "ro",
            "name": "Romania",
            "seoName": "romania",
            "englishSeoName": "romania",
            "currency": "EUR",
            "url": "romania"
        }
    },
    {
        "iataCode": "TLS",
        "name": "Toulouse",
        "base": false,
        "latitude": 43.6044,
        "longitude": 1.4439,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "TUF",
        "name": "Tours Loire Valley",
        "base": false,
        "latitude": 47.4322,
        "longitude": 0.727606,
        "country": {
            "code": "fr",
            "name": "France",
            "seoName": "france",
            "englishSeoName": "france",
            "currency": "EUR",
            "url": "france"
        }
    },
    {
        "iataCode": "TPS",
        "name": "Trapani",
        "base": true,
        "latitude": 37.9114,
        "longitude": 12.488,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "TRS",
        "name": "Trieste",
        "base": false,
        "latitude": 45.8275,
        "longitude": 13.4722,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "TRN",
        "name": "Turin",
        "base": false,
        "latitude": 45.2008,
        "longitude": 7.64963,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "VLC",
        "name": "Valencia",
        "base": true,
        "latitude": 39.4893,
        "longitude": -0.481625,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "VLL",
        "name": "Valladolid",
        "base": false,
        "latitude": 41.7061,
        "longitude": -4.85194,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "VXO",
        "name": "Växjö",
        "base": false,
        "latitude": 56.9291,
        "longitude": 14.728,
        "country": {
            "code": "se",
            "name": "Sweden",
            "seoName": "sweden",
            "englishSeoName": "sweden",
            "currency": "SEK",
            "url": "sweden"
        }
    },
    {
        "iataCode": "TSF",
        "name": "Venice Treviso",
        "base": false,
        "latitude": 45.6484,
        "longitude": 12.1944,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "VRN",
        "name": "Verona",
        "base": false,
        "latitude": 45.3957,
        "longitude": 10.8885,
        "country": {
            "code": "it",
            "name": "Italy",
            "seoName": "italy",
            "englishSeoName": "italy",
            "currency": "EUR",
            "url": "italy"
        }
    },
    {
        "iataCode": "VGO",
        "name": "Vigo",
        "base": false,
        "latitude": 42.23,
        "longitude": -8.63,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    },
    {
        "iataCode": "VNO",
        "name": "Vilnius",
        "base": false,
        "latitude": 54.6341,
        "longitude": 25.2858,
        "country": {
            "code": "lt",
            "name": "Lithuania",
            "seoName": "lithuania",
            "englishSeoName": "lithuania",
            "currency": "EUR",
            "url": "lithuania"
        }
    },
    {
        "iataCode": "WAW",
        "name": "Warsaw Chopin",
        "base": false,
        "latitude": 52.1657,
        "longitude": 20.9671,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "WMI",
        "name": "Warsaw Modlin",
        "base": true,
        "latitude": 52.4511,
        "longitude": 20.6517,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "WRO",
        "name": "Wroclaw",
        "base": true,
        "latitude": 51.1027,
        "longitude": 16.8858,
        "country": {
            "code": "pl",
            "name": "Poland",
            "seoName": "poland",
            "englishSeoName": "poland",
            "currency": "PLN",
            "url": "poland"
        }
    },
    {
        "iataCode": "ZAD",
        "name": "Zadar",
        "base": true,
        "latitude": 44.1083,
        "longitude": 15.3467,
        "country": {
            "code": "hr",
            "name": "Croatia",
            "seoName": "croatia",
            "englishSeoName": "croatia",
            "currency": "EUR",
            "url": "croatia"
        }
    },
    {
        "iataCode": "ZTH",
        "name": "Zakynthos",
        "base": false,
        "latitude": 37.7509,
        "longitude": 20.8843,
        "country": {
            "code": "gr",
            "name": "Greece",
            "seoName": "greece",
            "englishSeoName": "greece",
            "currency": "EUR",
            "url": "greece"
        }
    },
    {
        "iataCode": "ZAZ",
        "name": "Zaragoza",
        "base": false,
        "latitude": 41.6662,
        "longitude": -1.04155,
        "country": {
            "code": "es",
            "name": "Spain",
            "seoName": "spain",
            "englishSeoName": "spain",
            "currency": "EUR",
            "url": "spain"
        }
    }];

const possibleDestinations = getPossibleDestinations();

function getPossibleDestinations() {
    return _.sortBy(_.map(airportsInfo, airport => {
        return {
            name: `${airport.country.name} (${airport.name})`,
            id: airport.iataCode
        }
    }), ['name']);
}


function getFormattedData(date) {
    if (date)
        return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}

function createFlightData(data) {
    return _.flatten(_.map(data, (elem, key)=> {
        const dateFrom = new Date(elem.dateFrom);
        const dateTo = new Date(elem.dateTo);
        const price = `${elem.price.toFixed(2)}${elem.currency}`;

        return [
            `flight: ${key + 1}`,
            `   dateFrom: ${dateFrom}`,
            `   dateTo: ${dateTo} `,
            `   price: ${price}`
        ]

    }))
}
function getIataCode(name) {
    const foundName = _.find(possibleDestinations, (item) => item.name === name);
    return _.isEmpty(foundName) ? '' : foundName.id;
}
function createQuestionUrl(startPlace, endPlace, startDate, endDate) {
    const startIataCode = getIataCode(startPlace);
    const endIataCode = getIataCode(endPlace);
    if (startIataCode && endIataCode)
        return `${apiUrl}from/${startIataCode}/to/${endIataCode}/${getFormattedData(startDate)}/${getFormattedData(endDate)}/250/unique/`;
    return '';
}

function foundFlights(resp) {
    const flightsData = resp.data.flights;
    if (_.isEmpty(flightsData))
        return ['Sorry, no flights found. Try again.'];
    return createFlightData(flightsData);
}

export  {
    possibleDestinations,
    createQuestionUrl,
    foundFlights
};
