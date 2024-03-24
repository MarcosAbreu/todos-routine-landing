import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Landing from './pages/Landing';
import Login from './pages/Login'
import Signup from './pages/Signup'
import SampleHome from './pages/SampleHome';

function App() {

  return (
    <Router>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<SampleHome/>}/>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
