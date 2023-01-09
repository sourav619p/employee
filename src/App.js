import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import Login from './components/Login';
import EmpList from './components/EmpList';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/home/employeelist' element={<EmpList/>} />
          <Route path='/home/employeelist/add' element={<Add/>} />
          <Route path='/home/employeelist/edit' element={<Edit/>} />
        </Routes>
      </Router>
    </header>
  </div>
  );
}

export default App;
