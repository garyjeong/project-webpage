import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { SignIn, SignUp } from './pages';
import Home from './pages/Home/home';

function App() {
  return (
    <div>
      <Router>
        {/* Common Header or SideBar */}
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<SignIn />}/>
          <Route path="/signup/*" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
