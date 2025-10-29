import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Financiële Analyse', href: '/financieel' },
  {
    name: 'Thema\'s',
    children: [
      { name: 'Wonen', href: '/thema/wonen' },
      { name: 'Zorg', href: '/thema/zorg' },
      { name: 'Werk & Loon', href: '/thema/werk-loon' },
      { name: 'Belastingen', href: '/thema/belastingen' },
      { name: 'Onderwijs', href: '/thema/onderwijs' },
      { name: 'Klimaat', href: '/thema/klimaat' },
      { name: 'Buitenland', href: '/thema/buitenland' },
      { name: 'Migratie', href: '/thema/migratie' },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold">
                  V
                </div>
                <span className="font-semibold text-lg hidden sm:inline">
                  Verkiezingsanalyse 2025
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <>
                      <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                        {item.name}
                      </button>
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href}>
                              <div className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground cursor-pointer">
                                {child.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href}>
                      <span
                        className={`text-sm font-medium transition-colors cursor-pointer ${
                          location === item.href
                            ? 'text-foreground'
                            : 'text-foreground/80 hover:text-foreground'
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border">
              <div className="py-2 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <div className="px-4 py-2 text-sm font-medium text-foreground/60">
                          {item.name}
                        </div>
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href}>
                            <div
                              className="block px-6 py-2 text-sm text-foreground/80 hover:bg-muted cursor-pointer"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </div>
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link href={item.href}>
                        <div
                          className={`block px-4 py-2 text-sm font-medium cursor-pointer ${
                            location === item.href
                              ? 'text-foreground bg-muted'
                              : 'text-foreground/80 hover:bg-muted'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Over deze analyse</h3>
              <p className="text-sm text-muted-foreground">
                Onafhankelijke analyse van de verkiezingsprogramma's van BIJ1,
                SP en GroenLinks-PvdA voor de Tweede Kamerverkiezingen 2025.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bronnen</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>CPB - Keuzes in Kaart 2027-2030</li>
                <li>ESB - Doorrekening SP (Wim Suyker)</li>
                <li>Officiële verkiezingsprogramma's</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                Deze analyse is gebaseerd op openbare bronnen en onafhankelijke
                doorrekeningen. Interpretaties zijn van de auteur.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Verkiezingsanalyse | Gemaakt met Manus AI
          </div>
        </div>
      </footer>
    </div>
  );
}
