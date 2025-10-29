export const partijen = [
  {
    id: 'bij1',
    naam: 'BIJ1',
    kleur: '#FFD700',
    ideologie: 'Radicaal Links',
    financieleScore: 2,
    haalbaarheid: 'Niet haalbaar'
  },
  {
    id: 'pvdd',
    naam: 'Partij voor de Dieren',
    kleur: '#00A650',
    ideologie: 'Ecocentrisch',
    financieleScore: 3,
    haalbaarheid: 'Onzeker'
  },
  {
    id: 'sp',
    naam: 'SP',
    kleur: '#FF4444',
    ideologie: 'Socialistisch',
    financieleScore: 4,
    haalbaarheid: 'Niet haalbaar'
  },
  {
    id: 'glpvda',
    naam: 'GroenLinks-PvdA',
    kleur: '#77DD77',
    ideologie: 'Progressief',
    financieleScore: 9,
    haalbaarheid: 'Haalbaar'
  }
];

export const themas = [
  {
    id: 'wonen',
    titel: 'Wonen',
    icon: '🏠',
    beschrijving: 'Hoe pakken de partijen de wooncrisis aan?'
  },
  {
    id: 'zorg',
    titel: 'Zorg',
    icon: '🏥',
    beschrijving: 'Plannen voor betaalbare en toegankelijke zorg'
  },
  {
    id: 'werk-loon',
    titel: 'Werk & Loon',
    icon: '💼',
    beschrijving: 'Minimumloon, arbeidsvoorwaarden en sociale zekerheid'
  },
  {
    id: 'belastingen',
    titel: 'Belastingen',
    icon: '💰',
    beschrijving: 'Wie betaalt wat? Vermogen, inkomen en bedrijven'
  },
  {
    id: 'onderwijs',
    titel: 'Onderwijs',
    icon: '📚',
    beschrijving: 'Investeringen in onderwijs en studiekosten'
  },
  {
    id: 'klimaat',
    titel: 'Klimaat',
    icon: '🌍',
    beschrijving: 'Klimaatambities en energietransitie'
  },
  {
    id: 'buitenland',
    titel: 'Buitenland',
    icon: '🌐',
    beschrijving: 'Defensie, NAVO en internationale samenwerking'
  },
  {
    id: 'migratie',
    titel: 'Migratie',
    icon: '🛂',
    beschrijving: 'Asielbeleid en arbeidsmigratie'
  },
  {
    id: 'samenleving',
    titel: 'Samenleving & Inclusie',
    icon: '🤝',
    beschrijving: 'Inclusie, diversiteit, normen en waarden'
  }
];

export const ideologischeVerschillen = {
  bij1: {
    kernwaarden: ['Antiracisme', 'Dekolonisatie', 'Radicale gelijkheid'],
    positie: 'Meest radicaal links - wil fundamentele systeemverandering',
    kenmerken: [
      'NAVO verlaten en neutraliteit',
      'Volledige nationalisatie zorg en afschaffing vrije huursector',
      'Vermogensplafond met 100% marginaal tarief',
      '30-urige werkweek met loonbehoud',
      '"Geen mens is illegaal" - open grenzen'
    ]
  },
  sp: {
    kernwaarden: ['Socialisme', 'Solidariteit', 'Volksmacht'],
    positie: 'Radicaal socialistisch - krachtige herverdeling',
    kenmerken: [
      'NAVO opheffen, maar blijft voorlopig lid',
      'Nationaal ZorgFonds en Woonfonds (€30 miljard)',
      'Vermogensplafond €50 miljoen + 5% miljonairsbelasting',
      'Minimumloon €18/uur',
      'Migratiesaldo 40.000 per jaar'
    ]
  },
  glpvda: {
    kernwaarden: ['Rechtvaardigheid', 'Duurzaamheid', 'Solidariteit'],
    positie: 'Progressief pragmatisch - hervorming binnen systeem',
    kenmerken: [
      'Steunt NAVO en hogere defensie-uitgaven',
      'Hervorming verzorgingsstaat binnen bestaand systeem',
      'Eerlijke belasting op vermogen zonder extreme tarieven',
      'Klimaatneutraal in 2040',
      'Europese aanpak migratie'
    ]
  },
  pvdd: {
    kernwaarden: ['Dierenrechten', 'Klimaatrechtvaardigheid', 'Ecosysteem centraal'],
    positie: 'Ecocentrisch - welzijn boven welvaart',
    kenmerken: [
      'Radicale verkleining bio-industrie',
      'Behoeften van dieren voorop',
      'Maximaal 1,5 graad opwarming (Parijs)',
      'BTW op gezond eten naar 0%',
      'Vrede en internationale samenwerking'
    ]
  }
};

