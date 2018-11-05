const state = {
    species: [{
        id: 1,
        name: 'Kot Domowy',
        description: 'No za dużo nie wymaga'
    }, {
        id: 2,
        name: 'Pitbull',
        description: 'Wymaga silnego właścicela, który wie jak się z takimi zwierzętami obchodzić'
    }]
}
const getters = {
    ads (state) {
        return state.species
    }
}
export default {
    state,
    getters
}
