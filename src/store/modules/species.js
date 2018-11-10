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
            'Owczarek niemiecki',
            'Chihuahua',
            'Rottweiler'
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