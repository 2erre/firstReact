import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route , Router , Link } from 'react-router-dom';
import {Homepage} from './pages/Homepage';
import { Prodottipage } from './pages/Prodottipage';
import { Carrellopage } from './pages/Carrellopage';
import { Aggiungiprodottipage } from './pages/Aggiungiprodottipage';
import { history } from './utils/history';
import {Loginpage} from './pages/Loginpage';
import { UtenteProvider } from './providers/utente.provider';
import { CarrelloProvider } from './providers/carrello.provider';



function App() {

  return (
    <>
    <BrowserRouter>
     <Router history={history}>
      <UtenteProvider>
       <CarrelloProvider>
       <Route exact path={"/"} component={Homepage}/>
       <Route exact path={"/prodotti"} component={Prodottipage}/>
       <Route exact path={"/login"} component={Loginpage}/> 
       <Route exact path={"/carrello"} component={Carrellopage}/>
       <Route exact path={"/aggiungiprodotti"} component={Aggiungiprodottipage}/> 
       </CarrelloProvider> 
      </UtenteProvider>
     </Router>
    </BrowserRouter>
    </>

  );


}

export default App;
