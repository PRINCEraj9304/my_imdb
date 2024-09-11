
import './App.css';
import Home from './pages/Home'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CategoriesMovies from './pages/Categoriesmovies';
import { routepath } from './constants/Route';

// there are different type of routing one is browserrouter which is used for url routing so we use
// browserrouter as name of Router
// jo bhi component ke andar hum routing karna chahte hai unko Routes ke andar likhte hai 
// jis bhi component me routing karte hai usme Route dalte hai

function App() { 
  return (
    
     <Router>
      <Routes>
          <Route path = {routepath.home} element  = { <Home/>} />
          <Route path = {routepath.categories} element = {
          <CategoriesMovies/>
          } />
          <Route path = {routepath.invalid} element = {<Home/>} />
      </Routes>
     </Router>

  );
}

export default App;
