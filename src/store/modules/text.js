const state = {
    lorem: ' Maecenas ultricies viverra ligula, dignissim vehicula nibh convallis nec. Etiam vulputate scelerisque nunc. In vel dapibus tellus. In hac habitasse platea dictumst. Suspendisse porta commodo tempus. Nulla molestie nulla non nibh varius feugiat nec in sem. Cras facilisis risus velit, vel imperdiet mauris convallis non. Nunc mollis dignissim enim. Vivamus mollis vulputate leo tempus dignissim. Cras turpis erat, dictum et leo eu, porttitor consequat augue. Integer ornare elementum nunc non vehicula. Pellentesque nulla orci, cursus quis nunc vestibulum, accumsan ultrices dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi scelerisque enim nec justo tristique pretium. In id ligula cursus, accumsan nibh ut, venenatis ex. ',
    wikiText: 'Owczarek niemiecki powinien być psem żywiołowym i energicznym. Jest psem inteligentnym, posłusznym i lojalnym. Szybko i chętnie się uczy, współpracuje. Wymaga od właściciela zapewnienia dużej ilości ruchu i zajęcia. Psy nieprawidłowo socjalizowane i źle wychowywane mogą stać się lękliwe, nerwowe, co może prowadzić do agresji bądź histeryczności psa.',
    adText: 'Informujemy że w naszej hodowli owczarka niemieckiego długowłosego Sajk dnia 01/09/2018 na świat przyszedł miot cudownych szczeniąt, 4 suczki i 3 pieski. \n' +
        'Szczenięta ciemno podpalane, bardzo dobrze pigmentowane, mocnej kości. \n' +
        'Wychowane w kontakcie z innymi zwierzętami i człowiekiem.\n' +
        'Szczeniaki będą zaszczepione, odrobaczone i tatuowane.\n' +
        '\n' +
        'Rodzicami są Matka: Tina NEXTOR\n' +
        'BH, ED 0/0, HD A/A suka zdrowa, zrównoważona i odważna \n' +
        '\n' +
        'Ojciec: Edi z kojca elbikame\n' +
        'ED 0/0, HA A/A pies o wspaniałym charakterze, odważny i zrównoważony\n' +
        'IPO2\n' +
        '\n' +
        'Wszystkie szczeniaki w mojej hodowli posiadają metryki umożliwiające rejestrację w Związku Kynologicznym w Polsce.\n' +
        'Rodzice maluchów całkowicie wolni od dysplazji.\n' +
        'ZKwP- To jedyna organizacja kynologiczna zrzeszona w FCI.\n' +
        '\n' +
        'Szczenięta do odbioru około 17 października.',
    contactText: 'Proszę o kontakt w godzinach popołudniowych lub na weekendach na podany numer telefonu. Mieszkanie znajduje się na trzecim piętrze.',
    diseaseText: 'Choroba przeszła bez komplikacji.',
    vaccineText: 'Szczepienie wykonane w gabinecie "Szczęście", po szczepieniu nie wystąpiły żadne objawy.'
};

const getters = {
    lorem: state => state.lorem,
    wikiText: state => state.wikiText,
    adText: state => state.adText,
    contactText: state => state.contactText,
    diseaseText: state => state.diseaseText,
    vaccineText: state => state.vaccineText
};

export default {
    state,
    getters
}

