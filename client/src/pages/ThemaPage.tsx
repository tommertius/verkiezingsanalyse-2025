import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRoute } from 'wouter';
import { themas } from '@/lib/content';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

// Content per thema
const themaContent: Record<string, {
  bij1: { standpunten: string[]; kosten?: string };
  sp: { standpunten: string[]; kosten?: string };
  glpvda: { standpunten: string[]; kosten?: string };
  overeenkomsten: string[];
  verschillen: string;
}> = {
  wonen: {
    bij1: {
      standpunten: [
        'Afschaffing vrije huursector - alle huurwoningen worden sociale huur',
        'Huurprijsplafond van €750 per maand',
        '1 miljoen nieuwe sociale huurwoningen',
        'Onteigening van leegstaande woningen en speculatief vastgoed',
        'Verbod op winstoogmerk in de woningmarkt'
      ]
    },
    sp: {
      standpunten: [
        'Nationaal Woonfonds van €30 miljard voor 1 miljoen betaalbare woningen',
        'Bevriezing van sociale huren tijdens kabinetsperiode',
        'Belasting vanaf tweede huis om speculatie tegen te gaan',
        'Belasting op grondspeculatie',
        'Maximale huurverhoging van inflatie minus 1%'
      ],
      kosten: '€30 miljard (eenmalig)'
    },
    glpvda: {
      standpunten: [
        'Leningen en garanties voor woningcorporaties',
        'Afbouw hypotheekrenteaftrek in 12 jaar',
        'Woningaanbod neemt toe volgens CPB, vooral corporatiesector',
        'Lagere woningprijzen voor starters door fiscale maatregelen',
        'Woonlasten stijgen korte termijn voor bestaande eigenaren'
      ],
      kosten: 'Onderdeel van totaalpakket (€15 mld)'
    },
    overeenkomsten: [
      'Alle drie willen 1 miljoen nieuwe (sociale) woningen',
      'Focus op betaalbaarheid en toegankelijkheid',
      'Kritiek op marktwerking in de woningmarkt',
      'Meer macht voor woningcorporaties'
    ],
    verschillen: 'BIJ1 wil de vrije huursector volledig afschaffen en een huurprijsplafond invoeren. De SP zet in op een groot Nationaal Woonfonds van €30 miljard. GroenLinks-PvdA kiest voor een gematigder aanpak met leningen, garanties en fiscale maatregelen zoals afbouw van de hypotheekrenteaftrek.'
  },
  zorg: {
    bij1: {
      standpunten: [
        'Nationaal ZorgFonds - volledige nationalisatie van de zorg',
        'Afschaffing van de zorgverzekeraars',
        'Afschaffing eigen risico',
        'Gratis tandheelkundige zorg voor iedereen',
        'Verbod op winstoogmerk in de zorg'
      ]
    },
    sp: {
      standpunten: [
        'Nationaal ZorgFonds met €35 miljard extra per jaar',
        'Afschaffing eigen risico (€3 miljard)',
        'Mondzorg in basispakket (€2,4 miljard)',
        'Fysiotherapie in basispakket (€1,3 miljard)',
        'Artsen verplicht in loondienst'
      ],
      kosten: '€35 miljard per jaar'
    },
    glpvda: {
      standpunten: [
        'Uitbreiding basispakket (€1,9 miljard)',
        'Lagere financiële drempels voor zorggebruikers',
        'Pakketuitbreidingen en heffing op vapes',
        'Hervorming binnen bestaand systeem',
        'Focus op preventie en toegankelijkheid'
      ],
      kosten: '€1,9 miljard'
    },
    overeenkomsten: [
      'Afschaffing of beperking eigen risico',
      'Uitbreiding basispakket (mondzorg, fysiotherapie)',
      'Kritiek op marktwerking in de zorg',
      'Meer publieke controle'
    ],
    verschillen: 'BIJ1 en SP willen volledige nationalisatie met een Nationaal ZorgFonds. De SP heeft dit het meest uitgewerkt met €35 miljard extra per jaar. GroenLinks-PvdA kiest voor hervorming binnen het bestaande systeem met pakketuitbreidingen en lagere drempels.'
  },
  'werk-loon': {
    bij1: {
      standpunten: [
        'Minimumloon €19 per uur',
        '30-urige werkweek met loonbehoud',
        'Basisbaan voor iedereen die wil werken',
        'Afschaffing flexwerk en ZZP-constructies',
        'Versterking vakbondsrecht en stakingsrecht'
      ]
    },
    sp: {
      standpunten: [
        'Minimumloon €18 per uur (kost €16 miljard volgens ESB)',
        'Verlaging AOW-leeftijd naar 65 jaar (€6,5 miljard)',
        'Uitbreiding geboorteverlof tot 15 maanden (€0,8 miljard)',
        'Afschaffing kostendelersnorm (€0,3 miljard)',
        'Arbeidsmigratie als "moderne slavernij" aanpakken'
      ],
      kosten: '€23,6 miljard (sociale zekerheid)'
    },
    glpvda: {
      standpunten: [
        'Minimumloon verhoging met 5,7%',
        'Verzilverbare basiskorting',
        'Vijfschijvenstelsel in box 1',
        'Inkomenszekerheid vergroten',
        'Armoede daalt van 2,6% naar 1,6%'
      ],
      kosten: 'Onderdeel van totaalpakket'
    },
    overeenkomsten: [
      'Hoger minimumloon',
      'Versterking sociale zekerheid',
      'Meer rechten voor werknemers',
      'Kritiek op flexibilisering arbeidsmarkt'
    ],
    verschillen: 'BIJ1 is het meest radicaal met €19/uur en 30-urige werkweek. De SP wil €18/uur (kost €16 miljard) en AOW-leeftijd naar 65 jaar. GroenLinks-PvdA kiest voor gematigde verhoging van 5,7% en fiscale hervormingen.'
  },
  belastingen: {
    bij1: {
      standpunten: [
        'Vermogensplafond met 100% marginaal tarief',
        'Ruim €10 miljard uit vermogensbelasting',
        'Progressieve belasting op erfenissen',
        'Afschaffing BTW op basisbehoeften',
        'Hogere belasting op grote bedrijven'
      ],
      kosten: '€10 miljard inkomsten'
    },
    sp: {
      standpunten: [
        '5% miljonairsbelasting boven €5 miljoen (€12 miljard)',
        'Vermogensplafond van €50 miljoen',
        'VPB van 25,8% naar 35,6% (€10,9 miljard)',
        'Vertrekbelasting tegen kapitaalvlucht',
        'BTW-verlaging voeding (-€5,1 miljard)'
      ],
      kosten: '€18 miljard inkomsten'
    },
    glpvda: {
      standpunten: [
        'Brede vermogensbelasting (€19,7 miljard)',
        'Afbouw hypotheekrenteaftrek in 12 jaar',
        'Hoger VPB-tarief (gematigd)',
        'Verzwaring erf- en schenkbelasting',
        'Lasten gezinnen: -€13,8 mld, bedrijven: +€23,7 mld'
      ],
      kosten: '€13,2 miljard inkomsten'
    },
    overeenkomsten: [
      'Hogere belasting op vermogen',
      'Hogere belasting op bedrijfswinsten',
      'Lastenverlichting voor lagere inkomens',
      'Progressiever belastingstelsel'
    ],
    verschillen: 'BIJ1 heeft 100% marginaal tarief (leidt tot kapitaalvlucht). SP heeft hoogste VPB-tarief in Europa (35,6%) met groot risico op bedrijfsvlucht. GroenLinks-PvdA kiest voor brede vermogensbelasting zonder extreme tarieven.'
  },
  onderwijs: {
    bij1: {
      standpunten: [
        'Afschaffing collegegeld',
        'Gratis kinderopvang voor iedereen',
        'Kleinere klassen in het basisonderwijs',
        'Meer leraren en betere arbeidsvoorwaarden',
        'Dekolonisatie van het curriculum'
      ]
    },
    sp: {
      standpunten: [
        'Maximaal 21 leerlingen per klas basisonderwijs (€1,2 miljard)',
        'Afschaffing vrijwillige ouderbijdrage (€0,8 miljard)',
        'Afschaffing lesgeld mbo (€0,5 miljard)',
        'Meer investeringen in leraren',
        'Gratis schoolboeken en materialen'
      ],
      kosten: '€2,5 miljard'
    },
    glpvda: {
      standpunten: [
        'Intensivering in alle onderwijssectoren (€3,0 miljard)',
        'Toename menselijk kapitaal volgens CPB',
        'Investeringen in kwaliteit en toegankelijkheid',
        'Meer recht op formele kinderopvang',
        'Lumpsum intensivering'
      ],
      kosten: '€3,0 miljard'
    },
    overeenkomsten: [
      'Meer investeringen in onderwijs',
      'Kleinere klassen',
      'Betere arbeidsvoorwaarden leraren',
      'Toegankelijkheid vergroten'
    ],
    verschillen: 'Alle partijen willen meer investeren in onderwijs. GroenLinks-PvdA investeert het meest (€3,0 miljard) met focus op alle sectoren. SP richt zich op concrete maatregelen zoals kleinere klassen. BIJ1 benadrukt dekolonisatie van het curriculum.'
  },
  klimaat: {
    bij1: {
      standpunten: [
        'Klimaatrechtvaardigheid centraal',
        'Snelle afbouw fossiele industrie',
        'Gratis openbaar vervoer',
        'Verbod op korte vluchten',
        'Klimaatschade verhalen op grote vervuilers'
      ]
    },
    sp: {
      standpunten: [
        'Gratis openbaar vervoer (€4 miljard)',
        'Publieke controle over energiesector',
        'Sociaal rechtvaardige energietransitie',
        'Geen kernenergie',
        'Klimaatmaatregelen niet ten koste van gewone mensen'
      ],
      kosten: '€4 miljard (gratis OV)'
    },
    glpvda: {
      standpunten: [
        'Klimaatneutraal in 2040 (concrete deadline)',
        'Aanzienlijke inspanning op klimaat en stikstof',
        'Klimaatheffingen: +€5,0 miljard',
        'Subsidies en normeringen naast heffingen',
        'Broeikasgasemissiereductie (wel lekkage naar buitenland)'
      ],
      kosten: '€5,0 miljard (klimaat en milieu)'
    },
    overeenkomsten: [
      'Ambitieus klimaatbeleid',
      'Sociale rechtvaardigheid in transitie',
      'Kritiek op fossiele industrie',
      'Investeringen in duurzaamheid'
    ],
    verschillen: 'GroenLinks-PvdA heeft de meest concrete klimaatdoelen (2040) en grootste financiële inzet (€5 miljard). SP en BIJ1 benadrukken sociale rechtvaardigheid sterker. BIJ1 is het meest radicaal met verbod op korte vluchten.'
  },
  buitenland: {
    bij1: {
      standpunten: [
        'NAVO verlaten en neutraliteit',
        'Geen wapenexport',
        'Solidariteit met mondiale Zuiden',
        'Dekolonisatie van buitenlands beleid',
        'Ontwikkelingshulp verhogen'
      ]
    },
    sp: {
      standpunten: [
        'NAVO opheffen, maar blijft voorlopig lid',
        'Ontwikkelingshulp naar 0,7% BNI (€3,3 miljard)',
        'Kritiek op EU-beleid',
        'Geen militaire interventies',
        'Vreedzame buitenlandse politiek'
      ],
      kosten: '€3,3 miljard (ontwikkelingshulp)'
    },
    glpvda: {
      standpunten: [
        'Steunt NAVO-lidmaatschap',
        'Defensie-uitgaven: +€6,3 miljard (oplopend tot €8,4 miljard)',
        'Europese samenwerking versterken',
        'Internationale samenwerking: +€1,5 miljard',
        'Pragmatische aanpak'
      ],
      kosten: '€6,3 miljard (defensie), €1,5 miljard (internationale samenwerking)'
    },
    overeenkomsten: [
      'Ontwikkelingshulp verhogen',
      'Internationale solidariteit',
      'Kritiek op wapenhandel (BIJ1 en SP)'
    ],
    verschillen: 'Het grootste verschil tussen de partijen. BIJ1 wil NAVO verlaten, SP wil NAVO opheffen maar blijft voorlopig lid, GroenLinks-PvdA steunt NAVO en verhoogt defensie-uitgaven met €6,3-8,4 miljard. Dit is een fundamenteel ideologisch verschil.'
  },
  migratie: {
    bij1: {
      standpunten: [
        '"Geen mens is illegaal" - pleit voor open grenzen',
        'Afschaffing vreemdelingendetentie',
        'Statushouders direct toegang tot arbeidsmarkt',
        'Geen onderscheid tussen vluchtelingen',
        'Kritiek op Europese grenspolitiek'
      ]
    },
    sp: {
      standpunten: [
        'Migratiesaldo van 40.000 per jaar (enige partij met concreet cijfer)',
        'Arbeidsmigratie als "moderne slavernij" aanpakken',
        'Menswaardige opvang vluchtelingen',
        'Aanpak van oorzaken migratie',
        'Kritiek op EU-migratiebeleid'
      ]
    },
    glpvda: {
      standpunten: [
        'Europese aanpak van migratie',
        'Menswaardige opvang van vluchtelingen',
        'Werken binnen bestaande kaders',
        'Pragmatische benadering',
        'Integratie en participatie'
      ]
    },
    overeenkomsten: [
      'Menswaardige opvang vluchtelingen',
      'Kritiek op huidige asielbeleid',
      'Aandacht voor oorzaken migratie'
    ],
    verschillen: 'BIJ1 is het meest radicaal met "geen mens is illegaal" en open grenzen. SP is de enige partij met een concreet migratiesaldo (40.000/jaar) en benadrukt arbeidsmigratie. GroenLinks-PvdA kiest voor Europese aanpak binnen bestaande kaders.'
  }
};

