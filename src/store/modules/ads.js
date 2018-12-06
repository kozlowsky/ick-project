const state = {
    ads: [
        {
            id: 1,
            advertiser: 'Schronisko im. Kleksa we Wrocławiu',
            advertiserType: 'Schronisko',
            advertiserInfo: 'Schronisko przy ulicy Kociej',
            advertiserTelephone: '700300400',
            title: 'Super kot',
            type: 'adopcja',
            description: 'Mam na sprzedaż kota, nówka sztuka nie śmigana',
            address: 'Warszawa, Kocia 12',
            animalType: 'Kot',
            specie: 'perski',
            gender: 'Female',
            age: 2,
            colors: ['czarny', 'biały'],
            listOfVaccines: [
                {
                    name: 'kocia grypa',
                    date: '14-08-2018'
                }
            ],
            listOfDiseases: [{
                name: 'czarna śmierć',
                interval: '05-08-2018 - 13-08-2018'

            }]
        },
        {
            id: 2,
            advertiser: 'Jan Kowalski',
            advertiserType: 'Prywatny',
            advertiserInfo: null,
            advertiserTelephone: '800999312',
            title: 'Reksio',
            type: 'Wirtualna Adopcja',
            description: 'Główna postać ze znajej kreskówki nie radzi sobie z końcem kariery' +
                'prosi o wsparcie',
            address: 'Wrocław, Psia 12',
            animalType: 'Pies',
            specie: 'Owczarek Niemiecki',
            gender: 'Male',
            age: 15,
            colors: ['czerwony'],
            listOfVaccines: [{
                name: 'szczepienie Michałowicza',
                date: '17-04-2018'
            }],
            listOfDiseases: [
                {
                    name: 'gorączka',
                    interval: '02-02-2012 - 03-02-2012'
                },
                {
                    name: 'nieustanna czkawka',
                    interval: '04-05-2013 - 05-05-2013'
                },
                {
                    name: 'choroba Michałowicza',
                    interval: '03-04-2018 - 15-04-2018'
                }]
        }
    ]
}

const getters = {
    ads(state) {
        return state.ads
    }
}

export default {
    state,
    getters
}
