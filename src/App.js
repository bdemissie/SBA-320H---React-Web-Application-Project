import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/HomePage/HomePage';
import EventDetailPage from './layouts/EventDetailPage/EventDetailPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        {/* Define route for home page */}
        <Route path="/" element={<HomePage />} />
        {/* Define route for event detail page */}
        <Route path="/event/:id" element={<EventDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
