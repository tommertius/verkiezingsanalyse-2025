import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function Financieel() {
  return (
    <Layout>
      <div className="py-12">
        <div className="article-container">
          <h1 className="text-4xl font-bold mb-4">Financiële Haalbaarheid</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Analyse op basis van CPB-doorrekening (GroenLinks-PvdA) en ESB-doorrekening (SP)
          </p>

          {/* Executive Summary */}
          <Card className="mb-8 border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Samenvatting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Na ontvangst van zowel de officiële CPB-doorrekening van GroenLinks-PvdA als de
                ESB-doorrekening van de SP is het beeld compleet. <strong>GroenLinks-PvdA heeft het
                enige financieel haalbare programma</strong> met een verbetering van het overheidssaldo.
                <strong> De SP heeft een tekort van €23 miljard</strong> volgens onafhankelijke doorrekening.
                <strong> BIJ1 en PvdD hebben geen doorrekening</strong> en minimale financiële onderbouwing.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-2">Partij</th>
                      <th className="text-left p-2">Doorrekening</th>
                      <th className="text-right p-2">Uitgaven</th>
                      <th className="text-right p-2">Inkomsten</th>
                      <th className="text-right p-2">Tekort 2030</th>
                      <th className="text-center p-2">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">BIJ1</td>
                      <td className="p-2">
                        <Badge variant="outline">Geen</Badge>
                      </td>
                      <td className="text-right p-2">&gt;€200 mld</td>
                      <td className="text-right p-2">+€10 mld</td>
                      <td className="text-right p-2 text-red-600 font-semibold">Zeer groot</td>
                      <td className="text-center p-2">
                        <span className="inline-flex items-center gap-1 font-bold text-red-600">
                          <XCircle className="h-4 w-4" />
                          2/10
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">Partij voor de Dieren</td>
                      <td className="p-2">
                        <Badge variant="outline">Geen</Badge>
                      </td>
                      <td className="text-right p-2">Onbekend</td>
                      <td className="text-right p-2">Onbekend</td>
                      <td className="text-right p-2 text-orange-600 font-semibold">Onbekend</td>
                      <td className="text-center p-2">
                        <span className="inline-flex items-center gap-1 font-bold text-orange-600">
                          <AlertCircle className="h-4 w-4" />
                          3/10
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">SP</td>
                      <td className="p-2">
                        <Badge variant="secondary">ESB (onafhankelijk)</Badge>
                      </td>
                      <td className="text-right p-2">+€40 mld</td>
                      <td className="text-right p-2">+€18 mld</td>
                      <td className="text-right p-2 text-red-600 font-semibold">-€23 mld</td>
                      <td className="text-center p-2">
                        <span className="inline-flex items-center gap-1 font-bold text-orange-600">
                          <AlertCircle className="h-4 w-4" />
                          4/10
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-semibold">GroenLinks-PvdA</td>
                      <td className="p-2">
                        <Badge>CPB (officieel)</Badge>
                      </td>
                      <td className="text-right p-2">+€15,0 mld</td>
                      <td className="text-right p-2">+€13,2 mld</td>
                      <td className="text-right p-2 text-green-600 font-semibold">-€1,8 mld</td>
                      <td className="text-center p-2">
                        <span className="inline-flex items-center gap-1 font-bold text-green-600">
                          <CheckCircle2 className="h-4 w-4" />
                          9/10
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* GroenLinks-PvdA */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              GroenLinks-PvdA: Enige Haalbare Programma
            </h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>CPB-Doorrekening (Oktober 2025)</CardTitle>
                <CardDescription>Officiële doorrekening door Centraal Planbureau</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Uitgaven</p>
                    <p className="text-2xl font-bold">+€15,0 mld</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Inkomsten</p>
                    <p className="text-2xl font-bold">+€13,2 mld</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">EMU-saldo</p>
                    <p className="text-2xl font-bold text-green-600">+0,2%-punt</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">EMU-schuld</p>
                    <p className="text-2xl font-bold text-green-600">-1,6%-punt</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="font-semibold text-green-900 mb-2">Cruciale bevinding:</p>
                  <p className="text-sm text-green-800">
                    Ondanks dat uitgaven €1,8 miljard hoger zijn dan inkomsten, <strong>verbetert</strong> het
                    EMU-saldo door positieve macro-economische doorwerking. Hogere groei en werkgelegenheid
                    leveren extra belastinginkomsten op.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="prose max-w-none space-y-4 mb-6">
              <h3 className="text-xl font-semibold">Verdeling Uitgaven (€15,0 mld)</h3>
              <ul className="space-y-2">
                <li><strong>Defensie:</strong> +€6,3 mld (structureel oplopend tot €8,4 mld na 2030)</li>
                <li><strong>Bereikbaarheid:</strong> +€3,6 mld (infrastructuurinvesteringen)</li>
                <li><strong>Onderwijs:</strong> +€3,0 mld (intensivering alle sectoren)</li>
                <li><strong>Zorg:</strong> +€1,9 mld (uitbreiding basispakket)</li>
                <li><strong>Sociale zekerheid:</strong> -€4,7 mld (afschaffing zorgtoeslag/kindgebonden budget, maar hoger minimumloon)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Verdeling Lasten (€13,2 mld)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Gezinnen: -€13,8 mld</CardTitle>
                    <CardDescription>Netto lastenverlichting</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p>• Inkomen/arbeid: -€25,6 mld</p>
                    <p>• Vermogen: +€11,1 mld</p>
                    <p className="text-muted-foreground pt-2">
                      Vijfschijvenstelsel, verzilverbare basiskorting, afbouw hypotheekrenteaftrek
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bedrijven: +€23,7 mld</CardTitle>
                    <CardDescription>Netto lastenverzwaring</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p>• Inkomen/arbeid: +€12,0 mld</p>
                    <p>• Vermogen/winst: +€6,7 mld</p>
                    <p>• Klimaat: +€4,5 mld</p>
                    <p className="text-muted-foreground pt-2">
                      Hoger VPB-tarief, vermogensbelasting, klimaatheffingen
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mt-6">Macro-Economische Effecten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="font-semibold text-green-900 mb-2">Positief:</p>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>✓ BBP-groei: +0,3%-punt/jaar</li>
                    <li>✓ Werkgelegenheid: stijgt</li>
                    <li>✓ Koopkracht: stijgt</li>
                    <li>✓ Ongelijkheid: daalt sterk</li>
                    <li>✓ Armoede: daalt (2,6% → 1,6%)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="font-semibold text-yellow-900 mb-2">Risico's:</p>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>⚠ Investeringsklimaat: verslechtert</li>
                    <li>⚠ Lange termijn schuld: +4%-punt (2060)</li>
                    <li>⚠ Werkgelegenheid LT: -3,0%</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle>Conclusie GroenLinks-PvdA</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Score: 9/10</strong> - Enige partij met volledig doorgerekend en financieel haalbaar
                  programma. Het CPB bevestigt dat het saldo verbetert en de schuld daalt in de kabinetsperiode.
                  Risico's op lange termijn zijn beheersbaar.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* SP */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              SP: Groot Tekort van €23 Miljard
            </h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>ESB-Doorrekening door Wim Suyker (Oktober 2025)</CardTitle>
                <CardDescription>Onafhankelijke doorrekening door econoom</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Uitgaven</p>
                    <p className="text-2xl font-bold">+€40 mld</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Inkomsten</p>
                    <p className="text-2xl font-bold">+€18 mld</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tekort</p>
                    <p className="text-2xl font-bold text-red-600">-€23 mld</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">% BBP</p>
                    <p className="text-2xl font-bold text-red-600">-1,6%</p>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="font-semibold text-red-900 mb-2">Belangrijke correctie:</p>
                  <p className="text-sm text-red-800">
                    Het SP-tekort is <strong>€23 miljard</strong>, veel groter dan de partij zelf suggereert.
                    De ESB-doorrekening laat zien dat de SP veel meer uitgeeft dan in het eigen programma
                    gepresenteerd.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="prose max-w-none space-y-4 mb-6">
              <h3 className="text-xl font-semibold">Belangrijkste Uitgaven (€40 mld)</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Sociale Zekerheid (€23,6 mld):</p>
                  <ul className="text-sm space-y-1 mt-1">
                    <li>• Minimumloon naar €18/uur + gekoppelde uitkeringen: <strong>€16 mld</strong></li>
                    <li>• Verlaging AOW-leeftijd naar 65 jaar: <strong>€6,5 mld</strong></li>
                    <li>• Uitbreiding geboorteverlof: €0,8 mld</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Zorg (€7,6 mld):</p>
                  <ul className="text-sm space-y-1 mt-1">
                    <li>• Afschaffen eigen risico: €3 mld</li>
                    <li>• Mondzorg in basispakket: €2,4 mld</li>
                    <li>• Fysiotherapie in basispakket: €1,3 mld</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Overig (€8,8 mld):</p>
                  <ul className="text-sm space-y-1 mt-1">
                    <li>• Gratis openbaar vervoer: €4 mld</li>
                    <li>• Ontwikkelingshulp naar 0,7% BNI: €3,3 mld</li>
                    <li>• Onderwijs: €2,5 mld</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Belangrijkste Inkomsten (€18 mld)</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Vermogensbelasting 5% boven €5 mln</span>
                    <span className="font-semibold">+€12 mld ⚠️</span>
                  </li>
                  <li className="flex justify-between">
                    <span>VPB van 25,8% naar 35,6%</span>
                    <span className="font-semibold">+€10,9 mld ⚠️</span>
                  </li>
                  <li className="flex justify-between">
                    <span>BTW-verlaging voeding</span>
                    <span className="font-semibold text-red-600">-€5,1 mld</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vrijstelling VPB woningcorporaties</span>
                    <span className="font-semibold text-red-600">-€1,4 mld</span>
                  </li>
                </ul>
                <p className="text-xs text-yellow-800 mt-3">
                  ⚠️ = Hoog risico op kapitaalvlucht/bedrijfsvlucht
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6">Waarom het Tekort zo Groot Is</h3>
              <ol className="space-y-2">
                <li><strong>Minimumloon kost €16 miljard</strong> - Alle gekoppelde uitkeringen stijgen automatisch mee</li>
                <li><strong>AOW-verlaging kost €6,5 miljard</strong> - En loopt verder op na 2030</li>
                <li><strong>VPB-opbrengst is onzeker</strong> - Hoogste tarief in Europa zal leiden tot bedrijfsvlucht</li>
              </ol>
            </div>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle>Conclusie SP</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Score: 4/10</strong> - Het programma is niet financieel haalbaar met een tekort van
                  €23 miljard in 2030 dat structureel oploopt. Zeer hoge risico's op kapitaal- en bedrijfsvlucht.
                  Positieve sociale effecten op korte termijn, maar financieel onverantwoord.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* BIJ1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <XCircle className="h-8 w-8 text-red-600" />
              BIJ1: Geen Doorrekening
            </h2>
            
            <Card className="mb-6 border-red-200">
              <CardHeader>
                <CardTitle>Geen Financiële Onderbouwing</CardTitle>
                <CardDescription>Slechts 1 bedrag in miljarden genoemd in het hele programma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Geschatte kosten</p>
                    <p className="text-2xl font-bold text-red-600">&gt;€200 mld</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Genoemde dekking</p>
                    <p className="text-2xl font-bold">€10 mld/jaar</p>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">
                    BIJ1 kiest bewust voor een <strong>principiële, ideologische benadering</strong> boven
                    financiële realiteit. Het programma is bedoeld als radicale visie, niet als uitvoerbaar
                    bestuursprogramma.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="prose max-w-none space-y-4 mb-6">
              <h3 className="text-xl font-semibold">Belangrijkste Voorstellen (zonder kostenraming)</h3>
              <ul className="space-y-2">
                <li>1 miljoen sociale woningen (geschat €150-250 miljard over 10-20 jaar)</li>
                <li>Minimumloon €19/uur (geschat €10-15 miljard/jaar)</li>
                <li>30-urige werkweek met loonbehoud (zeer substantieel)</li>
                <li>Nationaal Zorgfonds (tientallen miljarden/jaar)</li>
                <li>Afschaffen collegegeld (€2-3 miljard/jaar)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Genoemde Dekking</h3>
              <p>
                Slechts <strong>€10 miljard per jaar</strong> aan extra belastinginkomsten genoemd uit
                vermogensbelasting en erfbelasting. Marginaal tarief van 100% boven vermogensplafond zal
                leiden tot massale kapitaalvlucht.
              </p>
            </div>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle>Conclusie BIJ1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Score: 2/10</strong> - Geen enkele doorrekening, minimale financiële onderbouwing,
                  enorme kloof tussen ambities en dekking. Het programma is volledig onhaalbaar zoals
                  gepresenteerd.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* PvdD */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              Partij voor de Dieren: Onzeker
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Financiële Transparantie</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  De Partij voor de Dieren heeft <strong>geen financiële doorrekening</strong> en noemt in het
                  programma <strong>geen concrete bedragen</strong> voor uitgaven of inkomsten. Het programma
                  focust op <strong>systeemverandering en welzijn boven welvaart</strong>, waarbij financiële
                  haalbaarheid niet centraal staat.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Belangrijkste Voorstellen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>CO₂-belasting omhoog</strong> - geen bedrag genoemd</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>BTW op gezond eten naar 0%</strong> - geen kostenraming</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Radicale verkleining bio-industrie</strong> - geen transitiekosten genoemd</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Nieuwe bossen en natuurherstel</strong> - geen investeringsbedrag</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Omscholing naar groene banen</strong> - geen budget</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle>Conclusie PvdD</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Score: 3/10</strong> - Geen doorrekening, geen concrete cijfers. Het programma
                  is gericht op maatschappelijke verandering met focus op dieren, natuur en klimaat.
                  Financiële haalbaarheid is onzeker, maar minder radicaal dan BIJ1. De partij zou baat
                  hebben bij een doorrekening om kiezers duidelijkheid te geven.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Conclusie */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Eindconclusie</h2>
            <Card className="border-2 border-primary">
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg">
                  <strong>GroenLinks-PvdA is de enige partij met een financieel verantwoord programma</strong> volgens
                  officiële CPB-doorrekening. Het saldo verbetert zelfs ondanks hogere uitgaven.
                </p>
                <p>
                  <strong>De SP heeft een tekort van €23 miljard</strong> volgens onafhankelijke ESB-doorrekening.
                  Het programma is niet haalbaar zonder grote aanpassingen.
                </p>
                <p>
                  <strong>BIJ1 heeft geen enkele doorrekening</strong> en minimale financiële onderbouwing.
                  Het programma is volledig onhaalbaar.
                </p>
                <p>
                  <strong>Partij voor de Dieren heeft geen cijfers</strong> maar focust op systeemverandering.
                  Haalbaarheid is onzeker door gebrek aan financiële onderbouwing.
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Aanbeveling voor kiezers:</p>
                  <p className="text-sm text-muted-foreground">
                    Vraag ook SP, BIJ1 en PvdD om een volledige CPB-doorrekening. Pas dan kunnen kiezers een eerlijke
                    vergelijking maken tussen de programma's.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  );
}
