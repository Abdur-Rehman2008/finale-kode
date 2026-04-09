// src/pages/TermsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1>Bruksvilkår</h1>
        <p className="terms-date">Sist oppdatert: 9. april 2026</p>

        <div className="terms-section">
          <h2>1. Aksept av vilkår</h2>
          <p>Ved å bruke IT Support Portal, aksepterer du disse bruksvilkårene. Hvis du ikke er enig, vennligst ikke bruk portalen.</p>
        </div>

        <div className="terms-section">
          <h2>2. Bruk av tjenesten</h2>
          <p>Portalen er utviklet for elever og ansatte ved Bjørnholt videregående skole. Du kan:</p>
          <ul>
            <li>✅ Sende inn supportforespørsler ved IT-problemer</li>
            <li>✅ Følge med på statusen til dine egne henvendelser</li>
            <li>✅ Motta hjelp fra IT-avdelingen</li>
          </ul>
          <p>Du kan IKKE:</p>
          <ul>
            <li>❌ Sende inn falske eller unødvendige forespørsler</li>
            <li>❌ Bruke portalen til å trakassere eller skade andre</li>
            <li>❌ Forsøke å bryte sikkerheten til portalen</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>3. Ansvar</h2>
          <p>IT Support Portal leveres "som den er". Vi garanterer ikke at tjenesten alltid vil være feilfri eller tilgjengelig 100% av tiden. Vi tar ikke ansvar for:</p>
          <ul>
            <li>Tap av data som følge av tekniske feil</li>
            <li>Forsinkelser i behandling av supportforespørsler</li>
            <li>Skader som oppstår ved bruk av veiledninger gitt gjennom portalen</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>4. Opphavsrett og innhold</h2>
          <p>All kode, design og innhold i portalen er eiendommen til Bjørnholt videregående skole. Kopiering, spredning eller videreutvikling uten tillatelse er ikke tillatt.</p>
        </div>

        <div className="terms-section">
          <h2>5. Personvern</h2>
          <p>Behandling av personopplysninger følger vår <Link to="/personvern" className="terms-link">Personvernerklæring</Link>. Ved å bruke portalen samtykker du til vår behandling av dine personopplysninger.</p>
        </div>

        <div className="terms-section">
          <h2>6. Endringer i vilkårene</h2>
          <p>Vi forbeholder oss retten til å endre disse vilkårene når som helst. Endringer trer i kraft umiddelbart etter publisering. Det er ditt ansvar å holde deg oppdatert.</p>
        </div>

        <div className="terms-section">
          <h2>7. Kontakt oss</h2>
          <p>Har du spørsmål om bruksvilkårene? Ta kontakt med oss:</p>
          <ul>
            <li>📧 E-post: <strong>support@bjornholt.no</strong></li>
            <li>📞 Telefon: <strong>23 45 67 89</strong></li>
            <li>🏫 Adresse: Bjørnholt videregående skole</li>
          </ul>
        </div>

        <div className="terms-back">
          <Link to="/" className="back-link">← Tilbake til hovedsiden</Link>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;