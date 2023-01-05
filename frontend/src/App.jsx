import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (

    <div className="container mt-2">
     <Routes>
      <Route path='/:id?' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
