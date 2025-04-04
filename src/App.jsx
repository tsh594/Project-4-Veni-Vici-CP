import { useState } from 'react';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [currentArt, setCurrentArt] = useState(null);
  const [bannedTerms, setBannedTerms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewHistory, setViewHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchArt = async () => {
    setIsLoading(true);
    try {
      let artwork = null;
      let attempts = 0;
      
      do {
        const response = await fetch(
          `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&size=1&sort=random&hasimage=1&q=imagepermissionlevel:0`
        );
        const data = await response.json();
        artwork = data.records[0];
        attempts++;
      } while (attempts < 10 && (isArtBanned(artwork) || !artwork?.primaryimageurl));

      if (artwork?.primaryimageurl && !isArtBanned(artwork)) {
        setCurrentArt(artwork);
        setHistory(prev => [artwork, ...prev]);
      } else {
        setCurrentArt(null);
      }
    } catch (error) {
      console.error('Error fetching art:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isArtBanned = (artwork) => {
    if (!artwork) return true;
    
    const attributesToCheck = [
      artwork.title,
      artwork.people?.[0]?.name,
      artwork.culture,
      artwork.period,
      artwork.century?.toString(),
      artwork.technique,
      artwork.classification,
      artwork.dated
    ].filter(Boolean);

    return attributesToCheck.some(attribute => 
      bannedTerms.some(bannedTerm => 
        String(attribute).toLowerCase().includes(bannedTerm.toLowerCase())
      )
    );
  };

  const handleBanToggle = (term) => {
    setBannedTerms(prev => 
      prev.includes(term) 
        ? prev.filter(t => t !== term)
        : [...prev, term]
    );
  };

  const handleHistoryClick = (art) => {
    if (!isArtBanned(art)) {
      setCurrentArt(art);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ArtExplorer</h1>
        <p className="tagline">Discover museum masterpieces from Harvard's collection</p>
      </header>

      <main className="main-content">
        <section className="art-display glass-card">
          <div className="gallery-controls">
            <button 
              className="discover-btn"
              onClick={fetchArt}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-dots">Discovering</span>
              ) : currentArt ? (
                '🎨 Show New Artwork'
              ) : (
                '✨ Start Exploration'
              )}
            </button>
            <button 
              className="history-toggle"
              onClick={() => setViewHistory(!viewHistory)}
            >
              {viewHistory ? 'Hide History' : 'Show History'}
            </button>
          </div>

          {isLoading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Searching Harvard's collection...</p>
            </div>
          )}

          {!isLoading && currentArt && (
            <div className="artwork-card">
              <div className="image-container">
                {currentArt.primaryimageurl ? (
                  <img 
                    src={currentArt.primaryimageurl} 
                    alt={currentArt.title || 'Artwork'} 
                    className="art-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      document.querySelector('.image-fallback')?.classList.remove('hidden');
                    }}
                  />
                ) : (
                  <div className="image-fallback">
                    <div className="placeholder-icon">🖼️</div>
                    <div className="placeholder-text">Image Not Available</div>
                  </div>
                )}
              </div>

              <div className="artwork-details">
                <h2 className="art-title">{currentArt.title || 'Untitled'}</h2>
                <p className="art-description">
                  {currentArt.description?.slice(0, 200) || 'No description available'}
                </p>
                
                <div className="attributes-grid">
                  {[
                    { label: 'Artist', value: currentArt.people?.[0]?.name },
                    { label: 'Culture', value: currentArt.culture },
                    { label: 'Period', value: currentArt.period },
                    { label: 'Medium', value: currentArt.technique },
                    { label: 'Date', value: currentArt.dated },
                    { label: 'Classification', value: currentArt.classification },
                  ].map(({ label, value }) => (
                    value && (
                      <div 
                        key={`${label}-${value}`}
                        className={`attribute ${bannedTerms.includes(value) ? 'banned' : ''}`}
                        onClick={() => handleBanToggle(value)}
                      >
                        <div className="attribute-label">{label}</div>
                        <div className="attribute-value">{value}</div>
                        {bannedTerms.includes(value) && (
                          <div className="ban-indicator">BANNED</div>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          )}

          {viewHistory && (
            <div className="history-panels">
              <div className="recent-history">
                <h3>Recently Viewed (Last 4)</h3>
                {history.length > 0 ? (
                  <div className="history-items">
                    {history.slice(0, 4).map((art, index) => (
                      <div 
                        key={`recent-${index}`} 
                        className={`history-item ${isArtBanned(art) ? 'banned-history' : ''}`}
                        onClick={() => handleHistoryClick(art)}
                      >
                        {art.primaryimageurl ? (
                          <img 
                            src={art.primaryimageurl} 
                            alt={art.title} 
                            className="history-image"
                          />
                        ) : (
                          <div className="history-placeholder">🎨</div>
                        )}
                        {isArtBanned(art) && (
                          <div className="history-banned-overlay">BANNED</div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="empty-history">No artworks viewed yet</p>
                )}
              </div>

              <div className="full-history">
                <h3>All Viewed Artworks ({history.length})</h3>
                {history.length > 0 ? (
                  <div className="history-items scrollable">
                    {history.map((art, index) => (
                      <div 
                        key={`full-${index}`} 
                        className={`history-item ${isArtBanned(art) ? 'banned-history' : ''}`}
                        onClick={() => handleHistoryClick(art)}
                      >
                        {art.primaryimageurl ? (
                          <img 
                            src={art.primaryimageurl} 
                            alt={art.title} 
                            className="history-image"
                          />
                        ) : (
                          <div className="history-placeholder">🎨</div>
                        )}
                        {isArtBanned(art) && (
                          <div className="history-banned-overlay">BANNED</div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="empty-history">No artworks viewed yet</p>
                )}
              </div>
            </div>
          )}
        </section>

        <aside className="ban-list-container glass-card">
          <h3>Your Art Filters</h3>
          {bannedTerms.length === 0 ? (
            <p className="empty-list">No filters active - seeing all artworks</p>
          ) : (
            <div className="banned-items">
              {bannedTerms.map(term => (
                <div 
                  key={term} 
                  className="banned-item"
                  onClick={() => handleBanToggle(term)}
                >
                  <span className="term">{term}</span>
                  <span className="remove-btn">×</span>
                </div>
              ))}
            </div>
          )}
          {bannedTerms.length > 0 && (
            <button 
              className="clear-all-btn"
              onClick={() => setBannedTerms([])}
            >
              Clear All Filters
            </button>
          )}
        </aside>
      </main>

      <footer className="app-footer">
        <p>Powered by Harvard Art Museums API</p>
      </footer>
    </div>
  );
}

export default App;