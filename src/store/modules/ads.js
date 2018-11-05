const state = {
    ads: [
        {
            id: 1,
            advertiser: 'Jan Kowalski',
            title: 'Super kot',
            type: 'adopcja',
            description: 'Mam na sprzedaż kota, nówka sztuka nie śmigana',
            address: 'Warszawa, Kocia 12',
            species: 'Kot domowy',
            gender: 'Female',
            age: 2,
            colors: ['czarny', 'biały'],
            listOfVaccines: ['kocia grypa'],
            listOfDiseases: ['czarna śmierć']
        },
        {
            id: 2,
            advertiser: 'Schronisko im. Kleksa we Wrocławiu',
            title: 'Piesek Leszek',
            type: 'Wirtualna Adopcja',
            description: 'Główna postać ze znajej kreskówki nie radzi sobie z końcem kariery' +
                'prosi o wsparcie',
            address: 'Wrocław, Psia 12',
            species: 'Pitbull',
            gender: 'Male',
            age: 15,
            colors: ['czerwony'],
            listOfVaccines: [],
            listOfDiseases: []
        }
        ]
}

const getters = {
    ads (state) {
        return state.ads
    }
}

export default {
    state,
    getters
}
