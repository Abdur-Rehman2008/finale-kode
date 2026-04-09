// src/pages/PrivacyPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPage() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Personvernerklæring</h1>
        <p className="privacy-date">Sist oppdatert: 9. april 2026</p>

        <div className="privacy-section">
          <h2>1. Behandling av personopplysninger</h2>
          <p>IT Support Portal behandler kun personopplysninger som du selv oppgir gjennom skjemaet. Dette inkluderer:</p>
          <ul>
            <li><strong>Navn</strong> – for å identifisere deg som bruker</li>
            <li><strong>E-postadresse</strong> – for å kunne kontakte deg angående din henvendelse</li>
            <li><strong>Problemtype og beskrivelse</strong> – for å kunne hjelpe deg med ditt IT-problem</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>2. Lagring av data</h2>
          <p>Alle data lagres lokalt i din nettleser (localStorage). Dette betyr at:</p>
          <ul>
            <li>✅ Ingen personopplysninger sendes til eksterne servere</li>
            <li>✅ Dataene forblir på din egen enhet</li>
            <li>⚠️ Sletter du nettleserens cache, vil alle henvendelser forsvinne</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. Dine rettigheter</h2>
          <p>Du har rett til å:</p>
          <ul>
            <li>📖 Få innsyn i hvilke data som er lagret om deg</li>
            <li>🗑️ Be om sletting av dine personopplysninger</li>
            <li>✏️ Be om retting av feilaktige opplysninger</li>
          </ul>
          <p>Kontakt IT-avdelingen på <strong>support@bjornholt.no</strong> for å utøve dine rettigheter.</p>
        </div>

        <div className="privacy-section">
          <h2>4. Informasjonskapsler (cookies)</h2>
          <p>Denne portalen bruker kun <strong>localStorage</strong> for å lagre supportforespørsler. Vi bruker ikke tredjeparts cookies eller sporingsverktøy.</p>
        </div>

        <div className="privacy-section">
          <h2>5. Endringer i personvernerklæringen</h2>
          <p>Eventuelle endringer i denne erklæringen vil bli publisert her. Sist oppdatert: 9. april 2026.</p>
        </div>

        <div className="privacy-section">
          <h2>6. Kontakt oss</h2>
          <p>Har du spørsmål om personvern? Ta kontakt med oss:</p>
          <ul>
            <li>📧 E-post: <strong>personvern@bjornholt.no</strong></li>
            <li>📞 Telefon: <strong>23 45 67 89</strong></li>
            <li>🏫 Adresse: Bjørnholt videregående skole</li>
          </ul>
        </div>

        <div className="privacy-back">
          <Link to="/" className="back-link">← Tilbake til hovedsiden</Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;