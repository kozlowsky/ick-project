const state = {
    species: [
        'kot',
        'koń',
        'pająk',
        'pies',
        'wąż',
        'żółw'
    ],
    breeds: [
        [
            'Perski',
            'Syjamski',
            'Norweski'
        ],
        [
            'fryzyjski',
            'islandzki',
            'belgijski',
            'Shire'
        ],
        [
            'czworonolicy',
            'malowany',
            'sundajski'
        ],
        [
            "affenpinscher",
            "african",
            "airedale",
            "akita",
            "appenzeller",
            "basenji",
            "beagle",
            "bluetick",
            "borzoi",
            "bouvier",
            "boxer",
            "brabancon",
            "briard",
            "chihuahua",
            "chow",
            "clumber",
            "cockapoo",
            "collie",
            "husky",
            "keeshond",
            "kelpie",
            "komondor",
            "kuvasz",
            "labrador",
            "leonberg",
            "lhasa",
            "malamute",
            "malinois",
            "maltese",
            "mastiff"
        ],
        [
            'pyton',
            'boa'
        ],
        [
            'tarantula',
            'ptasznik'
        ]
    ],
    colors: [
        'biały',
        'brązowy',
        'czarny',
        'rudy',
        'Obojętne'
    ]
}

const getters = {
    getSpecies: state => state.species,
    getColors: state => state.colors,
    getBreeds: state => state.breeds
}

export default {
    state,
    getters
}