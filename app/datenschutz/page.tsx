import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 lg:py-24 bg-bg">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-text mb-8">
              Datenschutzerklärung – lovme.at
            </h1>

            <div className="space-y-6 text-text leading-relaxed">
              <div>
                <p className="mb-4">
                  Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite deine personenbezogenen Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Verantwortliche
                </h2>
                <p className="mb-2">
                  <strong>Nicole Panzer</strong><br />
                  lovme.at<br />
                  E-Mail: <a href="mailto:nicole@lov-me.com" className="text-accent hover:underline">nicole@lov-me.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Allgemeines
                </h2>
                <p className="mb-4">
                  Die Nutzung meiner Website lovme.at ist in der Regel ohne Angabe personenbezogener Daten möglich.
                </p>
                <p className="mb-4">
                  Sofern auf dieser Website personenbezogene Daten (z. B. Name, E-Mail-Adresse, Telefonnummer) erhoben werden, erfolgt dies stets auf freiwilliger Basis.
                </p>
                <p className="mb-4">
                  Diese Daten werden ohne deine ausdrückliche Einwilligung nicht an Dritte weitergegeben, sofern keine gesetzliche Verpflichtung besteht.
                </p>
                <p className="mb-4">
                  Ich weise darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail oder über soziale Medien) Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Kontaktformular, E-Mail & telefonische Anfragen
                </h2>
                <p className="mb-4">
                  Wenn du per Kontaktformular, E-Mail, Telefon oder über soziale Medien (z. B. Instagram, Facebook, WhatsApp) Kontakt mit mir aufnimmst, werden deine angegebenen Daten zum Zweck der Bearbeitung der Anfrage sowie für den Fall von Anschlussfragen gespeichert.
                </p>
                <p className="mb-4">
                  Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
                </p>
                <p className="mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Buchungen & Kursanmeldungen
                </h2>
                <p className="mb-4">
                  Wenn du dich über diese Website zu Kursen, Workshops oder Veranstaltungen anmeldest, werden die von dir angegebenen Daten (z. B. Name, E-Mail-Adresse) ausschließlich zur Organisation und Abwicklung der jeweiligen Angebote verwendet.
                </p>
                <p className="mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Newsletter
                </h2>
                <p className="mb-4">
                  Wenn du meinen Newsletter abonnierst, wird deine E-Mail-Adresse ausschließlich für den Versand von Informationen rund um meine Angebote, Veranstaltungen und Impulse verwendet.
                </p>
                <p className="mb-4">
                  Die Anmeldung erfolgt auf freiwilliger Basis und kann jederzeit widerrufen werden (z. B. über den Abmelde-Link im Newsletter).
                </p>
                <p className="mb-4">
                  Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Cookies
                </h2>
                <p className="mb-4">
                  Diese Website verwendet sogenannte Cookies. Dabei handelt es sich um kleine Textdateien, die auf deinem Endgerät gespeichert werden und keinen Schaden anrichten.
                </p>
                <p className="mb-4">
                  Cookies helfen dabei, die Website nutzerfreundlich zu gestalten und grundlegende Funktionen bereitzustellen.
                </p>
                <p className="mb-4">
                  Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst und dies nur im Einzelfall erlaubst.
                </p>
                <p className="mb-4">
                  Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Google Fonts
                </h2>
                <p className="mb-4">
                  Diese Website verwendet Schriftarten von Google Fonts. Dabei können Verbindungsdaten (z. B. IP-Adresse) an Google übertragen werden.
                </p>
                <p className="mb-4">
                  Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="mb-4">
                  Weitere Informationen findest du in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://policies.google.com/privacy</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Google Analytics
                </h2>
                <p className="mb-4">
                  Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen.
                </p>
                <p className="mb-4">
                  Die dadurch erzeugten Informationen werden in der Regel an Server von Google übertragen und dort gespeichert.
                </p>
                <p className="mb-4">
                  Die Nutzung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                </p>
                <p className="mb-4">
                  Weitere Informationen findest du in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://policies.google.com/privacy</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  Deine Rechte
                </h2>
                <p className="mb-4">
                  Dir stehen grundsätzlich die Rechte auf:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Auskunft</li>
                  <li>Berichtigung</li>
                  <li>Löschung</li>
                  <li>Einschränkung der Verarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerruf</li>
                  <li>Widerspruch</li>
                </ul>
                <p className="mb-4">
                  Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, hast du das Recht, dich bei der österreichischen Datenschutzbehörde zu beschweren.
                </p>
                <p className="mb-4">
                  Österreichische Datenschutzbehörde:<br />
                  <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://www.dsb.gv.at</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-text mb-4">
                  SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="mb-4">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in deiner Browserzeile.
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

