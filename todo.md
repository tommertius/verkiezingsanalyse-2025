# Project TODO

## Design & Styling
- [x] Implementeer wit-donkergrijs-zwart-geel kleurschema
- [x] Configureer serif font voor leesbaarheid
- [x] Stel maximale tekstbreedte in voor leescomfort
- [x] Maak responsive layout voor mobiel/tablet/desktop

## Homepage
- [x] Header met navigatie
- [x] Sectie: Ideologische verschillen tussen partijen
- [x] Sectie: Scores op realisme en financiële haalbaarheid
- [x] Sectie: Impact in de Kamer (vooral kleine partijen)
- [x] Sectie: Belastingen voor bedrijven
- [x] Sectie: Inkomens en wooncrisis
- [x] Footer met bronvermelding

## Thematische Subpagina's
- [x] Wonen pagina
- [x] Zorg pagina
- [x] Werk, Loon en Inkomen pagina
- [x] Belastingen en Vermogen pagina
- [x] Onderwijs pagina
- [x] Klimaat en Energie pagina
- [x] Buitenland en Defensie pagina
- [x] Migratie en Asiel pagina

## Financiële Analyse Pagina
- [x] CPB-doorrekening GroenLinks-PvdA sectie
- [x] ESB-doorrekening SP sectie
- [x] BIJ1 analyse sectie
- [x] Vergelijkende tabellen
- [x] Conclusies en aanbevelingen

## Visualisaties
- [x] Scorecards voor haalbaarheid
- [x] Vergelijkingstabellen per thema
- [x] Budgettaire overzichten (uitgaven/inkomsten)
- [x] Iconografie voor partijen (emoji's)

## Technisch
- [x] Routing voor alle pagina's
- [x] Smooth scroll navigatie
- [x] Responsive images
- [ ] SEO meta tags (optioneel)
- [ ] Print-vriendelijke styling (optioneel)

## Nieuwe Features (Gebruiker Feedback)
- [x] Thema pagina's: partijen naast elkaar in vergelijkingstabel
- [x] Navigatie andere thema's: kleinere pill-shaped buttons
- [x] Zetelvoorspelling: update met links naar laatste peilingen
- [x] Mobiele swipe: horizontaal scrollen door partij-cards

## Mogelijke Verbeteringen
- [ ] Interactieve grafieken voor budgetten
- [ ] Zoekfunctie voor content
- [ ] Print-versie van analyses
- [ ] Social sharing buttons

## Partij voor de Dieren Toevoegen
- [x] Analyseer PvdD verkiezingsprogramma
- [x] Voeg PvdD toe aan content.ts (ideologie, financieel, kamer impact)
- [x] Update homepage met PvdD card (4 partijen)
- [x] Update alle thema pagina's met PvdD kolom
- [x] Zoek peilingdata voor PvdD (2-4 zetels)
- [x] Update financiële analyse pagina met PvdD

## Volgorde Aanpassen
- [x] Wijzig partijvolgorde naar: BIJ1, PvdD, SP, GroenLinks-PvdA (van radicaal naar gematigd)

## Nieuw Thema: Samenleving & Inclusie
- [x] Analyseer standpunten over inclusie, diversiteit en normen/waarden
- [x] Voeg thema toe aan content.ts
- [x] Voeg thema card toe aan homepage (automatisch via themas array)
- [x] Maak themapagina voor Samenleving & Inclusie

## Engelse Versie (Separate Site)
- [ ] Kopieer project naar election-analysis-2025
- [ ] Vertaal alle UI teksten in componenten
- [ ] Vertaal content.ts (partijen, ideologie, scores, kamer impact)
- [ ] Vertaal Home.tsx (alle secties)
- [ ] Vertaal ThemaPage.tsx (alle 9 thema's)
- [ ] Vertaal Financieel.tsx
- [ ] Update package.json en metadata
- [ ] Test alle functionaliteit
- [ ] Deploy als aparte site

## Styling Updates - Klassieke Krant Stijl
- [x] Meer padding in cards voor ruimer gevoel (py-8, px-8)
- [x] Subtielere kleuren en borders (border ipv border-2, subtielere geel)
- [x] Klassieke krant-achtige typografie (line-height 1.7, letter-spacing)
- [x] Inspiratie van Volkskrant stemchecker
- [x] Elegantere spacing en witruimte (py-20 md:py-24)

## Thema Illustraties
- [x] Genereer eerste versie illustraties
- [x] Herzie illustraties: consistenter, volwassener, gevulde vlakken (v2)
- [x] Migratie en Samenleving zijn perfect (v2)
- [ ] Herzie eerste 7 met stijl van migratie/samenleving (v3)
- [ ] Wonen illustratie (v3)
- [ ] Zorg illustratie (v3)
- [ ] Werk & Loon illustratie (v3)
- [ ] Belastingen illustratie (v3)
- [ ] Onderwijs illustratie (v3)
- [ ] Klimaat illustratie (v3)
- [ ] Buitenland illustratie (v3)
- [ ] Gebruiker keurt illustraties goed
- [ ] Integreer illustraties in thema cards

## Illustratie Aanpassingen
- [x] Wonen: gevulde sleutel ipv gevuld huis

## Illustraties Integreren
- [x] Homepage: 3x3 grid met illustraties, lichtgrijze achtergrond, 30% bottom crop
- [x] Thema detailpagina: illustratie rechts naast titel
- [x] Thema detailpagina: 4x2 grid onderaan met illustraties en titels
- [x] Kopieer wonen-v4 naar public folder

## Illustraties Update
- [x] Vervang illustraties met transparante achtergrond versies

## Thema Cards Verbetering
- [x] Maak cards smaller (max-w-5xl container)
- [x] Verklein ruimte tussen tekst en illustratie (pb-2)
- [x] Laat meer van illustratie zien (80% ipv 70%, object-contain)
- [x] Voeg hover underline toe onder tekst

## Engelse Vertaling
- [x] Vertaal homepage naar Engels
- [x] Vertaal themapagina titels naar Engels
- [x] Vertaal financiële analyse pagina titel naar Engels

## Full English Translation (In Progress)
- [ ] Translate all content in content.ts (parties, themes, financial data)
- [ ] Translate navigation and UI elements
- [ ] Translate theme page content sections (commonalities, differences)
- [ ] Translate financial analysis page content
- [ ] Test English version thoroughly
- [ ] Create checkpoint for English translation
- [ ] Commit to GitHub with tag v2.5-english-translation

## Taalschakelaar (Language Switcher)
- [x] Implementeer taalcontext met Nederlands en Engels
- [x] Voeg taalschakelaar toe aan header
- [x] Vertaal alleen titels en hoofdelementen naar Engels
- [x] Laat gedetailleerde content in Nederlands
- [x] Test taalschakelaar functionaliteit

## Taalschakelaar Verbeteringen
- [x] Wijzig label logica: NL site toont "NL", EN site toont "EN"
- [x] Vertaal alle thema titels in homepage cards
- [x] Vertaal thema titels in menu dropdown
- [x] Vertaal thema titels op detailpagina's
- [x] Vertaal intro teksten op themapagina's
- [x] Vertaal volledige navigatie
- [x] Vertaal volledige footer

## Bug Fixes
- [x] Scroll to top when navigating to new page
