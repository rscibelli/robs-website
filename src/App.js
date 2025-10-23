import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from './components/Resume.jsx';
import Running from "./components/Running.jsx";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50 text-gray-900">
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/run" element={<Running />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
