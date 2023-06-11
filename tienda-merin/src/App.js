import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path= '/' element={ <ContainerCardItems /> } />
            <Route path= '/category/:id' element={ <ContainerCardItems /> } />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
