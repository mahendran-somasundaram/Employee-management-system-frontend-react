
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import { FooterComponent } from './components/FooterComponent';
import { Headercomponent } from './components/Headercomponent';
import ListEmployeecomponents from './components/ListEmployeecomponents';
import AddEmployeeComponent from './components/AddEmployeeComponent';


function App() {
  return (
    <div className="App">
      <Router>
      <Headercomponent/> 
      <div className='container'>
        <Routes>
          localhost:3000/employees
          <Route  path='/' Component={ListEmployeecomponents}></Route>
          <Route path='/employees' Component={ListEmployeecomponents}></Route>
          <Route path='/add-employee' Component={AddEmployeeComponent}></Route>
          <Route path='/edit-employee/:id' Component={AddEmployeeComponent}></Route>
          
          </Routes>
        
        <FooterComponent/> 
      </div>
     </Router>
    </div>
  );
}

export default App;
