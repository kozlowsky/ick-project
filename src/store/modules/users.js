const state = {
    users: [
        {
            name: 'Kamil',
            surname: 'Drozdowski',
            email: 'stowarzyszenie@aa.pl',
            login: 'user',
            city: 'Dzierżanów',
            street: 'Chwastowa 17/33',
            role: 'advertiser'
        },
        {
            name: 'Tomasz',
            surname: 'Michalczewski',
            email: 'malpie@sztuczki.pl',
            city: 'Radom',
            street: 'Popularna 7',
            role: 'admin'
        }]
};

const getters = {
    getUsers: state => state.users
};

export default {
    state,
    getters
}
