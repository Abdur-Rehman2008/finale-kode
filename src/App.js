// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
function App() {
  // DATA MANAGEMENT - Holder og håndterer alle supportmeldinger
  const [requests, setRequests] = useState([]);
  const [hasLoadedFromStorage, setHasLoadedFromStorage] = useState(false);
  

  // Løsning: Legg til console.log for debugging

  useEffect(() => {
    const saved = localStorage.getItem('it-support-requests');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        if (Array.isArray(parsedData)) {
          setRequests(parsedData);
        }
      } catch (error) {
        console.error('Feil ved lasting fra localStorage:', error);
      }
    }
    setHasLoadedFromStorage(true);
  }, []); // Tom array = kjører KUN ved første lasting

  // LOCALSTORAGE - Lagrer data KUN når vi faktisk har lastet og endrer
  useEffect(() => {
    // VENT til vi har lastet data fra localStorage før vi lagrer
    if (hasLoadedFromStorage && requests.length > 0) {
      localStorage.setItem('it-support-requests', JSON.stringify(requests));
    }
  }, [requests, hasLoadedFromStorage]);



  const addRequest = (newRequest) => {
    // Automatisk prioritering basert på ticket info
    let automatiskPrioritet = 'Middels'; // Standard
    
    const beskrivelse = newRequest.beskrivelse.toLowerCase();
    const type = newRequest.problemtype.toLowerCase();
    
    // SJEKK FOR HØY PRIORITET
    if (
      beskrivelse.includes('nede') ||
      beskrivelse.includes('fungerer ikke') ||
      beskrivelse.includes('krasjer') ||
      beskrivelse.includes('ikke starter') ||
      beskrivelse.includes('blå skjerm') ||
      beskrivelse.includes('virus') ||
      type === 'nettverk' && beskrivelse.includes('alle') ||
      beskrivelse.includes('haste') ||
      beskrivelse.includes('presserende')
    ) {
      automatiskPrioritet = 'Høy';
    }
    
    // SJEKK FOR LAV PRIORITET
    else if (
      beskrivelse.includes('spørsmål') ||
      beskrivelse.includes('hvordan') ||
      beskrivelse.includes('opplæring') ||
      beskrivelse.includes('treig') ||
      beskrivelse.includes('langsom') ||
      beskrivelse.includes('forslag') ||
      beskrivelse.includes('tips')
    ) {
      automatiskPrioritet = 'Lav';
    }
    
    // MIDDELS PRIORITET (alt annet)
    // else { automatiskPrioritet = 'Middels'; } – allerede standard
    
    const requestWithId = {
      ...newRequest,
      id: Date.now().toString(),
      status: 'Ny',
      prioritet: automatiskPrioritet,    // 👈 BRUKER AUTOMATISK PRIORITET
      dato: new Date().toLocaleDateString('no-NO'),
      tid: new Date().toLocaleTimeString('no-NO', {
        hour: '2-digit', minute: '2-digit' 
      })
    };
    setRequests([requestWithId, ...requests]);
  };
  
  const updateRequestStatus = (id, newStatus) => {
    // Oppdaterer kun status på spesifikk melding
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  const updatePriority = (id, nyPrioritet) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, prioritet: nyPrioritet } : request
    ));
  };


  const deleteRequest = (id) => {
    if (window.confirm('Er du sikker på at du vil slette denne saken?')) {
      setRequests(requests.filter(request => request.id !== id));
    }
  };



  // APP LAYOUT - Grunnstruktur med navigasjon og routing
  return (
    <Router>
      <div className="app">
        {/* HEADER - Toppbanner med tittel og beskrivelse */}
        <header className="header">
          <h1>IT Support Portal</h1>
          <p>Support for studenter</p>
        </header>

        {/* NAVIGATION - Lenker mellom bruker- og admin-side */}
        <nav className="nav">
          <Link to="/" className="nav-link">Hjem</Link>
          <Link to="/admin" className="nav-link">Admin</Link>
        </nav>

        {/* MAIN CONTENT - Router som bestemmer hvilken side som vises */}
        <main className="container">
          <Routes>
            {/* HomePage - Brukersiden for elever */}
            <Route path="/" element={
              <HomePage requests={requests} addRequest={addRequest} />
            } />
            
            {/* AdminPage - Administrasjonsside for IT-ansatte */}
            <Route path="/admin" element={
              <AdminPage 
                requests={requests} 
                updateRequestStatus={updateRequestStatus} 
                updatePriority={updatePriority}
                deleteRequest={deleteRequest} 
              />
            } />
            <Route path="/personvern" element={<PrivacyPage />} />

            <Route path="/bruksvilkår" element={<TermsPage />} />
          </Routes>

          
        </main>

        {/* FOOTER - Standard bunntekst med copyright */}
        <footer className="footer">
        {/* FOOTER - Middels med viktig info */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h4>IT Support Portal</h4>
      <p>Support for studenter og ansatte</p>
      <p>© {new Date().getFullYear()} Bjørnholt vgs</p>
    </div>
    
    <div className="footer-section">
      <h4>Kontakt</h4>
      <p>📧 support@bjornholt.no</p>
      <p>📞 23 45 67 89</p>
    </div>
    
    <div className="footer-section">
      <h4>Ressurser</h4>
      <p>
        <Link to="/personvern" className="footer-link">Personvernerklæring</Link>
      </p>
      
      <p>
    <Link to="/bruksvilkår" className="footer-link">Bruksvilkår</Link>
      </p>


    </div>
  </div>
  
  <div className="footer-bottom">
    <p>Bjørnholt har ikke ansvar for innhold på eksterne nettsider. Kopiering uten avtale er ikke tillatt.</p>
  </div>
</footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;