import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import HomeScreen from './Components/screens/HomeScreen'
import ProductScreen from './Components/screens/ProductScreen'
import CartScreen from './Components/screens/CartScreen'
import Navbar  from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dropback from './Components/Dropback'
import {useState} from 'react'


function App() {


const [show, setshow] = useState(false)  
  return (
    <Router>
    
    <Navbar click={()=> setshow(!show)}/>
     <Sidebar show={show} click= {()=> setshow(false)}/>
     <Dropback show={show}/>
   

     <main>
       <Switch>
         <Route exact path="/" component={HomeScreen}/>
         <Route exact path="/product/:id" component={ProductScreen}/>
         <Route exact path="/cart" component={CartScreen}/>
       </Switch>
     </main>
    
    </Router>
  );
}

export default App;
