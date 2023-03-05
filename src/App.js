import './App.css';
import HomePage from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryPage from './components/StoryPage';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Router>
       <NavBar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="HomePage" element={<HomePage />} />
              <Route path="StoryPage/:id" element={<StoryPage />} />
            </Routes>
          {/* </NavBar> */}
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
