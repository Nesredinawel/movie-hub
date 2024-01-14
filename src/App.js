
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/mainNav';
import { Container,} from '@mui/material';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';
function App() {
  return(
  <BrowserRouter>
   
    {/*header part*/}
    <Header />
 <div className='app'>
  <Container>
    <Routes>
      <Route path='/'     Component={Trending} exact/>
      <Route path='/movies' Component={Movies}/>
      <Route path='/series' Component={Series}/>
      <Route path='/search' Component={Search}/>
    </Routes>
  </Container>

  </div>
  <SimpleBottomNavigation />
 </BrowserRouter>
  )
}

export default App;
