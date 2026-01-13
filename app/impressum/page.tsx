import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Impressum() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 lg:py-24 bg-bg">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-text mb-8">
              Impressum
            </h1>

            <div className="space-y-6 text-text leading-relaxed">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Impressum
                </h2>
                <p className="mb-2">
                  <strong>Lovme mit Nicole Angelika Panzer</strong>
                </p>
                <p className="mb-2">
                  Königheimer Straße 10<br />
                  8811 Scheifling<br />
                  Österreich
                </p>
                <p className="mb-2">
                  E-Mail: <a href="mailto:nicole@lov-me.com" className="text-accent hover:underline">nicole@lov-me.com</a>
                </p>
                <p className="mb-2">
                  Telefon: <a href="tel:+4367763235466" className="text-accent hover:underline">0677/63235466</a>
                </p>
                <p className="mb-2">
                  Website: <a href="https://lov-me.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">lov-me.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Haftungsausschluss – Lovme
                </h2>
                
                <p className="mb-4">
                  Die Angebote von LovMe dienen der Förderung von Wohlbefinden, Achtsamkeit und persönlicher Entwicklung. Sie verstehen sich als ganzheitliche, unterstützende Angebote und ersetzen keine medizinische, psychologische oder psychotherapeutische Behandlung.
                </p>

                <p className="mb-4">
                  Im Rahmen der Angebote können unter anderem Yoga, Atemübungen, Entspannungs- und Achtsamkeitspraktiken sowie weitere nicht-medizinische Methoden zum Einsatz kommen. Es werden keine Diagnosen gestellt und keine Erkrankungen behandelt. Die Wirkungsweise einzelner Methoden ist teilweise wissenschaftlich nicht belegt.
                </p>

                <p className="mb-4">
                  Die Teilnahme an allen Angeboten erfolgt freiwillig und in eigener Verantwortung. Jede Person entscheidet selbst, in welchem Ausmaß sie sich auf die Inhalte einlässt, und trägt die Verantwortung für ihr körperliches, geistiges und seelisches Wohlbefinden.
                </p>

                <p className="mb-4">
                  Bei bestehenden gesundheitlichen Beschwerden, körperlichen Einschränkungen oder psychischen Belastungen wird empfohlen, vor der Teilnahme ärztlichen oder psychotherapeutischen Rat einzuholen.
                </p>

                <p className="mb-4">
                  LovMe übernimmt keine Haftung für mögliche Folgen aus der Teilnahme an den Angeboten, sofern kein vorsätzliches oder grob fahrlässiges Verhalten vorliegt.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/">
                <Button variant="outline" size="md">
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

