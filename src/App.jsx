import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SonatSolutions from './SonatSolutions';

export default function AuthApp() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<SonatSolutions />} />
        </Routes>
      </Router>
  );
}