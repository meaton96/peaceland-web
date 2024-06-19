import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './styles.scss';
import Header from './Header';
import Splash from './Splash';
import ArtInfoDisplay from './ArtInfoDisplay';
import ImageGallery from './ImageGallery';
import Footer from './Footer';
import Play from './Play';
import History from './History';
import News from './News';
import Team from './Team';
import './App.scss';

function App() {
  return (
    <Router basename="/me3870/peaceland-game/">
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={
          <>
            <Splash />
            <ArtInfoDisplay />
            <ImageGallery />
          </>
        } />
        {/* Play */}
        <Route path="/play" element={<Play />} />
        <Route path="/history" element={<History/>} />
        {/* News */}  
        <Route path="/news" element={<News />} />
        {/* Team */}
        <Route path="/team" element={<Team/>} />
        {/* Community */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
