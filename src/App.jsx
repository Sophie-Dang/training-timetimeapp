// Style import
import './front/index.scss';

// Forward imports
import { Route, Routes } from 'react-router-dom';

// Routes
import AddTimesheet from './containers/AddTimesheet';
import Home from './containers/Home';
import PageTransition from './containers/PageTransition';

function App() {
  document.documentElement.style.setProperty('--full-vh', window.innerHeight + 'px');
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddTimesheet />} />
      </Routes>

      <PageTransition />
    </div>
  );
}

export default App;
