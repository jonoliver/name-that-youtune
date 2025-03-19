import YouTubeAudioPlayer from './components/YouTubeAudioPlayer';
import ScoreKeeper from './components/ScoreKeeper';
import './App.css';

const MusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="5.5" cy="17.5" r="2.5"></circle>
    <circle cx="17.5" cy="15.5" r="2.5"></circle>
    <path d="M8 17V5l12-2v12"></path>
  </svg>
);

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="title-container">
          <MusicIcon />
          <h1>Name That Tune</h1>
        </div>
        <p className="subtitle">Test your music knowledge with friends</p>
      </header>
      <main>
        <div className="container">
          <div className="app-content">
            <div className="player-column">
              <YouTubeAudioPlayer />
            </div>
            <div className="score-column">
              <ScoreKeeper />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>Play audio from YouTube videos</p>
      </footer>
    </div>
  );
};

export default App;
