import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AddTrip from './components/AddTrip';

function App() {
  return (
    <div className="text-center">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/trips/add' element={<AddTrip/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
