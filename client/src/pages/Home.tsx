import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { partijen, themas, ideologischeVerschillen, financieleScores, kamerImpact } from '@/lib/content';
import { ArrowRight, CheckCircle2, XCircle, AlertCircle, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Verkiezingsprogramma's 2025
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Diepgaande analyse van BIJ1, SP en GroenLinks-PvdA
            </p>
            <p className="text-lg mb-8">
              Waar staan deze partijen voor? Hoe verschillen ze ideologisch? En wat is financieel haalbaar?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/financieel">
                <Button size="lg" className="gap-2">
                  Financiële Analyse
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/thema/wonen">
                <Button size="lg" variant="outline" className="gap-2">
                  Bekijk Thema's
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ideologische Verschillen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Hoe Verschillen de Partijen Ideologisch?
          </h2>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {partijen.map((partij) => {
              const ideologie = ideologischeVerschillen[partij.id as keyof typeof ideologischeVerschillen];
              return (
                <Card key={partij.id} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{partij.naam}</span>
                      <Badge variant="outline">{partij.ideologie}</Badge>
                    </CardTitle>
                    <CardDescription className="text-base font-medium">
                      {ideologie.positie}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">Kernwaarden:</p>
                        <div className="flex flex-wrap gap-1">
                          {ideologie.kernwaarden.map((waarde) => (
                            <Badge key={waarde} variant="secondary" className="text-xs">
                              {waarde}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Belangrijkste standpunten:</p>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          {ideologie.kenmerken.slice(0, 3).map((kenmerk, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{kenmerk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4">
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {partijen.map((partij) => {
                const ideologie = ideologischeVerschillen[partij.id as keyof typeof ideologischeVerschillen];
                return (
                  <Card key={partij.id} className="border-2 flex-shrink-0" style={{ width: '85vw', maxWidth: '400px' }}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{partij.naam}</span>
                        <Badge variant="outline">{partij.ideologie}</Badge>
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {ideologie.positie}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold mb-2">Kernwaarden:</p>
                          <div className="flex flex-wrap gap-1">
                            {ideologie.kernwaarden.map((waarde) => (
                              <Badge key={waarde} variant="secondary" className="text-xs">
                                {waarde}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-2">Belangrijkste standpunten:</p>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            {ideologie.kenmerken.slice(0, 3).map((kenmerk, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{kenmerk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">← Swipe om te vergelijken →</p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              De keuze tussen deze partijen is geen keuze tussen links en rechts, maar een keuze{' '}
              <span className="font-semibold">binnen</span> links: tussen fundamentele systeemkritiek (BIJ1),
              krachtige socialistische herverdeling (SP) en pragmatisch progressivisme (GroenLinks-PvdA).
            </p>
          </div>
        </div>
      </section>

      {/* Financiële Haalbaarheid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Realisme en Financiële Haalbaarheid
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gebaseerd op CPB-doorrekening (GroenLinks-PvdA) en ESB-doorrekening (SP)
          </p>
          
          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {partijen.map((partij) => {
              const score = financieleScores[partij.id as keyof typeof financieleScores];
              const Icon = score.score >= 7 ? CheckCircle2 : score.score >= 5 ? AlertCircle : XCircle;
              const iconColor = score.score >= 7 ? 'text-green-600' : score.score >= 5 ? 'text-yellow-600' : 'text-red-600';
              
              return (
                <Card key={partij.id} className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{partij.naam}</span>
                      <Icon className={`h-6 w-6 ${iconColor}`} />
                    </CardTitle>
                    <CardDescription>
                      Score: <span className="font-bold text-lg">{score.score}/10</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Uitgaven</p>
                        <p className="font-semibold">{score.uitgaven}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Inkomsten</p>
                        <p className="font-semibold">{score.inkomsten}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Tekort</p>
                      <p className="font-semibold">{score.tekort}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Doorrekening</p>
                      <Badge variant={score.doorrekening === 'CPB (officieel)' ? 'default' : 'secondary'}>
                        {score.doorrekening}
                      </Badge>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">{score.oordeel}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4">
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {partijen.map((partij) => {
                const score = financieleScores[partij.id as keyof typeof financieleScores];
                const Icon = score.score >= 7 ? CheckCircle2 : score.score >= 5 ? AlertCircle : XCircle;
                const iconColor = score.score >= 7 ? 'text-green-600' : score.score >= 5 ? 'text-yellow-600' : 'text-red-600';
                
                return (
                  <Card key={partij.id} className="border-2 flex-shrink-0" style={{ width: '85vw', maxWidth: '400px' }}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{partij.naam}</span>
                        <Icon className={`h-6 w-6 ${iconColor}`} />
                      </CardTitle>
                      <CardDescription>
                        Score: <span className="font-bold text-lg">{score.score}/10</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Uitgaven</p>
                          <p className="font-semibold">{score.uitgaven}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Inkomsten</p>
                          <p className="font-semibold">{score.inkomsten}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Tekort</p>
                        <p className="font-semibold">{score.tekort}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Doorrekening</p>
                        <Badge variant={score.doorrekening === 'CPB (officieel)' ? 'default' : 'secondary'}>
                          {score.doorrekening}
                        </Badge>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm text-muted-foreground">{score.oordeel}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">← Swipe om te vergelijken →</p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/financieel">
              <Button size="lg" variant="outline" className="gap-2">
                Volledige Financiële Analyse
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact in de Kamer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Wat Betekenen Ze in de Kamer?
          </h2>
          <p className="text-center text-muted-foreground mb-2 max-w-2xl mx-auto">
            Vooral voor kleine, activistische partijen: welke onderwerpen komen op de agenda?
          </p>
          <p className="text-center text-sm mb-8">
            <a 
              href="https://peilingwijzer.tomlouwerse.nl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Bron: Peilingwijzer 28 oktober 2025
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {partijen.map((partij) => {
              const impact = kamerImpact[partij.id as keyof typeof kamerImpact];
              return (
                <Card key={partij.id} className="border-2">
                  <CardHeader>
                    <CardTitle>{partij.naam}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="font-semibold text-foreground">
                        <a 
                          href={impact.peilingUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1"
                        >
                          {impact.zetels}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="text-sm">{impact.rol}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">Agendapunten:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        {impact.agendapunten.slice(0, 4).map((punt, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{punt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm font-semibold mb-1">Effect:</p>
                      <p className="text-sm text-muted-foreground">{impact.effect}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4">
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {partijen.map((partij) => {
                const impact = kamerImpact[partij.id as keyof typeof kamerImpact];
                return (
                  <Card key={partij.id} className="border-2 flex-shrink-0" style={{ width: '85vw', maxWidth: '400px' }}>
                    <CardHeader>
                      <CardTitle>{partij.naam}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="font-semibold text-foreground">
                          <a 
                            href={impact.peilingUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline inline-flex items-center gap-1"
                          >
                            {impact.zetels}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                        <div className="text-sm">{impact.rol}</div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold mb-2">Agendapunten:</p>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          {impact.agendapunten.slice(0, 4).map((punt, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{punt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm font-semibold mb-1">Effect:</p>
                        <p className="text-sm text-muted-foreground">{impact.effect}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">← Swipe om te vergelijken →</p>
          </div>
        </div>
      </section>

      {/* Thema's Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Verken de Thema's
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {themas.map((thema) => (
              <Link key={thema.id} href={`/thema/${thema.id}`}>
                <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50 h-full">
                  <CardHeader>
                    <div className="text-4xl mb-2">{thema.icon}</div>
                    <CardTitle className="text-lg">{thema.titel}</CardTitle>
                    <CardDescription className="text-sm">
                      {thema.beschrijving}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison: Belastingen Bedrijven */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Belastingen voor Bedrijven
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">BIJ1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold text-red-600">Zeer zwaar</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 100% marginaal tarief boven vermogensplafond</li>
                    <li>• Volledige nationalisatie grote bedrijven</li>
                    <li>• Afschaffing winstoogmerk zorg/wonen</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold text-orange-600">Zwaar</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• VPB van 25,8% naar 35,6% (hoogste in Europa)</li>
                    <li>• 5% vermogensbelasting {'>'}€5 miljoen</li>
                    <li>• Vertrekbelasting tegen kapitaalvlucht</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">GroenLinks-PvdA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold text-yellow-600">Matig zwaar</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Hoger VPB-tarief (gematigd)</li>
                    <li>• Vermogensbelasting (breed)</li>
                    <li>• Klimaatheffingen (+€4,5 mld)</li>
                    <li>• Maar: betere financiering en R&D-stimulering</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <Link href="/thema/belastingen">
                <Button variant="outline" className="gap-2">
                  Volledige Analyse Belastingen
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison: Wooncrisis */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Oplossen Wooncrisis
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">BIJ1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold">1 miljoen sociale woningen</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Afschaffing vrije huursector</li>
                    <li>• Huurprijsplafond €750/maand</li>
                    <li>• Onteigening leegstaande woningen</li>
                    <li className="text-red-600">• Geen kostenraming</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold">Nationaal Woonfonds €30 miljard</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 1 miljoen betaalbare woningen</li>
                    <li>• Bevriezing sociale huren</li>
                    <li>• Belasting vanaf 2e huis</li>
                    <li>• Belasting op grondspeculatie</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">GroenLinks-PvdA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-semibold">Leningen en garanties corporaties</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Woningaanbod neemt toe (CPB)</li>
                    <li>• Vooral corporatiesector</li>
                    <li>• Afbouw hypotheekrenteaftrek (12 jaar)</li>
                    <li>• Lagere woningprijzen voor starters</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <Link href="/thema/wonen">
                <Button variant="outline" className="gap-2">
                  Volledige Analyse Wonen
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