export const financieleScores = {
  bij1: {
    score: 2,
    uitgaven: '>€200 miljard',
    inkomsten: '€10 miljard',
    tekort: 'Zeer groot',
    doorrekening: 'Geen',
    oordeel: 'Niet haalbaar - bewust principieel programma zonder financiële onderbouwing'
  },
  sp: {
    score: 4,
    uitgaven: '€40 miljard',
    inkomsten: '€18 miljard',
    tekort: '€23 miljard',
    doorrekening: 'ESB (onafhankelijk)',
    oordeel: 'Niet haalbaar - structureel groot tekort met hoge risico\'s op kapitaalvlucht'
  },
  glpvda: {
    score: 9,
    uitgaven: '€15,0 miljard',
    inkomsten: '€13,2 miljard',
    tekort: 'EMU-saldo verbetert met 0,2%-punt',
    doorrekening: 'CPB (officieel)',
    oordeel: 'Haalbaar - enige programma met positief saldo-effect door macro-economische doorwerking'
  },
  pvdd: {
    score: 3,
    uitgaven: 'Onbekend',
    inkomsten: 'Onbekend',
    tekort: 'Onbekend',
    doorrekening: 'Geen',
    oordeel: 'Onzeker - geen cijfers, focus op systeemverandering en welzijn boven welvaart'
  }
};

export const kamerImpact = {
  bij1: {
    zetels: '0-1 zetels (Peilingwijzer 28 okt)',
    peilingUrl: 'https://peilingwijzer.tomlouwerse.nl/',
    rol: 'Activistische oppositie (indien vertegenwoordigd)',
    agendapunten: [
      'Antiracisme en dekolonisatie op de agenda',
      'Aandacht voor intersectionele ongelijkheid',
      'Kritische vragen over klimaatrechtvaardigheid',
      'Stem voor meest kwetsbare groepen',
      'Radicale alternatieven in het debat'
    ],
    effect: 'Verschuift het Overton-venster naar links en brengt onderwerpen als institutioneel racisme en dekolonisatie in het debat. Let op: volgens laatste peilingen is het onzeker of BIJ1 in de Kamer komt.'
  },
  sp: {
    zetels: '3-5 zetels (Peilingwijzer 28 okt)',
    peilingUrl: 'https://peilingwijzer.tomlouwerse.nl/',
    rol: 'Socialistische oppositie',
    agendapunten: [
      'Wooncrisis als prioriteit (Woonfonds €30 miljard)',
      'Nationalisatie zorg en afschaffing marktwerking',
      'Vermogensongelijkheid aanpakken',
      'Minimumloon €18/uur',
      'Kritiek op EU en NAVO'
    ],
    effect: 'Sterke stem voor herverdeling en publieke voorzieningen, dwingt andere partijen tot scherpere standpunten over ongelijkheid. Fors zetelverlies ten opzichte van vorige verkiezingen.'
  },
  glpvda: {
    zetels: '22-26 zetels (Peilingwijzer 28 okt)',
    peilingUrl: 'https://peilingwijzer.tomlouwerse.nl/',
    rol: 'Grootste of tweede partij',
    agendapunten: [
      'Klimaat en duurzaamheid',
      'Sociaal-economische hervormingen',
      'Europese samenwerking',
      'Investeringen in onderwijs en zorg',
      'Progressieve belastinghervorming'
    ],
    effect: 'Een van de grootste partijen met 22-26 zetels. Realistische kans op regeringsdeelname of gedoogconstructie, kan daadwerkelijk beleid beïnvloeden. Nek-aan-nek race met D66 en PVV.'
  },
  pvdd: {
    zetels: '2-4 zetels (Peilingwijzer 28 okt)',
    peilingUrl: 'https://peilingwijzer.tomlouwerse.nl/',
    rol: 'Themapartij met focus op dieren en klimaat',
    agendapunten: [
      'Dierenrechten en welzijn op de agenda',
      'Radicale verkleining bio-industrie',
      'Klimaat en natuurbescherming',
      'Gezond en plantaardig eten stimuleren',
      'Voorkomen nieuwe pandemieën'
    ],
    effect: 'Brengt dierenrechten en ecosysteem-denken in het debat. Zet bio-industrie en klimaat op de agenda vanuit uniek ecocentrisch perspectief. Stabiele fractie van 2-4 zetels.'
  }
};
