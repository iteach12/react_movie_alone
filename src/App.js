import Home from './routes/Home';
import More from './routes/More';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<More />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
