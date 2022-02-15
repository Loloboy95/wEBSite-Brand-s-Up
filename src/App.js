import './App.css';
import Header from './components/header'
import Body1 from './components/body1';
import Produits from './components/Produits';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Details from './components/pages/details';
import MenuMan from './components/pages/menuman';
import MenuWoman from './components/pages/menuwoman';
import MenuVideos from './components/pages/menuvideos';
import MenuUniSex from './components/pages/menuunisex';
import Index from './components/pages/index';







function App() {
  return(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact={true} path="/" element={<Index/>}/>
      <Route  path="/produits" element={<Produits/>}/>
      <Route  path="/details/:id" element={<Details/>}/>
      <Route  path="/menu-man" element={<MenuMan/>}/>
      <Route  path="/menu-woman" element={<MenuWoman/>}/>
      <Route  path="/menu-unisex" element={<MenuUniSex/>}/>
      <Route  path="/menu-videos" element={<MenuVideos/>}/>
      
    </Routes>
    <Footer/>
  </BrowserRouter>)
}

export default App;