export default function ThemaPage() {
  const [, params] = useRoute('/thema/:thema');
  const themaId = params?.thema || '';
  
  const thema = themas.find(t => t.id === themaId);
  const content = themaContent[themaId];

  if (!thema || !content) {
    return (
      <Layout>
        <div className="container py-12">
          <p>Thema niet gevonden</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12">
        <div className="article-container">
          <Link href="/">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Terug naar home
            </Button>
          </Link>

          <div className="mb-8">
            <div className="text-4xl mb-2">{thema.icon}</div>
            <h1 className="text-4xl font-bold mb-2">{thema.titel}</h1>
            <p className="text-xl text-muted-foreground">{thema.beschrijving}</p>
          </div>

          {/* Overeenkomsten */}
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Gemeenschappelijke Grond</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.overeenkomsten.map((punt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>{punt}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Verschillen */}
          <div className="mb-8 p-4 bg-muted/50 rounded-lg border">
            <h3 className="font-semibold mb-2">Belangrijkste Verschillen</h3>
            <p className="text-muted-foreground">{content.verschillen}</p>
          </div>

          {/* Partij standpunten */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>BIJ1</CardTitle>
                  <Badge variant="outline">Radicaal Links</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {content.bij1.standpunten.map((punt, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{punt}</span>
                    </li>
                  ))}
                </ul>
                {content.bij1.kosten && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Kosten:</strong> {content.bij1.kosten}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>SP</CardTitle>
                  <Badge variant="outline">Socialistisch</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {content.sp.standpunten.map((punt, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{punt}</span>
                    </li>
                  ))}
                </ul>
                {content.sp.kosten && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Kosten:</strong> {content.sp.kosten}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>GroenLinks-PvdA</CardTitle>
                  <Badge variant="outline">Progressief</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {content.glpvda.standpunten.map((punt, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{punt}</span>
                    </li>
                  ))}
                </ul>
                {content.glpvda.kosten && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Kosten:</strong> {content.glpvda.kosten}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Navigation to other themes */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4">Andere Thema's</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {themas.filter(t => t.id !== themaId).map((t) => (
                <Link key={t.id} href={`/thema/${t.id}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardContent className="p-4">
                      <div className="text-2xl mb-1">{t.icon}</div>
                      <p className="text-sm font-medium">{t.titel}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
