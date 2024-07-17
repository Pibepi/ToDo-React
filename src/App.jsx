import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoPage from './pages/TodoPage/TodoPage';
import Nav from './components/Nav/Nav';
import NotFoundPaage from './pages/NotFoundPaage/NotFoundPaage';



function App() {
  return (

    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path='/' element={<TodoPage />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='*' element={<NotFoundPaage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;



