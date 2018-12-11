const state = {
    species: [
        'Pies',
        'Kot',
        'Koń',
        'Pająk',
        'Świnia',
        'Wąż',
        'Żółw'
    ],
    breeds: [
        [
            "owczarek niemiecki",
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
            "mastiff",
            "owczarek niemiecki"
        ],
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
            'pyton',
            'boa'
        ],
        [
            'tarantula',
            'ptasznik'
        ],
        [
            'rasowy',
            'ptasznik'
        ]
    ],
    colors: [
        'biały',
        'brązowy',
        'czarny',
        'rudy'
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
