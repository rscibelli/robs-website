import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from './components/Resume.jsx';
import Running from "./components/Running.jsx";
import TeeTimes from "./components/TeeTimes/TeeTimes.jsx";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50 text-gray-900">
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/run" element={<Running />} />
            <Route path="/golf" element={<TeeTimes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
