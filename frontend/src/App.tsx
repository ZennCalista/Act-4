import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<{ temperature: number; condition: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const response = await axios.get(`http://localhost:3000/weather?city=${city.trim()}`);
      setWeather(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch weather data. Please check the city name and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="weather-app">
      <h1 className="weather-title">Weather Proxy API</h1>

      <div className="weather-form">
        <input
          type="text"
          className="city-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name (e.g., London, New York)"
        />
        <button
          className="weather-button"
          onClick={fetchWeather}
          disabled={loading || !city.trim()}
        >
          {loading && <span className="loading-spinner"></span>}
          {loading ? 'Getting Weather...' : 'Get Weather'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {weather && (
        <div className="weather-result">
          <div className="temperature">{Math.round(weather.temperature)}°C</div>
          <div className="condition">{weather.condition}</div>
        </div>
      )}
    </div>
  );
}

export default App;
