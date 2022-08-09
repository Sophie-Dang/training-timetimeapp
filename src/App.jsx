// Style import
import './front/index.scss';

// Forward imports
import { Route, Routes } from 'react-router-dom';

// Routes
import AddTimesheet from './routes/addTimesheet/AddTimesheet';
import Home from './routes/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddTimesheet />} />
      </Routes>
    </div>
  );
}

export default App;
